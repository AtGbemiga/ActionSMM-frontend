"use client";
import React, { useState, useEffect, useRef } from "react";
import { PlanForm, InputRefs } from "@/app/typesAndInterfaces/planForm";
import { planFormFunc } from "@/lib/planForm";
import Cookies from "js-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Styles from "./Form.module.css";
import { websiteRegex } from "./asset/websiteRegex";
import { payStackFunc } from "@/lib/payStack";
import handleTextAreaBlur from "./asset/textAreaBlur";
import handleDateBlur from "./asset/dateBlur";
import { accountsRegex } from "./asset/accountsBlur";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ToolTipIcon } from "../Global/assets/toolTipIcon";

export const FormDetailsFromUsers = ({
  name,
}: {
  name: string;
}): JSX.Element => {
  // state to render form on multiple steps
  const [step, setStep] = useState(1);
  // state to hold email from local storage
  const [email, setEmail] = useState("");
  // state to store form data
  const [formData, setFormData] = useState<PlanForm>({
    planName: name,
    price: "",
    personalName: "",
    businessName: "",
    website: "",
    aboutYourBusiness: "",
    cta: [],
    startDate: undefined,
    dueDate: undefined,
    accounts: {
      one: "",
      two: "",
      three: "",
      four: "",
    },
  });
  // token from backend
  const token = Cookies.get("token");

  // refs for only the text inputs it contains
  const inputRefs: InputRefs = {
    personalName: useRef<HTMLInputElement | null>(null),
    businessName: useRef<HTMLInputElement | null>(null),
    cta: useRef<HTMLInputElement | null>(null),
    startDate: useRef<HTMLInputElement | null>(null),
  };

  // state for errors
  const [errors, setErrors] = useState<Record<string, boolean>>({
    personalName: false,
    businessName: false,
    website: false,
    cta: false,
    startDate: false,
    aboutYourBusiness: false,
    accountsOne: false,
    accountsTwo: false,
    accountsThree: false,
    accountsFour: false,
  });

  // tool tip for errors
  const Link = ({
    id,
    children,
    title,
  }: {
    id: string;
    children: React.ReactNode;
    title: string;
  }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  // Function to save form data to local storage
  const saveFormDataToLocalStorage = (data: PlanForm) => {
    // Exclude the startDate property from the data object
    const { startDate, ...formDataWithoutStartDate } = data;
    localStorage.setItem("formData", JSON.stringify(formDataWithoutStartDate));
  };

  // load email from local storage
  useEffect(() => {
    setEmail(localStorage.getItem("email") ?? "");
  }, [email]);

  // Load form data from local storage
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // assign price to plan
  function handlePrice() {
    switch (name) {
      case "Starter":
        return "20,000";
      case "Pro":
        return "25,000";
      case "Supreme":
        return "30,000";
      case "Starter%20Plus":
        return "25,000";
      case "Pro%20Plus":
        return "30,000";
      case "Supreme%20Plus":
        return "34,500";
      default:
        return "";
    }
  }

  // remove %20 from name
  const nameWithoutPercent = name.includes("%20")
    ? name.replace("%20", " ")
    : name;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "accountsOne") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        accounts: {
          ...prevFormData.accounts,
          one: value,
        },
      }));
    } else if (name === "accountsTwo") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        accounts: {
          ...prevFormData.accounts,
          two: value,
        },
      }));
    } else if (name === "accountsThree") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        accounts: {
          ...prevFormData.accounts,
          three: value,
        },
      }));
    } else if (name === "accountsFour") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        accounts: {
          ...prevFormData.accounts,
          four: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }

    // Save form data to local storage whenever it changes
    saveFormDataToLocalStorage(formData);
  };

  const handleBlur = (fieldName: string) => {
    const inputValue = inputRefs[fieldName].current?.value;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: !inputValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      alert("Please login first");
    }

    const formDataBody = new FormData();
    formDataBody.append("planName", formData.planName);
    formDataBody.append("price", formData.price ?? "");
    formDataBody.append("personalName", formData.personalName);
    formDataBody.append("businessName", formData.businessName);
    formDataBody.append("website", formData.website ?? "");
    formDataBody.append("aboutYourBusiness", formData.aboutYourBusiness);
    formDataBody.append("cta", JSON.stringify(formData.cta));
    formDataBody.append("startDate", formData.startDate?.toISOString() || "");
    const dueDate = formData.startDate?.getTime()
      ? new Date(formData.startDate.getTime() + 30 * 24 * 60 * 60 * 1000)
      : null;
    formDataBody.append("dueDate", dueDate?.toISOString() || "");
    formDataBody.append("accounts.one", formData.accounts.one ?? "");
    formDataBody.append("accounts.two", formData.accounts.two ?? "");
    formDataBody.append("accounts.three", formData.accounts.three ?? "");
    formDataBody.append("accounts.four", formData.accounts.four ?? "");
    console.log(formData.accounts);

    // submit form
    await planFormFunc(formDataBody);
    // // clear local storage
    // localStorage.removeItem("formData");
    console.log("submitted");

    console.log("starting payment checkout");
    const res = await payStackFunc(
      email,
      formData.price ?? "",
      formData.planName
    );
    if (res) {
      window.location.href = res.data.authorization_url;
    }
  };

  // if the switch case === 1 and enter is pressed but not all the required inputs are filled out, pop up with not all the inputs are filled out notice but if user is on the last input and its has regex passing content, move to switch case 2

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <section className={`bg-light p-5 rounded ${Styles.step1}`}>
            <div className="mb-3">
              <label htmlFor="planName" className="form-label">
                Plan Name
              </label>
              <input
                type="text"
                id="planName"
                className="form-control"
                value={nameWithoutPercent}
                name="planName"
                disabled
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                value={`\u20A6${handlePrice()}`}
                name="price"
                disabled
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personalName" className="form-label">
                Personal Name
              </label>
              <input
                type="text"
                className="form-control"
                id="personalName"
                aria-describedby="personalNameHelp"
                value={formData.personalName}
                onChange={handleInputChange}
                onBlur={() => handleBlur("personalName")}
                name="personalName"
                required
                aria-required
                ref={inputRefs.personalName}
              />
              {errors.personalName && (
                <div id="personalNameHelp" className="form-text text-danger">
                  This is a required field
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="businessName" className="form-label">
                Business Name
              </label>
              <input
                type="text"
                className="form-control"
                id="businessName"
                aria-describedby="businessNameHelp"
                value={formData.businessName}
                onChange={handleInputChange}
                onBlur={() => handleBlur("businessName")}
                name="businessName"
                required
                aria-required
                ref={inputRefs.businessName}
              />
              {errors.businessName && (
                <div id="businessNameHelp" className="form-text text-danger">
                  This is a required field
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">
                Website
              </label>
              <input
                type="text"
                className="form-control"
                id="website"
                aria-describedby="websiteHelp"
                value={formData.website}
                onChange={handleInputChange}
                name="website"
                onBlur={(e) => websiteRegex(e, setErrors)}
              />
              {errors.website && (
                <div id="websiteHelp" className="form-text text-danger">
                  Enter a valid website URL.{" "}
                  <Link
                    title="Open the website in your browser. Copy the URL from the address bar and paste it here."
                    id="t-1"
                  >
                    <ToolTipIcon
                      width="16"
                      height="16"
                      className="bi bi-info-circle-fill text-dark"
                    />
                  </Link>{" "}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="aboutYourBusiness" className="form-label">
                About Your Business
              </label>
              <textarea
                className="form-control"
                id="aboutYourBusiness"
                aria-describedby="aboutYourBusinessHelp"
                value={formData.aboutYourBusiness}
                onChange={handleInputChange}
                onBlur={(e) => handleTextAreaBlur(e, setErrors)}
                name="aboutYourBusiness"
                required
                aria-required
              />
              {errors.aboutYourBusiness && (
                <div
                  id="aboutYourBusinessHelp"
                  className="form-text text-danger"
                >
                  This is a required field
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="cta" className="form-label">
                Call To Action
              </label>
              <input
                type="text"
                className="form-control"
                id="cta"
                aria-describedby="ctaHelp"
                value={formData.cta}
                onChange={handleInputChange}
                name="cta"
                required
                aria-required
                ref={inputRefs.cta}
                onBlur={() => handleBlur("cta")}
              />
              {errors.cta && (
                <div id="ctaHelp" className="form-text text-danger">
                  This is a required field
                </div>
              )}
            </div>
            <div className="d-flex justify-content-end">
              <input
                type="button"
                onClick={() => setStep(2)}
                className="btn btn-primary text-center px-5"
                value="Next"
              />
            </div>
          </section>
        );
      case 2:
        return (
          <section className={`bg-light p-5 rounded h-100 ${Styles.step2}`}>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <DatePicker
                selected={formData.startDate}
                onChange={(date) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    startDate: date || undefined,
                  }))
                }
                // make the min date 3 days from now
                minDate={new Date(new Date().setDate(new Date().getDate() + 3))}
                showIcon
                className={`${Styles.datepicker}`}
                name="startDate"
                required
                aria-required
                onBlur={(e) => handleDateBlur(e, setErrors)}
              />
              {errors.startDate && (
                <div
                  id="startDateHelp"
                  className="form-text text-danger text-danger"
                >
                  Select a valid date.
                </div>
              )}
            </div>
            {(name === "Starter" || name === "Starter%20Plus") && (
              <>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.one}
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsOne")}
                    name="accountsOne"
                  />
                  {errors.accountsOne && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.two}
                    name="accountsTwo"
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsTwo")}
                  />
                  {errors.accountsTwo && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
              </>
            )}
            {(name === "Pro" || name === "Pro%20Plus") && (
              <>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.one}
                    name="accountsOne"
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsOne")}
                  />
                  {errors.accountsOne && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.two}
                    name="accountsTwo"
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsTwo")}
                  />
                  {errors.accountsTwo && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.three}
                    name="accountsThree"
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsThree")}
                  />
                  {errors.accountsThree && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
              </>
            )}
            {(name === "Supreme" || name === "Supreme%20Plus") && (
              <>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.one}
                    name="accountsOne"
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsOne")}
                  />
                  {errors.accountsOne && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.two}
                    name="accountsTwo"
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsTwo")}
                  />
                  {errors.accountsTwo && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.three}
                    name="accountsThree"
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsThree")}
                  />
                  {errors.accountsThree && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    Account
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.four}
                    name="accountsFour"
                    onBlur={(e) => accountsRegex(e, setErrors, "accountsFour")}
                  />
                  {errors.accountsFour && (
                    <div id="accountsHelp" className="form-text text-danger">
                      For Facebook, LinkedIn & X, open the account in your
                      browser. Copy the URL from the address bar and paste it
                      here. For Instagram, enter the account handle.
                    </div>
                  )}
                </div>
              </>
            )}

            <div className=" d-flex justify-content-end gap-2">
              <input
                type="button"
                value="Back"
                onClick={() => setStep(1)}
                className="btn btn-outline-secondary"
              />
              <button type="submit" className="btn btn-primary px-5">
                Next
              </button>
            </div>
          </section>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${Styles.form}`}>
      {renderStep()}
    </form>
  );
};

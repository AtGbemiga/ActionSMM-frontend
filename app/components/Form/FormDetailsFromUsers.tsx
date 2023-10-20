"use client";
import React, { useState, useEffect } from "react";
import { PlanForm } from "@/app/typesAndInterfaces/planForm";
import { planFormFunc } from "@/lib/planForm";
import Cookies from "js-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Styles from "./Form.module.css";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const FormDetailsFromUsers = ({
  name,
}: {
  name: string;
}): JSX.Element => {
  const [step, setStep] = useState(1);
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
    socialMediaPics: undefined,
    accounts: {
      one: "",
      two: "",
      three: "",
      four: "",
    },
  });
  const token = Cookies.get("token");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  const nameWithoutPercent = name.includes("%20")
    ? name.replace("%20", " ")
    : name;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, required } = e.target;
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
  };

  const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    const filesArray = Array.from(target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialMediaPics: target.files[0],
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
    formDataBody.append("socialMediaPics", formData.socialMediaPics ?? "");
    console.log(formData.accounts);

    await planFormFunc(formDataBody);
    console.log("submitted");

    // route to payments page after submission and pass name into the params

    const params = new URLSearchParams(searchParams.toString());
    params.set("name", formData.planName);
    params.set("price", formData.price || handlePrice());
    console.log(params);

    router.push(`/payment?${params}`);
  };

  // if the switch case === 1 and enter is pressed but not all the required inputs are filled out, pop up with not all the inputs are filled out notice but if user is on the last input and its has regex passing content, move to switch case 2
  // useEffect(() => {
  //   const handleKeyUp = (event: MyEvent) => {
  //     if (event !== null && event.event instanceof KeyboardEvent ) {
  //       if (event.event.key === "Enter" ) {
  //         console.log(`Logging key: ${event.event.key} to the console`);
  //       }
  //     } else if(event !== null && event.event.target instanceof HTMLInputElement){
  //       const { name} = event.event.target;
  //     }

  //   };

  //   window.addEventListener("keyup", handleKeyUp);

  //   return () => {
  //     window.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, [step]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <section>
            <div className="mb-3">
              <label htmlFor="planName" className="form-label">
                Plan name
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
              <div id="planNameHelp" className="form-text">
                plan name error here
              </div>
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
              <div id="priceHelp" className="form-text">
                price error here
              </div>
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
                name="personalName"
                required
                aria-required
              />
              <div id="personalNameHelp" className="form-text">
                personal Name error here
              </div>
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
                name="businessName"
                required
                aria-required
              />
              <div id="businessNameHelp" className="form-text">
                business Name error here
              </div>
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
              />
              <div id="websiteHelp" className="form-text">
                website error here
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="aboutYourBusiness" className="form-label">
                aboutYourBusiness
              </label>
              <textarea
                className="form-control"
                id="aboutYourBusiness"
                aria-describedby="aboutYourBusinessHelp"
                value={formData.aboutYourBusiness}
                onChange={handleInputChange}
                name="aboutYourBusiness"
                required
                aria-required
              />
              <div id="aboutYourBusinessHelp" className="form-text">
                aboutYourBusiness error here
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="cta" className="form-label">
                cta
              </label>
              <input
                type="text"
                className="form-control"
                id="cta"
                aria-describedby="ctaHelp"
                value={formData.cta}
                onChange={handleInputChange}
                name="cta"
              />
              <div id="ctaHelp" className="form-text">
                cta error here
              </div>
            </div>
            <input
              type="button"
              onClick={() => setStep(2)}
              className="btn btn-primary"
              value="Next"
            />
          </section>
        );
      case 2:
        return (
          <section>
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
                className={Styles.datepicker}
              />
              <div id="startDateHelp" className="form-text">
                Start Date error here
              </div>
            </div>
            {(name === "Starter" || name === "Starter%20Plus") && (
              <>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.one}
                    name="accountsOne"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.two}
                    name="accountsTwo"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
              </>
            )}
            {(name === "Pro" || name === "Pro%20Plus") && (
              <>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.one}
                    name="accountsOne"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.two}
                    name="accountsTwo"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.three}
                    name="accountsThree"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
              </>
            )}
            {(name === "Supreme" || name === "Supreme%20Plus") && (
              <>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.one}
                    name="accountsOne"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.two}
                    name="accountsTwo"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.three}
                    name="accountsThree"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="accounts" className="form-label">
                    accounts
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="accounts"
                    aria-describedby="accountsHelp"
                    onChange={handleInputChange}
                    value={formData.accounts.four}
                    name="accountsFour"
                  />
                  <div id="accountsHelp" className="form-text">
                    accounts error here
                  </div>
                </div>
              </>
            )}

            {/* file upload here */}
            <div className="mb-3">
              <label htmlFor="socialMediaPics" className="form-label">
                socialMediaPics
              </label>
              <input
                type="file"
                className="form-control"
                id="socialMediaPics"
                aria-describedby="socialMediaPicsHelp"
                onChange={handleFileChange}
                name="socialMediaPics"
              />
              <div id="socialMediaPicsHelp" className="form-text">
                socialMediaPics error here
              </div>
            </div>

            <input type="button" value="Back" onClick={() => setStep(1)} />
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </section>
        );
    }
  };

  return <form onSubmit={handleSubmit}>{renderStep()}</form>;
};

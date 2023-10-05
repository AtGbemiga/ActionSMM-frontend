"use client";
import { useState } from "react";
import { PlanForm } from "@/app/typesAndInterfaces/planForm";
import { planFormFunc } from "@/lib/planForm";
import Cookies from "js-cookie";

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
    startDate: "",
    dueDate: "",
    socialMediaPics: [],
    // accounts: {
    //   facebook: "",
    //   instagram: "",
    //   linkedIn: "",
    //   x: "",
    // },
  });
  const token = Cookies.get("token");

  function handlePrice() {
    switch (name) {
      case "Starter":
        return "\u20A6 20,000";
      case "Pro":
        return "\u20A6 25,000";
      case "Supreme":
        return "\u20A6 30,000";
      case "Starter Plus" || "Starter%20Plus":
        return "\u20A6 25,000";
      case "Pro Plus" || "Pro%20Plus":
        return "\u20A6 30,000";
      case "Supreme Plus" || "Supreme%20Plus":
        return "\u20A6 34,500";
      default:
        return "";
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      alert("Please login first");
    }

    const formDataBody = new FormData();
    formDataBody.append("planName", formData.planName);
    // formDataBody.append("price", formData.price);
    formDataBody.append("personalName", formData.personalName);
    formDataBody.append("businessName", formData.businessName);
    // formDataBody.append("website", formData.website || "");
    // formDataBody.append("aboutYourBusiness", formData.aboutYourBusiness);
    // formDataBody.append("cta", JSON.stringify(formData.cta));
    // formDataBody.append("startDate", formData.startDate || "");
    // formDataBody.append("dueDate", formData.dueDate || "");
    // formDataBody.append(
    //   "socialMediaPics",
    //   JSON.stringify(formData.socialMediaPics)
    // );
    // formDataBody.append("accounts", JSON.stringify(formData.accounts));
    await planFormFunc(formDataBody);
    console.log("submitted");
  };

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
                value={name}
                name="planName"
                disabled
              />
              <div id="planNameHelp" className="form-text">
                plan name error here
              </div>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                value={handlePrice()}
                name="price"
                disabled
              />
              <div id="priceHelp" className="form-text">
                price error here
              </div>
            </div> */}
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
              />
              <div id="businessNameHelp" className="form-text">
                business Name error here
              </div>
            </div>
            {/* <div className="mb-3">
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
            </div> */}
            {/* <div className="mb-3">
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
              />
              <div id="aboutYourBusinessHelp" className="form-text">
                aboutYourBusiness error here
              </div>
            </div> */}
            {/* <div className="mb-3">
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
            </div> */}
            <button onClick={() => setStep(2)} className="btn btn-primary">
              Next
            </button>
          </section>
        );
      case 2:
        return (
          <section>
            {/* <div className="mb-3">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                aria-describedby="startDateHelp"
                onChange={handleInputChange}
                value={formData.startDate}
              />
              <div id="startDateHelp" className="form-text">
                Start Date error here
              </div>
            </div> */}
            {/* <div className="mb-3">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dueDate"
                aria-describedby="dueDateHelp"
                onChange={handleInputChange}
                value={formData.dueDate}
              />
              <div id="dueDateHelp" className="form-text">
                Due Date error here
              </div>
            </div> */}
            {/* <div className="mb-3">
              <label htmlFor="socialMediaPics" className="form-label">
                Social Media Pics
              </label>
              <input
                type="file"
                className="form-control"
                id="socialMediaPics"
                aria-describedby="socialMediaPicsHelp"
                onChange={handleInputChange}
                value={formData.socialMediaPics}
                name="socialMediaPics"
                multiple
              />
              <div id="socialMediaPicsHelp" className="form-text">
                Social Media error here
              </div>
            </div> */}
            {/* <div className="mb-3">
              <label htmlFor="accounts" className="form-label">
                accounts
              </label>
              <input
                type="text"
                className="form-control"
                id="accounts"
                aria-describedby="accountsHelp"
                onChange={handleInputChange}
                value={formData.accounts?.facebook}
                name="accounts"
              />
              <div id="accountsHelp" className="form-text">
                accounts error here
              </div>
            </div> */}
            <p>Debugging purpose</p>
            <button onClick={() => setStep(1)}>Back</button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </section>
        );
    }
  };

  return <form onSubmit={handleSubmit}>{renderStep()}</form>;
};

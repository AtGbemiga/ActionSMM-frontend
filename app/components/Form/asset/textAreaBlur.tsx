type Props = {
  e: React.FocusEvent<HTMLTextAreaElement>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};
function handleTextAreaBlur(e: Props["e"], setErrors: Props["setErrors"]) {
  if (e.target.value === "") {
    setErrors((prevErrors) => ({
      ...prevErrors,
      aboutYourBusiness: true,
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      aboutYourBusiness: false,
    }));
  }
}

export default handleTextAreaBlur;

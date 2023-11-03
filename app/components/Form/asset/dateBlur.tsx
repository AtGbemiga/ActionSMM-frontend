type Props = {
  e: React.FocusEvent<HTMLInputElement>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};

function handleDateBlur(e: Props["e"], setErrors: Props["setErrors"]) {
  if (e.target.value === "") {
    setErrors((prevErrors) => ({
      ...prevErrors,
      startDate: true,
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      startDate: false,
    }));
  }
}

export default handleDateBlur;

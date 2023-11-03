type Props = {
  e: React.FocusEvent<HTMLInputElement>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};

export const accountsRegex = (
  e: Props["e"],
  setErrors: Props["setErrors"],
  fieldName: string
) => {
  if (e.target.value === "")
    return setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: false,
    }));
  const facebookPattern = /^https:\/\/(web|m)\.facebook\.com\/.+/g;
  const instagramPattern = /^@\w+/g;
  const linkedInPattern = /^https:\/\/(www\.)?linkedin\.com\/company\/.+/g;
  const xPattern = /^https:\/\/(www\.)?twitter\.com\/.+/g;

  if (
    !facebookPattern.test(e.target.value) &&
    !instagramPattern.test(e.target.value) &&
    !linkedInPattern.test(e.target.value) &&
    !xPattern.test(e.target.value)
  ) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: true,
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: false,
    }));
  }
};

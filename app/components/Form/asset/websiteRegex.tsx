type Props = {
  e: React.FocusEvent<HTMLInputElement>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};

export const websiteRegex = (
  e: Props["e"],
  setErrors: Props["setErrors"]
): void | boolean => {
  if (e.target.value === "") return;
  const pattern =
    /^([https?]{4,5}):\/\/(www)?\.?(.+)\.([a-z]{2,5})(\.[a-z]+)?$/i;

  console.log(e.target.value);

  setErrors((prevErrors) => ({
    ...prevErrors,
    website: !pattern.test(e.target.value),
  }));
};

export const isAlphaNumeric = (str: string) => {
  const specialChars = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  return !specialChars.test(str.toString());
};

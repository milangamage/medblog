export const verifyEmailFormat = (value: string): boolean => {
    const emailFormat = /^[A-Za-z\\._\-0-9]*[@][A-Za-z]*[\\.][a-z]{2,4}$/;
  
    const isValidFormat = value === '' || emailFormat.test(value);
  
    return isValidFormat;
  };
  
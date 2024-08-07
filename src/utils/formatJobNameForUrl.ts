const formatJobNameForURL = (inputString) => {
    let formattedString = inputString
      .split('')
      .map((char) => {
        if (/[^\w\s]/.test(char)) {
          return '';
        } else {
          return char;
        }
      })
      .join('');
  
    formattedString = formattedString.replace(/\s+/g, '-');
  
    formattedString = formattedString.replace(/^-+|-+$/g, '');
  
    return formattedString.toLowerCase();
  };
  
  export { formatJobNameForURL };
  
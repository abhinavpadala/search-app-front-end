const isAlphaNumeric = (value) => {
    const regex = /^[A-Za-z0-9" "]+$/
    const isValid = regex.test(value);
    return isValid;
}
export {isAlphaNumeric}
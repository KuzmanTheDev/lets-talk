export function isValidEmail(val) {
  const ai = val.indexOf("@");
  const gdi = val
    .split("")
    .reduce((acc, char, i) => (char === "." ? i : acc), 0);
  return ai > -1 && gdi > ai ? "" : "Email must be valid";
}
export function isRequired(val) {
  return val.length > 0 ? "" : "Input is required";
}

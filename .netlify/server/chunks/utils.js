const symbolRegex = /[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
function makeUrlFriendlyString(str) {
  return str.replace(symbolRegex, "").replaceAll(" ", "-").toLowerCase();
}
function titlecase(str) {
  const strLen = str.length;
  if (strLen < 1)
    return str;
  str = str.toLowerCase();
  const chars = new Array(strLen);
  chars[0] = str[0].toUpperCase();
  for (let i = 1; i < strLen; ++i) {
    const currentChar = str[i];
    const charBefore = str[i - 1];
    if (!charBefore.trim())
      chars[i] = currentChar.toUpperCase();
    else
      chars[i] = currentChar;
  }
  return chars.join("");
}
function convertFilePathToUrl(filePath) {
  return filePath.replace(/^.*\/static/, "").trim();
}
function getFilenameFromFilePath(filePath) {
  let filename = filePath.replace(/^.*\//, "");
  filename = filename.replace(/\.\w*$/, "");
  filename = filename.replace(/[_\-]/g, " ");
  return titlecase(filename).trim();
}
export {
  convertFilePathToUrl as c,
  getFilenameFromFilePath as g,
  makeUrlFriendlyString as m,
  titlecase as t
};

function repeatMyself(string) {
  let exclMark = "!";
  let newStr = "";
  for (let i = 1; i < 6; i++) {
    newStr += string + exclMark.repeat(i);
  }
  return newStr;
}

module.exports = repeatMyself;

function strLength(str) {
  return str ? 1 + strLength(str.slice(1)) : 0;
};

const example = "abcde";
console.log(strLength(example));
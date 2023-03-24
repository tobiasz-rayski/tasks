function convertToRoman(num) {
  const myObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const romanLetters = Object.keys(myObj);
  const myArr = [];
  let myNum = num;

  for (let i = 0; myNum > 0; i++) {
    while (myNum >= myObj[romanLetters[i]]) {
      myArr.push(romanLetters[i]);
      myNum -= myObj[romanLetters[i]];
    }
  }
  return myArr.join("");
}

console.log(convertToRoman(3999));

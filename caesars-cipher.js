function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) == -1) {
      result += str[i];
    } else {
      index = (alphabet.indexOf(str[i]) + 13) % 26;
      result += alphabet[index];
    }
  }
  console.log(alphabet.length);

  return result;
}

console.log(rot13("SERR PBQR PNZC"));

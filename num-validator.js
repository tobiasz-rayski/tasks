function telephoneCheck(str) {
  let myRegex = /^(1|1[\s-])?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;
  console.log(myRegex.test(str));
}

telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");
telephoneCheck("1 555 555 5555");
telephoneCheck("(275)76227382");
telephoneCheck("2 (757) 622-7382");

const pairs = [90, 10, 10, 1, 90, 90, 90, 10, 22];

function findPairs(arr) {
  let numbers = arr.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    return obj;
  }, {});

  arr.forEach((x) => {
    numbers[x] += 1;
  });

  for (const number in numbers) {
    numbers[number] = Math.floor(numbers[number] / 2);
  }

  let myArr = Object.keys(numbers);

  return myArr.map((x) => ({ [x]: numbers[x] }));
}

console.log(findPairs(pairs));

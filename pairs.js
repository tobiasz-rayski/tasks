const pairs = [90, 10, 10, 1, 90, 90, 90, 10, 22];

function findPairs(arr) {
  let uniques = arr.filter((x, index) => arr.indexOf(x) === index);
  uniques = uniques.map((x) => ({
    [x]: 0,
  }));

  for (let i = 0; i < uniques.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Object.keys(uniques[i]) == arr[j]) {
        uniques[i][arr[j]] += 1;
      }
    }
  }
  uniques.forEach((obj) => {
    for (let key in obj) {
      obj[key] = Math.floor(obj[key] / 2);
    }
  });

  console.log(uniques);
}

findPairs(pairs);

function checkCashRegister(price, cash, cid) {
  let change;
  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// checkCashRegister accepts price, cash, cid (cash in drawer)
// cid is 2D array with currency
// checkCashRegister return object with status key (string) and change key (array)
// if (cid < cash - price) returns {status: "INSUFFICIENT_FUNDS", change: []}
// if (cid = change) returns {status: "CLOSED", change: cid}
// return {status: "OPEN", change: [...]}

// let currency = [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ];

function cashRegister(price, cash) {
  let changeToGive = cash - price;

  const values = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let drawer = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 300],
  ];

  drawer.sort((a, b) => {
    return values[b[0]] - values[a[0]];
  });

  drawer = drawer.filter((x) => x[1] !== 0);

  console.log(drawer);

  let drawerTotal = drawer.reduce((value, x) => {
    return value + x[1];
  }, 0);

  drawerTotal = Number(drawerTotal.toFixed(2));

  console.log();
  console.log(`Drawer balance: ${drawerTotal}`);
  console.log(`Item price: ${price}`);
  console.log(`Payment: ${cash}`);
  console.log(`Give change: ${changeToGive}`);
  console.log(drawer);
}

cashRegister(17.45, 100);

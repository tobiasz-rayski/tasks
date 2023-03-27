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

  //   [
  //     [ 'ONE HUNDRED', 200 ],
  //     [ 'TWENTY', 60 ],
  //     [ 'TEN', 20 ],
  //     [ 'FIVE', 55 ],
  //     [ 'ONE', 90 ],
  //     [ 'QUARTER', 4.25 ],
  //     [ 'DIME', 3.1 ],
  //     [ 'NICKEL', 2.05 ],
  //     [ 'PENNY', 1.01 ]
  //   ]

  drawer[0][1] -= values[drawer[0][0]];
  console.log(drawer[0][1]);

  //   console.log(drawer[0][1]);

  //   console.log(drawer);

  //   let changeArr = [];

  //   if (cash > price) {
  //     let changeToGive = cash - price;
  //   }

  //   let drawerTotal = drawer.reduce((value, x) => {
  //     return value + x[1];
  //   }, 0);

  //   drawerTotal = Number(drawerTotal.toFixed(2));

  // if (drawerTotal > changeToGive) {
  //     drawer.filter(x => x[0] = "ONE HUNDRED")
  // }

  //   return drawerTotal;
}

cashRegister();

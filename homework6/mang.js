let arr = [1, 2, 2, 3, 4, 4, 5, 6, 9, 8, 6, 7, 9];
let acc = arr.reduce(
  (acc, val) => acc.set(val, 1 + (acc.get(val) || 0)),
  new Map()
);

console.log(acc);

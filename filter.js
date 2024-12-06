const arr = [1, 5, 2, 3];

function isOdd(x) {
  return x % 2 === 1;
}
const output = arr.filter(isOdd);
console.log(output);

// function binary(x) {
//   return x.toString(2);
// }

// const bOut = arr.filter(binary);
// console.log(bOut);

// const out1 = arr.filter(function binary(x) {
//   return x.toString(2);
// });
// console.log(bOut);
// console.log(out1);

// const output2 = arr.filter((x) => x.toString(2)); //filterping each value(x) to string convert to binary
// console.log(output2);

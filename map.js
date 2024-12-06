const arr = [1, 5, 2, 3];

function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);

function binary(x) {
  return x.toString(2);
}

const bOut = arr.map(binary);
console.log(bOut);

const out1 = arr.map(function binary(x) {
  return x.toString(2);
});
console.log(bOut);
console.log(out1);

const output2 = arr.map((x) => x.toString(2)); //mapping each value(x) to string convert to binary
console.log(output2);

// console.log("start");
// function cb() {
//   console.log("f1");
// }
// cb();

// setTimeout(function cb() {
//   console.log("INSIDE CB");
// }, 0);
// console.log("end");

const radius = [3, 5, 6];
const newR = [1, 2, 10];
const area = function (radius) {
  return Math.PI * radius * radius;
};
const dia = function (radius) {
  return 2 * radius;
};
function cal(radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}
console.log(cal(radius, area));
console.log(cal(radius, dia));
console.log(radius.map(area));
console.log(radius.map(dia));
Array.prototype.cal = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log("using proto");

console.log(radius.cal(radius, area));
console.log(radius.cal(radius, dia));
console.log(newR.cal(radius, area));
console.log(newR.cal(radius, dia));

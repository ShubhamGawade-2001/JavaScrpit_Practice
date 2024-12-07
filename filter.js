const arr = [1, 5, 2, 3];

function isOdd(x) {
  return x % 2 === 1;
}
const output = arr.filter(isOdd);
console.log(output);


const users=[
    {uname : "ak",age : 22},
    {uname : "elo", age : 24},
    {uname : "aksh",age : 32},
    {uname : "das", age : 24},
    {uname : "jio",age : 22},
    {uname : "sdao", age : 35},
    {uname : "airtel",age : 22},
];

const out= users.filter(x => x.age<30);
console.log(out);

const outMap= users.filter((x) => x.age<30).map((x)=>x.uname);
console.log(outMap);

const outRed = users.reduce

const arr=[1,5,4,7,8];

function findSum(arr) {
    let sum=0;
    for (let i = 0; i< arr.length;i++) {
        sum =sum+arr[i];
    }
    return sum;
}

console.log(findSum(arr));

// using REDUCE 


const op= arr.reduce(function (acc,curr) {
   acc =acc + curr;
   return acc; 
});
console.log(op);

const users=[
    {uname : "ak",age : 22},
    {uname : "elo", age : 24},
    {uname : "aksh",age : 23},
    {uname : "das", age : 24},
    {uname : "jio",age : 22},
    {uname : "sdao", age : 25},
    {uname : "airtel",age : 22},
]

const output=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age];
    }else{
        acc[curr.age] =1;
    }
    return acc;
},{});
console.log(output);

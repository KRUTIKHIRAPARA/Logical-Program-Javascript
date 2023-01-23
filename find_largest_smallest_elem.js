// Find The Largest & Smallest Element in an Array 

var numbers = [23,56,7,98,34];

var len = numbers.length;

var l = 0;
var s = 0;

const checkNum = numbers.reduce((curval)=>{
    l = Math.max(curval,...numbers);
    s = Math.min(curval,...numbers);
    return (l,s);
});

console.log(`Largest Number : ${l} , Smallest Number : ${s}`);
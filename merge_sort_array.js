// Merge Two Sorted Array in Asecending order by removing Duplicates

var num1 = [45,67,3,98,45];
var num2 = [67,76,34,56];

var num3 = new Set([...num1,...num2].sort());

console.log(num3);
// Check Array then Remove Duplicates Elements and Show Duplicates Value

var mixArray = [34,4,67,8,9,34,5,9,2,65,4];

var filterArray = new Array();
var duplicateValues = new Array();

const operation = mixArray.filter((currVal)=>{
    if(filterArray.includes(currVal) !== true){
        filterArray.push(currVal);
    }
    else
    {
        duplicateValues.push(currVal);
    }

    return (filterArray, duplicateValues);
});

console.log(mixArray);
console.log(filterArray);
console.log(`Duplicates Values : ${duplicateValues}`);
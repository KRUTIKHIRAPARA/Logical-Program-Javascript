// Armstrong Number

// Logic :- 153 - 1*1*1 + 5*5*5 + 3*3*3 = 153


var checkNumber = 123;
var temp = checkNumber;
var noOfDigit = checkNumber.toString().length;
var filterAns = 0;

while(temp > 0)
{
    var digit = temp%10 ;
    filterAns += digit**noOfDigit;
    temp = parseInt(temp/10);
}

if(filterAns == checkNumber)
{
    console.log("This is Armstong Number...");
}
else
{
    console.log("This is Not A Armstong Number...");
}
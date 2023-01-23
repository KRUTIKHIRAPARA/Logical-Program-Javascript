// Generate Random Hex Color Code in One Line

const colorFun = ()=>{
    
    code = Math.random().toString(16);

    fix = code.slice(2,8);

    color = `#${fix}`;

    return color;
};

console.log(colorFun());
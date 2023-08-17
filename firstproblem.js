function cubeNumber(number){
    if(typeof number === "number"){
    const result = Math.pow(number, 3);
    return result;
}
else{
    return "Error: Please provide a valid a number"
    }
}
const firstNumber = cubeNumber(3);
const secondNumber = cubeNumber(4);
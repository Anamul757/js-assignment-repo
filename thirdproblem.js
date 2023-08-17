function sortMaker(arr){
    if (typeof arr[0] < 0 ||  arr[1] < 0 ) {
        return "Invalid Input";
      }
    else if (arr[0] === arr[1]){
        return "equal";
        }  
else if (arr[0]< arr[1]){
    return [arr[1], arr[0]];
}
else{
    return arr;
}
}
let firstArr = [2,3];
let secondArr = [4,2];
let thirdArr = [4,4];
let fourthArr = [1,2];
let fifthArr = [4,-2];

let result1 = sortMaker(firstArr);
let result2 = sortMaker(secondArr);
let result3 = sortMaker(thirdArr);
let result4 = sortMaker(fourthArr);
let result5 = sortMaker(fifthArr);


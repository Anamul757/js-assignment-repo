function canPay(changeArray, totalDue) {
    if (!changeArray || changeArray.length === 0) {
      return "Missing input";
    }
  
    let sum = changeArray.reduce((acc, curr) => acc + curr, 0);
  
    return sum >= totalDue;
  }

let input1 = [1, 2, 5];
let input2 = [1, 5, 5];

let output1 = canPay(input1, 10);
let output2 = canPay(input2, 10);
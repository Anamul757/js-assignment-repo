function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
    return street+','+house+','+society;
  }
  
  const firstAddress = { street: 10, house: '15A', society: 'Earth Perfect' };
  const output1 = findAddress(firstAddress);
  
  const secondAddress = { street: 10, society: 'Earth Perfect' };
  const output2 = findAddress(secondAddress);
  
  const thirdAddress = { street: 10 };
  const output3 = findAddress(thirdAddress);
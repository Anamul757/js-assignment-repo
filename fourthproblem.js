function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";
  
    return `${street},${house},${society}`;
  }
  
  let object1 = {street: 10, house: "15A", society: "Earth Perfect"};
  let object2 = {street: 10, society: "Earth Perfect"};
  let object3 = {street: 10};
  
  let result1 = findAddress(object1);
  let result2 = findAddress(object2);
  let result3 = findAddress(object3);
  

  
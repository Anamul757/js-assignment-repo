function findAddress(address) {
    const street = address.street || '__';
    const house = address.house || '__';
    const society = address.society || '__';
    return street,house,society;
}

const address1 = { street: 10, house: '15A', society: 'Earth Perfect' };
console.log(findAddress(address1)); 

const address2 = { street: 10, society: 'Earth Perfect' };
console.log(findAddress(address2)); 

const address3 = { street: 10 };
console.log(findAddress(address3)); 

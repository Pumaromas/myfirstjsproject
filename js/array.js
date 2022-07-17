const myArray = [1, 2, 3];

const myArray2 = myArray.forEach(el => console.log(el*2));
const newArray = myArray.map((el) => {return el*3});

console.log(myArray);
console.log(myArray2);
console.log(newArray);


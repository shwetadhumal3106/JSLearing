const array=[1,2,3,4,5];
const newarray=array;
newarray.push(100);
console.log(array);
console.log(newarray);

const array1=[5,6,7,8];
const clonearray=[...array1];

console.log("marge array");
const evenArray=[2,4,6,8];
const array3=array1+evenArray
console.log(array3);


//concat () method
const concatArray=array1.concat(evenArray);
console.log(concatArray);
console.log(typeof concatArray);

//Spred Operter
const resulrArray=[...array1,...evenArray];
console.log(resulrArray);
console.log(typeof resulrArray);


// const array=[1,3,4,5,2,45,2,6,2,1];
// const subarray=array.splice(2,2);
// console.log(array);

// const subarray1=array.splice(9,1,9);
// console.log(array);

var arr = [1,2,3,3,7,7,9]

var newArr = [...new Set(arr)]

console.log(newArr);



arrayOfNames = [ 'Kamat', 'Memon', 'Nashpati', 'Taimur', 'Menon', 'Kamat', 'Andy' ];

var newarr=[...new Set(arrayOfNames)]

console.log(newarr);

// const array = [1, 6, 5, 3, 11, 23, 4];
// const length = array.length;
// const lastIndex = length - 1;

// for (let i = 0; i < length / 2; i++) {
//   const temp = array[i];
//   array[i] = array[lastIndex - i];
//   array[lastIndex - i] = temp;
// }

// console.log(array);





console.log('--------------find the second  largest number-----------------');

const array1 = [1, 6, 5, 3, 11, 23, 4];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > largest) {
    secondLargest = largest;
    largest = array1[i];
  } else if (array1[i] > secondLargest && array1[i] < largest) {
    secondLargest = array1[i];
  }
}

console.log(secondLargest);

console.log('--------find the smallest number in the array----------------');

const array = [1, 6, 5, 3, 11, 23, 4];
let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < array.length; i++) {
  if (array[i] < smallest) {
    secondSmallest = smallest;
    smallest = array[i];
  } else if (array[i] < secondSmallest && array[i] !== smallest) {
    secondSmallest = array[i];
  }
}

console.log(secondSmallest);




const number=[1,2,3,5,6,7];
const number1=[4,5,7,8,5,5];

const marge=Object.assign({},number,number1);
console.log(marge);




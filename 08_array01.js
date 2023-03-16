//index is position of the element
//[] same element
//{} diferent element

let arrayOfNumbers=[0,1,2,3,4,5,6,7,"Nine","Ten"];
console.log(arrayOfNumbers);
//console.table(arrayOfNumbers)

const totalArrayElements=arrayOfNumbers.length;
console.log(`Total element available in array is ${totalArrayElements}`);

 const is8=arrayOfNumbers.includes(8);//find
 console.log(`Is 8 Avaible ${is8}`);

 const is7=arrayOfNumbers.includes(7);//find avaible or not
 console.log(`Is 8 Avaible ${is7}`);

 const indextOfnine=arrayOfNumbers.indexOf("Nine");
 console.log(`Index of Nine is ${indextOfnine}`);

 const indextOf100=arrayOfNumbers.indexOf(100);
 console.log(`Index of 100 is ${indextOf100}`);


var arrayOfNumbers1=[10,20,25,15,30,5];


const valueAtIndex=arrayOfNumbers1[2];
console.log(`Value at 2 index is ${valueAtIndex}`);

arrayOfNumbers1[3]=35;
console.log(arrayOfNumbers1);

arrayOfNumbers1[5]=50;
console.log(arrayOfNumbers1);

arrayOfNumbers1.push(40);
console.log("====Adding element in the last using push()====");
console.log(arrayOfNumbers1);

console.log("====Adding element in the first using unshift()=====");

arrayOfNumbers1.unshift(5);
console.log(arrayOfNumbers1);

var arrayOfNumbers1=[10,20,25,15,30,5];
console.log(arrayOfNumbers1);

console.log("====Removing last element using pop()=====");

arrayOfNumbers1.pop();
console.log(arrayOfNumbers1);


console.log("====Removing first element using shift()=====");

arrayOfNumbers1.shift();
console.log(arrayOfNumbers1);


var arrayOfNumbers1=[10,20,25,15,30,5,40,45];

console.log("=====slice(startIndex)======")
const arrayFromIndex3=arrayOfNumbers1.slice(3);
console.log(arrayFromIndex3);

console.log("===sclie (startIndex, EndIndex)========")
const subArray=arrayOfNumbers1.slice(2,5);
console.log(subArray);

var arrayOfNumbers1=[10,20,25,15,40,45];

console.log("=======splice(startIndex)===============")
const splicedArray=arrayOfNumbers1.splice(3);
console.log(`Remove element from array is :${splicedArray}`);
console.log(arrayOfNumbers1);

var arrayOfNumbers1=[10,20,25,15,40,45];
console.log("=======splice(startIndex,deletCount)===============")

const splicedArrayWithDelectCount=arrayOfNumbers1.splice(2,2);
console.log(`Remove element using delet Count is:${splicedArrayWithDelectCount}`);
console.log(arrayOfNumbers1);

var arrayOfNumbers1=[10,20,25,15,40,45];

const splicedArrayWithDelectCount1=arrayOfNumbers1.splice(1,1);
//const splicedArrayWithDelectCount1=arrayOfNumbers1.splice(1);

console.log(`Remove element using delet Count is:${splicedArrayWithDelectCount1}`);
console.log(arrayOfNumbers1);


var arrayOfNumbers1=[10,20,25,15,40,45];

console.log("=======================================");

const splicedArrayWithDelectCount2=arrayOfNumbers1.splice(3,1);
console.log(`Remove 15 Element :${splicedArrayWithDelectCount2}`);
console.log(arrayOfNumbers1);

var arrayOfNumbers1=[10,20,25,15,40,45];
const splicedArrayWithDelectCount3=arrayOfNumbers1.splice(1,2);
console.log(`Remove 20 ,25 Element :${splicedArrayWithDelectCount3}`);
console.log(arrayOfNumbers1);

console.log("=============splice() to insert one element without replacing existing element====================");
var arrayOfNumbers1=[10,20,25,15,40,45];
arrayOfNumbers1.splice(2,0,22)//2 is the index 0 is withoutreplacement 22 value is insert
console.log(arrayOfNumbers1);


console.log("=============splice() to insert multiple  element withput replceing exsiting element====================");
var arrayOfNumbers1=[10,20,25,15,40,45];
arrayOfNumbers1.splice(4,0,33,32,56);
console.log(arrayOfNumbers1);

console.log("===============splice () to replace one element=================");
var arrayOfNumbers1=[10,20,25,15,40,45];
//arrayOfNumbers1.splice(2,1,50,60 )//2 is the index 1 value is removed and replace 50,60
arrayOfNumbers1.splice(2,3,50,60)
console.log(arrayOfNumbers1);






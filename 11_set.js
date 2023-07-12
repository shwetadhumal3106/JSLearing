//in set do not allowed douplcated element

const setOfNums=new Set();

setOfNums.add(2);
setOfNums.add(3);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(9);
setOfNums.add(3);
console.log(setOfNums);

//console.log(setOfNums.size);//size cheak
//setOfNums.delete(8);
//console.log(setOfNums);

//setOfNums.clear();

// setOfNums.clear();
//console.log(setOfNums.values)




console.log("----------Trvesing using for of loop----------------");
const array = [3, 4, 5, 6, 7, 2, 4, 5];
const setOfElements = new Set();
for (const element of array) {
    setOfElements.add(element); 
}
// console.table(setOfElements);




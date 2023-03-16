
const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];

console.log("-----First and last Element on console---------");
console.log(arraySeasonalFruits[0]);
console.log(arraySeasonalFruits[arraySeasonalFruits.length-1]); 



console.log("-------------Add element Pappya----------------");
arraySeasonalFruits.unshift("Papya");
console.log(arraySeasonalFruits);



console.log("---------------Remove Mnago from Arry-----------------");
const removeMnago=arraySeasonalFruits.splice(3,1);
console.log(`remove this ${removeMnago} element in this array`);
console.log(arraySeasonalFruits);



console.log("------insert  the Element Pineapple at the last position-----------");
arraySeasonalFruits.splice(4,0,"Pineapple");
console.log(arraySeasonalFruits);



console.log("------insert  the Element Before the  Water Melon-----------");
arraySeasonalFruits.splice(3,0,"Dragon Fruite");
console.log(arraySeasonalFruits);



console.log("------------Replace Element Orange with Kivi------------");
arraySeasonalFruits.splice(2,1,"Kivi");
console.log(arraySeasonalFruits);



console.log("----------------Log the element starting from index 1 to4-----------");
console.log(arraySeasonalFruits[1]);
console.log(arraySeasonalFruits[2]);
console.log(arraySeasonalFruits[3]);
console.log(arraySeasonalFruits[4]);


console.log("------------Last three Element log on console-------------------");
console.log(arraySeasonalFruits[arraySeasonalFruits.length-3]); 
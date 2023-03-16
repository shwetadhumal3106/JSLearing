console.log("============================Traversing============================");

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sum=0;
for (let index = 0; index < arrayOfNumbers.length; index++) 
{
    const element=arrayOfNumbers[index];
    sum=sum+element;
   // console.log(element);    
}

console.log(`sum of Array element is:${sum}`);
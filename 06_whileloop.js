 //wap to print numbers from 0mto 10
 let index=0;//initialization
 while(index<=10)//condition
 {
   console.log(index);
   index++;//upadate Expression
 }

/* const arrayOfNumbers= console.log=[10,20,25,15,40,45,60,40,30,22,26]

 let index1=0;//initialization
 while(index<=arrayOfNumbers.length)//condition
 {
   console.log(arrayOfNumbers[index]);
   index++;//upadate Expression
 }*/

 console.log("Even numbers");
const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index1=0; // initialization
let sum = 0;
while (index<arrayOfNumbers.length) { // condition
    const element = arrayOfNumbers[index];
    if(element%2==0) {
        console.log(element);
        sum = sum + element;
    }
    index++; // Update Expression
}
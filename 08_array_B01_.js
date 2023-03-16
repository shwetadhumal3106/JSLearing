const arrayNumber=[ 20, 31, 40, 25, 23, 11, 29 , 9, 60, 2, 11 ];


console.log("----------Total numbers in array------------------");
console.log(arrayNumber);

console.log("----------First nad Last Element in the array------------");
console.log(arrayNumber[0]);
console.log(arrayNumber[arrayNumber.length-1]);

console.log("------print last three element on console using length property-------");
console.log(arrayNumber[arrayNumber.length-3]);



console.log("-----print all even numbers log on console-------------");
let sum=0;
for(let index=0; index<=10; index=index+1)
{
    
    const element=arrayNumber[index];
    if(element%2==0)
    {
        sum = sum + element;
        console.log(sum);

    }
}

console.log("-----print all odd numbers log on console-------------");

let sum1=0;
for(let index=0; index<=arrayNumber.length; index=index+1)
{
    
    const element=arrayNumber[index];
    if(element%2==1)
    {
        sum = sum1 + element;
        console.log(sum);

    }

}    

console.log("--------------print the number present in Even position and its sum----------------");

let sum5=0;
for (let index = 0; index < arrayNumber.length; index++) {
    if(index%2==0)
    {
      const element = arrayNumber[index];
      sum5=sum5+element;
    }
    
}
console.log(`sum of array present in even position ${sum5}`);

console.log("--------------print the number present in odd position and its sum----------------");

let sum6=0;
for (let index = 0; index < arrayNumber.length; index++) {
    if(index%2==1)
    {
      const element = arrayNumber[index];
      sum6=sum6+element;
    }
    
}
console.log(`sum of index present in odd position ${sum6}`);


console.log("----------Find the numbers which is multiple of 5------------------------")

let sum3=0;
for(let index=0; index<=10; index=index+1)
{
    
    const element=arrayNumber[index];
    if(element%5==0)
    {
        sum = sum3 + element;
        console.log(sum);

    }
}

console.log("----------sum of all elements log on console---------------");
let sum2=0;
for (let index = 0; index < arrayNumber.length; index++) 
{
    const element = arrayNumber[index];
    sum=sum2+element;
    
}
console.log(`Sum of all elements in Array ${sum}`);

console.log("-----numbers is avaible or not -------------");

const numAvaible=arrayNumber.includes(115);
console.log(`number avaible : ${numAvaible}`);

const numAvaible1=arrayNumber.includes(23);
console.log(`numbers avaible : ${numAvaible1}`);


console.log("-----------insert numbers before the index and log on console----------");
const insertNumber=arrayNumber.splice(3,0,55,66);
console.log(arrayNumber);

console.log("--------Delet 3 elements starting form index 4 and log on console-----------");
const removeEElement=arrayNumber.splice(0,4);
console.log(arrayNumber);


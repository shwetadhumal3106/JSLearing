
var num1=10;
var num2=20;

var str1="Shweta";
var str2="Ganesh";


//withReturn argument
function functionName(value1 ,value2){
console.log(`"Before Swapping :-" ,${value1},${value2}`);
var temp=value1;
value1=value2;
value2=temp;
console.log("After log:- ",value1,value2);
return "swapping variable sucefully completed";

}
var swapResult=functionName(num1,num2);
console.log(swapResult);

var swapResult1=functionName(str1,str2);
console.log(swapResult1);

//with return argument
function display(num)
{
    console.log(num);
    var result=typeof num;
    return result;
}

var displayResult=display(100);
console.log(displayResult);

//function no argument and no return value
function showFullName()
{
   console.log("My full name is : Shweta Dhumal");
}
showFullName();//function call and invoke

//function with arguments no return value

function showAge(age)
{
    
  console.log("My age is: ",age)
}

showAge(32);

//function with no argument and return value
function fullName()
{
 var name="sonu varma";
 return name;
}
var fName=fullName();
console.log(fName);

//Function with argument and return value

function sumOfNumber(num1 ,num2, num3)
{
 var result= num1+num2+num3;
 return result;

}
var sum1=sumOfNumber(10,23,45);
console.log(sum1);
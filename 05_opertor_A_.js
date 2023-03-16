console.log("----------------------------------------Greater Number----------------------------------------");

function greaterNumber(number1,number2)
{
    
    var result=number1 > number2 ?`Given number is greater : ${number1}` : `Given number is greater : ${number2}`;
    console.log(result);
   
}

greaterNumber(10,-10);
greaterNumber(800,899);
console.log("---------------------------------------Odd Even Number-----------------------------------------");

function isEvenOrOddNum(value)
{
    var result=value%2==0?`Given number is Even ,${value}`: ` Given number is ODD,${value}`;
    console.log(result); 

}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(101);
isEvenOrOddNum(0);

console.log("---------------------------------------Find THe Length of word------------------------------------");



function wordLength(word)
{
    var wordLength=word.length;
    var result2=wordLength%2==0 ? "Even" :" ODD";
    return result2;
}

var result5=wordLength("Java Script");
console.log(`word "Java Script"has ${result5} length`);

var result5=wordLength("developer");
console.log(`word "developer" has ${result5} length`);

var result5=wordLength("Goggle");
console.log(`word "Google" has ${result5} length`);

console.log("-------------------------------------------------------------------------------------------------------")




console.log("------------Count the spaces----------------");
var reverseStr=function(str)
{

    //index=11 condition>=0--
    var reverse="";
 for (let index = str.length; index >=0; index--) 
 {
       var char=str.charAt(index);
       if(char ==" ")
       {
        break;
       }
         reverse = reverse + char;
    
 }
 return reverse;


}

var result=reverseStr("Do it any how");
console.log(`Reverse String is: ${result}`);

console.log("----------Count the length------------------");
var str="I am Angular champ";
var count=0;
for(let index=0; index<str.length;index++)
{
    var char =str.charAt(index);
    if(char==" ")
    {
        count=count +1;
    }
}
console.log("Total numbers os spaces is:",count);  

var str="I am Angular champ";
var count=0;
for(let index=0; index<str.length;index++)
{
    var char =str.charAt(index);
    if(char=="a" || char =="e"|| char =="o" || char =="i" ||char =="i")
    {
        count=count +1;
    }
}
console.log("Total numbers of volws  is:",count);  


var firstWordLength=function(strGiven)//"focus is the key";
{

    var firstWord="";
    for (let index = 0; index <strGiven; index++) 
    {
       var char=strGiven.charAt(index);
       firstWord=firstWord+char;
       if(char==" ")
       {
        break;
       }
        
    }

    return firstWord;
}
var firstWord=firstWordLength("Foucus is the key");
console.log(`first word:${firstWord} length is:${firstWord.length}`);
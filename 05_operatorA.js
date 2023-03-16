
var word1 = "Java Script";
var word2 = "Google Chrome";
var word3 = " Devloper Smart";
console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*Given String and ITS square=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
function squareOfWordLength(value)
{
     var var1=value;
     var script=var1.length**2;
    console.log(`Given String is ${value}`);
    console.log(`Length of ${value} String : ${value.length}`);
    console.log(`Square of Given String is:${script}`);
    console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");
}
squareOfWordLength(word1);
squareOfWordLength(word2);
squareOfWordLength(word3);

/*console.log("------------------Given String with no Argument--------------------------");

 
function onArgumentFunction()
{
    var string="I am Angular Developer";
    var stringLength=String.length; 
    console.log(`Given String Length is: ${StringLength}`);
}*/
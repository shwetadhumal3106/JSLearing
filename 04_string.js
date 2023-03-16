var greet="Good Morning";
console.log(typeof greet);//which type of value is strore

console.log("Total number chars are avoiable in string variable");
var greetLength=greet.length;
console.log("total lenth of string",greetLength);



console.log("Find the charter index bye value")
var chatAtIndex = greet.charAt(3);
console.log("Charater avaible ata the index: ",chatAtIndex);


console.log("Find the last index")
var chatLastIndex=greet.charAt(greetLength-1);
console.log("last charter charater is",chatAtIndex);

console.log("Find the index by carater value");
var indexOfM=greet.indexOf(`M`);
console.log("Index of Char M",indexOfM);

console.log("Index ata charater  which is not aviable into string",greet.indexOf(`z`));

console.log("Index of a char:",greet.indexOf(`o`));
console.log("Index of char o using a Last Index()",greet.lastIndexOf(`o`));

var replaceResult=greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper case:",replaceResult.toUpperCase());
console.log("Lower case:",replaceResult.toLowerCase());

var myName="  Goood Morning  ";
var myNameAfterTrim=my.Name.trim();
//console.log("Removing extra start and end spaces using trim()",myNameAfterTrim,myName.length,myNameAfterTrim.length);

//find the total extra spaces removed from the String-myName
var count =myName.length - myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(),myName.trimEnd());

console.log("include()");
console.log("Is is Sub String Mor in the greet or not ",greet.includes("Mor"));
console.log("Is is Sub String ing in the greet or not ",greet.includes("ing"));

console.log("slice() method");
var sliceResult=greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5));

console.log("split() method");
var greet=" Good Morning";
var splitResult=greet.split(" ");
console.log(splitResult);

var friendList="Billgates ,Stew Job,Elon Musk,Ratan Tata,Sunder Pichal,Satya Nadella,Narayan Murti,Nadan Nilekani,Lary Page,Surgey Brain,Tom cook"








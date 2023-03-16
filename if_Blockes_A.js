function maleMarriedEligibility(gender,age,boyName)
{
    if(gender="male " && age>=21)
    {
        console.log(`${boyName} You are eligible for marrage`);
    }
    else
    {
       console.log(`${boyName} You areNot elibile for Marriage `);
    }
}
maleMarriedEligibility("male",17,"Stew jobs");
maleMarriedEligibility("male",25,"Billgates");
console.log("-------------------------------------------------------------------------------------------------------------------");
 
function femaleMarriedEligibility(gender,age,girlName)
{
    
    if(gender="male " && age>=21)
    {
        console.log(`${girlName} You are eligible for marrage`);
    }
    else
    {
        console.log(`${girlName} You are eligible for marrage`);
    }
}
femaleMarriedEligibility("female",16,"Jenifer");
femaleMarriedEligibility("female",25,"Malinda Gates");

console.log("--------------------------------------------------------------------------------------------------------------------");

function wordLength(word)
{
    var wordLength=word.length;
    if(wordLength%2==0)
    {
         console.log(`Given word length is Even ${word}`);
    }
    else{
        console.log(`Given word length is odd ${word}`);
    }
}
wordLength("Java Script");
wordLength("Google");
wordLength("developer");
console.log("-----------------------------------------------------------------------------------------------------------------------");




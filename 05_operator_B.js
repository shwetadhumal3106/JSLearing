
console.log("---------------------------------------Married Eligibility for male-----------------------------");


function maleMarriedEligibility(gender,age,boyName)
{
   var result= (gender="male " && age>=21 )?`${boyName} Eligible for Marriage ` :` ${boyName} You areNot elibile for Marriage `;
   console.log(result);
}
maleMarriedEligibility("male",17,"Stew jobs");
maleMarriedEligibility("male",25,"Billgates");

console.log("--------------------------------------------------------------------------------------------------");

function femaleMarriedEligibility(gender,age,girlName)
{
   var result1= (gender="female " && age>=21 )?`${girlName} Eligible for Marriage ` :` ${girlName} You areNot elibile for Marriage `;
   console.log(result1);
}
maleMarriedEligibility("female",16,"Jenifer");
maleMarriedEligibility("female",25,"Malinda Gates");

console.log("--------------------------------------------------------------------------------------------------");





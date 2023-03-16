console.log(`Start`);
var num=10;
if(num>0)
{
  console.log(`inside if`);
  console.log(`num is positive${num}`);
}
console.log(`End`);

var ageForVote=20;
if(ageForVote>=18 )
{
    console.log("youer eligible for voating");
    console.log(`Age is:${ageForVote}`);
}
console.log("End of next if block");
function cheakEvenodd(num)
{
    if(num%2==0)
    {
        return "Even";
    }
    if(num%2!=0)
    {
        return "Odd"
    }
}  
    var result=cheakEvenodd(45);
    console.log(`Given Number 45 is${result}`);

    var result=cheakEvenodd(70);
    console.log(`Given Number 70 is${result}`);

    var result=cheakEvenodd(44);
    console.log(`Given Number 44 is${result}`);

    var result=cheakEvenodd(55);
    console.log(`Given Number 55 is${result}`);

    var num1=5;
    if(num1>0)
    {
        console.log(`Number is ${num1} positive`);
    }
    else{
        console.log(`number is ${num1} negative`);
    }

    function maleMarrageEligibality(gender ,age,boyname)
{
    if(gender=="Male" && age>=21)
    {
        console.log("You are eligible");
    }
        else
        {
            console.log("Your are not eligible");
        }
    }        

maleMarrageEligibality("male",21,"Billagtes");

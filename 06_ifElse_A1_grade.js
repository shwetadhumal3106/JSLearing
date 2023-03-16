function voteEligiblity(age)
{
    if(age>0 && age<120 )
    {
        console.log(`Your are ${age} age is eligible for voating`);
    }
    else
    {
        console.log(`Your are age  ${age} is not eligible for voating`)
    }
}
voteEligiblity(45);
voteEligiblity(17);
voteEligiblity(8);
voteEligiblity(20)
voteEligiblity(-10);
voteEligiblity(200)
voteEligiblity(0)
voteEligiblity(undefined);
voteEligiblity(null);
console.log("------------------------------------------------------------------------------------------------------------");

/*function gradeCalculation(marks)
{
    if(marks>=90)
    {
        console.log(`Funtastic marks ${marks} ,your grade is A++`);
    }   
        if(marks>=75 || marks<90)
        {
            console.log(`Excellant marks ${marks} your grade is A `);
        }
            if(marks>=50 || marks<75)
            {
                console.log(`Good marks ${marks} ,your grade is B`);
            }
                if(marks>=35 || marks<50)
                {
                    console.log(`marks is ${marks} ,your are grade is  C,Need improvement`);

                
                    if(marks<=0 || marks > 100 || (typeof marks!= "number"))
                        {
                            console.log("Please provide the valid marks");
                        }
                    }
                         
                          
            }
                                             
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);*/
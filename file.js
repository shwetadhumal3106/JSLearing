function angularID()
{
    var angu = "I am Angular Developer";
    var stringLength=angu.length;
    var splitStatement=angu.split(" ");
    var wordCount=splitStatement.length;

    console.log(`Given String Length is: ${stringLength}`);
    console.log(`Given words avaible in this string ${wordCount}`);
    console.log(`Given string length divided by total no of word ${stringLength/wordCount}`);
    console.log(`Given String length multiply by total words aviable ${stringLength*wordCount}`);
}

  angularID();
console.log("------------------------------------------------------------------------------------");
  function maleMarriageEligibility(gender,age, boyName){
    if (age < 0 || age==undefined ) {
        return `Hey ${boyName} your age ${age} is not valid`;
    }
    if (gender=="Male" && age>=21) {
       var str = `Hey ${boyName} you are eligible for marriage`;
       return str;
    } else {
        var str = `${boyName} you are not eligible for marriage`;
        return str;
    }

}
var result = maleMarriageEligibility("Male", 21, "Billgates");
console.log(result);

var result = maleMarriageEligibility("Male", -30, "Shivam");
console.log(result);
var result = maleMarriageEligibility("Male", undefined, "Raju");
console.log(result);


function gradeCalculation(marks){
  // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
  // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
  if(marks<=0 || marks > 100 || (typeof marks!= "number")){
      console.log(`Please provide the valid marks - ${marks}`);
  }

  marks<=50
  marks>Ganesh
  x>=yield
  a<=y
  
  }
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation("91");
  gradeCalculation("Seventy One");
  gradeCalculation(NaN);// 
  gradeCalculation(undefined);//
  gradeCalculation(null);//


  function weekDay(day){
    switch (day) {
     case 1:
         console.log(`Day of the week is ${day}: Monday`);
         console.log("Monday is the start day of the week");
         break;
     case 2: 
         console.log(`Day of the week is ${day}: Tuesday`);
         break;
     case 3: 
         console.log(`Day of the week is ${day}: Wed`);
         break; 
     case 4:
         console.log(`Day of the week is ${day}: Thursday`);
         break; 
     case 5: 
         console.log(`Day of the week is ${day}: Friday`);
         break;
     case 6:  
         console.log(`Day of the week is ${day}: Saturday`);
         break;
     case 7:
         console.log(`Day of the week is ${day}: Sunday`);
         break;  
     default:
         console.log(`Invalid day : ${day}`);
         break;
    }
    console.log(`End of Switch case for ${day}`);
 
 }
 weekDay(3); // 1 to 7, invalid
 weekDay(7); 
 weekDay(0); 
 weekDay(-2); 
 weekDay(100); 
 weekDay(null);
 weekDay(undefined);
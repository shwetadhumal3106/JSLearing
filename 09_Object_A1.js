let professor =
{
   name : "Shaha Sir",
   Qualification : "PHD",
   City : "Latur",
   age : "67",
   Country : "India",
   Status: "Married",
   Deperment :"CSC",
    
  
    degrees :
    {
        degree1:"engineering" ,
        degree2 : "CSC", 
        degree3:"PHD",
        degree4:"Adv Computing",
        
    },

     totalExperiance:"100 years",

      certificates : ["Hacter Rank Participation","Certicifate in Adv Programming"],

    educationDetails: function()
     {
            return ` Techers degress are Total Degress :${this.degrees.degree1}, ${this.degrees.degree2} , ${this.degrees.degree3} , ${this.degrees.degree4}`
        
     }
}

 let result=professor.educationDetails();
 console.log(result);

 console.log("--------------Add new one certificate------------------------ ");

 console.log(professor.totalExperiance);

 console.log("---------Modifiy any execting property log on console------------- ")

console.log(professor.certificates);

console.log("------------add one more certificat in array----------------");

professor.certificates.unshift("Oracle Certified");
console.log(professor.certificates);


console.log("-------------------Last elements in the Array-----------");
console.log(professor.certificates[professor.certificates.length-1]);


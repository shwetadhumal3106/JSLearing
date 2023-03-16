
console.log("----------------------bankSBI Object Create Using Litrals---------------------------- ");
const bankSbi =
{
    bankName : "SBI Bank of India",
    accounNo : "45632100",
    ifscCode  :"SBIN25813",
    branchCode :"7896",

}
console.log(`Bank Name :${bankSbi.bankName} ,Account Number :${bankSbi.accounNo} , IFSC Code :${bankSbi.ifscCode}, Branch COde : ${bankSbi.branchCode}`);



console.log("-----------------------bankLocation object create Using Litrals------------------------");

const bankLocation =
{
    street : "SBI Bank in Kothrud",
    city : "Pune",
    pinCode : "111045"
}

console.log(`bank Street :${bankLocation.street}, City:${bankLocation.city}, PIN Code ${bankLocation.pinCode}`);


console.log("------------------Cloning of Bank SBI and Object Using object.assign()-------------------");


const otherName=bankSbi;
console.log(otherName);



console.log("------------------Cloning of BankLocation and Object Using object.assign()-------------------");

const otherLocation=bankLocation;
console.log(bankLocation);

console.log("----------------------ratrOfInterst object creat using liters-------------------------------------");

const ratrOfInterest =
{
    homeLoanInterest : "10000000",
    personalLoanInterest : "500000",
    dueLoanInterest :"120000",
}


console.log(`homeLoanInterest: ${ratrOfInterest.homeLoanInterest},  pesonalLoanInterest ${ratrOfInterest.personalLoanInterest}  ,dueLoanInterest :${ratrOfInterest.dueLoanInterest}`);


console.log("--------------------------Marge Step1,Step2 & Step3-----------------------------------------------");

const step3= Object.assign({},bankSbi,bankLocation,ratrOfInterest);
console.table(step3);

console.log("---------------------------------Travesing object using loop in loop------------------------------");

const bankDetails=[bankSbi,bankLocation,ratrOfInterest]

function traversingObject(object)
{
for (const key in object) 
{
    if (Object.hasOwnProperty.call(object, key)) 
    {
        const element = object[key];
        console.log(`${key} ${element}`);
        
    }
}
}
traversingObject(bankSbi);
traversingObject(bankLocation);
traversingObject(ratrOfInterest);
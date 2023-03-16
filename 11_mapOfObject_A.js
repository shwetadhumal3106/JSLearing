console.log("------------------Object created using class and initalization using constructer for Map--------------------------- ");


class Bank {
    constructor(bank_Name, location, account, ifsc, interest_Rate ){
        this.bank_Name = bank_Name;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interest_Rate = interest_Rate;
    }  
}
const axis_Bank = new Bank("Axis_Bank", "Mumbai", "62514897564", "AXSI4589632",10.75 );
console.log(axis_Bank);
const sbi_Bank = new Bank("SBI_Bank", "Pune, Pune", "457963228", "SBI44578963", 10.50);
console.log(sbi_Bank)
const icic_Bank= new Bank("icic_Bank", "Bangolager", "45687992224", "ICIC45563214", 14.75 );
console.log(icic_Bank);
const kotak_Bank = new Bank("Kotak_Bank", "Pune", "54869307564", "KOTAKT45796", 9.75 );
console.log(kotak_Bank);
const hdfc_Bank= new Bank("HDFC_Bank","Latur","5632145622","HDFCN4896","12.2%")
console.log(hdfc_Bank);
const panjab_Bank=new Bank("Panjab_Bank","Nagpur","457896321","PANJABN45622","14.2%")
console.log(panjab_Bank);

console.log("----------------------------------Add all these object in Map -------------------------------------------");

const mapOfBanks = new Map();
mapOfBanks.set("Axis_Bank",axis_Bank);
mapOfBanks.set("Sbi_Bank",sbi_Bank);
mapOfBanks.set("Icic_Bank",icic_Bank);
mapOfBanks.set("Kotak_Bank",kotak_Bank);
mapOfBanks.set("Hdfc_Bank",hdfc_Bank);
mapOfBanks.set("Panjab_Bank",panjab_Bank);


console.log(mapOfBanks);

console.log("--------------------------------Taversing the object using for of loop for map-----------------------------------");

const bankDetails=[axis_Bank,sbi_Bank,icic_Bank,kotak_Bank,hdfc_Bank,panjab_Bank]

for (const element of bankDetails)
{
    console.log(`Bank_Name: ${element.bank_Name}, Accound Number: ${element.account} ,Interesr Rate ${element.interest_Rate}`);
}
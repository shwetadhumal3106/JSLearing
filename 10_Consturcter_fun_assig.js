function Bank(bankName,location,ifscCode,branchCode)
{
  this.bankName = bankName ;
  this.location = location ;
  this.ifscCode = ifscCode ;
  this.branchCode = branchCode;

  this.showDetails=function()
  {
     console.log(  `${this.bankName}  ${this.location}  ${this.ifscCode}  ${this.branchCode}`); 
  }

}

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";


const yesBank=new Bank("YES bankof India","Nagpur","YESN8521147","9632");
yesBank.showDetails();

const sbiBank=new Bank("SBI Bank of India","Latur","SBIN789654","1452");
sbiBank.showDetails();



const axisBank=new Bank("AXIS Bank of India","Pune","AXIS456321","4563");
axisBank.showDetails();

const mahBank=new Bank("Maharashtra bank of India","Mumbai","MAHN145632","7895");
mahBank.showDetails();
console.log("=============================================================================================================");


console.log(`open Time of SBI Bank ${sbiBank.openTime},close Time of SBI Bank is ${sbiBank.closeTime}`);


console.log("===========================================================================================================");

console.log(`Bank Name is ${axisBank.bankName},close Time if axis Bank is ${axisBank.closeTime}`);

console.log("===========================================================================================================");


console.log(`Bank Name is ${yesBank.bankName},and Its Branch Code is ${yesBank.branchCode} and Its open Time is ${yesBank.openTime}`);


console.log("===========================================================================================================");

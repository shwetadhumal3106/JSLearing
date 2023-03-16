let sbiBank =
{
    bankName:"SBI bank of India",
    location:"Latur",
    accountNo:"457896321454788",
    ifsc:"DFGY45812365",
    interestRate:"10 %",


 axisBank:
   {
        bankName : "AXIS bank of India",
        location : "Pune",
        accountNo : "45217896312",
        ifsc : "DFGY745896321",
        interestRate : "8 %"
   }, 

 hdfcBank:
   {
        bankName : "HDFC bank of India",
        location : "Mumbai",
        accountNo : "789654123123",
        ifsc : " DFGY789654123",
        interestRate : "12 %"
    },

yesBank :
{
    bankName : "YES bank of India",
    location : " Dhili",
    accountNo : "789452631456",
    ifsc : "RTYH789654147",
    interestRate : "15 %"
},

showDetails :function()
    {
    
    console.log(`Bank name is ${sbiBank.bankName} ,location :${sbiBank.location},accounNumbers :${sbiBank.accountNo}, ifscCode :${sbiBank.ifsc}, interestRate :${sbiBank.interestRate}`);  

    

    console.log( `Bank name is ${this.axisBank.bankName} ,location :${this.axisBank.location},accounNumbers :${this.axisBank.accountNo}, ifscCode :${this.axisBank.ifsc}, interestRate :${this.axisBank.interestRate}`);

    

    console.log( `Bank name is ${this.hdfcBank.bankName} ,location :${this.hdfcBank.location},accounNumbers :${this.hdfcBank.accountNo}, ifscCode :${this.hdfcBank.ifsc}, interestRate :${this.hdfcBank.interestRate}`); 


    console.log(`Bank name is ${this.yesBank.bankName} ,location :${this.yesBank.location},accounNumbers :${this.yesBank.accountNo}, ifscCode :${this.yesBank.ifsc}, interestRate :${this.yesBank.interestRate}`); 

    }
    

}
 sbiBank.showDetails();
 
 
 //axisBank.showDetails();
 //hdfcBank.showDetails();
 //yesBank.showDetails();
 

 
 
    





 //function does not return value does not log on console   
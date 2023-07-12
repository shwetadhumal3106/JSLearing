

// console.log(arrayNumbers.length);
// console.log(arrayNumbers[0]);
// console.log(arrayNumbers.length-1);
// console.log(arrayNumbers.length-2);

// console.log("------------------------Even no---------------------------------------");
// let sum=0;
// for (let index = 0; index < arrayNumbers.length; index++) 

// {
//     const element=arrayNumbers[index]
//     if(element%2==0){

//         sum=sum+element
//         console.log(sum);
//     }

    
// }
// console.log("-----------------------odd n0------------------------------------------");
// let sum1=0     
// for (let index = 0; index < arrayNumbers.length; index++) {
//     const element = arrayNumbers[index];
//     if(element%2==1)
//     {
//         sum1 =sum1 + element;
//         console.log(sum1);
//     }
    
// }

// console.log("-----------------------Multiple of five------------------------------------------");
// let sum2=0     
// for (let index = 0; index < arrayNumbers.length; index++) {
//     const element = arrayNumbers[index];
//     if(element%2==1)
//     {
//         sum2 =sum2 + element;
//         console.log(sum2);
//     }
    
// }
// console.log("-----------------Find the Even position element--------------------");
// sum3=0;
// for (let index = 0; index < arrayNumbers.length; index++) {
//     if(index%2==0)
// {
//     const element = arrayNumbers[index];
//     sum3=sum3 + element;
// }
// console.log(sum3)}


//console.log(`All Even position elemnt ${sum3}`);
// console.log("------------------------------------------------------------------------------");

// const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];


// for (let index = 0; index < arrayNumbers.length; index++) {
//     if(index%2==1)
//     {
//       const element = arrayNumbers[index];
//       console.log(element);
//     }
    
// }


// console.log("-----------Numbers avaible or not -----------");

// console.log(arrayNumbers.includes(115));

// console.log(arrayNumbers.includes(23));

// arrayNumbers.splice(3,0,55,66);
// console.log(arrayNumbers);

// arrayNumbers.splice(4,3);
// console.log(arrayNumbers);


// let sbiBank={

// }

// let axisBank={

// }

// let hdfcBank={

// }

// let yesBank={
  
// }


// class Vechical{
//     constructor(name,color,compeny,price){
//        this. name=name;
//        this. color=color;
//       this. compeny=compeny;
//        this. price=price;
        
//     }
    
// }
// const swiftCar=new Vechical("Swift","White","swift","1000000");
// //console.log(swiftCar);

// const toyataCar=new Vechical("Totaya","Black","Toyata","800000");
// //console.log(toyataCar);

// const array=[swiftCar,toyataCar];
// function traversingObject(value)
// {
//  for (const key in value) 
//   {
//     if (Object.hasOwnProperty.call(value,key)) 
//     {
//         const element = value[key];
//         console.log(`Vechical Details: ${key} ${element}`);
    
//     }
//   }
// }
// traversingObject(swiftCar);

// for (const element of array) {
//   console.log(`${element.name} ${element.color}`);
  
// }                   

// let professer={
//   name: "Prashant Gupta",
//   collageName:"COEP Pune",
//   isMarried: "true",
//   deperment:"COM",

// degress:{
//   engineering:"CSC",
//   PHD:"Advance Computing",
//   MBA:"Markting",
// },
// arrayCertifacte:["Hacker Rank Participation","Cerficate in IFC coure","Certifacte in Adv Computing"],

// show :function(){
//   console.log(`${this.degress.engineering} ${this.degress.PHD} ${this.degress.MBA}`);
// },
// TotalExperiance:"14 Years",
// }
// professer.show();
// console.log(professer.TotalExperiance);
// console.log(professer.degress.MBA="Computer");
// professer.arrayCertifacte.unshift="Orcal Cerfifacate";
// console.log(professer.arrayCertifacte);

// let sbiBank={
//   name:"Sbi Bank",
//   location:"Pune",
//   AccountNumber:789654123,
//   ifscCode:"SBIN456321",

//   show: function(){
//     console.log(`${this.name } ${this.location}     ${this.AccountNumber}     ${this.ifscCode}`)
//   }
// }
// sbiBank.show();

// let axisBank={
//   name:"AXIS Bank",
//   location:"Pune",
//   AccountNumber:789654123,
//   ifscCode:"SBIN456321",

//   show: function(){
//     console.log(`${this.name } ${this.location}     ${this.AccountNumber}     ${this.ifscCode}`)
//   }
// }
// axisBank.show();

// let hdfcBank={
//   name:"HDFC Bank",
//   location:"Pune",
//   AccountNumber:789654123,
//   ifscCode:"SBIN456321",

//   show: function(){
//     console.log(`${this.name } ${this.location}     ${this.AccountNumber}     ${this.ifscCode}`)
//   }
// }
// hdfcBank.show();

// let icicBank={
//   name:"ICIC Bank",
//   location:"Pune",
//   AccountNumber:789654123,
//   ifscCode:"SBIN456321",

//   show: function(){
//     console.log(`${this.name } ${this.location}     ${this.AccountNumber}     ${this.ifscCode}`)
//   }
// }
// icicBank.show();

function Bank(bankName,location ,ifscCode,branchCode){
   this. bankName=bankName,
   this. location=location,
   this. ifscCode=ifscCode,
    this.branchCode=branchCode

    this.showDetails=function(){
        console.log(`${this.bankName},${this.location},${this.ifscCode},${this.branchCode}`);
    }

}

Bank.prototype.openTime="9 AM IST"
Bank.prototype.closeTime="6 PM IST"

const sbiBank=new Bank("SBI Bank","Pune","SBIN456321","456321");
sbiBank.showDetails();
console.log(`Open time of SBI Bank ${sbiBank.openTime} close Time of sbi Bank is${sbiBank.closeTime}`);


const axis=new Bank("axis Bank","Pune","SBIN456321","456321");
axis.showDetails();
console.log(`Open time of AXIS Bank ${axis.openTime} close Time of AXIS Bank is${axis.closeTime}`);


const hdfc=new Bank("HDFC Bank","Pune","SBIN456321","456321");
hdfc.showDetails();


const yes=new Bank("KOTTAK Bank","Pune","SBIN456321","456321");
yes.showDetails();
console.log(`Bank name of yes Bank is ${yes.bankName} Brach code of YES is ${yes.branchCode} Open Time of YES Bank is ${yes.openTime}`);

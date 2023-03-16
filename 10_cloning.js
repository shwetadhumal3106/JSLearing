/*const person=
{
    fullName: "MS Dhoni",
    age : "38",

}

Object.freeze(person);//do no modify

person.city="Ranchi";

const player=person;



let n1=100;
let n2=n1;
console.log(n2);//deep cloning
n1=200;
console.log(n2);


let s1="Hey JS";
let s2=s1;

let b1=true;
let b2=b1;

const person={
    fullName :"Ms Dhoni",
    age:38
}

console.log("Deep clone using spread operator");
const newPlayer = { ...person }; // Deep clone using spread operator
console.log(newPlayer);
newPlayer.age = 42;
console.log(`newPlayer ==> ${newPlayer.fullName} ${newPlayer.age}`);
console.log(`person ==> ${person.fullName} ${person.age}`);*/


console.log("==============================================================================================");

let n1 = 100;// 200
let n2 = n1;  // Deep clone
console.log(n2);// 100
n1 = 200;
console.log(n2);//

let s1 = "Hey JS";
let s2 = s1; // Deep clone

let b1 = true;
let b2 = b1; // Deep clone

const person = {
    fullName: "MS Dhoni",
    age : 38
}
const player = person; // Shallow clone
// player.fullName = "Captain cool Dhoni";
person.age=67;
console.log(player);
console.log(person);

console.log("Deep clone using spread operator");
const newPlayer = { ...person }; // Deep clone using spread operator
console.log(newPlayer);
newPlayer.age = 42;
console.log(`newPlayer ==> ${newPlayer.fullName} ${newPlayer.age}`);
console.log(`person ==> ${person.fullName} ${person.age}`);

const student = {
    fullName: "Virat Kohli",
    age: 33,
    address: {
        showDetails :{
        street: "AS CLUB",
        city: "PUNE",
        PIN: 431202
        }
    }
}
console.log("==================================================================");
console.log(student.address.showDetails.city)//acess the inxted object element
const newStudent = {...student}; // Deep clone using spread operator for nested object
newStudent.fullName = "King Kohli";
newStudent.address.city = "Mumbai";
console.log(`newStudent==> ${newStudent.address.city}`);
console.log(`student==> ${student.address.city}`);

console.log(`newStudent==> ${newStudent.fullName}`);// 
console.log(`student==> ${student.fullName}`);// 

console.log("Deep clone using spread String.json()");
const bank = {
    bankName: "SBI Bank",
    accountNo: 3456789,
    bankAddress: {
        city: "Banglore",
        PIN: 5556677
    }
}
const newBank = JSON.parse(JSON.stringify(bank));
newBank.bankAddress.PIN = 999999;
console.log(`bank==> ${bank.bankAddress.PIN}`);// 
console.log(`newBank==> ${newBank.bankAddress.PIN}`);// 



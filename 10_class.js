//class is the blue print of object
//blue print is class
//object is the instance of class
//with the help of blue print we can design bulding that is class is the blue print and object is (instace)the bulding
//constructer is sepcial method  the use intilization the object
class Bank {
    constructor(bankName, location, account, ifsc, interestRate )//constructer intilization the pbject
    {
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
        showDetails(){
            console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
        }
    

}
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
console.log(sbiBank);
sbiBank.showDetails();//dont log on console so we can create function like this and call

const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
//console.log(axisBank);
axisBank.showDetails()


class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);


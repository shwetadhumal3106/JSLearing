const employee=
{
    empId:124587,
    empName:"Elon Musl",
    empCountry:"US",
    city:"Silicon Vally",
}

//var arrayOfNumbers=[10,20,25,15,40,45,60,40,30,22,26]

for (const key in employee) {
    console.log(key);
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
    }
}
console.log("=========in operter==============");
const isIdAvaiblee="Id"in employee;
console.log(isIdAvaiblee);


const keysEmployee=Object.keys(employee);
console.log(keysEmployee);

const valuesEmployee=Object.values(employee);
console.log(valuesEmployee);

const entriesEmployee=Object.entries(employee);
console.log(entriesEmployee);


//console.log(entriesEmployee[0][0]);
//console.log(entriesEmployee[0][0],console.log(entriesEmployee[0][1]));


const player ={
    name: "virat Koli",
    age:"55",
    totalCenturies:6,
    isMarried:true
}

Object.freeze(player);
player.totalCenturies="120";//Adding new property-not alowed object is freezed
delete player.totalCenturies;//deleting property-not allowed object is freezed
player.fullName="King Kholi"//updating exacting property-not allowed object is freezed

console.table(player);

const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
} 
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN: "QA2345"
}

// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address);




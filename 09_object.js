

// Object literals
let student = {
    firstName: "Prashant",
    lastName: "Deshmukh",
    isWorking: true,
    age: 22,
    collegeName: "ABC",//key ,value
    id: 123456,
              address: {
                         street: "Wakad",
                         city: "Pune",
                         PIN: "431204"
                        },
    school : "Podar School",//key ,value
    friends: ["Bill", "Stew", "Elon"],//array
    show: function() //key as like "show" value as a like "function"
    {
        console.log("I am show() function");
    },
    addressDetails: function() //key as "adressDetails" value as a like "function"
    {
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
 }
};
student.show();//call the function

console.log(student.friends);//add
console.log(typeof student);//typeof element
console.log(student.address .city);//acess the array
console.log(student.address.PIN="457896");//update the value
console.log(student.address);
console.log(student.id);
console.log(student.friends[student.friends.length-1]);//acess the last element in the array
console.log(student.school="abc");//add the propert

student.address.PIN = 431205;
// 431205
console.log(student.address.city);

student.marks = { //this is the add student  we can ascess
    math: 80,
    physics: 60,
    drawing: 70
}
student.school = "ABC";//add
console.log(student.marks);
console.log(student.address.city);
console.log(student);
console.log(typeof student);
/*// . Dot Notation
console.log(student.firstName);
console.log(student.age);
// [] Notation
console.log(student["lastName"]);

// Update property
student.collegeName = "COEP PUNE";

// Add new property city = "Mumbai"
student.city = "Mumbai";
student.country = "India";

// Delete the property
delete student.isWorking;

console.table(student);

//Empty Object
let teacher = { };
// firstName = "Mohit"*/

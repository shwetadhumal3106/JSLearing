console.log("------------step 1 --------------------------------");
const arrayNums=[20,3,4,56,90,400,49];
const newArray=arrayNums;
newArray.push(55,66);
console.log(`Given Array is ${arrayNums} `);
console.log( `Clone array is ${newArray}`);


console.log("-------------step-2 Deep clone using spread operter------------------");
const result=[...arrayNums];
result.push(10,25);
console.log(`Given String ${arrayNums}`);
console.log(`clone Array is ${result}`);

console.log("--------marge these two array using spred operter--------------------");


const arrrayEven=[2,30,14,8];

const concatArray=arrayNums+arrrayEven;
console.log(concatArray);

//const concatArray1=arrayNums.concat(arrrayEven);
//console.log(concatArray1);

const resultMarge=[...arrayNums,...arrrayEven];
console.log(resultMarge);

console.log("--------------Log employee Details on console----------------------");




const employee_info=
{
    emp_id :27,
    emp_Name : "Jone Doe",
    salary :
    {
        July_month :"40,0000INR",
        aug_month :"50,0000INR",
        jun_month :"650000INR"
    },
    address :
    {
        locality :
        {
            colony :"OM Vrindavan Socity",
            street:"Kanch Pokli",

        },
        city :
        {
           city :"Mumbai",
           state :" Maharahtra",
           country :"India",

        },
             mobiles:["+91 8600 3456 88","1000-4567 32","+91-9096 5678 77"]

        
    }
}

console.log("--------------Log employee Details on console----------------------");

    
    console.log(employee_info.address.locality ,employee_info.address.city);
    console.log(employee_info.address.city);
    console.log(employee_info.address.mobiles)

    
    
    console.log("--------------------------------Update Property Deep clone using JSON.Stringty----------------------------------");
    const newmonth = JSON.parse(JSON.stringify(employee_info));
    newmonth.July_month="80k";
    console.log(newmonth);

    const newmonth1 = JSON.parse(JSON.stringify(employee_info.address));
    newmonth1.country="United Kindom";
    console.log(newmonth1);




//instance of class is verify this object present in this class or not
//constructer Function

function Person(fullName,city)
{
    this.fullName=fullName;
    this.city=city;

    this.show=function()
    {
        console.log(`${this.fullName} ${this.city}`);

    } 
}
Person.prototype.country="India";

const dhoni=new Person("MS Dhoni","Ranchi");
dhoni.show();
console.log(dhoni.country);

const mumbai=new Person("Shumbham ","Mumbai");
mumbai.show();
console.log(mumbai.country);

const virat=new Person("Virat Koli","Ranchi");
virat.show();
console.log(virat.country);

const date=new Date();//display live  today date
console.log(date);
console.log(typeof date);

const result=Math.pow(2,3);//square of number
console.log(result);

const array=[1,2,3,4];
array.push(78);
array.pop();
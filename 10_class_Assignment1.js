class Vehical{
   
    constructor(name,color,compeny,Rate,fuletype,Granty)
    {
          this .name = name;
          this. color =color;
          this .compeny= compeny;
          this .Rate = Rate;
          this .fuletype=fuletype;
          
    }

    show()
    {
        console.log(`BankDetails${this.name} ${this.color}${this.compeny}${this.Rate}${this.fuletype}`)
    }
}
    const swift=new Vehical("SwiftDzire","white","swift","127898","diesel");
     console.log(swift);
     
     const luxury=new Vehical("Luxury","Black","luxury","150000","diesel");
     console.log(luxury);

     const Toyota=new Vehical("Toyota Fortuner","Dark black","Toyota","320000","diesel");
     console.log(Toyota);

     const maruti=new Vehical("Maruti Brezza","Red","maruti","140000","diesel");
     console.log(maruti);

     const mahindra=new Vehical("Mahindra Thar","Red Black","Mahindra","160000","deisel");
     console.log(mahindra);
     
     console.log("=======================================Traversing array using for of loop==================================");

    const vehicalDetails=[swift,luxury,Toyota,maruti,mahindra]
     
    for (const element of vehicalDetails) 
    {
       console.log(` Vechials Details : ${element.name},${element.color},${element.compeny},${element.Rate},${element.fuletype}`); 
    }

    console.log("======================================Using for in loop===============================================");

    function traversingObject(object)
    {
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                console.log(`Vehical Details: ${key}${element}`);
                
            }
        }
    }
    traversingObject(swift);
    console.log("---------------------------------------------------------------------");
    traversingObject(luxury);
    console.log("----------------------------------------------------------------------");
    traversingObject(Toyota);
    console.log("-----------------------------------------------------------------------");
    traversingObject(maruti);
    console.log("-----------------------------------------------------------------------");
    traversingObject(mahindra);



     console.log("==========================================================================================================");

     class College{
        constructor(name,city,univercity,id,state)
        {
             this.name =name ;
             this.city=city ;
             this.univercity=univercity;
             this.id=id;
             this.state=state;
        }
     }
 
     const collage1=new College("Bidve Collage","Latur","Dbatu","1921291376","Maharashtra");
     console.log(collage1);

     const collage2=new College("COEP","Pune","Savitribai Phule","211929135","Maharashtra");
     console.log(collage2);

     const collage3=new College("Shingad ","Pune","Shivaji","45698712","Maharashtra");
     console.log(collage3);

     const collage4=new College("JSPM","Mumbai","Pune","41257896","Mahashtra");
     console.log(collage4);

     console.log("=======================================================================================================");

     const collageDetails=[collage1,collage1,collage3,collage4]

     for (const show of collageDetails) 
     {
       {show.name}{show.city}{show.univercity}{show.id}{show.state}
     }

     console.log("=================Traversing object uding for in loop========================================");

     function showDetails(collage)
     {
        for (const key in collage) {
            if (Object.hasOwnProperty.call(collage, key)) {
                const element = collage[key];
                console.log(`Collage Details ${key}${element}`)
            }
        }
     }

     showDetails(collage1);
     console.log("-----------------------------------------------------------------------------------");
     showDetails(collage2);
     console.log("-------------------------------------------------------------------------------------");
     showDetails(collage3);
     console.log("-------------------------------------------------------------------------------------");
     showDetails(collage4);

     console.log("========================================================================================================");

     function primeNumber(value)
     {
        if(value<1)
        {
            return false;               
        }
        for(let index=2; index<value; index=index++)
        {
            if(value%index==0)
            {
                return fasle;
            }
        }
     }

     primeNumber(11);
     console.log("True");
     console.log("false");
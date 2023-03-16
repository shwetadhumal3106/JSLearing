function monthOfYear(monthNumber)
{
  switch (monthNumber)
   {
    case 1:
        console.log(`Month of the Year${monthNumber} Januvary  :`);
        break;

    case 2:
        console.log(`Month of the Year ${monthNumber} february :`) ;
        break;
        
    case 3:
        console.log(`Month of the Year ${monthNumber} March`);
        break;
        
    case 4:
        console.log(`Month of the Year ${monthNumber} April`);  
        break;

    case 5:
        console.log(`Month of the Year ${monthNumber}  May`);
        break;
        
    case 6:
        console.log(`Month of the Year ${monthNumber} June`);
        break;
        
    case 7:
        console.log(`Month of the Year  ${monthNumber} Jully`);
        break;

    case 8:
        console.log(`Month of the Year ${monthNumber} August`);
        break;  
    case 9:
        console.log(`Month of the Year ${monthNumber} September`);
        break;  
    case 10:
        console.log(`Month of the Year ${monthNumber} October`);
        break;    
    case 11:
        console.log(`Month of the Year ${monthNumber} November`);
        break;        
    case 12:
        console.log(`Month of the Year ${monthNumber} December`);
        break;     
    default:
        console.log(`This is invalid ${monthNumber} Month of the Year `);
        break;
  }
}

monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

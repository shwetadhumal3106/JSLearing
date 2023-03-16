function weekDay(month){
    switch (month) {
     case 1:
         console.log(`month of the week is ${month}: `);
         break;
     case 2: 
         console.log(`Day of the week is ${month}: Tuesday`);
         break;
     case 3: 
         console.log(`month of the year is ${month}: Wed`);
         break; 
     case 4:
         console.log(`Day of the week is ${month}: Thursday`);
         break; 
     case 5: 
         console.log(`Day of the week is ${month}: Friday`);
         break;
     case 6:  
         console.log(`Day of the week is ${month}: Saturday`);
         break;
     case 7:
         console.log(`Day of the week is ${month}: Sunday`);
         break;
     case 8:
            console.log(`Day of the week is ${month}: Sunday`);
            break;               
     case 9:          
         console.log(`Day of the week is ${month}: Sunday`);
         break;  
     case 10:
         console.log(`Day of the week is ${month}: Sunday`);
         break;  
    case 11:
         console.log(`Day of the week is ${month}: Sunday`);
         break; 
     case 12:
            console.log(`Day of the week is ${month}: Sunday`);
            break;              
     default:
         console.log(`Invalid day : ${month}`);
         break;
    }
    console.log(`End of Switch case for ${month}`);
 
 }
 weekDay(3); // 1 to 7, invalid
 weekDay(7); 
 weekDay(0); 
 weekDay(-2); 
 weekDay(100); 
 weekDay(null);
 weekDay(undefined);
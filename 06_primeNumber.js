function isPrime(num)
{
    for (let index = 2; index < num; index++) {
        if(num%index==0)
        {
            return false;
        }
        return true;
        
    }
}
console.log(`Is 7 Prime number:${isPrime(7)?"Yes":"No"}`);
console.log(`Is 11 Prime number:${isPrime(11)?"Yes":"No"}`);
console.log(`Is 2 Prime number:${isPrime(2)?"Yes":"No"}`);
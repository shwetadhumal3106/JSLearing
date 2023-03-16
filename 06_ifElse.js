function maleMarrageEligibality(gender ,age,boyname)
{
    if(gender="Male"&& age>=21){
        var ytr=`Hey ${boyname} your are eligible for Marrage`;
        return ytr;       
    }
    else{
        var ytr=`Hey ${boyname} your are  not eligible for Marrage`;
        return ytr; 
    }

}
var result=maleMarrageEligibality("male",25,"Billagtes");
console.log(result)

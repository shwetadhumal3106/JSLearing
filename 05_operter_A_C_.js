
console.log("------------------------------------------------------------------------------------------------------")

function elibileTCS(gradScore,hscScore,sscScore,candidateName)
{
 
    var result=(gradScore>=70 || hscScore>=80 || sscScore>=90) ?`${candidateName} Youe are elibile for TCS interview`:`${candidateName} Your are not eligible for TCS interview`;
    console.log(result);
    
}

elibileTCS(80,86,90,"shweta");
elibileTCS(70,65,55,"Gauri");
elibileTCS(60,79,88,"piya");

console.log("------------------------------------------------------------------------------------------------------")
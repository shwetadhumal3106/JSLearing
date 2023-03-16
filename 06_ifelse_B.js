function tcsInterviewEligibality(grandScore,hscScore,sscScore,candidateName)
{
    if(grandScore>=70 || hscScore>=80 || sscScore>=90)
    {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);

    }
    else
    {
        console.log(`Unforchnuality ${candidateName} you are not eligible for TCS interview`);
    }
}
tcsInterviewEligibality(80,86,90,"Piya");
tcsInterviewEligibality(70,65,55,"Riya");
tcsInterviewEligibality(60,79,88,"Shree");
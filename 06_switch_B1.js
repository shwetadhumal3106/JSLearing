var cheak_leap_year=function(leap_year)
{
    if(leap_year==null || typeof leap_year!= "number" || leap_year==undefined)
    {
        console.log(`${leap_year}: is NOt leap year,Enter avalid year:`);
    }
    else if(leap_year%4==0 && leap_year%100!=0 || leap_year%400==0)
    {
        console.log(`${leap_year} is leap year`);
    }
    else
    {
        console.log(`${leap_year}:This is not leap year`);
    }
  
}

var year=cheak_leap_year(2020);
var year=cheak_leap_year(1999);
var year=cheak_leap_year(1600);
var year=cheak_leap_year(2022);
var year=cheak_leap_year(1945);
var year=cheak_leap_year(null);
var year=cheak_leap_year("Twenty Twenty");
var year=cheak_leap_year(undefined);
var year=cheak_leap_year(NaN);
var year=cheak_leap_year(17100);


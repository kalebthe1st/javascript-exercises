const leapYears = function(num) {
    year = num
    return ((year%4==0) &&(!(year % 100==0)) || (year%400 == 0))
        
    

};

// Do not edit below this line
module.exports = leapYears;

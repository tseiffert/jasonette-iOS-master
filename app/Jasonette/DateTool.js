/*! Date Tool */

(function() {
  GetDays = function(D,M,H,Min) {
    // for interpretaion of names, not using a specific library
    const MON =['Jan','Feb','März','Apr','Mai','Juni','Juli','Aug','Sep','Okt','Nov','Dez'];
    const WD = ['So','Mo','Di','Mi','Do','Fr','Sa'];
 
    // this is reference, take care about index of month
    today = ((new Date()));
    year = today.getFullYear();  // 2020
    month = today.getMonth();    // 0..11
    date = today.getDate();      // 1..31
 
    // this is the dand over date, assuming the same year
    dategiven = ((new Date(year,M-1,D,H,Min,0)));
    // verification test code
    //year = dategiven.getFullYear();  // 2020
    date = dategiven.getDate();      // 1..31
    month = dategiven.getMonth();    // 0..11
 
    // calc the difference of given to today in unit days
    difference = (dategiven-today)/1000/60/60/24;
 
    // pretty writing
    const dayIndex = dategiven.getDay();     // 0
    const dayName = WD[dayIndex];            // So
    const monName = MON[month];              // Jan
 
    const formatted = `${dayName} ${date}.${monName}`
    return formatted;
  };
 
  GetColour = function(D,M,H,Min) {
    // this is reference, take care about index of month
    today = ((new Date()));
    year = today.getFullYear();  // 2020
 
    // this is the dand over date, assuming the same year
    dategiven = ((new Date(year,M-1,D,H,Min,0)));

    // calc the difference of given to today in unit days
    difference = (dategiven-today)/1000/60/60/24;
 
     if (dategiven < today) {
        // passed days already
        //format = "#rgb(87, 148, 202)"; NAK Blue
        format = "#rgb(182, 195, 207)";
     }else {
        // future
        format = "#000000";
     }
    return format;
  };
 
 
  GetHours = function(H,M) {
    hour = ("00" + H).substr(-2)
    minuts = ("00" + M).substr(-2)
 
    const formatted = `${hour}:${minuts}`
    return formatted;
  };
 
 
}.call(this));

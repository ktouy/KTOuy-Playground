function diff_weeks(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));
}

var dt1 = new Date();
var dt2 = new Date("September 21, 2010 11:13:00");
//console.log("Weeks between " + dt1 + dt2 + " " + diff_weeks(dt2, dt1));


// Returns the ISO week of the date.
Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 -
        3 + (week1.getDay() + 6) % 7) / 7);
}

// Returns the four-digit year corresponding to the ISO week of the date.
Date.prototype.getWeekYear = function () {
    var date = new Date(this.getTime());
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    return date.getFullYear();
}

//console.log("Week " + dt1 + dt1.getWeek());
//console.log("Week " + dt1 + dt1.getWeekYear());
//console.log("Week " + dt1 + dt2.getWeek());
//console.log("Week " + dt1 + dt2.getWeekYear());

//var wkdf;
//
//console.log("Difference in Weeks " + wkdf);



function t1() {
    var dt1 = new Date();
    var dt2 = new Date("September 21, 2010 11:13:00");
    var wkdf;
    wkdf = parseInt(dt1.getWeek() - dt2.getWeek());
    console.log("Difference in Weeks " + wkdf);
    console.log("-------------------------")
    console.log(dt1 + " Week of the year - " + dt1.getWeek());
//    console.log(dt1 + " Week - " + dt1.getWeekYear());
    console.log(dt1 + " Week of the year - " + dt2.getWeek());
//    console.log(dt1 + " Week - " + dt2.getWeekYear());


    function gw(){
        var wk = document.getElementById("wk");
        var dy = document.getElementById("dy");

        wk.innerHTML = wkdf;
        dy.innerHTML = wkdf*7

        console.log("wk"+wk.innerHTML)
        console.log("dy"+dy.innerHTML)
        }
gw();
}

t1();

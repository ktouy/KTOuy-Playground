// -----------------------------------------------------------------------------------------------------------
// Calculate Weeks
let dt1 = new Date();
let dt2 = new Date("September 21, 2019 11:13:00");
var wkdf;

//Calculate day of the year
function dayofyear(d) { // d is a Date object
    var yn = d.getFullYear();
    var mn = d.getMonth();
    var dn = d.getDate();
    var d1 = new Date(yn, 0, 1, 12, 0, 0); // noon on Jan. 1
    var d2 = new Date(yn, mn, dn, 12, 0, 0); // noon on input date
    var ddiff = Math.round((d2 - d1) / 864e5);
    return ddiff + 1;
}

function diff_weeks(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));
}

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

function t1() {
    console.log("-------------------------");
    wkdf = parseInt(dt1.getWeek() - dt2.getWeek());
    console.log("Difference in Weeks " + wkdf);
    console.log("-------------------------");
    console.log(dt1 + " Week of the year - " + dt1.getWeek());
    //    console.log(dt1 + " Week - " + dt1.getWeekYear());
    console.log(dt2 + " Week of the year - " + dt2.getWeek());
    //    console.log(dt1 + " Week - " + dt2.getWeekYear());
    console.log("-------------------------");

    function dtn() {
        var dtn1 = document.getElementById('date').value;
        //extract date

        var arr = dtn1.split("-");
        var dntyear = arr[0];
        var dntmonth = arr[1];
        var dntday = arr[2];

        var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
        var month_index = parseInt(arr[1], 10) - 1;
        console.log("The selected month is " + months[month_index]);
        console.log(arr)
        var extracted1 = months[month_index] + " " + dntday + ", " + dntyear + " 00:00:00";
        var dtx = new Date(extracted1);
        dt1 = dtx;
        dtn1 = dtx;
        console.log("dtn1 ");


        //return invalid date
    }

    function gw() {
        wk = document.getElementById("wk");
        dy = document.getElementById("dy");

        wk.innerHTML = wkdf;
        dy.innerHTML = dayofyear(dt1) - dayofyear(dt2); // no calcula bien

        console.log("-------------------------");
        console.log("wk" + wk.innerHTML);
        console.log("dy" + dy.innerHTML);
        console.log("-------------------------");
    }
    gw();
    dtn();
}
//t1();

function getWeeksStartAndEndInMonth(month, year, start) {
    let weeks = [],
        firstDate = new Date(year, month, 1),
        lastDate = new Date(year, month + 1, 0),
        numDays = lastDate.getDate();

    start = 1;
    let end = 7 - firstDate.getDay();
    if (start === 'monday') {
        if (firstDate.getDay() === 0) {
            end = 1;
        } else {
            end = 7 - firstDate.getDay() + 1;
        }
    }
    while (start <= numDays) {
        weeks.push({
            start: start,
            end: end
        });
        start = end + 1;
        end = end + 7;
        end = start === 1 && end === 8 ? 1 : end;
        if (end > numDays) {
            end = numDays;
        }
    }
    return weeks;
}

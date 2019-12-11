var nt;
var nm;
var ss;
var rs;
var hs;
var ms;
var tl;
var ml;
var ct;
var cm;
var cs;

function n(n) {
    return n > 10 ? "" + n : "0" + n;
}

function d(d) {
    return parseInt(d);
}

function m(m) {
    return ("0" + m).slice(-2);
}

function timet() {
    var rh = document.getElementById("rh1");
    var rm = document.getElementById("rm1");

    var output1 = document.getElementById("slider1");
    var output2 = document.getElementById("slider2");
    output1.innerHTML = rh.valueAsNumber;
    output2.innerHTML = rm.valueAsNumber;

    var rh1 = rh.valueAsNumber;
    let rh2 = rm.valueAsNumber;

    rh.oninput = function () {
        output1.innerHTML = this.value;
        console.log(rh.value);
    };
    rm.oninput = function () {
        output2.innerHTML = this.value;
        console.log(rm.value);
    };

    var t = document.getElementById("time").value;
    nt = parseInt(t.substr(0, 2));
    nm = parseInt(t.substr(3, 5));
//    console.log("Time in - " + nt + ":" + n(nm));
    nt = nt + rh1; //8
    nm = nm + rh2; //45
    //console.log(d(rh1)+"rh");

    if (nm > 59) {
        nt = nt + 1;
        nm = 60 - nm;
        nm = m(Math.abs(nm));
    } else {
        nm = m(nm);
    }

    if (nt === 24) {
        nt = m(0).substr(0, 1);

    } else if (nt > 24) {
        nt = Math.abs(nt - 24);
    }

    nt = m(nt);
    rs = nt + ":" + m(nm);

    document.getElementById("hs").innerHTML = rs;
//    console.log("Time out - " + rs);

}

function timeLeft() {
    var dT = new Date();
    ct = parseInt(nt - dT.getHours());
    cm = parseInt(nm - dT.getMinutes());
    ss = new Date().getSeconds();
    ss = 59 - ss;
    //console.log(n(ct) + ":" + n(Math.abs(cm)) + ":" + n(ss));
    document.getElementById("hs1").innerHTML = m(dT.getHours()) + ":" + m(dT.getMinutes());
}


// time left

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(ss);
    var minutes = Math.floor(cm);
    var hours = Math.floor(ct);
    // var days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (minutes < 0) {
        hours = hours - 1;
        minutes = parseInt(59 + minutes);
        // console.log("aca" + minutes)
    } else {
        minutes = minutes;
    }

    return {
        'total': t,
        // 'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    // var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        // daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        timet();
        timeLeft();
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock,
        1000);
}
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);



// Calculate Weeks

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
    console.log("-------------------------");
    console.log(dt1 + " Week of the year - " + dt1.getWeek());
    //    console.log(dt1 + " Week - " + dt1.getWeekYear());
    console.log(dt1 + " Week of the year - " + dt2.getWeek());
    //    console.log(dt1 + " Week - " + dt2.getWeekYear());


    function gw() {
        var wk = document.getElementById("wk");
        var dy = document.getElementById("dy");

        wk.innerHTML = wkdf;
        dy.innerHTML = wkdf * 7;

        console.log("wk" + wk.innerHTML);
        console.log("dy" + dy.innerHTML);
    }
    gw();
}
//t1();

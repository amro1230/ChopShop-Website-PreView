// Truck Timer
function trucktimer() {
    var getNextDay = function (dayName) {

        // The current day
        var date = new Date();
        var now = date.getDay();

        // Days of the week
        var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

        // The index for the day you want
        var day = days.indexOf(dayName.toLowerCase());

        // Find the difference between the current day and the one you want
        // If it's the same day as today (or a negative number), jump to the next week
        var diff = day - now;
        diff = diff < 1 ? 7 + diff : diff;

        // Get the timestamp for the desired day
        var nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

        // Get the next day
        return new Date(nextDayTimestamp);

    };

    var date_now = new Date();
    if (date_now.getDay() == 2) {

        // Set the date we're counting down to
        var countDownDate = date_now.setHours(19, 30, 00);
        // var countDownDate = new Date("dec 20, 2022 19:30:").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);

            // Output the result in an element with id="demo"
            document.getElementById("trucktimertext").innerHTML = days + " " + hours + " "
                + minutes + " " + seconds + " ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("trucktimertext").innerHTML = "LIVE";
                document.getElementById("trucktimertext").style.color = "green"
            }
        }, 1000);

    }

    else {
        // Set the date we're counting down to
        var countDownDate = getNextDay('tuesday').setHours(19, 30, 00);
        // var countDownDate = new Date("dec 20, 2022 19:30:").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);

            // Output the result in an element with id="demo"
            document.getElementById("trucktimertext").innerHTML = days + " " + hours + " "
                + minutes + " " + seconds + " ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("trucktimertext").innerHTML = "LIVE";
            }
        }, 1000);
    }
}


// Next Gen Timer

function nextgentimer() {
    var getNextDay = function (dayName) {

        // The current day
        var date = new Date();
        var now = date.getDay();

        // Days of the week
        var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

        // The index for the day you want
        var day = days.indexOf(dayName.toLowerCase());

        // Find the difference between the current day and the one you want
        // If it's the same day as today (or a negative number), jump to the next week
        var diff = day - now;
        diff = diff < 1 ? 7 + diff : diff;

        // Get the timestamp for the desired day
        var nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

        // Get the next day
        return new Date(nextDayTimestamp);

    };

    var date_now = new Date();
    if (date_now.getDay() == 5) {
        // Set the date we're counting down to
        var countDownDate = date_now.setHours(19, 30, 00);
        // var countDownDate = new Date("dec 20, 2022 19:30:").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);

            // Output the result in an element with id="demo"
            document.getElementById("nextgentimertext").innerHTML = days + " " + hours + " "
                + minutes + " " + seconds + " ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("nextgentimertext").innerHTML = "LIVE";
                document.getElementById("nextgentimertext").style.color = "#9e000d";
                document.getElementById("hidetimetext").style.opacity = "0%";
            }
        }, 1000);
    }

    else {

        // Set the date we're counting down to
        var countDownDate = getNextDay('friday').setHours(19, 30, 00);
        // var countDownDate = new Date("dec 20, 2022 19:30:").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);

            // Output the result in an element with id="demo"
            document.getElementById("nextgentimertext").innerHTML = days + " " + hours + " "
                + minutes + " " + seconds + " ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("nextgentimertext").innerHTML = "LIVE";
                document.getElementById("nextgentimertext").style.color = "#9e000d";
                document.getElementById("hidetimetext").style.opacity = "0%";
            }
        }, 1000);
    }
}


// Xfinity Timer

function xfinitytimer() {
    var getNextDay = function (dayName) {

        // The current day
        var date = new Date();
        var now = date.getDay();

        // Days of the week
        var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

        // The index for the day you want
        var day = days.indexOf(dayName.toLowerCase());

        // Find the difference between the current day and the one you want
        // If it's the same day as today (or a negative number), jump to the next week
        var diff = day - now;
        diff = diff < 1 ? 7 + diff : diff;

        // Get the timestamp for the desired day
        var nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

        // Get the next day
        return new Date(nextDayTimestamp);

    };

    var date_now = new Date();
    if (date_now.getDay() == 0) {
        // Set the date we're counting down to
        var countDownDate = date_now.setHours(12, 00, 00);
        // var countDownDate = new Date("dec 20, 2022 19:30:").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);


            // Output the result in an element with id="demo"
            document.getElementById("xfinitytimertext").innerHTML = days + " " + hours + " "
                + minutes + " " + seconds + " ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("xfinitytimertext").innerHTML = "LIVE";
                document.getElementById("xfinitytimertext").style.color = "#9e000d";
                document.getElementById("hidetimetext").style.opacity = "0%";
            }
        }, 1000);
    }

    else {
        // Set the date we're counting down to
        var countDownDate = getNextDay('sunday').setHours(12, 00, 00);
        // var countDownDate = new Date("dec 20, 2022 19:30:").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);


            // Output the result in an element with id="demo"
            document.getElementById("xfinitytimertext").innerHTML = days + " " + hours + " "
                + minutes + " " + seconds + " ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("nextgentimertext").style.color = "#9e000d";
                document.getElementById("hidetimetext").style.opacity = "0%";
            }
        }, 1000);

    }
}

function xfinitybutton() {
    document.getElementById("hidetimetext").style.opacity = "100%";
    var xfinity_toshow = document.getElementById("xfinitytimertext")
    var nextgen_tohide = document.getElementById("nextgentimertext");
    var truck_tohide = document.getElementById("trucktimertext");

    if (nextgen_tohide.style.display != "none") {
        nextgen_tohide.style.display = "none";

    }
    if (truck_tohide.style.display != "none") {
        truck_tohide.style.display = "none";

    }
    if (xfinity_toshow.style.display == "none") {
        xfinity_toshow.style.display = "block";

    }


    document.getElementById("truckpicbutton").style.opacity = "30%";
    document.getElementById("nextgenpicbutton").style.opacity = "30%";
    document.getElementById("xfinitypicbutton").style.opacity = "100%";
    xfinitytimer();
}

function nextgenbutton() {
    document.getElementById("hidetimetext").style.opacity = "100%";
    var nextgen_toshow = document.getElementById("nextgentimertext")
    var xfinity_tohide = document.getElementById("xfinitytimertext");
    var truck_tohide = document.getElementById("trucktimertext");

    if (xfinity_tohide.style.display != "none") {
        xfinity_tohide.style.display = "none";

    }
    if (truck_tohide.style.display != "none") {
        truck_tohide.style.display = "none";

    }
    if (nextgen_toshow.style.display == "none") {
        nextgen_toshow.style.display = "block";

    }
    document.getElementById("truckpicbutton").style.opacity = "30%";
    document.getElementById("xfinitypicbutton").style.opacity = "30%";
    document.getElementById("nextgenpicbutton").style.opacity = "100%";
    nextgentimer();
}

function truckbutton() {
    document.getElementById("hidetimetext").style.opacity = "100%";
    var truck_toshow = document.getElementById("trucktimertext")
    var xfinity_tohide = document.getElementById("xfinitytimertext");
    var nextgen_tohide = document.getElementById("nextgentimertext");

    if (xfinity_tohide.style.display != "none") {
        xfinity_tohide.style.display = "none";

    }
    if (nextgen_tohide.style.display != "none") {
        nextgen_tohide.style.display = "none";

    }
    if (truck_toshow.style.display == "none") {
        truck_toshow.style.display = "block";

    }
    document.getElementById("nextgenpicbutton").style.opacity = "30%";
    document.getElementById("xfinitypicbutton").style.opacity = "30%";
    document.getElementById("truckpicbutton").style.opacity = "100%";
    trucktimer();
}
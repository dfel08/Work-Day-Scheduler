//Create a variable to store current time
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//Append that variable to the main tag in HTML
$(".currentDay").append("<h3>" + now + "</h3>");
//In moment.js, use isBefore function to set calendar hour to gray
function hour9 () {
    var currentTime = moment().format("HH");
    if (currentTime < "09") {
        $("#9am").css("backgroundColor", "lime");
    } else if (currentTime === "09") {
        $("#9am").css("backgroundColor", "lightgray");
    } else if (currentTime > "09") {
        $("#9am").css("backgroundColor", "red");
    }      
};

function hour10 () {
    var currentTime = moment().format("HH");
    if (currentTime < "10") {
        $("#10am").css("backgroundColor", "lime");
    } else if (currentTime === "10") {
        $("#10am").css("backgroundColor", "lightgray");
    } else {
        $("#10am").css("backgroundColor", "red");
    }      
};

function hour11 () {
    var currentTime = moment().format("HH");
    if (currentTime < "11") {
        $("#11am").css("backgroundColor", "lime");
    } else if (currentTime === "11") {
        $("#11am").css("backgroundColor", "lightgray");
    } else {
        $("#11am").css("backgroundColor", "red");
    }      
};

function hour12 () {
    var currentTime = moment().format("HH");
    if (currentTime < "12") {
        $("#12pm").css("backgroundColor", "lime");
    } else if (currentTime === "12") {
        $("#12pm").css("backgroundColor", "lightgray");
    } else {
        $("#12pm").css("backgroundColor", "red");
    }      
};

function hour13 () {
    var currentTime = moment().format("HH");
    if (currentTime < "13") {
        $("#1pm").css("backgroundColor", "lime");
    } else if (currentTime === "13") {
        $("#1pm").css("backgroundColor", "lightgray");
    } else {
        $("#1pm").css("backgroundColor", "red");
    }      
};

function hour14 () {
    var currentTime = moment().format("HH");
    if (currentTime < "14") {
        $("#2pm").css("backgroundColor", "lime");
    } else if (currentTime === "14") {
        $("#2pm").css("backgroundColor", "lightgray");
    } else {
        $("#2pm").css("backgroundColor", "red");
    }      
};

function hour15 () {
    var currentTime = moment().format("HH");
    if (currentTime < "15") {
        $("#3pm").css("backgroundColor", "lime");
    } else if (currentTime === "15") {
        $("#3pm").css("backgroundColor", "lightgray");
    } else {
        $("#3pm").css("backgroundColor", "red");
    }      
};

function hour16 () {
    var currentTime = moment().format("HH");
    if (currentTime < "16") {
        $("#4pm").css("backgroundColor", "lime");
    } else if (currentTime === "16") {
        $("#4pm").css("backgroundColor", "lightgray");
    } else {
        $("#4pm").css("backgroundColor", "red");
    }      
};

$('.save').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
    });
});

function readVal() {
    var nineAm = localStorage.getItem("9am");
    tenAm = localStorage.getItem("10am");
    elevenAm = localStorage.getItem("11am");
    twelvePm = localStorage.getItem("12pm");
    onePm = localStorage.getItem("1pm");
    twoPm = localStorage.getItem("2pm");
    threePm = localStorage.getItem("3pm");
    fourPm = localStorage.getItem("4pm");
    $("#9am").val(nineAm);
    $("#10am").val(tenAm);
    $("#11am").val(elevenAm);
    $("#12pm").val(twelvePm);
    $("#1pm").val(onePm);
    $("#2pm").val(twoPm);
    $("#3pm").val(threePm);
    $("#4pm").val(fourPm);
}

hour9();
hour10();
hour11();
hour12();
hour13();
hour14();
hour15();
hour16();
readVal();
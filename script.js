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
    } else if (currentTime = "11") {
        $("#11am").css("backgroundColor", "lightgray");
    } else {
        $("#11am").css("backgroundColor", "red");
    }      
};

function hour12 () {
    var currentTime = moment().format("HH");
    if (currentTime < "12") {
        $("#12pm").css("backgroundColor", "lime");
    } else if (currentTime = "12") {
        $("#12pm").css("backgroundColor", "lightgray");
    } else {
        $("#12pm").css("backgroundColor", "red");
    }      
};

function hour13 () {
    var currentTime = moment().format("HH");
    if (currentTime < "13") {
        $("#1pm").css("backgroundColor", "lime");
    } else if (currentTime = "13") {
        $("#1pm").css("backgroundColor", "lightgray");
    } else {
        $("#1pm").css("backgroundColor", "red");
    }      
};

function hour14 () {
    var currentTime = moment().format("HH");
    if (currentTime < "14") {
        $("#2pm").css("backgroundColor", "lime");
    } else if (currentTime = "14") {
        $("#2pm").css("backgroundColor", "lightgray");
    } else {
        $("#2pm").css("backgroundColor", "red");
    }      
};

function hour15 () {
    var currentTime = moment().format("HH");
    if (currentTime < "15") {
        $("#3pm").css("backgroundColor", "lime");
    } else if (currentTime = "15") {
        $("#3pm").css("backgroundColor", "lightgray");
    } else {
        $("#3pm").css("backgroundColor", "red");
    }      
};

function hour16 () {
    var currentTime = moment().format("HH");
    if (currentTime < "16") {
        $("#4pm").css("backgroundColor", "lime");
    } else if (currentTime = "16") {
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
    var nineAm = localStorage.getItem("9am")
    $("#9am").val(nineAm)
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
//Create a variable to store current time
var now = moment().toDate();
//Append that variable to the main tag in HTML
$(".currentDay").append("<h3>" + now + "</h3>");
//In moment.js, use isBefore function to set calendar hour to gray
function before7() {
    var isItWorking = moment(now).isBefore("2020-03-25 20:00:00");
    console.log(isItWorking);
}

before7();
//refresh the date daily
//Use isSame function to set hour to red
//isAfter to set to green

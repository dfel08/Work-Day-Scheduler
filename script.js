//Create a variable to store current time
var now = moment().toDate();
//Append that variable to the main tag in HTML
$(".currentDay").append("<h3>" + now + "</h3>");
//In moment.js, use isBefore function to set calendar hour to gray
function before7() {
    moment().isBefore("T19:00:00");
    console.log(Boolean);
}

before7();

//Use isSame function to set hour to red
//isAfter to set to green

//Create a variable to store current time
var now = moment().toDate();
//Append that variable to the main tag in HTML
$(".currentTime").append("<h1>" + now + "</h1>");
//In moment.js, use isBefore function to set calendar hour to gray
//Use isSame function to set hour to red
//isAfter to set to green

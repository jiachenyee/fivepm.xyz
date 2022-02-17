var fivePMText = document.getElementById("6pm");

var date = new Date()

fivePMText.innerText = date.getHours() == 18 ? "yes" : "no"
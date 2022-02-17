var fivePMText = document.getElementById("5pm");

var date = new Date()

fivePMText.innerText = date.getHours() == 17 ? "yes" : "no"
var fivePMText = document.getElementById("5pm");

setTimeout(function () {
	var date = new Date()

	fivePMText.innerText = date.getHours() == 17 ? "yes" : "no"
}, 30000)
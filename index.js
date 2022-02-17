var fivePMText = document.getElementById("5pm");

setTimeout(function () {
	var date = new Date()

	fivePMTex3.innerText = date.getHours() == 17 ? "yes" : "no"
}, 30000)
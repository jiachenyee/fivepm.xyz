var fivePMText = document.getElementById("5pm");

reload();
setTimeout(reload, 30000);

function reload() {
	var date = new Date();

	fivePMText.innerText = date.getHours() == 17 ? "yes" : "no";
}
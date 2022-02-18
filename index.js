var fivePMText = document.getElementById("5pm");
var arBadge = document.getElementById("arbadge");
var now = new Date();
var fivePM = new Date();

if (now.getHours() < 17) {
    fivePM.setHours(17, 0, 0, 0);
} else {
    fivePM.setHours(17, 0, 0, 0);
    fivePM.setDate(now.getDate() + 1);
}

var timeToFivePM = fivePM - now;

reload();
setTimeout(reload, timeToFivePM);

function reload() {
	var date = new Date();

	fivePMText.innerText = date.getHours() == 17 ? "yes" : "no";
    arBadge.href = date.getHours() == 17 ? "assets/yes.reality" : "assets/no.reality";
}

//#-hidden-code
// i learnt this trick from Swift Playgrounds and i believe everything is Playgrounds
// wait if you're reading this comment- oh no
setTimeout(function() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_self');
}, 30000)
//#-end-hidden-code
var fivePMText = document.getElementById("5pm");
var arBadge = document.getElementById("arbadge");
var now = new Date();

var fivePM = new Date();
var sixPM = new Date();

var focusCount = 0;

reload();

function reload() {
	now = new Date();

    if (now.getHours() < 17) {
        fivePM.setHours(17, 0, 0, 0);
    } else {
        fivePM.setHours(17, 0, 0, 0);
        fivePM.setDate(now.getDate() + 1);
    }
	
    if (now.getHours() < 18) {
        sixPM.setHours(18, 0, 0, 0);
    } else {
        sixPM.setHours(18, 0, 0, 0);
        sixPM.setDate(now.getDate() + 1);
    }

    var timeToFivePM = fivePM - now;
	var timeToSixPM = sixPM - now;

    setTimeout(reload, timeToFivePM); //updates at 5pm
    setTimeout(roll, timeToSixPM); //updates at 6pm
	
	fivePMText.innerText = now.getHours() == 17 ? "yes" : "no";
	
	console.log(navigator.userAgent)
	if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
	    arBadge.href = now.getHours() == 17 ? "assets/yes.reality" : "assets/no.reality";	 	
	} else {
		arBadge.style.display = "none"
	}

}

//#-hidden-code
// i learnt this trick from Swift Playgrounds and i believe everything is Playgrounds
// wait if you're reading this comment- oh no
function roll() {
    console.log("5pm is better than 6pm")
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_self');
}
//#-end-hidden-code
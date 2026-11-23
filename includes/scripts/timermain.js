var countDownDate = new Date("Nov 27, 2026 00:00:00").getTime();

var x = setInterval(function() {

	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	var sec = "Seconds";
	var min = "Minutes";
	var hr = "Hours";
	var dy = "Days";
	var isare = "Are";
	
	if (days > 0) {
		
		if (seconds == 1) {
			sec = "Second";
		}
		
		if (minutes == 1) {
			min = "Minute";
		}
		
		if (hours == 1) {
			hr = "Hour";
		}
		
		if (days == 1) {
			dy = "Day";
			isare = "Is";
		}
		
		var timeleft = "There " + isare + " " + days + " " + dy + ", " + hours + " " + hr + ", "
		+ minutes + " " + min + ", & " + seconds + " " + sec + " Until The Release!";
		
	} else if (hours > 0) {
	
		if (seconds == 1) {
			sec = "Second";
		}
		
		if (minutes == 1) {
			min = "Minute";
		}
		
		if (hours == 1) {
			hr = "Hour";
			isare = "Is";
		}
		
		var timeleft = "There " + isare + " " + hours + " " + hr + ", "
		+ minutes + " " + min + ", & " + seconds + " " + sec + " Until The Release!";
		
	} else if (minutes > 0) {
	
		if (seconds == 1) {
			sec = "Second";
		}
		
		if (minutes == 1) {
			min = "Minute";
			isare = "Is";
		}
		
		var timeleft = "There " + isare + " " + minutes + " " + min + " & " + seconds + " " + sec + " Until The Release!";
		
	} else if (seconds > 0) {
	
		if (seconds == 1) {
			sec = "Second";
			isare = "Is";
		}
		
		var timeleft = "There " + isare + " " + seconds + " " + sec + " Until The Release!";
		
	}
	
	
	
	document.getElementById("timer").innerHTML = "<h2>" + timeleft + "</h2>";

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = `<h2>Out Now!</h2>`;
	}
}, 1000);
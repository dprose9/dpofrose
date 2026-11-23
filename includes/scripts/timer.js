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
		
		
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		
		if (hours < 10) {
			hours = "0" + hours;
		}
		
		if (days < 10) {
			days = "0" + days;
		}
		
		var timetitle = "D. P. of Rose | " + days + ":" + hours + ":" + minutes + ":" + seconds
		
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
		
		
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		
		if (hours < 10) {
			hours = "0" + hours;
		}
		
		var timetitle = "D. P. of Rose | " + hours + ":" + minutes + ":" + seconds
		
	} else if (minutes > 0) {
	
		if (seconds == 1) {
			sec = "Second";
		}
		
		if (minutes == 1) {
			min = "Minute";
			isare = "Is";
		}
		
		var timeleft = "There " + isare + " " + minutes + " " + min + " & " + seconds + " " + sec + " Until The Release!";
		
		
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		
		var timetitle = "D. P. of Rose | " + minutes + ":" + seconds
		
	} else if (seconds > 0) {
	
		if (seconds == 1) {
			sec = "Second";
			isare = "Is";
		}
		
		var timeleft = "There " + isare + " " + seconds + " " + sec + " Until The Release!";
		
		
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		
		var timetitle = "D. P. of Rose | " + seconds
	}
	
	
	
	document.getElementById("timer").innerHTML = "<h2>" + timeleft + "</h2>";
	
	document.title = timetitle;

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = 
			`<section class="column">
				<div>
					<h4>
						Tracklist:<br>
						<br>
						01. <button type="button" onclick="trackFunc('01')">The Declaration Of Independence</button><br>
						02. <button type="button" onclick="trackFunc('02')">An Obligatory 60 Seconds Of Silence</button><br>
					</h4>
				</div>
				<div id="trksel">
					<h3>The Declaration Of Independence</h3>
					<h3>
						<button type="button" onclick="listenFunc('01')">Listen</button>
						<button type="button" onclick="creditsFunc('01')">Personel</button>
						<button type="button" onclick="lyricsFunc('01')">Lyrics</button>
					</h3>
					<div id="albinfo">
						<h4>Listen:</h4>
					</div>
				</div>
			</section>`;
		document.title = "D. P. of Rose | David Parker Rose Is The First Person To Sing The Declaration Of Independence";
	}
}, 1000);
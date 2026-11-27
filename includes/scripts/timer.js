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
		document.getElementById("timer").innerHTML = 
			`<section class="column">
				<div>
					<h4>
						Tracklist:<br>
						<br>
						<span class="butt01">01. <button type="button" onclick="trackFunc('01')">The Declaration Of Independence</button></span><br>
						<span class="butt02">02. <button type="button" onclick="trackFunc('02')">An Obligatory 60 Seconds Of Silence</button></span><br>
					</h4>
				</div>
				<div id="trksel"><span style="font-weight: bold; text-align: center; font-size: min(2vw, 1.75em);">Click a song on the left for info!</span></div>
			</section>`;
			
		document.title = "D. P. of Rose | David Parker Rose Is The First Person To Sing The Declaration Of Independence";
		
		document.getElementById("streamlinks").innerHTML =
			`<p style="text-align: center">
				Listen:&nbsp; 
				<!--<span class="socgrnfoot">
					<a href="." target="_blank" rel="noopener noreferrer">
						Spotify
					</a>
				</span> | 
				<span class="socmagfoot">
					<a href="." target="_blank" rel="noopener noreferrer">
						Apple Music
					</a>
				</span> | 
				<span class="socredfoot">
					<a href="." target="_blank" rel="noopener noreferrer">
						YouTube Music
					</a>
				</span> | -->
				<span class="socyelfoot">
					<a href="https://soundcloud.com/d-p-of-rose/sets/david-parker-rose-is-the-first" target="_blank" rel="noopener noreferrer">
						Soundcloud
					</a>
				</span> | 
				<span class="socredfoot">
					<a href="https://www.youtube.com/playlist?list=PLEAulHvlVuMQ" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
				</span> | 
				<span class="socmagfoot">
					<a href="https://audius.co/DPofRose/album/david-parker-rose-is-the-first-person-to-sing-the-declaration-of-independence" target="_blank" rel="noopener noreferrer">
						Audius
					</a>
				</span> | 
				<span class="socyelfoot">
					<a href="https://audiomack.com/dpofrose/album/david-parker-rose-is-the-first-person-to-sing-the-declaration-of-independen-1" target="_blank" rel="noopener noreferrer">
						Audiomack
					</a>
				</span> | 
				<span class="socblufoot">
					<a href="https://dpofrose.bandcamp.com/album/david-parker-rose-is-the-first-person-to-sing-the-declaration-of-independence" target="_blank" rel="noopener noreferrer">
						Bandcamp
					</a>
				</span>
			</p>`;
	}
}, 1000);
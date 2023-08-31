// Requires winjs
//
// Turron Technologies 
// Codename Foghorn
//
// Core applications and launcher.

function apps() {
	appsclose();
	launcherclose();
	newwindow("appmenu", "Applications",`
	<button onclick="about();appsclose()">About System</button>
	<button onclick="settings();appsclose()">Settings</button>
	<button onclick="browser();appsclose()">Browser</button>
	<br>
	<button onclick="furry();appsclose()">Furry</button>
	<button onclick="textarea();appsclose()">TextArea</button>
	<button onclick="calc();appsclose()">Calculator</button>
	`);
}

function appsclose() {
	const element = document.getElementById("appmenu");
	if (element !== null) {
		element.remove();
	}
}

function about() {
	openwindow("About System",`
	<center>
	<img src='logo.png'>
	</center>
	<br>Turron Technologies
	<br>Codename Foghorn Operating System
	<br>Made by Joshua in 2023.
	<br>This project uses <a href="https://github.com/jdan/98.css">98.css</a> and winjs.
		`);
}

function browser() {
	openwindow("Browser",`<input type='text' id=btex` + winid + ` style='width:565'><button onclick="document.getElementById('bframe` + winid + `').src = document.getElementById('btex` + winid + `').value">Go</button><iframe id=bframe` + winid + ` frameBorder='0' src='startpage.html' width=640 height=480></iframe>`,657);
}

function furry() {
	openwindow("Furry","<img src='furry.png'>");
}

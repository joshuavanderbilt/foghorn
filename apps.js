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
	<button onclick="sroot();appsclose()">Browse Server</button>
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

function sroot() {
	iwindow("File Browser","/",640,480);
}

function furry() {
	openwindow("Furry","<img src='furry.png'>");
}

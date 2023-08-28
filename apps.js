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
	`);
}

function appsclose() {
	const element = document.getElementById("appmenu");
	if (element !== null) {
		element.remove();
	}
}

function about() {
	openwindow("About System","<center><img src='logo.png'></center><br>Turron Technologies<br>Codename Foghorn Operating System<br>Made by Joshua in 2023.<br>This project uses 98.css and winjs.");
}

function sroot() {
	iwindow("File Browser","/",640,480);
}

function furry() {
	openwindow("Furry","<img src='furry.png'>");
}

function textrun() {
	var el = document.getElementById('codetext');
	el && eval(el.value);
}
function textarea() {
	openwindow("TextArea","<textarea id='codetext' rows='32' cols='64'></textarea><br><button onclick=\"openwindow('Window',document.getElementById('codetext').value);\">Make Window</button><button onclick=\"textrun();\">Execute JS</button>");
}

// Requires winjs
//
// Turron Technologies
// Codename Foghorn
//
// Make Window with launcher stuff.

function launcherclose() {
        const element = document.getElementById("launcher");
        if (element !== null) {
                element.remove();
        }
}

function run () {
	var el = document.getElementById('wintext');
	el && eval(el.value);
}


function launcher() {
	launcherclose();
	appsclose();
	newwindow("launcher","Launcher",`
	<input type='text' id='wintext' style='width:640px'>
	<button onclick="openwindow('Window',document.getElementById('wintext').value);launcherclose();">Make Window</button>
	<button onclick="run();launcherclose();">Execute JS</button>`);
}

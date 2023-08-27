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


function launcher() {
	launcherclose();
	appsclose();
	newwindow("launcher","Launcher","<input type='text' id='wintext' style='width:640px'><button onclick=\"openwindow('Window',document.getElementById('wintext').value);launcherclose();\">Make Window</button><button onclick=\"iwindow('iFrame',document.getElementById('wintext').value,640,480);launcherclose();\">Make iFrame</button>");
}

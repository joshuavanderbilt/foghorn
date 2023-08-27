// Requires winjs
//
// Turron Technologies
// Codename Foghorn
//
// Make Window with launcher stuff.

function launcher() {
	openwindow("Launcher","<input type='text' id='wintext' style='width:640px'><button onclick=\"openwindow('Window',document.getElementById('wintext').value);\">Make Window</button><button onclick=\"iwindow('iFrame',document.getElementById('wintext').value,640,480);\">Make iFrame</button>");
}

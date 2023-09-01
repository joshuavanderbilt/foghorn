var osname = "Foghorn Operating Environment"
var version = "Unstable Release"

function openpanel() {
	document.body.innerHTML += `
	<div id="panel" style="position:absolute;top:0px;left:0px;width:100%;height:30px;background-color:C0C0C0;background-image:url('panel.png');">
			<div id="panelcontents" style="position:absolute;top:3px;left:3px;width:100%">
                        <button onclick="apps()">Applications</button>
                        <button onclick="launcher()">Launcher</button>
			<button style="position:absolute;right:6px;" onclick="closeall()">Close All</button>
			<span class="status-bar-field" style="position:absolute;right:90px;top:1px;width:64px;height:17px;font-family:'Pixelated MS Sans Serif', Arial;-webkit-font-smoothing:none;font-size:11px;"><center><span style="position:relative;top:3px" id="clock">00:00:00</span></center></span>
			</div>
                        </div>
	`;
}

function oslabel() {
  document.body.innerHTML += `<span style="position:absolute;bottom:10px;right:10px;color:ffffff">` + osname + `<br>` + version + `</span>`
}

function closepanel() {
	const element = document.getElementById("panel");
	if (element !== null) {
		element.remove();
	}
}

function resetpanel() {
	closepanel();
	openpanel();
}

function closeall() {
	document.querySelectorAll('.window').forEach(e => e.remove());
}

// Clock code
function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.getElementById('clock').innerHTML = display;
  setTimeout(displayClock, 1000); 
}
// End of Clock

// Set up the desktop.
window.onload = () => {
	openpanel()
	oslabel()
	restoresettings()
	displayClock()
};

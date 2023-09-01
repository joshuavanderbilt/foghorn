var osname = "Foghorn Operating Environment"
var version = "Unstable Release"

function openpanel() {
	document.body.innerHTML += `
	<div id="panel" class="window" style="position:absolute;top:0px;left:0px;width:640px;height:23px;">
                        <button onclick="apps()">Applications</button>
                        <button onclick="launcher()">Launcher</button>
                        <a href=".."><button>Logoff</button></a>
			<button style="position:absolute;right:4px;" onclick="resetpanel()">Reposition</button>
			<span class="status-bar-field" style="position:absolute;right:90px;top:4px;width:54px;height:16px"><center><span style="position:relative;top:2px" id="clock">00:00:00</span></center></span>
                        </div>
	`;
	// Make panel draggable
	 $( function() {
    		$( ".window" ).draggable();
         } );
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

// Clock code
function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById('clock').innerHTML = (h + ":" + m + ":" + s);
}

setInterval(time,1000);
// End of Clock

// Set up the desktop.
window.onload = () => {
	openpanel()
	oslabel()
	restoresettings()
};

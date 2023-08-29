function settings() {
	openwindow("Settings Manager",`
	<input type="text" id="bgtext" style="width:320">
	<button onclick="changebgcolor(document.getElementById('bgtext').value);">Change Background Color (HEX)</button>
	<button onclick="changebgimage(document.getElementById('bgtext').value);">Change Background Image (URL)</button>
	<button onclick="factoryreset();">Reset To Defaults</button>
	`);
}
function changebgcolor(color) {
	document.cookie = "bgcolor=" + color;
	restoresettings();
}
function changebgimage(image) {
	document.cookie = "bgimage=" + image;
	restoresettings();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function restoresettings() {
	console.log(getCookie("bgimage"));
	console.log(getCookie("bgcolor"));
	if (getCookie("bgimage") == undefined && getCookie("bgcolor") == undefined) {
		document.getElementById("desktop").style = ("background-color:#008080;background-image:url('bg.png');");
		console.log("Cookies are undefined, default values used.");
	} else {
		document.getElementById("desktop").style = ("background-color:" + getCookie("bgcolor") + ";background-image:url('" + getCookie("bgimage") + "')")
		console.log("Cookied are defined, restoring settings...");
	}
}

function factoryreset() {
	document.cookie = "bgimage=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	document.cookie = "bgcolor=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	restoresettings();
}

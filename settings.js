function settings() {
	openwindow("Settings Manager",`
	<input type="text" id="bgtext" style="width:320">
	<button onclick="changebgcolor(document.getElementById('bgtext').value);">Change Background Color (HEX)</button>
	<button onclick="changebgimage(document.getElementById('bgtext').value);">Change Background Image (URL)</button>
	<button onclick="defaultbg();">Use Default Background</button>
	`);
}
function changebgcolor(color) {
	document.getElementById("desktop").style = ("background-color:" + color);
	document.cookie = "bgcolor=" + color
	document.cookie = "bgimage=undefined"
}
function changebgimage(image) {
	document.getElementById("desktop").style = ("background-image:url('" + image + "')");
	document.cookie = "bgimage=" + image
	document.cookie = "bgcolor=undefined"
}
function defaultbg() {
	changebgcolor("008080");
	changebgimage("bg.png");
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function restoresettings() {
	if (getCookie("bgcolor") !== "undefined" ) {
		changebgcolor(getCookie("bgcolor"));
	}
	if (getCookie("bgimage") !== "undefined") {
		changebgimage(getCookie("bgimage"));
	}
	if (getCookie("bgimage") == "undefined" && getCookie("bgcolor") == "undefined") {
		changebgimage("bg.png");
	}
}

function factoryreset() {
	document.cookie = "bgimage=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	document.cookie = "bgcolor=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

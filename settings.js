function settings() {
	openwindow("Settings Manager",`
	<p>Desktop Background</p>
	<input type="text" id="bgtext" style="width:355">
	<br>
	<button onclick="changebgcolor(document.getElementById('bgtext').value);">Change Background Color (HEX)</button>
	<button onclick="changebgimage(document.getElementById('bgtext').value);">Change Background Image (URL)</button>
	<br>
	<button style="background-color:970000;color:ffffff" onclick="changebgcolor('970000');">Red</button>
	<button style="background-color:AF9C00;color:000000"onclick="changebgcolor('AF9C00');">Yellow</button>
	<button style="background-color:108500;color:ffffff"onclick="changebgcolor('108500');">Green</button>
	<button style="background-color:009C6C;color:000000"onclick="changebgcolor('009C6C');">Teal</button>
	<br>
	<button style="background-color:008080;color:000000"onclick="changebgcolor('008080');">Default</button>
	<button style="background-color:008FB5;color:000000"onclick="changebgcolor('008FB5');">Cyan</button>
	<button style="background-color:001DB5;color:ffffff"onclick="changebgcolor('001DB5');">Blue</button>
	<button style="background-color:6100D6;color:ffffff"onclick="changebgcolor('6100D6');">Purple</button>
	<br>
	<button style="background-color:D600CD;color:ffffff"onclick="changebgcolor('D600CD');">Pink</button>
	<button style="background-color:000000;color:ffffff"onclick="changebgcolor('000000');">Black</button>
	<button style="background-color:ffffff;color:000000"onclick="changebgcolor('ffffff');">White</button>
	<br>
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
		document.body.style = ("background-color:#008080;background-image:url('bg.png');");
		console.log("Cookies are undefined, default values used.");
	} else {
		document.body.style = ("background-color:" + getCookie("bgcolor") + ";background-image:url('" + getCookie("bgimage") + "')")
		console.log("Cookies are defined, restoring settings...");
	}
}

function factoryreset() {
	document.cookie = "bgimage=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	document.cookie = "bgcolor=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	restoresettings();
}

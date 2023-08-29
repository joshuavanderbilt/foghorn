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
}
function changebgimage(image) {
	document.getElementById("desktop").style = ("background-image:url('" + image + "')");
}
function defaultbg() {
	document.getElementById("desktop").style = ("background-image:url('bg.png');");
}

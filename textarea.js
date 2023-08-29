function textrun() {
	var el = document.getElementById('codetext');
	el && eval(el.value);
}
function textarea() {
	openwindow("TextArea",`
	<textarea id='codetext' rows='32' cols='64'></textarea>
	<br>
	<button onclick="openwindow('Window',document.getElementById('codetext').value);">Make Window</button>
	<button onclick="textrun();">Execute JS</button>
	<button onclick="save();">Save File</button>
		`);
}

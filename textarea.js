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
	<button onclick="loadurl();">Load From URL</button>
		`);
}

// The function below is based on a StackOverflow answer.
// https://stackoverflow.com/questions/21479107/saving-html5-textarea-contents-to-file
// Answer by A-Sharabiani
function save() {
    var text = document.getElementById("codetext").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = window.prompt("Enter Filename");
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
function loadurl() {
	fetch(window.prompt("Enter URL"))
  	.then(response => response.text())
  	.then(text => { document.getElementById("codetext").value =text;})
}

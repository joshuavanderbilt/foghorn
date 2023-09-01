// Window IDs will start at 0 and increment by 1 when a window is created with openwindow().
var winid = 0;

// Make window with specified id, title, content and width.
function newwindow(id, title, wincontent, width) {
	//Windows will be inserted into the body.
	document.body.innerHTML += `
	<div class='window active' id="` + id + `" style='position:absolute;left:40px;top:40px;width:` + width + `px;'>
		<div class='title-bar'><div class='title-bar-text'>` + title + `</div>
			<div class='title-bar-controls'><button onclick='const element = document.getElementById("` + id + `");element.remove()' aria-label='Close'></button>
		</div>
	</div>
	<div class='window-body'>` + wincontent + `</div>
	</div>`
	//Make window draggable
  $( function() {
    $( ".window" ).draggable();
  } );

}

// Make window with specified title, content, and width. id is chosen automatically via winid variable.
function openwindow(title, wincontent, width) {
	winid += 1;
	newwindow(winid, title, wincontent, width);
}

// Make window with specified title, iframe URL, width, and height.
function iwindow(title, wincontent, width, height) {
        openwindow(title, "<iframe frameBorder='0' src='" + wincontent + "' width=100% height=" + height + "></iframe>", width);
}



function openpanel() {
	var desktop = document.getElementById("desktop");
	desktop.innerHTML += `
	<div id="panel" class="window" style="position:absolute;top:0px;left:0px;width:640px;height:23px;">
                        <button onclick="apps()">Applications</button>
                        <button onclick="launcher()">Launcher</button>
                        <a href=".."><button>Logoff</button></a>
			<button style="position:absolute;right:4px;" onclick="resetpanel()">Reposition</button>
                        </div>
	`;
	// Make panel draggable
	 $( function() {
    		$( ".window" ).draggable();
         } );
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

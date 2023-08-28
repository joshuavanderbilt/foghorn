// Requires winjs
//
// Turron Technologies
// Codename Foghorn
//
// Calculator

function calc() {
	newwindow("calc","Calculator",`
	<input type="text" id="calctext" style="width:320">
	<br>
	<button onclick="calcclear()">C</button><button onclick="calceval()">=</button><button onclick="cins('');">---</button><button onclick="cins('/');">/</button>
	<br>
	<button onclick="cins('7');">7</button><button onclick="cins('8');">8</button><button onclick="cins('9');">9</button><button onclick="cins('*');">*</button>
	<br>
	<button onclick="cins('4');">4</button><button onclick="cins('5');">5</button><button onclick="cins('6');">6</button><button onclick="cins('-');">-</button>
	<br>
	<button onclick="cins('1');">1</button><button onclick="cins('2');">2</button><button onclick="cins('3');">3</button><button onclick="cins('+');">+</button>
	<br>
	<button onclick="cins('');">---</button><button onclick="cins('0');">0</button><button onclick="cins('');">---</button><button onclick="cins('');">---</button>
	`);
}

function calcclear() {
	document.getElementById("calctext").value = "";
}

function calceval() {
	var el = document.getElementById("calctext");
	var answer = el && eval(el.value)
	document.getElementById("calctext").value = answer;
}
function cins(insert) {
	  document.getElementById("calctext").value += insert.toString();
}

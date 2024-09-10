function drawT () {
	'use strict';
	document.write("<style>table, td {border: 1px solid black;padding: 10px;}</style>")
	document.write("<table>");
	for (var i = 1; i <= 10; i++) {
		document.write("<tr>");
		for (var j = 1; j <= 10; j++) {
			document.write("<td>");
			document.write(i * j);
			document.write("</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

function helloW() {
	'use strict';
	var string1 = "Hello ";
	var string2 = "world!";
	alert(string1 + string2);
	var x = 3.14;
	var y = 0xFF;
	alert(x * y);
}

function dayDisplay() {
	'use strict';
	document.write("</p>")
	var n = prompt("Введите число дней")
	document.write("<p>")
	if (n == "1") {
		document.write("Вы ввели: " + n + " день.")
	}
	else if (n == "2" || n == "3" || n == "4") {
		document.write("Вы ввели: " + n + " дня.")
	}
	else {
		document.write("Вы ввели: " + n + " дней.")
	}
	document.write("</p>")
}

function createClass() {
	'use strict';
	this.title = document.title;
	this.url = "url test value";
	this.show = function () { document.write(this.title + "<br>" + this.url + "<br>") };
	return this;
}

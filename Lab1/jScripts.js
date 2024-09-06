/*function func1()
{
    var string1 = "Hello ";
    var string2 = "world!";
    alert(string1 + string2);
    var x = 3.14;
    var y = "FF";
    alert(x * y);
}*/

(function ()
{
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
})()
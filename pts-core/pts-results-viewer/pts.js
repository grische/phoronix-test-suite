function switchShow(i)
{
	if(document.getElementById(i).style.display == "none")
		showObject(i);
	else
		hideObject(i);
}
function hideObject(i)
{
	document.getElementById(i).style.display = "none";
}
function showObject(i)
{
	document.getElementById(i).style.display = "block";
}
function setImagesFromURL()
{
	var html = "";
	var pf = location.href;
	pf = pf.substring(pf.search(/#/) + 1);
	var imgarray = pf.split(",");

	for(i = 0; i < imgarray.length; i++)
	{
		html += "<p align=\"center\"><img src=\"" + imgarray[i] + "\" /></p>";
	}

	document.getElementById("pts_monitor").innerHTML = html;
}

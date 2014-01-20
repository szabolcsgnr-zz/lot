//feltolti a beallitasokat, 

var prefLoaded=false;
function getPref0(){
	if(prefLoaded){return}
	prefLoaded=true;
	var prefContent;
	xmlhttp=null;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    prefContent=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","xhtmlcontents/prefTabla.xhtml",true);
xmlhttp.send();
	
	
	setTimeout(function(){
	document.getElementById("prefPlaceHolder").innerHTML=prefContent;
	},200);
	
}
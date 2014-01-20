// hibajelentes kuldese
function charCountTest(){
	document.getElementById("mailStatusIndicator").innerHTML=document.getElementById("comment").value.length+' karakter, a '
	+'300 karakterből';
	}
function hibajelentes(){
	document.getElementById("problemReport").innerHTML="";

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
    document.getElementById("problemReport").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","xhtmlcontents/hibajelentes.xhtml",true);
xmlhttp.send();

	}
function sendRep(){
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
  if (xmlhttp.readyState<4){
		document.getElementById("mailStatusIndicator").innerHTML="Küldés folyamatban... ("+xmlhttp.readyState+")";
		}  
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	document.getElementById("mailStatusIndicator").innerHTML="Eredmény: "+xmlhttp.responseText+"<br>Ez az ablak 5 másodperc"
	+" múlva bezárul.";
	//setTimeout(removeRepBox(),5000);
	}
    
  }

xmlhttp.open("GET","reportMail.php?sub="+document.getElementById("sub").value+"&ms="+document.getElementById("comment").value+"&from="+document.getElementById("mail").value,true);
xmlhttp.send();
	}
	
function removeRepBox(){
	document.getElementById("problemReport").innerHTML="";
	
	}
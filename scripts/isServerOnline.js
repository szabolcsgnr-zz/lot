//megvizsgalja, hogy elerhető e a mySQL szerver

function checkServer(){
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
		
		}  
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    if(xmlhttp.responseText!="online"){
		document.write("A szerver nem elérhető :( kérlek nézz vissza később");
	}else{
			//elérhető a szerver
			}
	
    }
  }
xmlhttp.open("GET","servercheck.php",true);
xmlhttp.send();
}

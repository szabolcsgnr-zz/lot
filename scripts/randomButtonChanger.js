//lecsereli az ellenorzes gombot randomra, illetve a funkciot atvaltja, es megvalositja
function randBut(){
	if (document.getElementById("randomCheck").checked){
		document.getElementById("ellVrand").innerHTML="Random";
		document.getElementById("ellVrand").onclick=randTips;
		}else{
			document.getElementById("ellVrand").innerHTML="Ellenőrzöm";
			document.getElementById("ellVrand").onclick=check;
		}
	
	}
function randTips(){
var tipps = new Array();
tipps[0]=Math.floor((Math.random()*90)+1);
tipps[1]=Math.floor((Math.random()*90)+1);
tipps[2]=Math.floor((Math.random()*90)+1);
tipps[3]=Math.floor((Math.random()*90)+1);
tipps[4]=Math.floor((Math.random()*90)+1);

var sorted =tipps.sort(function (a,b) {
    return a - b;
});
	for (var i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] == sorted[i]) {
       randTips();
		return;
    }}	
	
	
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
		
		}  
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	var str=xmlhttp.responseText.trim();
    if(str=="true"){
		
		
		clearTips();
		document.getElementById("tipOK").hidden=false;
		document.getElementById("tip0").value=sorted[0];
		document.getElementById("tip1").value=sorted[1];
		document.getElementById("tip2").value=sorted[2];
		document.getElementById("tip3").value=sorted[3];
		document.getElementById("tip4").value=sorted[4];
		
		
	}else if(str=="false"){
		randTips();
		return;
	}else{
	document.getElementById("err").innerHTML="some error accoured";}
    }
	}
	xmlhttp.open("GET","gettip.php?tip0="+sorted[0]+"&tip1="+sorted[1]+"&tip2="+sorted[2]+"&tip3="+sorted[3]+"&tip4="+sorted[4],true);
xmlhttp.send();
	}
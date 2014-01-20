//ellenorzi, hogy a megadott szamok kozott van e ismetlodes,
//es megvizsgalja, hogy szerepel e mar a szamsor a szerveren

function check(){
 var tipps = new Array();
tipps[0]=document.getElementById("tip0").value;
tipps[1]=document.getElementById("tip1").value;
tipps[2]=document.getElementById("tip2").value;
tipps[3]=document.getElementById("tip3").value;
tipps[4]=document.getElementById("tip4").value;
	var sorted =tipps.sort(function (a,b) {
    return a - b;
});
	for (var i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] == sorted[i]) {
        document.getElementById("err").innerHTML="Nem különböznek a megadott számok!";
		toRed();
		return;
    }
}
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
		document.getElementById("tipOK").hidden=false;
		document.getElementById("tipNotOK").hidden=true;
	}else if(str=="false"){
		document.getElementById("tipOK").hidden=true;
		document.getElementById("tipNotOK").hidden=false;
		document.getElementById("err").innerHTML="Ezt a számot már valaki megjátszotta az oldal használói közül";
	}else{
	document.getElementById("err").innerHTML="some error accoured";}
    }
  }
 /*var tipps = new Array();
tipps[0]=document.getElementById("tip0").value;
tipps[1]=document.getElementById("tip1").value;
tipps[2]=document.getElementById("tip2").value;
tipps[3]=document.getElementById("tip3").value;
tipps[4]=document.getElementById("tip4").value;

*/
xmlhttp.open("GET","gettip.php?tip0="+sorted[0]+"&tip1="+sorted[1]+"&tip2="+sorted[2]+"&tip3="+sorted[3]+"&tip4="+sorted[4],true);
xmlhttp.send();
}
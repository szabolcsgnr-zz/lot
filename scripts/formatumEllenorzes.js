//ellenorzi, hogy a megadott szamoknak helyes e a formatuma
//es megvaltoztatja a szammezok szinet es az error tag szoveget
//torli a megadott szamokat

function checkIfNum(str){
	if(str.length==0){
		document.getElementById("err").innerHTML="";
		toGreen();
		return;
		}
	if(isNaN(str)){
		document.getElementById("err").innerHTML="Helytelen számformátumot használtál!";
	toRed();
		return;
		}
	if(parseInt(str)>90){
		document.getElementById("err").innerHTML="Helytelen számformátumot használtál!";
	toRed();
		return;
		}
	if(parseInt(str)<1){
		document.getElementById("err").innerHTML="Helytelen számformátumot használtál!";
	toRed();
		return;
		}	
}
function toRed(){
	document.getElementById("tip0").style.borderColor="red";
	document.getElementById("tip1").style.borderColor="red";
	document.getElementById("tip2").style.borderColor="red";
	document.getElementById("tip3").style.borderColor="red";
	document.getElementById("tip4").style.borderColor="red";
	}
function toGreen(){
	document.getElementById("tipOK").hidden=true;
	document.getElementById("tipNotOK").hidden=true;
	document.getElementById("tip0").style.borderColor="#6b6b6b";
	document.getElementById("tip1").style.borderColor="#6b6b6b";
	document.getElementById("tip2").style.borderColor="#6b6b6b";
	document.getElementById("tip3").style.borderColor="#6b6b6b";
	document.getElementById("tip4").style.borderColor="#6b6b6b";
	document.getElementById("err").innerHTML="";
	}
function clearTips(){
	toGreen();
	document.getElementById("tip0").value="";
	document.getElementById("tip1").value="";
	document.getElementById("tip2").value="";
	document.getElementById("tip3").value="";
	document.getElementById("tip4").value="";
	document.getElementById("tipNotOK").hidden=true;
	document.getElementById("err").innerHTML="";
	}
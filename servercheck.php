<?php

 $con = mysqli_connect('localhost','root','');
 if (!$con)
   {
	echo 'notOnline';
   	die();
  }else{
  
echo 'online';
  }
 
 mysqli_close($con);
?>
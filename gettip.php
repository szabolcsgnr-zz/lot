<?php
$tip0 = intval($_GET['tip0']);
$tip1 = intval($_GET['tip1']);
$tip2 = intval($_GET['tip2']);
$tip3 = intval($_GET['tip3']);
$tip4 = intval($_GET['tip4']);

 
 $con = mysqli_connect('localhost','root','');
 if (!$con)
   {
   die('Could not connect: ' . mysqli_error($con));
  }

mysqli_select_db($con,"hun_five_lotto");
$sql = "SELECT COUNT(`het_03`.`1`)\n"
    . "FROM `het_03`\n"
    . "WHERE ((`het_03`.`1`= ".$tip0.") AND (`het_03`.`2`= ".$tip1.") AND (`het_03`.`3` =".$tip2.") AND (`het_03`.`4`= ".$tip3.") AND (`het_03`.`5` =".$tip4."))\n"
    . "LIMIT 1";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);

$total = $row[0];
if($total<"1"){
	echo 'true';
	}else{
		echo 'false';
		}

 
 mysqli_close($con);
 ?> 
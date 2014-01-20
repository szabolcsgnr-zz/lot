<?php


$to = "szabolcsgnr@gmail.com";
$subject = $_GET['sub'];
$message = $_GET['ms'];
$from = $_GET['from'];
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail elment.";

?>
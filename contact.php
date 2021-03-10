<?php 
if(isset($_POST['submit'])){ //check if something is being sent (isset = function) checks if the button submit is clicked
$name = $_POST ['name']; 
$subject = $_POST ['subject'];
$mailFrom = $_POST ['mail'];
$message = $_POST ['message'];
//data from contact form ^


$mailTo = "gregory_berisha@hotmail.com";
$headers = "From: ".$mailFrom;
$txt = "You have recieved an email from ".$name.".\n\n".$message;

mail($mailTo,$subject,$txt,$headers); //sends the actual email displays it
header("Location: index.php?mailsend");
}


?>



<?php 
$errors = '';
$myemail = 'mebel.libra@gmail.com';//<-----Put Your email address here.

$email_address = $_POST['email']; 
$message = $_POST['message']; 


if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Повідомлення з сайту LibraМеблі";
	$email_body = "Нова форма відправлена.\n";
	"Імейл: $email_address \n Повідомлення: \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Щось трапилось не те... Вибачайте!</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>
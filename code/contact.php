<?php
include('defines.inc.php');
include('geoip.inc.php');
session_start();

if (isset($_POST['email']))
{
    $name    = trim(filterinput($_POST['name']));
    $email   = trim(filterinput($_POST['email']));
	$phone   = trim(filterinput($_POST['phone']));
    $message = trim(filterinput($_POST['message']));

    if      (!$name)              echo 'Please Enter Your Name';
    else if (!$email)             echo 'Please Enter Your Email';
    else if (!checkEmail($email)) echo 'Invalid E-mail Address';
	else if (!$phone)             echo 'Please Enter Phone Number';
    else if (!$message)           echo 'Please Enter Message';
    else
    {
	$county = GetCountryName($_IP);
	$cip    = $_IP.'('.$county.')';
	$content = <<<EOD
User Name: {$name}
Email: {$email}
Phone: {$phone}
Customer IP: $cip

{$message}
EOD;
	unset($_SESSION['capt-validate']);
	$headers = "From: " . strip_tags($email) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
	mail($_CONTACT, "Contact US - NINACDN",  $content, $headers, '-f '.$_CONTACT);
	echo 'OK';
	exit;
    }
}
else
    echo "Invalid Request";

unset($_SESSION['capt-validate']);

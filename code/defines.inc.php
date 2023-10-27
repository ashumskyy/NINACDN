<?php
define ('DEF_FUNCTIONS',  __DIR__.'/../../DBFS/');
define ('DEF_INCLUDES',   __DIR__.'/../../INC/');


$_SENDER  = 'info@ninacdn.com';
$_SUPPORT = 'support@ninacdn.com';
$_CONTACT = 'info@ninacdn.com';
$_IP      = clientIP();

function filterinput($str)
{
    return ($str);
}

function checkEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function clientIP()
{
    if      (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) return $_SERVER["HTTP_CF_CONNECTING_IP"];
    else if (isset($_SERVER["HTTP_X_FORWARDED_FOR"]))  return $_SERVER["HTTP_X_FORWARDED_FOR"];
    else if (isset($_SERVER["HTTP_CLIENT_IP"]))        return $_SERVER["HTTP_CLIENT_IP"];
    else                                               return $_SERVER["REMOTE_ADDR"];
}

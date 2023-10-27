<?php
session_start();
if (!isset($_SESSION['login']))
{
    header('location: index.php');
    exit;
}

include('stream.inc.php');

$ips = json_decode(file_get_contents('code/.cron/ips.json'),true);
if (isset($_POST['addip']))
{
  if ($_POST['ip'])
  {
    if (!is_validip($_POST['ip']))
        $error = "{$_POST['ip']} is a valid IP address/range";
    else if (isset($ips[$_POST['ip']]))
        $error = "{$_POST['ip']} is already added";
    else
    {
        $ips[$_POST['ip']]=time();
        file_put_contents('code/.cron/ips.json',json_encode($ips));
    }
  }
  else
    $error = 'Please enter IP address';
}
elseif (isset($_POST['delip']))
{
    if (isset($ips[$_POST['ip']]))
    {
        unset($ips[$_POST['ip']]);
        file_put_contents('code/.cron/ips.json',json_encode($ips));
    }
}


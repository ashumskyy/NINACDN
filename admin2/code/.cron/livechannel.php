#!/usr/bin/php -q
<?php
chdir(dirname(__FILE__));
require('../db.inc.php');
function cmp($a, $b)
{
    if ($a['table'][5]==$b['table'][5]) return 0;
    return $a['table'][5]>$b['table'][5] ? -1 : 1;
}

$ch = curl_init("http://streaming2.ninacdn.com:800/stats");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
curl_setopt($ch, CURLOPT_USERPWD, 'admin:mag1da1');
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_DIGEST);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$contents = curl_exec($ch);
curl_close($ch);

$xml = simplexml_load_string($contents);
$json = json_decode(json_encode($xml),true);
$apps = isset($json['server']['application'][0]) ? $json['server']['application'][0] : $json['server']['application'];
if (isset($apps['live']))
{
    if (isset($apps['live']['stream'][0]))
        $list = $apps['live']['stream'];
    else
        $list[0] = $apps['live']['stream'];
}
else
    $list = array();

$uptime['uptime']=$json['uptime'];
file_put_contents('./uptime.json',json_encode($uptime));
file_put_contents('./livechannel.json',json_encode($list));


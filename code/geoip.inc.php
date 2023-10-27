<?php
include('/var/www/html/Net_GeoIP/Net/GeoIP.php');
function GetCountryName($ip)
{
    static $gip;
    if (!isset($gip))
	$gip  = Net_GeoIP::getInstance('/usr/share/GeoIP/GeoLiteCity.dat');
    $loc  = $gip->lookupLocation($ip);
    return $loc->countryName;
}

function GetLocation($ip)
{
    static $gip;
    if (!isset($gip))
	$gip  = Net_GeoIP::getInstance('/usr/share/GeoIP/GeoLiteCity.dat');
    return $gip->lookupLocation($ip);
}


<?php
function getstream($p)
{
    if (is_array($p))
        return 'https://streaming1.ninacdn.com/live/'.$p['name'].'/index.m3u8';
    else
        return 'https://streaming1.ninacdn.com/live/'.$p.'/index.m3u8';
}

function getuptime($p)
{
    // 2d 2h 42m 59s
    $d = '';
    $dd = intval($p/86400);
    $hh = intval(($p-$dd*86400)/3600);
    $mm = intval(($p-$dd*86400-$hh*3600)/60);
    $ss = intval($p-$dd*86400-$hh*3600-$mm*60);

    if ($dd) $d .= "{$dd}d ";
    if ($hh) $d .= "{$hh}h ";
    if ($mm) $d .= "{$mm}m ";
    if ($ss) $d .= "{$ss}s ";
    return $d;
}

function is_validip($ip)
{
    if (strpos($ip,'/')===false)
        return filter_var($ip, FILTER_VALIDATE_IP);
    else
    {
        $rng = explode('/',$ip);
        if (filter_var($rng[0], FILTER_VALIDATE_IP))
        {
            return $rng[1]>=0 && $rng[1]<=32;
        }
        else
            return false;
    }

}

$streams = json_decode(file_get_contents(dirname(__FILE__).'/.cron/livechannel.json'),true);
$uptjson = json_decode(file_get_contents(dirname(__FILE__).'/.cron/uptime.json'),true);
$uptime  = getuptime($uptjson['uptime']);

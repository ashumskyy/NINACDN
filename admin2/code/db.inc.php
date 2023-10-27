<?php
function db_connect()
{
    $dbhost = "localhost";
    $dbuser = "mott_site";
    $dbpass = "mott_site";
    $dbname = "mott_site";

    for ($i=0;  $i<5;  $i++)
    {
        $result = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
        if ($result)
            break;
        usleep(5000);
    }

    if (!$result)
        return false;

    return $result;
}


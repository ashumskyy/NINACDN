<?php
session_start();
$Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LfHSKchAAAAALRDuRK536OCstHpBDOlGhRlbMD0&response={$_POST['skey']}");
$Return = json_decode($Response);
if ($Return->success == true && $Return->score > 0.5) {
    $_SESSION['capt-validate']=time();
    echo "OK";
} else {
    echo "ER";
}


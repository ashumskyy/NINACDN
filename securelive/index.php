<?php
session_start();
$_SESSION['loginuser']=time();
include('../admin/code/stream.inc.php');
include('../admin/code/db.inc.php');

include(true ? 'player.inc.php' : 'player-ad.inc.php');

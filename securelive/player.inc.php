<?php
$streamhls=getstream($_GET['id']);
require('fpplayer.php');
getfplayer($streamhls,'hlsQualities: [{level: -1, label: "Auto"},{level: 2, label: "High"},{level: 1, label: "Medium"},{level: 0, label: "Low"}],'.(@$_REQUEST['nofull']?'fullscreen: false, ':''));

<?php
$LICENSE_KEY=getfplic();
function checkautoplay()
{
    $ua=$_SERVER['HTTP_USER_AGENT'];
    if ((preg_match('!Safari/(\S+)(\s|$)!',$ua,$m1)) && (!preg_match('!(Chrome|Chromium|CriOs)!',$ua)))
	if ((preg_match('!Version/(\S+)(\s|$)!',$ua,$m2)) && (floatval($m2[1] >= 11)))
	    return false;
    return true;
}

function getfplic()
{
    $default='$485073922769064';
    return $default;
}


function getdeviceid()
{
    ////////////////////////////////// IPHONE
    if(preg_match('/ipod/i',strtolower($_SERVER['HTTP_USER_AGENT']))){
        return "iphone";
    }

    ////////////////////////////////// WINDOWS CE
    if(stristr($_SERVER['HTTP_USER_AGENT'],'DROIDX')){
        return "windows";
    }
                    
    ////////////////////////////////// 3GP
    $mobile_browser = 0;
    if(preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap)/i',strtolower($_SERVER['HTTP_USER_AGENT'])))  $mobile_browser++;
    if((strpos(strtolower($_SERVER['HTTP_ACCEPT']),'application/vnd.wap.xhtml+xml')>0) or ((isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE'])))) $mobile_browser++;
    $mobile_ua = strtolower(substr($_SERVER['HTTP_USER_AGENT'],0,4));
    $mobile_agents = array('w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac', 'blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno', 'ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-', 'maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-', 'newt','noki','oper','palm','pana','pant','phil','play','port','prox', 'qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar', 'sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-', 'tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp','wapr','webc','winw','winw','xda','xda-');
    if(in_array($mobile_ua,$mobile_agents)) $mobile_browser++;
    if (isset($_SERVER['ALL_HTTP'])&&strpos(strtolower($_SERVER['ALL_HTTP']),'OperaMini')>0) $mobile_browser++;
    if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'windows')>0) $mobile_browser=0;
    if($mobile_browser>0) {
        return "mobile";
    }

    ////////////////////////////////// IPAD
    if(stristr($_SERVER['HTTP_USER_AGENT'],'iPad')){
        return "ipad";
		
    }
    ////////////////////////////////// IPHONE
    if(stristr($_SERVER['HTTP_USER_AGENT'],'iphone')){
        return "iphone";
    }

    ////////////////////////////////// WINDOWS CE
    if(stristr($_SERVER['HTTP_USER_AGENT'],'windows')){
        return "windows";
    }

    ////////////////////////////////// 3GP
    if(eregi('up.browser|up.link|iemobile|mini|mmp|symbian|midp|wap|phone|pocket|mobile|pda|psp',$_SERVER['HTTP_USER_AGENT'])){
        return "mobile";
    }
    if(stristr($_SERVER['HTTP_ACCEPT'],'text/vnd.wap.wml')||stristr($_SERVER['HTTP_ACCEPT'],'application/vnd.wap.xhtml+xml')){
        return "mobile";
    }
    if(isset($_SERVER['HTTP_X_WAP_PROFILE'])||isset($_SERVER['HTTP_PROFILE'])||isset($_SERVER['X-OperaMini-Features'])||isset($_SERVER['UA-pixels'])){
        return "mobile";
    }
    $a = array('acs-','alav','alca','amoi','audi','aste','avan','benq','bird','blac','blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno','ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-','maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-','newt','noki','opwv','palm','pana','pant','pdxg','phil','play','pluc','port','prox','qtek','qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar','sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-','tosh','tsm-','upg1','upsi','vk-v','voda','w3c ','wap-','wapa','wapi','wapp','wapr','webc','winw','winw','xda','xda-');
    if(isset($a[substr($_SERVER['HTTP_USER_AGENT'],0,4)])){
        return "mobile";
    }

    ////////////////////////////////// PC
    return "pc";
}
$_DEVICE = getdeviceid();
$ua = strtolower($_SERVER['HTTP_USER_AGENT']);

 function getfplayerhead()
 {
    global $LICENSE_KEY;
    global $_DEVICE;
    global $ua;
    global $FPCFG;
    global $FPERRV;
    if (!isset($FPERRV)) $FPERRV='type: "video/mp4", src: "https://swf.tulix.tv/iframe/novideo.mp4"';
    if (!isset($FPCFG)) $FPCFG="";
?>
<link rel="stylesheet" type="text/css" href="/fp/fp7.2.7/skin/skin.css">
<script src="/fp/fp7.2.7/flowplayer.min-error.js"></script>
<script src="/fp/fp7.2.7/flowplayer.set.js"></script>
<script src="/fp/fp7.2.7/hls.light.min.js"></script>


<script>
flowplayer(function (api, root) {
  var alertTimeout; // for optional alert
  api.on("error", function (e, api, err) {
    if (err.code === 2 || err.code === 4) { // Video file not found
      // reset state
      api.error = api.loading = false;
      $(".fp-message", root).css({opacity: 0});
      $(root).removeClass("is-error");
      // load safe replacement video sources
      api.load({
        sources: [
             { <?=$FPERRV?> }
        ]
      }, function (e, api) {
        // optional: notify user
        $(".fp-message:first", root).remove();
        api.message("Streaming is Offline");
        // change timeline color to alert user
        $(root).addClass("replacement");
        alertTimeout = setTimeout(function () {
          $(".fp-message:first", root).remove();
        }, 3000);
      });
    }
  }).on("unload", function () {
    // remove optional custom message to avoid duplication on reload
    clearTimeout(alertTimeout);
    $(".fp-message:first", root).remove();
  });
});

flowplayer(function (api, root) {
  var fsbutton = root.querySelector(".fp-fullscreen");
// append fullscreen button after HD menu is added on ready
  api.on("ready", function () {
  root.querySelector(".fp-controls").appendChild(fsbutton);
 });
});

flowplayer(function (api, root) {
// keep large scaled play button visible
   api.on("pause", function () {
   root.querySelector(".fp-play").className += " fp-visible";
  });
});

</script>

<?php
if(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) 
	echo '';
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== FALSE) 
	echo '';
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== FALSE) 
	echo '';
else 
	echo '<script src="https://swf.tulix.tv/build/mediaelement-and-player.min.js"></script><link rel="stylesheet" href="https://swf.tulix.tv/build/mediaelementplayer.min.css" />';
?>
<style>
.flowplayer {
  background: #000000;
  background-color: #000000  !important;
  margin-bottom: 0px;
  padding-top: 0px;
  width:100%;
  height:100%;
  background-image: url() ;
  background-size: 100% 100%;
}
@media(-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .flowplayer {
    background-image: url(https://swf.tulix.tv/images/offline.png);
  }
}

.flowplayer.is-error .fp-message {
  background-image: url(https://swf.tulix.tv/images/offline.png);
  background-size: contain;
  width:852px;
  height:480px;
  background-repeat: no-repeat;
}
.flowplayer.is-error .fp-message h2,
.flowplayer.is-error .fp-message p {
  font-weight: bold;
  color: #000;
  text-shadow: 1px 1px #fff
}
.flowplayer.is-error .fp-message h2 {
  font-size: 200%;
}
.flowplayer.is-error .fp-message p {
  font-size: 150%;
}
.flowplayer.is-mouseout .fp-ui {
  cursor: none !important;
}
.player-frame-wrapper {
  position: relative;
  width: 100%;
  /* room for slim timeline */
  padding-bottom: 3px;
}
.player-frame-wrapper-ratio {
  /* same as player ratio */
  padding-top: 41.67%;
}
.player-frame {
  /* make iframe fill wrapper */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* red brand color */
.flowplayer .fp-color {
  background-color: #00ABCD;
}
/* emphasize play button */
.flowplayer .fp-color-play {
  fill: #222;
}

.flowplayer {
  background-image: url(sitelogo.png);
}

.flowplayer .fp-duration {
  display: none;
}


</style>
<script>
 flowplayer.conf = {
    fullscreen: true,
    share: false,
    // iOS allows only native fullscreen from within iframes
    native_fullscreen: true
    <?=$FPCFG?>
 };
</script>

<?php
}
 function getfplayerdiv($streamhls,$fpparams="",$streamrtsp="") {
    global $LICENSE_KEY;
    global $_DEVICE;
    global $ua;
    global $mobilehls;
    $poster="sitelogo.png";
    $title="Live";
    $autoplay=" autoplay ";
    $j='{'.$fpparams.'}';
    if (!(isset($mobilehls) && ($mobilehls != "")))
	$mobilehls=$streamhls;
    $jr=json_decode($j,true);
    if (isset($jr['poster'])) {
	$poster=$jr['poster'];
	print("<style>\n.flowplayer {\nbackground-image: url($poster);\n}\n</style>\n");
    }
    if (isset($jr['title'])) $title=$jr['title'];
    if (isset($jr['autoplay'])) $autoplay=($jr['autoplay']===false?"":" autoplay ");
    if (checkautoplay()===false) $autoplay="";

   if ($_DEVICE=='iphone') { ?>  
<style> #container{ background:#000000; display: block; margin-left: 0px; box-shadow:0 0 0px #999;height:100%;width:100%;}</style>
<video  id="video1" width="100%" height="100%" border="1"
  src="<?=$mobilehls?>"
  poster="<?=$poster?>"
  <?=$autoplay?>
  controls="true"
  preload="none"
  ><?=$title?></video>

  <script type="text/javascript">
    $(document).ready(function() {
    $("#video1").bind("click", function() {
    var vid = $(this).get(0);
    if (vid.paused) { vid.play(); }
    else { vid.pause(); }
    }); 
}); 
</script>

<?php } else if ($_DEVICE=='ipad') { ?> 

<style> #container{ background:#000000; display: block; margin-left: 0px; box-shadow:0 0 0px #999;height:100%;width:100%;}</style>
<video id="video1"   width="100%" height="100%" border="1"
  src="<?=$mobilehls?>"
  poster="<?=$poster?>"
  <?=$autoplay?>
  controls="true"
  preload="none"
  ><?=$title?></video>

  <script type="text/javascript">
    $(document).ready(function() {
    $("#video1").bind("click", function() {
    var vid = $(this).get(0);
    if (vid.paused) { vid.play(); }
    else { vid.pause(); }
    }); 
}); 
</script>

<?php } else if (stripos($ua,'windows phone') !== false) { ?>

<table cellpadding="0" cellspacing="0" width="100%"  height="100%">
<tr>
<td  style="text-align:center;padding-top:0px;"   bgcolor=#000000  >
 <a href="<?=$mobilehls?>">
 <img src="https://swf.tulix.tv/images/playipad.png" alt="Play Live"   style="height:100%;width:100%;padding:0px;" /></a>
</td>
</tr>
</table>

<?php } else  if(preg_match('/Android [1-2.3]/', $_SERVER['HTTP_USER_AGENT'])) {?>

<table cellpadding="0" cellspacing="0" width="100%"  height="100%">
<tr>
<td  style="text-align:center;padding-top:0px;"   bgcolor=#000000  >
 <a href="<?=$mobilehls?>">
 <img src="<?=$poster?>" alt="<?=$title?>"   style="height:100%;width:100%;padding:0px;" /></a>
</td>
</tr>
</table>
  

<?php } else if ($_DEVICE=='mobile') {?>

<video id="player1" width="100%" height="100%" style="width: 100%; height: 100%;"   type="application/x-mpegURL"
  src="<?=$mobilehls?>"
  <?=$autoplay?>  controls="true" controls webkitEnterFullscreen poster="<?=$poster?>" preload='none'><?=$title?></video>

<script>
$('audio,video').mediaelementplayer({ 
    alwaysShowControls: false,
    success: function(player, node) {$('#' + node.id + '-mode').html('mode: ' + player.pluginType);}
});
</script>
<?php } else if (stripos($ua,'android') !== false)   { ?>
<!-- class="mejs-ted" -->
<video  width="100%" height="100%" border="1"
  src="<?=$mobilehls?>"
   <?=$autoplay?> controls="true controls webkitEnterFullscreen poster="<?=$poster?>" preload='none'" ><?=$title?></video>
<?php } else { ?>

<div align="left" style="width:100%;height:100%;margin-left:1px;" id="fp" class="flowplayer fp-outlined fp-mute" ></div> 
<script>
flowplayer("#fp", {
    key: '<?=$LICENSE_KEY?>',
    poster: '<?=$poster?>',
    ratio: 0.5625,
	
    live: true,
    dvr: false,
    autoplay: <?php echo ($autoplay==""?"false":"true"); ?>,
    embed: false,
    title: '<?=$title?>',
    clip: {
        sources: [
            { type: "application/x-mpegurl",
              src:  "<?=$streamhls?>" },
        ],
        autoplay: <?php echo ($autoplay==""?"false":"true"); ?>
    },
    <?=$fpparams?>
});
</script>
<?php
    }
}

function getfplayer($streamhls,$fpparams="",$streamrtsp="")
{
    global $LICENSE_KEY;
    global $_DEVICE;
    global $ua;
    global $mobilehls;
?>
<!doctype html>
<html lang="en">
<head>
 
<title> Watch  Online</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<?php getfplayerhead($streamhls,$fpparams,$streamrtsp); ?>
<style media="screen" type="text/css">
		html,body { height:100%; width:100%; padding:0; margin:0; color:#999999; overflow: hidden; background:#000000 }
		#player  {
		height:100%;
		max-height: 100%;
		width:100%; padding:0; margin:0px;
		}
			 
.wrapper {
	   height:100%;
		width:100%; padding:0; margin:0px;
}
 		</style>
		
		 <script language="JavaScript"> 
function fullScreen(theURL) { 
window.open(theURL, '', 'fullscreen=yes, scrollbars=no'); 
} 
// End --> 
</script> 

<style type="text/css">
html {
overflow:hidden;
}
</style>


 <script language="JavaScript">
 
$(function() {
	var zIndexNumber = 1000;
	$('div').each(function() {
		$(this).css('zIndex', zIndexNumber);
		zIndexNumber -= -10;
	});
});
</script>


</head>     
<body topmargin="0" leftmargin="0" bottommargin="0" alink="#367FDF"  link="#367FDF" marginheight="0" marginwidth="0" vlink="#367FDF"  style="overflow:hidden;" scroll="no" > 

<?php getfplayerdiv($streamhls,$fpparams,$streamrtsp); ?>
</body>
</html>

<?php
}

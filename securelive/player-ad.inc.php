<!doctype html>
<html lang="en">
    <head>
        <title>SSH101 -  Watch  Online</title>
        <?php
        if(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) 
            echo '';
        elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== FALSE) 
            echo '';
        elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== FALSE) 
            echo '';
        else
            echo '<script src="/securelive/js/mediaelement-and-player.min.js"></script><link rel="stylesheet" href="/securelive/build/mediaelementplayer.min.css" /><!-- <link rel="stylesheet" href="/securelive/build/mejs-skins.css" /> -->';
        ?>
        <style media="screen" 
            type="text/css">
        		html,body { 
                    height:100%; 
                    width:100%; 
                    padding:0; 
                    margin:0; 
                    color:#999999; 
                    overflow: hidden; 
                    background:#000000
                }
        		
        			 
        </style>

        <!--<link href="../nuevo7/videojs/skins/nuevo/videojs.min.css" rel="stylesheet" type="text/css" />-->
        <link href="../nuevo7/videojs/skins/jwlike/videojs.min.css" rel="stylesheet" type="text/css" />

    </head>
    <body>

        <script type="text/javascript" src="../nuevo7/videojs/video.min.js"></script>
        <script type="text/javascript" src="../nuevo7/videojs/nuevo.min.js"></script>

        <div class="media-parent"  style="height: 100%;"  >
            <div class="media-child"   style="height: 100%;" >
                <video id="player_1"  style="height: 100%; width: 100%;" class="video-js vjs-default-skin"  controls preload playsinline poster="../images/poster.jpg">
                    <source src="<?=getlivestream($_GET['id'])?>" type="application/x-mpegurl">
                </video>
            </div>
        </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <!-- Default Statcounter code for Ssh101.com Live Player
        http://ssh101.com/live -->
        <script type="text/javascript">
            var sc_project=12366682; 
            var sc_invisible=1; 
            var sc_security="0ef72411"; 
        </script>
        <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script>
        <noscript>
            <div class="statcounter">
                <a title="Web Analytics" href="https://statcounter.com/" target="_blank">
                    <img class="statcounter" src="https://c.statcounter.com/12366682/0/0ef72411/1/" alt="Web Analytics">
                </a>
            </div>
        </noscript>
        <!-- End of Statcounter Code -->

<script>
var player = videojs('player_1', { "controls": true, "preload": "false"});
player.nuevo({ 
    logotitle:'ssh101.com',
    logo: '../logo120.png',
    logoposition:'LT',
    logourl:'https://ssh101.com',
    logocontrolbar: '../images/logo-controlbar.png'
});
player.autoplay('muted');
player.muted(true);
player.play();
player.muted(false);
</script>
</body>
</html>

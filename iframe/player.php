<style type="text/css">
    html,
    body {
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        background-color: #000;
    }
</style>

<link href="https://vplayer.tdemo.com/nuevo/videojs/skins/treso/videojs.min.css?newcache00" rel="stylesheet" type="text/css" />
<script src="https://vplayer.tdemo.com/nuevo/videojs/video.min.js"></script>
<!-- <script src="https://vplayer.tdemo.com/nuevo/videojs/nuevo.min.js"></script> -->


<div style="width: 100%; height: 100%;margin: 0px; padding: 0px;">
    <video id="video" style="height: 100%; width: 100%;" class="video-js vjs-default-skin" controls preload playsinline></video>
</div>
<script>
    var player = videojs('video', {
        "autoplay": true,
        "muted": true,
        "liveui": true
    });
    // player.nuevo();

    var uUrl = <?php echo '"' . $_GET['url'] . '"' ?>;

    var type = "";
    if (uUrl.includes(".m3u8")) {
        type = "application/x-mpegurl";
    } else if (uUrl.includes(".mpd")) {
        type = "application/dash+xml";
    } else if (uUrl.includes(".mp4")) {
        type = "video/mp4";
    } else if (uUrl.includes(".webm")) {
        type = "video/webm";
    }

    player.src({
        src: uUrl,
        type: type
    });

    setTimeout(function() {
        player.pause();
        player.hasStarted(false);
    }, 800);
</script>
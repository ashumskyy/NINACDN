<?php include('code/home.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nina CDN Admin</title>

    <link rel="stylesheet" href="css/style.css">

</head>

<body>

    <?php include('_inc/header.php') ?>

    <div class="main-container">

        <section class="content-section">
            <h5 class="title-small">Stream Info</h5>
            <p>Here is an example of rtmp stream. You can change the 'stream-name' in your encoder settings and push a new stream.</p>
            <p><strong>RTMP Sample: </strong>https://stream.ssh101.com:800/username/<strong>stream-name</strong></p>
        </section>
        <section class="content-section section-ip">
            <div class="ip-row">
                <div class="ip-item">
                    <h5 class="section-titles ">IP PROTECTION</h5>
                    <p>Add IPs you wanto to allow RTMP Push. Secure your publishing points.</p>
                    <form method="post" class="ip-form">
                        <input name="ip" class="ip-input" type="text" placeholder="0.0.0.0">
                        <button name=addip class="ip-btn"><svg class="ip-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
                            </svg>Add IP</button>
                    </form>
                </div>
                <div class="ip-item">
                    <h6 class="sub-title">IP LIST</h6>

                    <form class="remove-ip-form">
                        <input type="text" value="255.255.255.255" disabled class="remove-input">
                        <button class="remove-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="minus-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f38e82" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </form>

                </div>
            </div>

        </section>
        <section class="content-section">
            <h5 class="title-small">My Channels (Streams)</h5>
            <p>You can find all of your channels here. As you push more streams they will appear on the list. You can copy the HLS URLs to use wherever you want. You can also copy the embed code for each stream and add players to your website.</p>
        </section>

        <section class="streams-section">
            <div class="stream-item">
                <h6 class="sub-title">CAGLAR-STREAM</h6>
                <div class="stream-row">
                    <div class="stream-info-grid">
                        <span class="stream-grid-title">Stream Name</span>
                        <span>:</span>
                        <span>caglar-stream</span>
                        <span class="stream-grid-title">Resolution</span>
                        <span>:</span>
                        <span>1280x720</span>
                        <span class="stream-grid-title">Video Bitrate</span>
                        <span>:</span>
                        <span>2.58 Mb/s</span>
                        <span class="stream-grid-title">Audio Bitrate</span>
                        <span>:</span>
                        <span>138 Kb/s</span>
                        <span class="stream-grid-title">Up Time</span>
                        <span>:</span>
                        <span>2d 2h 42m 59s</span>
                        <span class="stream-grid-title">HLS</span>
                        <span>:</span>
                        <input class="hls-input" readonly type="text" value="https://stream.ssh101.com:800/username/caglar-stream">
                    </div>
                    <div class="player-div">
                        <iframe src='https://vplayer.tdemo.com/iframe/player.php?url=https://playout4multirtmp.tulix.tv/live36/Stream1/playlist.m3u8' frameborder=0 scrolling=no width=100% height=100% align=middle webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>

                </div>
                <h6 class="embed-title">Embed Code: </h6>
                <textarea class="embed-ta" name="" id="" cols="30" rows="3">&lt;iframe  src='https://www.ssh101.com/securelive/index.php?id=kenan-stream' frameborder=0 scrolling=no align=middle width=852 height=480 webkitallowfullscreen mozallowfullscreen allowfullscreen  &gt;&lt;/iframe&gt; </textarea>

            </div>
            <div class="stream-item">
                <h6 class="sub-title">KENAN-STREAM</h6>
                <div class="stream-row">
                    <div class="stream-info-grid">
                        <span class="stream-grid-title">Stream Name</span>
                        <span>:</span>
                        <span>kenan-stream</span>
                        <span class="stream-grid-title">Resolution</span>
                        <span>:</span>
                        <span>1280x720</span>
                        <span class="stream-grid-title">Video Bitrate</span>
                        <span>:</span>
                        <span>2.58 Mb/s</span>
                        <span class="stream-grid-title">Audio Bitrate</span>
                        <span>:</span>
                        <span>138 Kb/s</span>
                        <span class="stream-grid-title">Up Time</span>
                        <span>:</span>
                        <span>2d 2h 42m 59s</span>
                        <span class="stream-grid-title">HLS</span>
                        <span>:</span>
                        <input class="hls-input" readonly type="text" value="https://stream.ssh101.com:800/username/caglar-stream">
                    </div>
                    <div class="player-div">
                        <iframe src='https://vplayer.tdemo.com/iframe/player.php?url=https://playout4multirtmp.tulix.tv/live36/Stream1/playlist.m3u8' frameborder=0 scrolling=no width=100% height=100% align=middle webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
                <h6 class="embed-title">Embed Code: </h6>
                <textarea class="embed-ta" name="" id="" cols="30" rows="3">&lt;iframe  src='https://www.ssh101.com/securelive/index.php?id=kenan-stream' frameborder=0 scrolling=no align=middle width=852 height=480 webkitallowfullscreen mozallowfullscreen allowfullscreen  &gt;&lt;/iframe&gt; </textarea>
            </div>
            <div class="stream-item">
                <h6 class="sub-title">Test-STREAM</h6>
                <div class="stream-row">
                    <div class="stream-info-grid">
                        <span class="stream-grid-title">Stream Name</span>
                        <span>:</span>
                        <span>Test-stream</span>
                        <span class="stream-grid-title">Resolution</span>
                        <span>:</span>
                        <span>1280x720</span>
                        <span class="stream-grid-title">Video Bitrate</span>
                        <span>:</span>
                        <span>2.58 Mb/s</span>
                        <span class="stream-grid-title">Audio Bitrate</span>
                        <span>:</span>
                        <span>138 Kb/s</span>
                        <span class="stream-grid-title">Up Time</span>
                        <span>:</span>
                        <span>2d 2h 42m 59s</span>
                        <span class="stream-grid-title">HLS</span>
                        <span>:</span>
                        <input class="hls-input" readonly type="text" value="https://stream.ssh101.com:800/username/caglar-stream">
                    </div>
                    <div class="player-div">
                        <iframe src='https://vplayer.tdemo.com/iframe/player.php?url=https://playout4multirtmp.tulix.tv/live36/Stream1/playlist.m3u8' frameborder=0 scrolling=no width=100% height=100% align=middle webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
                <h6 class="embed-title">Embed Code: </h6>
                <textarea class="embed-ta" name="" id="" cols="30" rows="3">&lt;iframe  src='https://www.ssh101.com/securelive/index.php?id=kenan-stream' frameborder=0 scrolling=no align=middle width=852 height=480 webkitallowfullscreen mozallowfullscreen allowfullscreen  &gt;&lt;/iframe&gt; </textarea>

            </div>
        </section>




    </div>

</body>

</html>




<!-- <section class="container-section">
            <h6 class="title-small">Stream Info</h6>
            <p>Here is an example of rtmp stream. You can change the 'stream-name' in your encoder settings and push a new stream.</p>
            <p><strong>RTMP Sample: </strong>https://stream.ssh101.com:800/username/<strong>stream-name</strong></p>
        </section>


        <section class="container-section">
            <h6 class="title-small">IP Protection</h6>
            <p>Enter IP you want to allow RTMP Push</p>
            <form action="">
                <input type="text" placeholder="0.0.0.0">
                <button>Add IP</button>
            </form>

            <h6 class="title-ip">Allowed IPS:</h6>
            <div class="allowed-ips">
                <p>255.255.255.255</p>
                <p>255.255.255.01</p>
            </div>

        </section>


        <section class="container-section">
            <h6 class="title-small">My Streams (Channels)</h6>

            <div class="stream-row">
                <div class="sname-div">
                    <h6 class="flex-title">Stream Name</h6>
                    <p class="flex-text">caglar-stream</p>
                </div>
                <div class="sinfo-div">
                    <h6 class="flex-title">Stream Info</h6>
                    <div class="sinfo-grid">
                        <h6 class="sinfo-grid-title">Resolution</h6>
                        <span>:</span>
                        <p class="sinfo-grid-text">1280x720</p>
                        <h6 class="sinfo-grid-title">Video Bitrate</h6>
                        <span>:</span>
                        <p class="sinfo-grid-text">2.58 Mb/s</p>
                        <h6 class="sinfo-grid-title">Audio Bitrate</h6>
                        <span>:</span>
                        <p class="sinfo-grid-text">138 Kb/s </p>
                        <h6 class="sinfo-grid-title">Up Time</h6>
                        <span>:</span>
                        <p class="sinfo-grid-text">2d 2h 42m 59s</p>
                        <h6 class="sinfo-grid-title">HLS</h6>
                        <span>:</span>
                        <input class="sinfo-grid-text" type="text" value="https://stream.ssh101.com:800/username/caglar-stream">
                    </div>
                </div>
                <div class="sembed-div">
                    <h6 class="flex-title">Embed Code</h6>
                    <textarea class="embed-code" name="" id="" cols="30" rows="10">&lt;iframe  src='https://www.ssh101.com/securelive/index.php?id=caglar-stream' frameborder=0 scrolling=no align=middle width=852 height=480 webkitallowfullscreen mozallowfullscreen allowfullscreen  &gt;&lt;/iframe&gt; </textarea>
                </div>
            </div>


            <div class="stream-row">
                <div class="sname-div">
                    <h6 class="flex-title">Stream Name</h6>
                    <p class="flex-text">kenan-stream</p>
                </div>
                <div class="sinfo-div">
                    <h6 class="flex-title">Stream Info</h6>
                    <div class="sinfo-grid">
                        <h6 class="sinfo-grid-title">Resolution</h6>
                        <span>:</span>
                        <p class="sinfo-grid-text">1280x720</p>
                        <h6 class="sinfo-grid-title">Video Bitrate</h6>
                        <span>:</span>
                        <p class="sinfo-grid-text">2.58 Mb/s</p>
                        <h6 class="sinfo-grid-title">Audio Bitrate</h6>
                        <span>:</span>
                        <p class="sinfo-grid-text">138 Kb/s </p>
                        <h6 class="sinfo-grid-title">Up Time</h6>
                        <span>:</span>
                        <p class="sinfo-grid-text">2d 2h 42m 59s</p>
                        <h6 class="sinfo-grid-title">HLS</h6>
                        <span>:</span>
                        <input class="sinfo-grid-text" type="text" value="https://stream.ssh101.com:800/username/caglar-stream">

                    </div>
                </div>
                <div class="sembed-div">
                    <h6 class="flex-title">Embed Code</h6>
                    <textarea class="embed-code" name="" id="" cols="30" rows="10">&lt;iframe  src='https://www.ssh101.com/securelive/index.php?id=kenan-stream' frameborder=0 scrolling=no align=middle width=852 height=480 webkitallowfullscreen mozallowfullscreen allowfullscreen  &gt;&lt;/iframe&gt; 
                    </textarea>
                </div>
            </div>

        </section> -->
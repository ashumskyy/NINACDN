<?php include('code/home.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nina CDN Admin</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/home.css">

    <script defer src="js/script.js"></script>

</head>

<body>

    <?php include('_inc/header.php') ?>

    <div class="main-container">

        <section class="content-section">
            <h5 class="title-small">Stream Info</h5>
            <p>Here is an example of rtmp stream. You can change the 'yourstreamname' in your encoder settings and push a new stream.</p>
            <p><strong>RTMP Sample: </strong>rtmp://streaming2.ninacdn.com/live/<strong>yourstreamname</strong>
            </p>
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
                    <?php if (isset($error)) echo '<p style="color: firebrick;font-size: small;padding: 10px;">' . $error . '</p>'; ?>

                </div>
                <div class="ip-item">
                    <h6 class="sub-title">IP LIST</h6>

                    <?php foreach ($ips as $ip => $tm) { ?>
                        <form class="remove-ip-form" method="post">
                            <input type="text" value="<?= $ip ?>" name="ip" readonly class="remove-input">
                            <button class="remove-btn" name="delip">
                                <svg xmlns="http://www.w3.org/2000/svg" class="minus-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f38e82" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </form>
                    <?php } ?>

                </div>
            </div>

        </section>
        <section class="content-section">
            <h5 class="title-small">My Channels (Streams)</h5>
            <p>You can find all of your channels here. As you push more streams they will appear on the list. You can copy the HLS URLs to use wherever you want. You can also copy the embed code for each stream and add players to your website.</p>
        </section>

        <section class="streams-section">
            <?php
            //print_r($streams);
            foreach ($streams as $i => $pp) { ?>
                <div class="stream-item">
                    <h6 class="sub-title"><?= $pp['name'] ?></h6>
                    <div class="stream-row">
                        <div class="stream-info-grid">
                            <span class="stream-grid-title">Stream Name</span>
                            <span>:</span>
                            <span><?= $pp['name'] ?></span>
                            <span class="stream-grid-title">Resolution</span>
                            <span>:</span>
                            <span><?= $pp['meta']['video']['width'] . 'x' . $pp['meta']['video']['height'] ?></span>
                            <span class="stream-grid-title">Video Bitrate</span>
                            <span>:</span>
                            <span><?= number_format($pp['bw_video'] / 1000) ?> kbps</span>
                            <span class="stream-grid-title">Audio Bitrate</span>
                            <span>:</span>
                            <span><?= number_format($pp['bw_audio'] / 1000) ?> kbps</span>
                            <span class="stream-grid-title">Up Time</span>
                            <span>:</span>
                            <span><?= $uptime ?></span>
                            <span class="stream-grid-title">HLS</span>
                            <span>:</span>
                            <input onClick="this.select();" class="hls-input" readonly type="text" value="<?= getstream($pp) ?>">
                        </div>
                        <div class="player-div">
                            <iframe src='https://ninacdn.com/iframe/player.php?url=<?= urlencode(getstream($pp)) ?>' frameborder=0 scrolling=no width=100% height=100% align=middle webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        </div>

                    </div>
                    <h6 class="embed-title">Embed Code: </h6>
                    <textarea class="embed-ta" name="" id="">&lt;iframe  src="https://ninacdn.com/iframe/player.php?url=<?= urlencode(getstream($pp)) ?>" frameborder=0 scrolling=no width=100% height=100% align=middle webkitallowfullscreen mozallowfullscreen allowfullscreen&gt;&lt;/iframe&gt; </textarea>
                    <div class="copy-embed-div">
                        <div class="copy-anim">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                            <span>Code Copied</span>
                        </div>
                        <button class="embed-btn">Copy Embed Code</button>

                    </div>



                </div>
            <?php
            }
            ?>
        </section>




    </div>

</body>

</html>

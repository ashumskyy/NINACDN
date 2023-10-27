<!doctype html>
<head>

    <!-- Flowplayer skin -->
   <link rel="stylesheet" type="text/css" href="//giniko.com/fplayer/skin/functional.css">
   <!-- for video tag based installs flowplayer depends on jQuery 1.7.2+ -->
   <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
   <!-- include flowplayer -->
   <script type="text/javascript" src="//giniko.com/fplayer/flowplayer.min.js"></script>
<style>
.flowplayer {
  background: #000;
  margin-bottom: 0px;
}
.flowplayer.is-error .fp-message p {
  font-size: 200%;
  font-weight: bold;
  color: #f00;
}
</style>
<script>
flowplayer.set({
swf: "http://giniko.com/fplayer/flowplayer.swf",
swfHls: "http://giniko.com/fplayer/flowplayerhls.swf"
});
flowplayer("#player", {
  autoplay: true,
  autoHide: true,
  ratio: 6/19,  
});
</script>

 

</head>

<body>

   <!--
      Please replace data-key value with your key that can be generated with
      the provided algorigtm on keh-gen.js
   -->
   
   <div data-live="true" data-embed="false" autoHide="true"
    data-key="$942549527860913" data-ratio="0.4167"
	
	    data-logo="https://pbs.twimg.com/profile_images/2361078511/ufmdjynckiubgsea5gle.png"
     class="flowplayer no-time">
 
   <video data-title="Live" autoplay>
		<source type="application/x-mpegurl"  autoplay="true"
        src="http://10gb21.tulix.tv:80/csiasia1/index.m3u8">
   </video>
 
</div>
   
   
 
</body>

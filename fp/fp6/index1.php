<!doctype html>
 
<?php include 'key-gen.php' ?>

 
<head>

   <!-- player skin -->
   <!-- player skin -->
   <link rel="stylesheet" type="text/css" href="skin/functional.css">

   <!-- site specific styling -->
   <style type="text/css">
   body { font: 12px "Myriad Pro", "Lucida Grande", sans-serif; text-align: center; padding-top: 5%; }
   </style>

   <!-- for video tag based installs flowplayer depends on jQuery 1.7.2+ -->
   <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>

   <!-- include flowplayer -->
   <script type="text/javascript" src="//tulix.com/player/flowplayer/flowplayer.min.js"></script>
   
<style>
.flowplayer {
  background: #777;
  margin-bottom: 20px;
}

.flowplayer.is-error .fp-message p {
  font-size: 200%;
  font-weight: bold;
  color: #f00;
}
</style>

<script>
flowplayer.set({
swf: "http://tulix.com/player/flowplayer/flowplayer.swf",
swfHls: "http://tulix.com/player/flowplayer/flowplayerhls.swf"


});

flowplayer("#player", {
  autoplay: true,
  ratio: 5/12,
   
   
});
</script>

   
<!--    PHP-generated key for tulix.com: $872279925783807 -->

</head>

<body>

   <!--
      Please replace data-key value with your key that can be generated with
      the provided algorigtm on keh-gen.js
   -->
   
   <div data-live="true" data-embed="false"
    data-key="<?php generate_key(); ?>" data-ratio="0.4167"
	
	    data-logo="https://pbs.twimg.com/profile_images/2361078511/ufmdjynckiubgsea5gle.png"
     class="flowplayer fixed-controls">
 
   <video data-title="Live" autoplay>
		<source type="application/x-mpegurl"  autoplay="true"
        src="http://unirtmp.tulix.tv:1935/amazingdiscoveries/mystream1/playlist.m3u8">
   </video>
 
</div>
   
   
   
<!--   http://10gb21.tulix.tv:80/csiasia1/csiasia1/index-<?php echo time()-60*60; ?>-now.m3u8  http://unirtmp.tulix.tv:1935/amazingdiscoveries/mystream1/playlist.m3u8   <div class="flowplayer" data-swf-hls="flowplayerhls.swf" data-key="<generated-key>" data-ratio="0.4167">
      <video> 
         <source type="application/x-mpegurl" src="https://stream.flowplayer.org/bauhaus.m3u8">
         <source type="video/webm" src="https://stream.flowplayer.org/bauhaus.webm">
         <source type="video/mp4"  src="https://stream.flowplayer.org/bauhaus.mp4">
      </video>
   </div> -->

</body>

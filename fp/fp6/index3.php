<?php include 'key-gen.php' ?>
<!doctype html>

<html>

<head>
   <meta charset="utf-8">

      <title>Flowplayer · Long video</title>
   
   <!-- optimize mobile versions -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
      <!-- The "playful" skin - choose from: "functional.css", "minimalist.css", "playful.css" -->
   <link rel="stylesheet" href="//releases.flowplayer.org/6.0.5/skin/playful.css">
   
   <!-- Minimal styling for this standalone page, can be removed -->
   <link rel="stylesheet" href="http://demos.flowplayer.org/media/css/demo.css">
   <!-- Syntax highlighting of source code, can be removed -->
   <link rel="stylesheet" href="http://demos.flowplayer.org/media/css/pygments.css">
   
<style>
#content {
  max-width: 768px; /* narrower for 4/3 aspect ratio */
}

.flowplayer {
  background-color: #333;
  background-image: url(http://d12zt1n3pd4xhr.cloudfront.net/img/ccc.jpg);
}
</style>

    <link rel="stylesheet" type="text/css" href="skin/functional.css">

   <!-- site specific styling -->
   <style type="text/css">
   body { font: 12px "Myriad Pro", "Lucida Grande", sans-serif; text-align: center; padding-top: 5%; }
   </style>

   <!-- for video tag based installs flowplayer depends on jQuery 1.7.2+ -->
   <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>

   <!-- include flowplayer -->
   <script type="text/javascript" src="//tulix.com/player/flowplayer/flowplayer.min.js"></script>
            
   <script>
flowplayer.set({
swf: "http://tulix.com/player/flowplayer/flowplayer.swf",
swfHls: "http://tulix.com/player/flowplayer/flowplayerhls.swf"


});

flowplayer("#player", {
  autoplay: true,
  autoHide: true,
  ratio: 6/19,
   
   
});
</script>
   

<script>
// ensure that DOM is ready
window.onload = function () {

  flowplayer("#long", {
      embed: false,
	 
	  key: "$872279925783807",
    splash: true,
	autostart: true,
    clip: {
      title: "nDVR Test",
      sources: [
        { type: "application/x-mpegurl", src: "http://10gb21.tulix.tv:80/csiasia1/index-<?php echo time()-60*60;?>-now.m3u8" }   
		 
        
      ]
    },
    embed: {
      skin: "http://releases.flowplayer.org/6.0.5/skin/playful.css"
    }
  });

};
</script>

</head>

<body>

   <div id="content">

      <h1>Flowplayer · Long video</h1>

<div id="long"></div>

 

<p class="doc">For smoother <a href="https://flowplayer.org/docs/setup.html#hls">HLS</a> playback
in modern browsers we load the
<a href="https://flowplayer.org/docs/plugins.html#hlsjs">hlsjs plugin</a>:</p>

 

 

</body>
</html>

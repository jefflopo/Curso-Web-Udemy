<?php
	include_once("header.php");
?>
<link rel="stylesheet" href="lib/plyr/dist/plyr.css">


		<section>
			
			<div id="call-to-action">
				<div class="container">

					<div class="row text-center">
						<h2>Videos</h2>
						<hr>
						<br><br>
					</div>

					<div class="row">
						<div class="player">
							<video src="mp4/highlights.mp4" controls poster="imagens/highlights.jpg"></video>
						</div>
						

						<input type="range" id="volume" min="0" max="1" step="0.01" value="1">

						<button type="button" id="btn-play-pause" class="btn btn-success">PLAY</button>

						<!-- <audio src="mp3/audio.mp3" controls></audio> -->
					</div>

				</div>
			</div>

			<br><br><br><br><br><br>

			<div id="news" class="container" style="top: 0">

				<div class="row thumbnails">

					<div class="item" data-video="highlights">
						<div class="item-inner">
							<img src="imagens/highlights.jpg" alt="Imagem 1">
							<h3>Highlights</h3>
							<time>January 15, 2017</time>
						</div>
						
					</div>

					<div class="item" data-video="Orlando_City_Foundation_2015">
						<div class="item-inner">
							<img src="imagens/Orlando_City_Foundation_2015.jpg" alt="Imagem 2">
							<h3>Orlando City Foundation 2015</h3>
						
						</div>
						
					</div>
					<div class="item" data-video="highlights">
						<div class="item-inner">
							<img src="imagens/highlights.jpg" alt="Imagem 1">
							<h3>Highlights</h3>
							<time>January 15, 2017</time>
						</div>
						
					</div>

					<div class="item" data-video="Orlando_City_Foundation_2015">
						<div class="item-inner">
							<img src="imagens/Orlando_City_Foundation_2015.jpg" alt="Imagem 2">
							<h3>Orlando City Foundation 2015</h3>
						
						</div>
						
					</div>
					<div class="item" data-video="highlights">
						<div class="item-inner">
							<img src="imagens/highlights.jpg" alt="Imagem 1">
							<h3>Highlights</h3>
							<time>January 15, 2017</time>
						</div>
						
					</div>

					<div class="item" data-video="Orlando_City_Foundation_2015">
						<div class="item-inner">
							<img src="imagens/Orlando_City_Foundation_2015.jpg" alt="Imagem 2">
							<h3>Orlando City Foundation 2015</h3>
						
						</div>
						
					</div>

				</div>

			</div>

		</section>

		<?php
			include_once("footer.php");
		?>
		<script src="lib/plyr/dist/plyr.js"></script>
		<script>
			$(function(){

				$(".thumbnails .item").on("click", function(){

					$("video").attr({
						"src": "mp4/" + $(this).data('video') + ".mp4",
						"poster": "imagens/" + $(this).data('video') + ".jpg"
					});

				});

				$("#volume").on("change", function(){

					$("video")[0].volume = parseFloat( $(this).val() );


				});

				$("#btn-play-pause").on("click", function(){

					var video = $("video")[0];

					if( $(this).hasClass("btn-success") ){

						$(this).text("STOP");
						video.play();

					} else{
						$(this).text("PLAY");
						video.pause();
					}

					$(this).toggleClass("btn-success btn-danger");

				});

				plyr.setup(); // disparando player PLYR

			});
		</script>

	</body>
</html>

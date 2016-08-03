(function preloader() {
	image = new ImageLoader();
	for (var i = 0; i < gallery.length; i++) {
		image.load("/images/gallery/" + gallery[i][0] + ".png");

	}
	image.onload(function () {
		image.clearImages();

		if (!navigator.userAgent.match('Edge')){

			$('#preloader').fadeOut('slow', function () {
				$(this).remove();
			});
		}else{
			alert("Microsoft Edge NOT Supported. Use Internet Explorer, Chrome, Firefox, Safari, Vivaldi, Opera, Baidu Spark, or any other of your choice. All of these do work, Edge doesn't.")
		}
	});
})();

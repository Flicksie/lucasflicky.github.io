

(function preloader(){
    image = new ImageLoader();
    for(var i=0; i < gallery.length; i++){
        image.load("/images/gallery/"+gallery[i][0]+".png");
    }
    image.onload(function () {
        image.clearImages();
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
})();

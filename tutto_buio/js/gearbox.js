var siteLang;
if (!localStorage.locale) {
    siteLang = 'en-uk';
    localStorage.setItem('locale', siteLang);
}
else {
    siteLang = localStorage.locale;
}
setlang(siteLang);
var backForth = 0;
var active = ".nav-1";


function ImageLoader(){function e(e){return e instanceof Object&&!(e instanceof Array)&&"function"!=typeof e}var n=0,t=[],o=document.createElement("load");document.head.appendChild(o),this.getCount=function(){return n},this.getContainer=function(){return o},this.getImages=function(){return t},this.clearImages=function(){t=[]},this.isLoaded=function(){return 0===n?!0:!1},this.onload=function(e,t){if("undefined"==typeof e)return console.warn("The onload method requires a callback, use isLoaded instead of onload!"),this.isLoaded();if("function"!=typeof e)throw new Error("Invalid callback!");t="number"==typeof t?t:100;var o=function(){0===n?e():setTimeout(o,t)};o()},this.load=function(r,a){a=a||{},n++;var c=document.createElement("img");if(e(a)){var s=0,u=Object.keys(a);for(i in a)c.setAttribute(u[s],a[i]),s++}else console.warn("%s%c%s%c%s%s%s%c%s","The attributes argument must be an ","color:#159","object","color:none","!","\nImage: "+r,"\nAttributes: ","color:#f22",a);return c.src=r,o.appendChild(c),c.onload=function(){o.removeChild(c),n--,this.onload=void 0},t.push(c),c}}

$(document).ready(function () {


    var dumpo = ''
    var dumpoDVA = ''
    var dumpoTROIS = ''
    var dumpoCHETYRE = ''

var WIDE = window.innerWidth
var dockVal = 0
WIDE <= 860 ? dockVal = 5 : dockVal = 7;
    for (var i = 0; i < 18; i++) {dumpo += newPicZ('elite (' + (i + 1) + ')');}
for (var i in gallery) {
    dumpo += newPicZ('elite (' + (i + 1) + ')');
    dumpoDVA += newPic(gallery[i][1],'images/gallery/', gallery[i][0], gallery[i][3], gallery[i][2], gallery[i][4],'classy');
    dumpoTROIS += newPic(gallery[i][1],'images/gallery/fullsize/', gallery[i][0], gallery[i][3], gallery[i][2], gallery[i][4],'central','zoomer');
    dumpoCHETYRE += newInfo(gallery[i][4]);


}

$('#digester').html(dumpo);
$('#bygester').html(dumpoDVA);
$('#bygester2').html(dumpoTROIS);
$('#zominput').html(dumpoCHETYRE);
$('.mulys').slick({
    infinite: true
    , slidesToShow: dockVal
    , slidesToScroll: dockVal
    , autoplay: true
    , autoplaySpeed: 0
    , cssEase: 'linear'
    , speed: 20000
    , arrows: false
    , lazyLoad: 'progressive'
});

 $('.slider-for').slick({
    slidesToShow: 1
    , slidesToScroll: 1
    , arrows: false
    , lazyLoad: 'ondemand'
    , fade: true
    , asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: dockVal-2
    , slidesToScroll: dockVal-2
    , asNavFor: '.slider-for'
    , centerMode: true
    , focusOnSelect: true
     , arrows: false
});

    (function preloader() {
    image = new ImageLoader();
    for (var i = 0; i < gallery.length; i++) {
        image.load("images/gallery/fullsize/" + gallery[i][0] + ".png");
    }
    image.onload(function () {

        image.clearImages();
        setTimeout(function () {
            $('.mulys').animate({opacity: '1'},1200);console.log("DONE");
        }, 300);
    });
})();

});




//-----------------LANGUAGE-----------------//
function setlang(lang) {
    localStorage.setItem('locale', lang);
    switch (lang) {
    case 'pt-br':
        siteLang = 'pt-br';
        $('#notice').removeClass('active');
        setTimeout(" $('#notice').hide(); ", 800);
        $('.ptbr').removeClass('disav');
        $('.enuk').addClass('disav');
        $('.multilang, .en-uk').fadeOut(360, function () {
            $('.pt-br, .multilang').fadeIn();
        });
        break;
    case 'en-uk':
        siteLang = 'en-uk';
        if (location.hash.substring(2) == 'blog') {
            $('#notice').show();
            setTimeout(" $('#notice').addClass('active'); ", 800);
        }
        $('.enuk').removeClass('disav');
        $('.ptbr').addClass('disav');
        $('.multilang, .pt-br').fadeOut(360, function () {
            $('.en-uk, .multilang').fadeIn();
        });
        break;
    }
};
//-----------------ABOUT TOOLTIPS-----------------//
$('.aboutlnk').on('mouseover', function (e) {
    var alpha = this.id;
    var y = $(this).position().top;
    var x = $(this).position().left;
    $('#' + alpha + 'tool').css('top', y + 20);
    $('#' + alpha + 'tool').css('left', x);
    $('#' + alpha + 'tool').fadeIn();
});
$('.aboutlnk').on('mouseout', function (e) {
    var alpha = this.id;
    $('#' + alpha + 'tool').fadeOut();
});
//-------------CHANGE EVENTS---------------//
$("input, textarea").change(function () {
    if ($(this).val()) {
        $(this).closest("div").addClass("filled");
    }
    else {
        $(this).closest("div").removeClass("filled");
    }
});
$("input#email").change(function () {
    if (!$(this).val() == '') {
        $(this).val().match('@') ? $("#email").removeClass('error') : $("#email").addClass('error');
    }
    else {
        $("#email").removeClass('error')
    }
});
$("input#colour").change(function () {
    var cor = $(this).val();
    cor == 'vermelho' || cor == 'red' ? cora = '#d02c2c' : false;
    cor == 'roxo' || cor == 'purple' || cor == 'violeta' || cor == 'violet' ? cora = '#6311aa' : false;
    cor == 'amarelo' || cor == 'yellow' ? cora = '#ffce00' : false;
    cor == 'laranja' || cor == 'orange' ? cora = '#f28200' : false;
    cor == 'azul' || cor == 'blue' ? cora = '#1c62e6' : false;
    cor == 'rosa' || cor == 'pink' ? cora = '#e64fb8' : false;
    cor == 'verde' || cor == 'green' ? cora = '#36c336' : false;
    //cor ==  'de burro quando foge'||'cor de burro quando foge' ? cora = '#7e7e59':false;
    if ($(this).val()) {
        $("#colour").addClass('cor');
        $(".cor").css('color', cora);
    }
    else {
        $("#colour").removeClass('cor');
    }
});



function newInfo(array){
     array = array || ['a', 'a', 'a', 'a', 'a'];
        return  `<div><table class="tab-list big">
					<colgroup>
						<col style="width: 180px">
						<col style="width: 380px">
					</colgroup>
					<tbody>
                            <tr>
						<th id="starname" colspan="2">`+array[0]+`</th>
					</tr>
					<tr><td class="namegy">Year: </td><td id="staryear">`+array[5]+`</td></tr>
					<tr><td class="namegy">Tools: </td><td id="startool">`+array[1]+`</td></tr>
					<tr><td class="namegy">Project: </td><td id="starjet">`+array[3]+`</td></tr>
					<tr><td class="namegy">Client / Instituition: </td><td id="starclient">`+array[2]+`</td></tr>
					<tr class="detgy"><td class="namegy">Details: </td><td id="startail">`+array[4]+`</td></tr>
				</tbody>
        </table></div>`
};
function newPic(category, path, imgname, rank, optName, arrau, classy,zoomclass) {
    optName = optName || "Picture";
    path = path || 'images/gallery/fullsize/' || 'portf/'; //"files/theme/gallery/";
    category = category || "Misc";
    arrau = arrau || ['a', 'a', 'a', 'a', 'a'];
    classy = classy || '';
    zoomclass = zoomclass || '';
    imgname == 'infograp' ? speclass = "speclas='toolong'" : speclass = "speclas='normal'";
    return `<div class="` + classy + `">

<!--<a
onclick='starlite(this)' ` + speclass + `
picto='./` + path + `fullsize/` + imgname + `.png'
staryear="` + arrau[5] + `"
startool="` + arrau[1] + `"
starclient="` + arrau[2] + `"
starjet="` + arrau[3] + `"
startail="` + arrau[4] + `"
starname="` + arrau[0] + `"

>-->

						<img class="` + zoomclass + `" src='./` + path + imgname + `.png' data-zoom-image='` + path + imgname + `.png' alt='` + optName + `'>

					</a></div>

			 `
};


function newPicZ(  imgname) {

    path =  'images/gallery/fullsize/elite/';

    return `<li><a>
						<img  src='./` + path + imgname + `.png' '>
					</a></li>	 `
};

$(window).bind('beforeunload', function() {

      $( "body" ).addClass('fadeout');


});

var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

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

// Tumeo's Image Loader
function ImageLoader(){function e(e){return e instanceof Object&&!(e instanceof Array)&&"function"!=typeof e}var n=0,t=[],o=document.createElement("load");document.head.appendChild(o),this.getCount=function(){return n},this.getContainer=function(){return o},this.getImages=function(){return t},this.clearImages=function(){t=[]},this.isLoaded=function(){return 0===n?!0:!1},this.onload=function(e,t){if("undefined"==typeof e)return console.warn("The onload method requires a callback, use isLoaded instead of onload!"),this.isLoaded();if("function"!=typeof e)throw new Error("Invalid callback!");t="number"==typeof t?t:100;var o=function(){0===n?e():setTimeout(o,t)};o()},this.load=function(r,a){a=a||{},n++;var c=document.createElement("img");if(e(a)){var s=0,u=Object.keys(a);for(i in a)c.setAttribute(u[s],a[i]),s++}else console.warn("%s%c%s%c%s%s%s%c%s","The attributes argument must be an ","color:#159","object","color:none","!","\nImage: "+r,"\nAttributes: ","color:#f22",a);return c.src=r,o.appendChild(c),c.onload=function(){o.removeChild(c),n--,this.onload=void 0},t.push(c),c}}



$(document).ready(function () {
       if (navigator.userAgent.indexOf('Edge') != -1||navigator.userAgent.indexOf('Safari') != -1){
              $('.bgtrans').removeClass('kak')
            }
    window.mobileAndTabletcheck = function () {
        // DETECT MOBILE AND TABLETS
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
                })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    // VAR SETUP
    var dumpo = ''
    var dumpoDVA = ''
    var dumpoTROIS = ''
    var dumpoCHETYRE = ''
    var WIDE = window.innerWidth
    var dockVal = 0
    WIDE <= 860 ? dockVal = 5 : dockVal = 7;
    // DIV-FILLING LOOPS
    // Front Page Roll
    for (var i = 0; i < 18; i++) {
        dumpo += newPicZ('elite (' + (i + 1) + ')');
    }
    //Galleries Feed
    for (var i in gallery) {

<<<<<<< HEAD
        dumpoDVA += newPic(gallery[i][1], 'images/gallery/', gallery[i][0], gallery[i][3], gallery[i][2], gallery[i][4], 'classy');
=======
        dumpoDVA += newPic(gallery[i][1], 'images/gallery/carouselle/', gallery[i][0], gallery[i][3], gallery[i][2], gallery[i][4], 'classy');
>>>>>>> origin/master
        dumpoTROIS += newPic(gallery[i][1], 'images/gallery/fullsize/', gallery[i][0], gallery[i][3], gallery[i][2], gallery[i][4], 'central', 'zoomer');
        dumpoCHETYRE += newInfo(gallery[i][4],gallery[i][1]);
    }
    //Galleries Print
    $('#digester').html(dumpo);
    $('#bygester').html(dumpoDVA);
    $('#bygester2').html(dumpoTROIS);
    $('#zominput').html(dumpoCHETYRE);
    //Slick Startup
    $('.banner').slick({
        infinite: true
        , slidesToShow: 1
        , slidesToScroll: 1
        , autoplay: true
        , autoplaySpeed: 1000
        ,fade: true
<<<<<<< HEAD
        , speed: 1550
=======
        , speed: 3550
>>>>>>> origin/master
        , arrows: true
        , dots: true

    });
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

        slidesToShow: dockVal - 2
        , slidesToScroll: dockVal - 2
        , asNavFor: '.slider-for'
        , centerMode: true
        , focusOnSelect: true
        , arrows: true
    });

    //PRELOD
    (function preloader() {
        image = new ImageLoader();
        for (var i = 0; i < gallery.length; i++) {
            image.load("images/gallery/fullsize/" + gallery[i][0] + ".png");
        }
        image.onload(function () {
            image.clearImages();
             $('#loader').animate({opacity: '0'},800);
            setTimeout(function () {

                $('.mulys').animate({
                    opacity: '1'
                }, 1200);

                console.log("DONE");
            }, 300);
            if (navigator.userAgent.indexOf('Edge') == -1||navigator.userAgent.indexOf('Safari') == -1){
              setTimeout(function () { $('.bgtrans').removeClass('kak'); }, 1000);
            }
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

function newInfo(array,cats) {
    array = array || ['a', 'a', 'a', 'a', 'a'];
    cats = cats || "MISC"
    return `<div class="`+cats+`"><table class="tab-list big">
<colgroup>
<col style="width: 180px">
<col style="width: 380px">
</colgroup>
<tbody>
<tr>
<th id="starname" colspan="2">` + array[0] + `</th>
</tr>
<tr><td class="namegy">Year: </td><td id="staryear">` + array[5] + `</td></tr>
<tr><td class="namegy">Tools: </td><td id="startool">` + array[1] + `</td></tr>
<tr><td class="namegy">Project: </td><td id="starjet">` + array[3] + `</td></tr>
<tr><td class="namegy">Client / Instituition: </td><td id="starclient">` + array[2] + `</td></tr>
<tr class="detgy"><td class="namegy">Details: </td><td id="startail">` + array[4] + `</td></tr>
</tbody>
</table></div>`
};

function newPic(category, path, imgname, rank, optName, arrau, classy, zoomclass) {
    optName = optName || "Picture";
    path = path || 'images/gallery/half/' || 'portf/'; //"files/theme/gallery/";
    category = category || "Misc";
    arrau = arrau || ['a', 'a', 'a', 'a', 'a'];
    classy = classy || '';
    zoomclass = zoomclass || '';
    imgname == 'infograp' ? speclass = "speclas='toolong'" : speclass = "speclas='normal'";
<<<<<<< HEAD
=======
    var path2 = "images/gallery/fullsize/";






    if(classy!="classy"){
        var outer = `<div class="overlayoutlink">

 <a onclick="javascript:window.open('`+path2+imgname+`.png','Windows','width=800,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,directories=no,status=no');return false" target="_blank">


<span class="fa fa-external-link"></span></a></div>`
    }else{var outer ="" }

>>>>>>> origin/master
    return `<div class="` + classy + ' ' + category +`">

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
` +outer+`
<img class="` + zoomclass + `" src='./` + path + imgname + `.png' data-zoom-image='` + path2 + imgname + `.png' alt='` + optName + `'>

</a></div>

`
};

function newPicZ(imgname) {
    path = 'images/gallery/fullsize/elite/';
    return `<li><a>
<img  src='./` + path + imgname + `.png' '>
</a></li>	 `
};
$(window).bind('beforeunload', function () {
    $("#topper").addClass('fadeout');
      $('#loader').animate({opacity: '0'},800);

});
var xhttp;
if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
}
else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}


$(window).on('load', function (e) {
    $('#loader').animate({
        opacity: '0'
    }, 800);
    setTimeout(function () {
        $('.things').animate({opacity: '1'},800);
        $('#topper').animate({
            opacity: '1'
        }, 800)
    }, 1000);
})


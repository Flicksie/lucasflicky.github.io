var backForth = 0;
var active = ".nav-1";
var anime_out = function(e){$('.anime').css('visibility', 'hidden') };
var anime_in = function(e){$('.anime').css('visibility', 'visible') };
//-------------HOVER---------------//
$('#blue').on('mouseover', function(e) {	
	paint("blue");
 });

$('#red').on('mouseover', function(e) {
		paint("red");
});

function paint(col){

		if (col == "blue"){
				$('.navbar').addClass('navbar-blu');
				$('.navbar').removeClass('navbar-red');
				$(document.body).animate({scrollTop: '0'},100);
		}else{
				$('.navbar').removeClass('navbar-blu');
				$('.navbar').addClass('navbar-red');
				$(document.body).animate({scrollTop: '0'},100);
		}
			
};


//-------------CLICK---------------//
function undo(col,lv){
	
dismissRed();
dismissBlue();
if (col=='red'){
    $('#visual').css('pointer-events', 'none');
    $('#audio').css('pointer-events', 'auto');
    $('#visual').animate({opacity: '0' }, 2000);
    if (lv==1){$('#audio').animate({opacity: '1' }, 2000);};	
    }
else{
    $('#visual').css('pointer-events', 'auto');
    $('#audio').css('pointer-events', 'none');
    if (lv==1){$('#visual').animate({opacity: '1' }, 2000);	};
    $('#audio').animate({opacity: '0' }, 2000);
    };
};
$('#blue').on('click', function(e) {	
 gotopg("audio");
 location.hash = "/audio";
});
$('#red').on('click', function(e) {	
 gotopg("visual");
  location.hash = "/visual";
});	
$('#visaud').on('click', function(e) {			
    resetPage('soft');
    allPassive();
    $('.nav-0').addClass('ativo');
});
$('#visaud2').on('click', function(e) {			
    resetPage('soft');
    allPassive();
    $('.nav-0').addClass('ativo');
});
//-------------TEMPORARY BUTTNS---------------//
//transformo os but em img ou div depois






$('#bkred').on('click', function(e) {	
    returneRed();
    undo('red');
	$(document.body).animate({scrollTop: '0'},500);
			location.hash = "";
});
$('#bkblu').on('click', function(e) {	
    returneBlu();

    undo('blue');
	$(document.body).animate({scrollTop: '0'},500);
			location.hash = "";
});
$('#bk').on('click',function(e) {
    $(this.parentElement).animate({top: '-100%'},800);  // <--- Global Back Button i hope
    allPassive();
    $(active).addClass('ativo');
	$(document.body).animate({scrollTop: '0'},500);
		location.hash = "";
});
$('#bkb').on('click',function(e) {
    $(this.parentElement).animate({right: '-100%'},800);  // <--- Global Back Button i hope
    allPassive();
    $(active).addClass('ativo');
	$(document.body).animate({scrollTop: '0'},500);
		location.hash = "";
	
	
});$('#bkbpj').on('click',function(e) {
    $(this.parentElement).animate({bottom: '-100%'},800);  // <--- Global Back Button i hope
    allPassive();
    $(active).addClass('ativo');
	$(document.body).animate({scrollTop: '0'},500);
		location.hash = "";
});
//-------------FUNCTIONFEST---------------//
    function firstAlt(){document.getElementById('headline-intro').innerHTML = "Wanna see something else?"};
    function goTo(target){ $(target).animate({top: '5%'},800);};
    function goToL(target){ $(target).animate({right: '0px'},800);};
    function goToP(){ $('#Projects').animate({bottom: '0%'},1000);  };
	
	function callBlue()	{ setTimeout("$('#blurestrain').animate({opacity: '1'},600);",1100);  $('#blurestrain').css('pointer-events', 'auto');}
	function callRed()	{ setTimeout("$('#redrestrain').animate({opacity: '1'},600);",1100);  $('#redrestrain').css('pointer-events', 'auto');}

	function dismissBlue()	{ $('#blurestrain').animate({opacity: '0'},400); $('#blurestrain').css('pointer-events', 'none');}
	function dismissRed()	{ $('#redrestrain').animate({opacity: '0'},400); $('#redrestrain').css('pointer-events', 'none');}
    function returneBlu(){
        backForth < 1 ? firstAlt() : alternates();
        $('.button-capsule').css('pointer-events', 'none');
        $('#landing').css('pointer-events', 'auto');
        $('.containera').css('pointer-events', 'auto');
        $('#landing').animate({left: '0%',right: '0%'}, 0000);
        $('#landblu').animate({top: '30%',right: '40%',width: '193px'}, 1100);
        $('#bkblu').animate({left: '-5%'}, 500);
        backForth += 1;
        $('body').css('overflow-y', 'hidden');
        setTimeout("document.getElementById('visaud').innerHTML = '';",150);
		
		
		
        active = ".nav-1";
        allPassive();
        $('.nav-1').addClass('ativo');
		$(document.body).animate({scrollTop: '0'},500);
		anime_in()
		 
    };
    function returneRed(){
        backForth < 1 ? firstAlt() : alternates();
        $('.button-capsule').css('pointer-events', 'none');
        $('#landing').css('pointer-events', 'auto');
        $('.containera').css('pointer-events', 'auto');
        $('#landing').animate({right: '0%',left: '0%'}, 0000);
        $('#landred').animate({top: '30%',left: '35%',width: '193px'}, 1100);
        $('#bkred').animate({right: '-5%'}, 500);
        backForth += 1;
        $('body').css('overflow-y', 'hidden');
        setTimeout("document.getElementById('visaud').innerHTML = '';",150);
        active = ".nav-1";
        allPassive();
        $('.nav-1').addClass('ativo');
		$(document.body).animate({scrollTop: '0'},500);
		anime_in()
    }
    function alternates(){
    //misqueci como é case em js 
		$(document.body).animate({scrollTop: '0'},500);
        if (backForth > 1){
        document.getElementById('headline-intro').innerHTML = "Missed something?";
        }; 
        if (backForth == 3){
        document.getElementById('headline-intro').innerHTML = "Still Browsing?";
        }; 
        if (backForth == 4){
        document.getElementById('headline-intro').innerHTML = "Did you check the blog out?";
        }; 
        if (backForth == 5){
        document.getElementById('headline-intro').innerHTML = "Need Help? I'd Recommend the <a onclick=\"goTo(\'#contactw\');\">contactw Form</a>";
        }; 
    };
	
	//document.body.scrollTop = 0

$('#home').on('click',function(e) { go_home();});	

$('#home2').on('click',function(e) { go_home();});	


    function resetPage(type){
		
    if (type == 'hard'){
        returneBlu();
        returneRed();
        setTimeout("document.getElementById('visaud').innerHTML = '';",150);
        active = ".nav-1"
		dismissRed();
		dismissBlue();
		
        };
		$(document.body).animate({scrollTop: '0'},500);
        $('body').animate({margin: '0 0 0 0'},1000);
        $('#contactw').animate({top: '-100%'},500);
        $('#Projects').animate({bottom: '-100%'},500);
        $('#about').animate({right: '-100%'},500);
        $('body').css('overflow-y', 'hidden');
		
	document.body.scrollTop = 0
    };
    function allZto5(){
    $('#about').css('z-index', '5000');
    $('#contactw').css('z-index', '5000');
    $('#projects').css('z-index', '5000');
    $('#blog').css('z-index', '5000');
    };
//--------------------------------------------------------------
function allPassive(){
$('.nav-0').removeClass('ativo');
$('.nav-1').removeClass('ativo');
$('.menuitem').removeClass('ativo');
	$(document.body).animate({scrollTop: '0'},500);

};



    $('.menuitem').on('click',function(e) {
        $(this).addClass('ativo');
    });
    ////////////////////////////
	
	
	
	








function gotopg(input){

	var	home 		= ".nav-1",
			projects 	= ".nav-2",
			blog 		= ".nav-3",
			about		= ".nav-6",
			contact	= ".nav-7";
		console.log(input)	

	switch(input){
		case "about":
			paint("red");
			go_about();
			allPassive();
			$(about).addClass('ativo');
			break;
			
		case "home":
			paint("red");
			go_home();
			allPassive();
			$(home).addClass('ativo');
				location.hash = "";
			break;
			
		case "contact":
			paint("red");
			go_contact();
			allPassive();
			$(contact).addClass('ativo');
			break;
			
		case "portfolio":
			paint("red");
			go_visual();
			break;
			
		
		case "visual":
			paint("red");
			go_visual();
			allPassive();
		break;
			
		
		case "audio":
			paint("blue");
			go_audio();
		break;
			
			
		case "music":
			paint("blue");
			go_audio();
		break;
			

		case "audio":
			paint("blue");
			go_audio();
			break;
		
		case "illustration":
			paint("red");
			go_visual();
			break;
			
		
		case "art":
			go_visual();
			paint("red");
			break;
			
		
		case "gallery":
			go_visual();
			paint("red");
			break;
			
		
		case "projects":
			go_projects();
			paint("red");
			allPassive();
			$(projects).addClass('ativo');
			
			break;
			
		
		default: 
			
			paint("red");
			go_home();
			allPassive();
			$(home).addClass('ativo');
			location.hash = "";
			
			break;
		

	
	
	};
};

function go_about(){
    allPassive();
    resetPage('soft');
    goToL('#about');
};
function go_contact(){
    allPassive();
    resetPage('soft');
    goTo('#contactw');
};
function go_home(){
	dismissRed();
	dismissBlue();
    allPassive();
    $('.nav-1').addClass('ativo');
    resetPage('hard');
    $('#red').animate({right: '0%', left: '0'},0);
    $('#blue').animate({left: '50%', right: '0%'});
    $('body,html').animate({scrollTop: '0'},1000);
		location.hash = "";
};
function go_projects(){
	allPassive();
    resetPage('soft');
    $('#Projects').animate({bottom: '0%'},1000);
};
function go_audio(){
	
	$('.button-capsule').css('pointer-events', 'auto');
    $('#landing').css('pointer-events', 'none');
    $('.containera').css('pointer-events', 'none');
    $('#landing').animate({left: '-85%', right: '85%' }, 1);
    $('#landblu').animate({top: '10%',right: '5%',width: '20%'}, 1100);
    undo('red',1);
    $('#bkblu').animate({left: '5%'}, 1100);
    active=".nav-0"
    document.getElementById('visaud').innerHTML = "AUDIO";
    //mobmendocument.getElementById('visaud2').innerHTML = "AUDIO";
    allPassive();
    $('.nav-0').addClass('ativo');
	$(document.body).animate({scrollTop: '0'},500);
anime_out();
callBlue();
	
}
function go_visual(){
	
	   $('.button-capsule').css('pointer-events', 'auto');
    $('#landing').css('pointer-events', 'none');
    $('.containera').css('pointer-events', 'none');
    $('#landing').animate({right: '-85%', left: '85%'}, 1);
    $('#landred').animate({top: '10%',left: '5%',width: '20%'}, 1100);
    undo('blue',1);
    $('#bkred').animate({right: '5%'}, 1100);
active=".nav-0"
    document.getElementById('visaud').innerHTML = "VISUAL";
   //mobmen document.getElementById('visaud2').innerHTML = "VISUAL";
allPassive();
    $('.nav-0').addClass('ativo');
	$(document.body).animate({scrollTop: '0'},500);
anime_out();
callRed();
	
}
	
///////////////////////////
$('#memenu').on('click', function(e) {	
$('#darknes').animate({left: '0%'},00);
    $('#memeno').animate({left: '0%'},600);
    $('body').animate({margin: '0 0 0 150px'},600);
$('#darknes').animate({opacity: '.5'},600);
$(document.body).animate({scrollTop: '0'},500);
});	$('#memeno').on('click', function(e) {	
$('#darknes').animate({opacity: '0'},600);
    $('body').animate({margin: '0 0 0 0'},600);
    $('#memeno').animate({left: '-150px'},600);
    $('#darknes').animate({left: '-100%'},000);
$(document.body).animate({scrollTop: '0'},500);
});
function printProj(name,category,displayPic,icon,describ){
name = name			 	|| "Nome do Projeto"
category = category		|| "Categoria"
displayPic =displayPic	|| "placeholder.png"
icon = icon				|| "favicon.png"
describ = describ		|| "Lorem ipsum dolor sit amet consectetur adipiscing elit."
return `<table  class="tg" style="table-layout: margin-bottom: 10px; fixed; width: 100%"> 
	<colgroup>
		<col style="width: 50px"><col style="width: 150px">
	</colgroup>
	<tr>
	<!-- CREST ICON -->
		<th class="crest">
			<img class="crestpic" title="`+ category + `" src="images/`+ icon +`">
		</th>
	<!-- NAME -->
		<th align="left" class="name" colspan="3">`+ name +`</th> <!-- Espacinho -->
	<!-- TIER -->
		<th align="left" class="tiername"><span class="tierlevel">` + category + `</th>
	</tr>
	
	<tr>
		<!-- PROFILE PIC -->
		<td align="center" class="profilepic" colspan="2" rowspan="5"><a target="_blank" ><img class="profile" src="images/` + displayPic + `"></a></td><tr><td HEIGHT="12px" colspan="2" ></td></tr>
	</tr>
	<tr>
		<!-- DESCRIB -->
		<td class="badges" colspan="4">	 `+ describ +` </td>
	</tr>
	<tr>
		<td class="badges"></td>
		<td class="badges" width="85%"></td>	
			<td colspan="1"  class="badges2"> <a href="#"> DETAILS > </a></td>
		
	</tr>
</table>`
			
}
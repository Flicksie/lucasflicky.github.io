<script>

var backForth = 0;
var active = ".nav-1"
	//-------------HOVER---------------//

	$('#blue').on('mouseover', function(e) {	
		//$('.navbar').css('border-top', 'solid #3c56b5 5px');
		//$('.ativo').css('background', '#3c56b5');
		//$('menuitem a:hover').css('background', '#363676');
		$('.navbar').addClass('navbar-blu');
		$('.navbar').removeClass('navbar-red');
	});
	
		$('#red').on('mouseover', function(e) {	
		//$('.navbar').css('border-top', 'solid #f63636 5px');
		//$('.ativo').css('background', '#f63636');
		//$('menuitem a:hover').css('background', '#A63636');
		$('.navbar').removeClass('navbar-blu');
		$('.navbar').addClass('navbar-red');
	});
	
	//-------------CLICK---------------//
	
	$('#blue').on('click', function(e) {	
		$('.button-capsule').css('pointer-events', 'auto');
		$('#landing').css('pointer-events', 'none');
		$('.containera').css('pointer-events', 'none');
		$('#landing').animate({left: '-85%', right: '85%' }, 1);
		$('#landblu').animate({top: '10%',right: '5%',width: '20%'}, 1100);
		$('#visual').css('visibility', 'hidden');	
		$('#audio').css('visibility', 'visible');
		$('#bkblu').animate({left: '5%'}, 1100);
		
		active=".nav-0"
		document.getElementById('visaud').innerHTML = "AUDIO";
		allPassive();
		$('.nav-0').addClass('ativo');
	
	});
	
	$('#red').on('click', function(e) {	
		$('.button-capsule').css('pointer-events', 'auto');
		$('#landing').css('pointer-events', 'none');
		$('.containera').css('pointer-events', 'none');
		$('#landing').animate({right: '-85%', left: '85%'}, 1);
		$('#landred').animate({top: '10%',left: '5%',width: '20%'}, 1100);
		$('#audio').css('visibility', 'hidden');
		$('#visual').css('visibility', 'visible');
		$('#bkred').animate({right: '5%'}, 1100);
		
	active=".nav-0"
		document.getElementById('visaud').innerHTML = "VISUAL";
	allPassive();
		$('.nav-0').addClass('ativo');
	});	
	
	
	
	$('#visaud').on('click', function(e) {			
	
		resetPage('soft');
		allPassive();
		$('.nav-0').addClass('ativo');

	});
	
	
	
	
	
	
	//-------------TEMPORARY BUTTNS---------------//

	//transformo os but em img ou div depois
	
	$('#bkred').on('click', function(e) {	
		returneRed();
	});
	
	$('#bkblu').on('click', function(e) {	
		returneBlu();
	});
	$('#bk').on('click',function(e) {
		$(this.parentElement).animate({top: '-100%'},800);  // <--- Global Back Button i hope
		allPassive();
		$(active).addClass('ativo');
	});
	$('#bkb').on('click',function(e) {
		$(this.parentElement).animate({right: '-100%'},800);  // <--- Global Back Button i hope
		allPassive();
		$(active).addClass('ativo');
	});

	//-------------FUNCTIONFEST---------------//
	
		function firstAlt(){document.getElementById('headline-intro').innerHTML = "Wanna see something else?"};
		function goTo(target){ $(target).animate({top: '5%'},800);};
		function goToL(target){ $(target).animate({right: '0px'},800);};

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
		}
		
		function alternates(){
		//misqueci como é case em js 
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
			document.getElementById('headline-intro').innerHTML = "Need Help? I'd Recommend the <a onclick=\"goTo(\'#contact\');\">Contact Form</a>";
			}; 
		};
		
		function resetPage(type){
		if (type == 'hard'){
			returneBlu();
			returneRed();
			setTimeout("document.getElementById('visaud').innerHTML = '';",150);
			active = ".nav-1"
			};
			$('#contact').animate({top: '-100%'},500);
			$('#about').animate({right: '-100%'},500);
			$('body').css('overflow-y', 'hidden');
			
		};
		
		function allZto5(){
		$('#about').css('z-index', '5000');
		$('#contact').css('z-index', '5000');
		$('#projects').css('z-index', '5000');
		$('#blog').css('z-index', '5000');
		};
	
	//--------------------------------------------------------------
	
function allPassive(){
$('.nav-0').removeClass('ativo');
$('.menuitem').removeClass('ativo');
};

		
		
		$('.menuitem').on('click',function(e) {
			$(this).addClass('ativo');
		});
		
		
	$('#aboutgo').on('click',function(e) {
		allPassive();
		resetPage('soft');
		goToL('#about');
		
	});

	$('#contactgo').on('click',function(e) {
		allPassive();
		resetPage('soft');
		goTo('#contact');

	});

	$('#home').on('click',function(e) {
	
		allPassive();
		$('.nav-1').addClass('ativo');
		resetPage('hard');
		$('#red').animate({right: '0%', left: '0'},0);
		$('#blue').animate({left: '50%', right: '0%'});
		$('body,html').animate({scrollTop: '0'},1000);
	});

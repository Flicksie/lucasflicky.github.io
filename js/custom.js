var siteLang;
if(!localStorage.locale){
 	siteLang = 'en-uk';
	localStorage.setItem('locale', siteLang);
}else {
	siteLang = localStorage.locale;
}

setlang(siteLang);

var backForth = 0;
var active = ".nav-1";


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
		if (location.hash.substring(2) == 'blog' ){
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


//-----------------ANIMATION-----------------//

var anime_out = function (e) {
	$('.anime').css('visibility', 'hidden')
};
var anime_in = function (e) {
	$('.anime').css('visibility', 'visible')
};

$('#blue').on('click', function (e) {
	gotopg("audio");
	location.hash = "/audio";
});
$('#red').on('click', function (e) {
	gotopg("visual");
	location.hash = "/visual";
});


//-------------MOUSEOVER EVENTS---------------//

$('#blue').on('mouseover', function (e) {
	paint("blue");
});
$('#red').on('mouseover', function (e) {
	paint("red");
});



//-------------CLICK EVENTS---------------//

/* MENU */

$('#visaud').on('click', function (e) {
	resetPage('soft');
	allPassive();
	$('.nav-0').addClass('ativo');
	$('#Projects').fadeOut();
});
$('#visaud2').on('click', function (e) {
	resetPage('soft');
	allPassive();
	$('.nav-0').addClass('ativo');
	$('#Projects').fadeOut();
});
$('#home').on('click', function (e) {
	go_home();
	$('#Projects').fadeOut();
});
$('#home2').on('click', function (e) {
	go_home();
	$('#Projects').fadeOut();
});
$('.menuitem').on('click', function (e) {
	$(this).addClass('ativo');
});
$('#memenu').on('click', function (e) {
	$('#darknes').animate({
		left: '0%'
	}, 00);
	$('#memeno').animate({
		left: '0%'
	}, 600);
	$('body').animate({
		margin: '0 0 0 150px'
	}, 600);
	$('#darknes').animate({
		opacity: '.5'
	}, 600);
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
});
$('#memeno').on('click', function (e) {
	$('#darknes').animate({
		opacity: '0'
	}, 600);
	$('body').animate({
		margin: '0 0 0 0'
	}, 600);
	$('#memeno').animate({
		left: '-150px'
	}, 600);
	$('#darknes').animate({
		left: '-100%'
	}, 000);
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
});

/* BACK BUTTONS */

$('#bkred').on('click', function (e) {
	returneRed();
	undo('red');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	location.hash = "";
});
$('#bkblu').on('click', function (e) {
	returneBlu();

	undo('blue');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	location.hash = "";
});
$('#bk').on('click', function (e) {
	$('#shadows').fadeOut();

	$(this.parentElement).animate({
		top: '-100%'
	}, 800); // <--- Global Back Button i hope
	allPassive();
	$(active).addClass('ativo');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	location.hash = "";
});
$('#bkb').on('click', function (e) {
	$('#shadows').fadeOut();
	$(this.parentElement).animate({
		right: '-100%'
	}, 800); // <--- Global Back Button i hope
	allPassive();
	$(active).addClass('ativo');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	location.hash = "";


});
$('#bkbpj').on('click', function (e) {
	$('#shadows').fadeOut();
	$(this.parentElement).animate({
		bottom: '-100%'
	}, 800); // <--- Global Back Button i hope
	allPassive();
	$(active).addClass('ativo');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	$('#Projects').hide();
	location.hash = "";
});



//-------------CHANGE EVENTS---------------//


$("input, textarea").change(function () {
	if ($(this).val()) {
		$(this).closest("div").addClass("filled");
	} else {
		$(this).closest("div").removeClass("filled");
	}
});
$("input#email").change(function () {
	if (!$(this).val() == '') {
		$(this).val().match('@') ? $("#email").removeClass('error') : $("#email").addClass('error');
	} else {
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
	} else {
		$("#colour").removeClass('cor');
	}

});


//-------------FUNCTIONFEST---------------//

function firstAlt() {
	siteLang != 'en-uk' ? visa = ["style='display:none'", "style='display:inherit'"] : visa = ["style='display:inherit'", "style='display:none'"];

	document.getElementById('headline-intro').innerHTML = `
<span class='en-uk' lang='en-gb' ` + visa[0] + `> Wanna see something else?</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Quer ver mais alguma coisa?</span>
`;


};
function alternates() {

	$(document.body).animate({
		scrollTop: '0'
	}, 500);

	siteLang != 'en-uk' ? visa = ["style='display:none'", "style='display:inherit'"] : visa = ["style='display:inherit'", "style='display:none'"];

	switch (backForth) {

	case 2:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> Missed something?</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Esqueceu algo?</span>
`;
		break;




	case 3:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> Still Browsing?</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Ainda por aí?</span>
`;
		break;

	case 4:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> If you can understand Brazilian Portuguese how about checking the <a href='#/blog'>Blog</a> out? </span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Você que fala português, que tal uma olhada no <a href='#/blog'>Blog</a> ? </span>
`;
		break;

	case 5:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> Need Help? Toss me a message at the <a onclick=\"goTo(\'#contactw\');\">Contact Form</a></span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Precisa de ajuda? Me manda uma <a onclick=\"goTo(\'#contactw\');\">mensagem</a> e vamos resolver isso.</span>
`;
		break;

	case 7:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `>  Are you lost? </span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `>  Está perdido? </span>
`;
		break;

	case 10:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> I wonder what is keeping you around for this long...</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Me pergunto o que te segura aqui por tanto tempo...</span>
`;
		break;

	case 11:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> You know, you've came to the home screen kinda, 10 times already</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Sabe, essa é a décima vez que você passa pela Home</span>
`;
		break;

	case 12:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> Maybe you're having fun with the homepage sliding animation?</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Talvez você esteja brincando com o slide da página inicial?</span>
`;
		break;

	case 13:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> I see, but we're missing the point here.</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Pois é, mas não acha que estamos nos distraindo aqui?</span>
`;
		break;

	case 14:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> I think that at the <a href='http://blog.lucasflicky.com'>Blog</a> you would spend this time more usefully...</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Acho que no <a href='http://blog.lucasflicky.com'>Blog</a> esse tempo seria gasto de forma mais útil...</span>
`;
		break;

	case 15:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> ...or not...</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> ...ou não...</span>
`;
		break;

	case 16:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> Did I ever mention you can schedule a personal meeting if you prefer?</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Já mencionei que você pode agendar uma reunião pessoalmente se você preferir?</span>
`;
		break;

	case 17:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> Well, this is, if you are willing to come to Porto Alegre - Brazil, in order to do so</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> Bom, isto é, se você puder vir à Porto Alegre - RS, para que isso seja possível.</span>
`;
		break;

	case 18:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `>  </span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `>  </span>
`;
		break;
	default:
		document.getElementById('headline-intro').innerHTML =
			`
<span class='en-uk' lang='en-gb' ` + visa[0] + `> What are you looking for?</span>
<span class='pt-br' lang='pt-br' ` + visa[1] + `> O que você procura?</span>
`;
		break;
	};
};
function undo(col, lv) {

	dismissRed();
	dismissBlue();
	if (col == 'red') {
		$('#visual').css('pointer-events', 'none');
		$('#audio').css('pointer-events', 'auto');
		$('#visual').animate({
			opacity: '0'
		}, 2000);
		if (lv == 1) {
			$('#audio').animate({
				opacity: '1'
			}, 2000);
		};
	} else {
		$('#visual').css('pointer-events', 'auto');
		$('#audio').css('pointer-events', 'none');
		if (lv == 1) {
			$('#visual').animate({
				opacity: '1'
			}, 2000);
		};
		$('#audio').animate({
			opacity: '0'
		}, 2000);
	};
};
function paint(col) {

	if (col == "blue") {
		$('.navbar').addClass('navbar-blu');
		$('.navbar').removeClass('navbar-red');
		$(document.body).animate({
			scrollTop: '0'
		}, 100);
	} else {
		$('.navbar').removeClass('navbar-blu');
		$('.navbar').addClass('navbar-red');
		$(document.body).animate({
			scrollTop: '0'
		}, 100);
	}

};

// CALLS //--------------

function goTo(target) {
	$(target).animate({
		top: '5%'
	}, 800);
};

function goToL(target) {
	$(target).animate({
		right: '0px'
	}, 800);
};

function goToP() {
		$('#Projects').show();
	$('#Projects').animate({
		bottom: '0%'
	}, 1000);

};

function callBlue() {
	setTimeout("$('#blurestrain').fadeIn();", 1100);
	$('#blurestrain').css('pointer-events', 'auto');
}

function callRed() {
	setTimeout("$('#redrestrain').fadeIn()", 1100);
	$('#redrestrain').css('pointer-events', 'auto');
}

// PAGES //--------------

function callBlog() {
	$('#shadows').fadeOut();
	setTimeout(" $('#notice').addClass('active'); ", 800);;
	$('#notice').show();
	$('#wrapshit').fadeOut();
	$('#blogframe').html('<iframe src="http://blog.lucasflicky.com"></iframe>');
	$('#blogframe').fadeIn();
	active = ".nav-3";
	resetPage('soft');
	allPassive();
};

function gotopg(input) {

	var home = ".nav-1",
		projects = ".nav-2",
		blog = ".nav-3",
		about = ".nav-6",
		contact = ".nav-7";


	switch (input) {
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
	case "blog":
		callBlog();
		paint("red");
		allPassive();
		$(blog).addClass('ativo');

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

function go_about() {
	$('#shadows').fadeIn();
	allPassive();
	resetPage('soft');
	goToL('#about');
};

function go_contact() {
	$('#shadows').fadeIn();
	allPassive();
	resetPage('soft');
	goTo('#contactw');
};

function go_home() {
	$('#shadows').fadeOut();
	dismissRed();
	dismissBlue();
	dismissBlog()
	allPassive();
	$('.nav-1').addClass('ativo');
	resetPage('hard');
	$('#red').animate({
		right: '0%',
		left: '0'
	}, 0);
	$('#blue').animate({
		left: '50%',
		right: '0%'
	});
	$('body,html').animate({
		scrollTop: '0'
	}, 1000);
	location.hash = "";
};

function go_projects() {
	$('#Projects').show();
	$('#shadows').fadeIn();
	allPassive();
	resetPage('soft');
	$('#Projects').animate({
		bottom: '0%'
	}, 1000);
};

function go_audio() {
			$('#blue').fadeOut;
	dismissBlog();

	$('#shadows').fadeOut();
	$('.button-capsule').css('pointer-events', 'auto');
	$('#landing').css('pointer-events', 'none');
	$('.containera').css('pointer-events', 'none');
	$('#landing').animate({
		left: '-85%',
		right: '85%'
	}, 1);

	$('#landblu').animate({
		top: '10%',
		right: '5%',
		width: '20%'
	}, 1100);
	undo('red', 1);
	$('#bkblu').animate({
		left: '5%'
	}, 1100);
	active = ".nav-0"
	document.getElementById('visaud').innerHTML = "AUDIO";
	//mobmendocument.getElementById('visaud2').innerHTML = "AUDIO";
	allPassive();
	$('.nav-0').addClass('ativo');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	anime_out();

	callBlue();

}

function go_visual() {
	dismissBlog();
	$('#shadows').fadeOut();
	$('#alletaleB').click();
	$('#alletale').click();
	$('.button-capsule').css('pointer-events', 'auto');
	$('#landing').css('pointer-events', 'none');
	$('.containera').css('pointer-events', 'none');
	$('#landing').animate({
		right: '-85%',
		left: '85%'
	}, 1);
	$('#landred').animate({
		top: '10%',
		left: '5%',
		width: '20%'
	}, 1100);
	undo('blue', 1);
	$('#bkred').animate({
		right: '5%'
	}, 1100);
	active = ".nav-0"
	document.getElementById('visaud').innerHTML = "VISUAL";
	//mobmen document.getElementById('visaud2').innerHTML = "VISUAL";
	allPassive();
	$('.nav-0').addClass('ativo');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	anime_out();
	callRed();

}

// DISMISS //--------------

function dismissBlue() {
	$('#blurestrain').fadeOut();
	$('#blurestrain').css('pointer-events', 'none');
}

function dismissRed() {
	$('#redrestrain').fadeOut();
	$('#redrestrain').css('pointer-events', 'none');
}

function returneBlu() {
	backForth < 1 ? firstAlt() : alternates();
	$('.button-capsule').css('pointer-events', 'none');
	$('#landing').css('pointer-events', 'auto');
	$('.containera').css('pointer-events', 'auto');
	$('#landing').animate({
		left: '0%',
		right: '0%'
	}, 0000);
	$('#landblu').animate({
		top: '30%',
		right: '40%',
		width: '193px'
	}, 1100);
	$('#bkblu').animate({
		left: '-5%'
	}, 500);
	backForth += 1;
	$('body').css('overflow-y', 'hidden');
	setTimeout("document.getElementById('visaud').innerHTML = '';", 150);



	active = ".nav-1";
	allPassive();
	$('.nav-1').addClass('ativo');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	anime_in()

};

function returneRed() {
	backForth < 1 ? firstAlt() : alternates();
	$('.button-capsule').css('pointer-events', 'none');
	$('#landing').css('pointer-events', 'auto');
	$('.containera').css('pointer-events', 'auto');
	$('#landing').animate({
		right: '0%',
		left: '0%'
	}, 0000);
	$('#landred').animate({
		top: '30%',
		left: '35%',
		width: '193px'
	}, 1100);
	$('#bkred').animate({
		right: '-5%'
	}, 500);
	backForth += 1;
	$('body').css('overflow-y', 'hidden');
	setTimeout("document.getElementById('visaud').innerHTML = '';", 150);
	active = ".nav-1";
	allPassive();
	$('.nav-1').addClass('ativo');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	anime_in()
}

function dismissBlog() {
	$('#notice').removeClass('active');
	setTimeout(" $('#notice').hide(); ", 800);
	$('#wrapshit').fadeIn();
	$('#blogframe').fadeOut();
};

// RESET //--------------

function resetPage(type) {

	if (type == 'hard') {
		returneBlu();
		returneRed();
		setTimeout("document.getElementById('visaud').innerHTML = '';", 150);
		active = ".nav-1"
		dismissRed();
		dismissBlue();
		dismissBlog();

	};
	$(document.body).animate({
		scrollTop: '0'
	}, 500);
	$('body').animate({
		margin: '0 0 0 0'
	}, 1000);
	$('#contactw').animate({
		top: '-100%'
	}, 500);
	$('#Projects').animate({
		bottom: '-100%'
	}, 500);
	$('#about').animate({
		right: '-100%'
	}, 500);
	$('body').css('overflow-y', 'hidden');

	document.body.scrollTop = 0

};

function allZto5() {
	$('#about').css('z-index', '5000');
	$('#contactw').css('z-index', '5000');
	$('#projects').css('z-index', '5000');
	$('#blog').css('z-index', '5000');
};

function allPassive() {
	$('.nav-0').removeClass('ativo');
	$('.nav-1').removeClass('ativo');
	$('.menuitem').removeClass('ativo');
	$(document.body).animate({
		scrollTop: '0'
	}, 500);

};

// FILLERS //--------------

function printProj(name, category, displayPic, icon, describ, role, link, coparts) {
	name = name || "Nome do Projeto"
	category = category || "Categoria"
	displayPic = displayPic || "placeholder.png"
	icon = icon || "favicon.png"
	describ = describ || "Lorem ipsum dolor sit amet consectetur adipiscing elit."
	role = role || "Role"
	link = link || "link"
	coparts = coparts || 'undefined'

	var caption = "See More"
	var href = ""
	var state = "disabled"

	if (link.match("http")) {
		href = link;
		state = "enabled";

	} else {
		caption = link;
		state = "disabled";
	};

	coparts = coparts.split(';');
	var guylist = '';

	for (var i in coparts) {

		var guy = coparts[i].split(':');
		if (coparts[i] != "undefined") {
			guylist += ("<tr><td class='namegy'>" + guy[0] + "</td><td>" + guy[1] + "</td></tr>");
		}
	};

	guylist != '' ? colle = `
<table class="tab-list">
<colgroup>
<col style="width: 180px">
<col style="width: 380px">
</colgroup>
  <tr>
    <th colspan="2"> Colleagues: </th>
  </tr>
` + guylist + `
</table>
` : colle = '';









	return `<table  class="tg" style="table-layout: margin-bottom: 10px; fixed;">
	<colgroup>
		<col style="width: 50px">
		<col style="width: 150px">
		<col style="width: 450px">
		<col style="width: 150px">
	</colgroup>
	<tr class="tabhead">
	<!-- ICON -->
		<th class="crest">
			<img class="crestpic" title="` + category + `"> <!-- NOTE: essa imagem é mesmo necessária aqui? -->
		</th>
	<!-- NAME -->
		<th align="left" class="name" colspan="3">` + name.toUpperCase() + `</th> <!-- Espacinho -->
	<!-- TIER -->
		<th align="left" class="tiername"><span class="tierlevel">` + category + `</th>
	</tr>
	<tr>
		<!-- PROFILE PIC -->
		<td align="center" class="profilepic" colspan="2" rowspan="5"><a target="_blank" ><img class="profile" src="images/project/` + displayPic + `"></a></td><tr><td class="blankline"  colspan="3" ></td></tr>
	</tr>
	<tr>
		<!-- DESCRIB -->
		<td class="badges" colspan="3" rowspan="1">	 ` + describ + `<br><span class="role"> (` + role + `) </span>
		</td>
	</tr>
		<tr>
			<td  colspan="2" rowspan="2">
			` + colle + `
			</td><td></td>
		</tr>
		<tr>
		<td style="width:350px;height:45px!important;" colspan="1" rowspan="1" class="badges2 ` + state + `"> <a href="` + href + `">` + caption + ` </a></td>
		</tr>
</table>`

};

function printProjSimple(name, category, displayPic, icon, describ, role, link) {
	name = name || "Nome do Projeto"
	category = category || "Categoria"
	displayPic = displayPic || "placeholder.png"
	icon = icon || "favicon.png"
	describ = describ || "Lorem ipsum dolor sit amet consectetur adipiscing elit."
	role = role || "Role"
	link = link || "link"

	var caption = "Details"
	var href = ""
	var state = "disabled"

	if (link.match("http")) {
		href = link;
		state = "enabled";

	} else {
		caption = "N/A";
		state = "disabled";
	};



	return `
<table class="tablera">
<colgroup>
<col style="width: 50px">
<col style="width: 100%">
<col style="width: 30%">
</colgroup>
  <tr>
    <th class="taitoru" colspan="3">` + name + `</th>
  </tr>
  <tr>
    <td class="taitoIc"> <img class="tabP" src="images/project/` + displayPic + `"> </td>
    <td class="taitoDesc">` + role + `</td>
    <td class="taitoBut  ` + state + `"  >	<a href="` + href + `">` + caption + ` </a>	</td>
  </tr>
</table>`

};

function newPicMO(category, path, imgname, rank, optName, i, arrau) {

		optName = optName || "Picture";
		path = path || 'images/gallery/'; //"files/theme/gallery/";
		category = category || "Misc";


		return `<div class="galleryMOB">
<div class="imgframe">
<a href="./` + path + 'fullsize/' + imgname + `.png"> <img class="galM" src="./` + path + imgname + `.png">
</img></a>
</div>
</div>`
	};

function newPic(category, path, imgname, rank, optName, arrau) {

	optName = optName || "Picture";
	path = path || 'images/gallery/' || 'portf/'; //"files/theme/gallery/";
	category = category || "Misc";
	arrau = arrau || ['a','a','a','a','a']

	imgname == 'infograp' ? speclass = "speclas='toolong'" : speclass = "speclas='normal'";

	return `<div id='feed-imageContainer'
style='float:center;position: absolute; left: 0px; top: 0px; transform: translate(0px, 0px) scale(0.001); opacity: 1;'
class='blockelement element ` + category + ` isotope-item isotope-item'>
	<div style='position:absolute;z-index:0;width:100%;margin-top:25px;text-align:center;'>` + '' + `</div>
	<div class='blockcontent'>
		<div class='elements'>
			<div>
				<div class='gal-image'>
					<a
onclick='starlite(this)' `+speclass+`
picto='./` + path + `fullsize/` + imgname + `.png'
staryear="`+arrau[5]+`"
startool="`+arrau[1]+`"
starclient="`+arrau[2]+`"
starjet="`+arrau[3]+`"
startail="`+arrau[4]+`"
starname="`+arrau[0]+`"
>
						<img  src='./` + path + imgname + `.png' alt='` + optName + `'>
					</a>
				</div>
			</div>
		</div>
	</div>
</div> `

};

function feed() {

	for (var i in gallery) {

		//console.log('loop #'+i)


		var seq = seq || [];
		var seqB = seqB || [];

		function randomFeed(u) {
			var out = seq[u];
			var outB = seqB[u];
			if (Math.round(Math.random() * 100) % 3 > 0) {
				//document.getElementById("feed-gallery").innerHTML

				seq[u] += newPic(gallery[i][1], '', gallery[i][0], gallery[i][2], i,gallery[i][4]);
				seqB[u] += newPicMO(gallery[i][1], '', gallery[i][0], gallery[i][2], i, gallery[i][4]);
				//console.log(u+' ODD')

			} else {
				//document.getElementById("feed-gallery").innerHTML
				seq[u] = newPic(gallery[i][1], '', gallery[i][0], gallery[i][2], i, gallery[i][4]);
				seqB[u] = newPicMO(gallery[i][1], '', gallery[i][0], gallery[i][2], i, gallery[i][4]);



				//document.getElementById("feed-gallery").innerHTML
				seq[u] += out;
				seqB[u] += outB;

				//	console.log(u+' EVEN')
			}
		};

		gallery[i][3] = gallery[i][3] || 5;

		randomFeed(gallery[i][3]);




	};

	//for (i in seqB) {seqB[i] = seqB[i].replace("undefined"," ");}

	document.getElementById("feed-gallery").innerHTML += seq[5];
	document.getElementById("feed-gallery").innerHTML += seq[4];
	document.getElementById("feed-gallery").innerHTML += seq[3];
	document.getElementById("feed-gallery").innerHTML += seq[2];
	document.getElementById("feed-gallery").innerHTML += seq[1];
	/*
	document.getElementById("feed-galleryB").innerHTML += seqB[5];
	document.getElementById("feed-galleryB").innerHTML += seqB[4];
	document.getElementById("feed-galleryB").innerHTML += seqB[3];
	document.getElementById("feed-galleryB").innerHTML += seqB[2];
	document.getElementById("feed-galleryB").innerHTML += seqB[1];
	*/
};



/*
------------------------------------------------------------------------------------------------------------------------
	STARLITE
------------------------------------------------------------------------------------------------------------------------
Gambiarra suprema pegadora de Tags.
Selo Flicky de gambiarra bizonha.
Don't Steal.
*/

var attributes = {
    'asofe':'picto',
    'spell':'speclas',
    'staryear':'staryear',
    'startool':'startool',
    'starclient':'starclient',
    'starjet':'starjet',
    'startail':'startail',
    'starname':'starname'
};

function Starlite(_attributes){
    var _values = {};
    var _attrs = _attributes;

    this.setAttributes = function (_el) {
        var j = 0;
        for (var i in _attrs) {
            _values[Object.keys(_attrs)[j]] = $(_el).attr(_attrs[i]);
            this[Object.keys(_attrs)[j]] = _values[Object.keys(_attrs)[j]];
            j++;
        }
    }

    this.getAttributes = function () {
        return _values;
    }
}

var galleryBox = {};

galleryBox.star_receiver = document.getElementById('star-receiver');
galleryBox.starname = document.getElementById('starname');
galleryBox.staryear = document.getElementById('staryear');
galleryBox.startool = document.getElementById('startool');
galleryBox.starclient = document.getElementById('starclient');
galleryBox.starjet = document.getElementById('starjet');
galleryBox.startail = document.getElementById('startail');

function starlite(star){
    var els = new Starlite(attributes);
    els.setAttributes(star);


	galleryBox.star_receiver.innerHTML = "<div id='"+els.spell+"'><img class='litepic' src='"+els.asofe+"'/>";
	galleryBox.starname.innerHTML = els.starname;
	galleryBox.staryear.innerHTML = els.staryear;
	galleryBox.startool.innerHTML = els.startool;
	galleryBox.starclient.innerHTML = els.starclient;
	galleryBox.starjet.innerHTML = els.starjet;
	galleryBox.startail.innerHTML = els.startail;

    $('#shadows').fadeIn();
    $('#mighty-starlite').fadeIn();

    $("#toolong").mCustomScrollbar({theme: "inset"});
    $("#normal").mCustomScrollbar({theme: "inset"});

    // isso não faz nada, certeza
    // setTimeout(function () {
    //     $('.big, #mighty-starlite .xpX').fadeIn();
    // }, 1000);


}


console.log('Custom.js End of File')
$('#preloader').fadeOut('slow', function () {
				$(this).remove();
			});

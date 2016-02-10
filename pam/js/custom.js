function startup() {

	$('#mexe').animate({
		margin: '-20px 0 0 0'
	}, 1500);

	$('#gearC').addClass('animeintro')
	$('#header').fadeOut(1800)

	setTimeout(function () {
		$('#gearC').removeClass('animeintro')
		$('#header').remove()
	}, 3000);
}




$(document).ready(function () {

document.body.onwheel = function (e) {
	startup()
}
document.body.onclick = function (e) {
	startup()
}


	setTimeout(function () {


		document.getElementById('mCSB_1').onwheel = function (e) {
			$('#gearC').removeClass('animescroll')
			$('#gearA').removeClass('animescrollR')
			$('#gearB').removeClass('animescroll')



			setTimeout(function () {
				$('#gearC').addClass('animescroll')
				$('#gearA').addClass('animescrollR')
				$('#gearB').addClass('animescroll')
			}, 2);
			setTimeout(function () {
				$('#gearC').removeClass('animescroll')
				$('#gearA').removeClass('animescrollR')
				$('#gearB').removeClass('animescroll')
			}, 2200);

		}

	}, 1000);

	setTimeout(function () {
		$('#shadows').addClass('seven');
		$('.gear').removeClass('rolad');
		$('#shadows').fadeOut();
		
		setTimeout(function () {
			
			$('#greeting').animate({opacity: '1',padding: '5% 0'},800) 
			
			
			setTimeout(function () {
				$('#excl').animate({opacity: '1'},1000);
				

				setTimeout(function () {
					$('#subline').animate({opacity: '1'},1000);
					$('#arrow').fadeIn('slow');

				}, 1000); // subline
			}, 800); // exclamate
			
		}, 300); // welcome
		
	}, 2000);
})

var open = 'X';


function opengear(win) {

	$('#shadows').fadeIn();
	$('#window' + win).css('right', '2%')
	$('#gearA').addClass('animeA')
	$('#gearB').addClass('animeB')
	$('#gearD').addClass('animeA')
	$('#gearE').addClass('animeA')


}

function closegear(win) {

	$('#shadows').fadeOut();
	$('#window' + win).css('right', '82%')
	$('#window' + win).removeClass('unclickable');
	$('#gearA').removeClass('animeA')
	$('#gearB').removeClass('animeB')
	$('#gearD').removeClass('animeA')
	$('#gearE').removeClass('animeA')
	setTimeout(function () {
		$('#gearA').addClass('animeB')
		$('#gearB').addClass('animeA')
		$('#gearD').addClass('animeB')
		$('#gearE').addClass('animeB')

		setTimeout(function () {
			$('#gearA').removeClass('animeB')
			$('#gearB').removeClass('animeA')
			$('#gearD').removeClass('animeB')
			$('#gearE').removeClass('animeB')
		}, 1200);


	}, 100);
	open = 'X'
}

$('#home').on('click', function (e) {

	open != 'X' ? closegear(open) : open = 'X';

})

$('#contato').on('click', function (e) {

	$('#windowB').addClass('unclickable');

	if (open != 'X') {
		closegear('A')
		setTimeout(function () {
			opengear('B')
		}, 1200);

	} else {
		opengear('B')
	}
	open = 'B';
});

$('#sobre').on('click', function (e) {

	$('#windowA').addClass('unclickable');

	if (open != 'X') {
		closegear('B')
		setTimeout(function () {
			opengear('A')
		}, 1200);

	} else {
		opengear('A')

	}
	open = 'A';
});



$('body').onwheel = function (e) {}
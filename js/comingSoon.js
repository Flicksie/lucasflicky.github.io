	////////////////////////////
	////////////////////////////
	////// PAGE FUNCTIONS //////
	////////////////////////////

	// DECLARE REQUIRED VARS
	var currentOffset;
	var offsetBottom;
	var pageHeight;
	// OFFSETS
	var offsetSpecialties;
	var offsetClients;
	var offsetAwards;
	var offsetWorld;
	var offsetContact;



	// SET ACTIVE NAV ITEM
	function updateNav() {
		$(".flk-nav li").removeClass("active");

		if ( currentOffset >= offsetSpecialties && currentOffset < offsetClients ) {
			$(".flk-nav #step1").addClass("active");
		} else
		if ( currentOffset >= offsetClients && currentOffset < offsetAwards ) {
			$(".flk-nav #step2").addClass("active");
		} else
		if ( currentOffset >= offsetAwards && currentOffset < offsetWorld ) {
			$(".flk-nav #step3").addClass("active");
		} else
		if ( currentOffset >= offsetWorld && currentOffset < offsetContact ) {
			$(".flk-nav #step4").addClass("active");
		} else
		if ( currentOffset >= offsetContact ) {
			$(".flk-nav #step5").addClass("active");
		}

	}

	// SERVICE CIRCLES
	function sebColour() {
		if ( currentOffset >= offsetAwards && currentOffset < offsetWorld )
			{ if ( !$(".flk-pageHeader a").hasClass("white") ) { $(".flk-pageHeader a").addClass("white"); } } else
			{ $(".flk-pageHeader a").removeClass("white"); }
	}

	// REVEAL NAVIGATION
	function revealNavigation() {
		if ( currentOffset > ( pageHeight - 50 ) )
			{ $(".flk-nav").addClass("visible"); } else
			{ $(".flk-nav").removeClass("visible"); }
	}

	// ANIMATE SPECIALITIES
	function animateSpecialities() {
		if ( !$(".flk-specialities").hasClass(".animating") ) {
			if ( currentOffset >= ( offsetSpecialties ) - 300 ) {
				$(".flk-specialities").addClass("animating").delay(2600).queue(function(next){
					$(".flk-specialities").addClass("animated");
					next();
				});
			}
		}
	}

	// SERVICE CIRCLES
	function serviceCircleHeights() {
		var circleWidth = $(".circle > div").width();
		$(".circle > div").height( circleWidth + "px" );
	}

	// AWARD HEIGHTS
	function awardHeights() {
		var maxHeight = 0;
		// UPDATE MAX HEIGHT VAR
		$('.flk-awards .award').each(function()
			{ $(this).css("height", ""); maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height(); });
		// MATCH HEIGHTS
		$('.flk-awards .award').each(function()
			{ $(this).height(maxHeight); });
	}

	// TESTIMONIAL HEIGHTS
	function testimonialHeights() {
		var maxHeight = 0;
		// UPDATE MAX HEIGHT VAR
		$('#slideshow .contents > div').each(function()
			{ $(this).css("height", ""); maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height(); });
		// MATCH HEIGHTS
		$('#slideshow .contents > div').each(function()
			{ $(this).height(maxHeight); });
	}

	// MOBILE HEADER
	function hideHeader() {
		if ( currentOffset > 150 )
			{ $(".flk-pageHeader").addClass("hidden"); } else
			{ $(".flk-pageHeader").removeClass("hidden"); }
	}

	///// SETUP THE VIDEO FEED /////
	function setupVideoFeed() {
		// DATE OBJECT
		var now = new Date();
		// TIME
		var hour = now.getHours();
		var minute = now.getMinutes();
		if (minute < 10) { minute = "0" + minute; }
		// CHECK TIME RANGE
		if ( hour > 0 && hour <= 6 ) { videoFeed480 = "img/video/cam1_480_d.mp4"; videoFeed1080 = "img/video/cam1_1080_d.mp4"; }
		if ( hour > 6 && hour <= 9 ) { videoFeed480 = "img/video/cam1_480_a.mp4"; videoFeed1080 = "img/video/cam1_1080_a.mp4"; } else
		if ( hour > 9 && hour <= 15 ) { videoFeed480 = "img/video/cam1_480_b.mp4"; videoFeed1080 = "img/video/cam1_1080_b.mp4"; } else
		if ( hour > 15 && hour <= 17 ) { videoFeed480 = "img/video/cam1_480_c.mp4"; videoFeed1080 = "img/video/cam1_1080_c.mp4"; } else
		if ( hour > 17 ) { videoFeed480 = "img/video/cam1_480_d.mp4"; videoFeed1080 = "img/video/cam1_1080_d.mp4"; }
		// DEFINE THE CORRECT VIDEO SRC
		if ( $(window).width() > 820 )
			{ $("#videoSource").attr("src", videoFeed1080); } else
			{ $("#videoSource").attr("src", videoFeed480); }
		// LOAD THE VIDEO
		var videoFeed = $('#videoFeed');
			videoFeed.load();
		// PLAY THE VIDEO
		$('#videoFeed')[0].play();
	}

	// SEB QUOTES
	window.setInterval(function(){

		var random = Math.ceil(Math.random() * 6);
		$(".flk-footer .stag img.quote#q-" + random).addClass("visible");


		$(".flk-footer .stag img.quote").delay(3000).queue(function(next){
			$(".flk-footer .stag img.quote").removeClass("visible");
			next();
		})

	}, 15000);

	// ALIGN OUR WORLD ARROW TO ACTIVE TAB ON CLICK
	function alignWorldArrow(el) {

		// GET THE WIDTH OF EACH ITEM
		var widthAll = $(".filterHeading #All").outerWidth();
		var widthTwitter = $(".filterHeading #Tweets").outerWidth();
		var widthFacebook = $(".filterHeading #Facebook").outerWidth();
		var widthInstagram = $(".filterHeading #Instagram").outerWidth();
		var widthArtciles = $(".filterHeading #Articles").outerWidth();

		// FIND THE MIDPOINT OF EACH ITEM
		var midAll = widthAll / 2;
		var midTwitter = widthTwitter / 2;
		var midFacebook = widthFacebook / 2;
		var midInstagram = widthInstagram / 2;
		var midArticles = widthArtciles / 2;

		// DETECT ACTIVE BUTTON
		var activeTab = $(el).attr("id");
		if ( !el ) { var activeTab = $(".filterHeading li.active").attr("id"); }

		// SET THE LOCATION OF thE ARROW
		if ( activeTab == "All" ) { $(".filterHeading .arrow-down").css("left", midAll); } else
		if ( activeTab == "Tweets" ) { $(".filterHeading .arrow-down").css("left", widthAll + midTwitter); } else
		if ( activeTab == "Facebook" ) { $(".filterHeading .arrow-down").css("left", widthAll + widthTwitter + midFacebook); } else
		if ( activeTab == "Instagram" ) { $(".filterHeading .arrow-down").css("left", widthAll + widthTwitter + widthFacebook + midInstagram); } else
		if ( activeTab == "Articles" ) { $(".filterHeading .arrow-down").css("left", widthAll + widthTwitter + widthFacebook + widthInstagram + midArticles); } 

	}



	////////////////////////////////////////////
	////// RUN PAGE FUNCTIONS AS REQUIRED //////
	////////////////////////////////////////////

	///// NAVIGATION CLICK SCROLL TO SECTION /////
	$(".flk-nav a").click(function(e){
		// PREVENT DEFAULT LINK BEHAVIOR
		e.preventDefault();
		// GET SECTION OFFSETS
		var t1_offset = $(".flk-specialities").offset().top + 1;
		var t2_offset = $(".flk-clients").offset().top + 1;
		var t3_offset = $(".flk-awards").offset().top + 1;
		var t4_offset = $(".flk-ourWorld").offset().top + 1;
		var t5_offset = $(".flk-contact").offset().top + 1;
		// DEFINE CLICKED SECTION
		sectionID = $(this).closest("li").attr("id");
		sectionID = sectionID.replace(/\D/g,'');
		// FIND THE CORRECT OFFSET
		if ( sectionID == 1 ) { scrollPosition = t1_offset; } else
		if ( sectionID == 2 ) { scrollPosition = t2_offset; } else
		if ( sectionID == 3 ) { scrollPosition = t3_offset; } else
		if ( sectionID == 4 ) { scrollPosition = t4_offset; } else
							  { scrollPosition = t5_offset; }
		// SCROLL TO OFFSET
		$("html, body").animate({ scrollTop: scrollPosition + "px" }, 500 );
	});

	// REVEAL LANDING PAGE
	$(window).load(function(){
		$(".flk-landingPage").css("margin-top", pageHeight + "px");
		$(".flk-landingPage").delay(2000).queue(function(next){

			$(this).css("margin-top", "0px");
			$(this).addClass("visible");
			next();

		}).delay(2000).queue(function(next){

			$(this).css("margin-top", "0px");
			$(this).addClass("complete");
			next();

		});
	});




    // SCROLL TO TOP
	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

	// REMOVE FORM FIELD LABEL IF FIELD HAS VALUE
	$("input, textarea").change(function(){
		if ( $(this).val() )
			{ $(this).closest("div").addClass("filled"); } else
			{ $(this).closest("div").removeClass("filled"); }
	});

	///// LANDING PAGE SCROLL TO CONTENT /////
	$("#moreInfo").click(function(){
		var pageHeight = $(window).height();
		$("html, body").animate({ scrollTop: pageHeight + "px" }, 500 );
	});

	///// TRANSITION TO NEWS STORY ON LINK CLICK /////
	$(function() {

	    $(document).on('click', '.newsContentInner a', function(e) {

	    	// PREPARE
			e.preventDefault();
			$("body").addClass("noScroll");

			// VARS FROM THE CLICKED LINK
			var destinationURL = $(this).attr("href");
			var imageSRC = $(this).closest(".itemBlock").find("img").attr("src");

			// CALCULATE IMAGE LOCATION RELATIVE TO VIEWPORT
			var windowOffset = $(window).scrollTop();
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			var offsetTop = $(this).closest(".itemBlock").find("img").offset().top;
			var fromTop = $(this).closest(".itemBlock").find("img").offset().top - windowOffset;
			var fromLeft = $(this).closest(".itemBlock").find("img").offset().left;
			var imageHeight = $(this).closest(".itemBlock").find("img").height();
			var imageWidth = $(this).closest(".itemBlock").find("img").width();
			var calcBottom = (offsetTop + imageHeight) - windowOffset;
			var fromBottom = windowHeight - calcBottom;
			var fromRight = windowWidth - (fromLeft + imageWidth);

			$(this).closest(".itemBlock").find(".newsContent").addClass("animate");

			// SLIDE OUT THE TEXT CONTENT
			$(this).delay(350).queue(function(next){

				// REVEAL THE CONTENT MASK
				$(".transitionOverlay").addClass("visible");

				// TRANSITION THE IMAGE INTO PLACE
				$(".transitionImage").delay(50).queue(function(next){
					$(".transitionImage").css({
						"background-image"		:    "url('" + imageSRC + "')", 
						"background-position"	:    "center",
						"background-size"		:    "cover", 
						"top"					:    fromTop,
						"right"					:    fromRight,
						"bottom"				:    fromBottom,
						"left"					:    fromLeft
					})
					next();
				});

				$(".transitionImage").delay(750).queue(function(next){
					$(".transitionImage").addClass("animate");
					next();
				});

				$(".transitionImage").delay(1000).queue(function(next){
					window.location.href = "http://bluestag.co.uk/" + destinationURL;
					next();
				});

			});

	    });

	});

	///// ANIMATE FOOTER BACKGROUND /////
	if ( $(window).width() > 820 ) {

		// BACKGROUND
		$(function(){
			var x=0;
			window.setInterval(function(){
				if ( x > 3800 ) { x = 0 }
				$('.flk-footer .background').css('background-position', x + 'px 0px');
				x = x - 1;
			},50);
		})
	}

	// FOREGROUND
	$(function(){
		var x=0;
		window.setInterval(function(){
			if ( x > 3800 ) { x = 0 }
			$('.flk-footer .foreground').css('background-position', x + 'px 0px');
			x = x - 2;
		},50);
	});


	////////////////////
	///// VIDEO JS /////
	////////////////////

	///// VIDEO FEED PARTICLES /////
	function stagParticles() {
		particlesJS("cam", {
		  "particles": {
		    "number": {
		      "value": 180,
		      "density": {
		        "enable": true,
		        "value_area": 800
		      }
		    },
		    "color": {
		      "value": "#ffffff"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 5
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.5,
		      "random": true,
		      "anim": {
		        "enable": true,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 3,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 40,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": false,
		      "distance": 150,
		      "color": "#ffffff",
		      "opacity": 0.4,
		      "width": 1
		    },
		    "move": {
		      "enable": true,
		      "speed": 50,
		      "direction": "right",
		      "random": true,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": true,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": {
		        "enable": false,
		        "mode": "repulse"
		      },
		      "onclick": {
		        "enable": false,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 400,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		});
	}

	if ( $(window).width() > 820 ) {

		// GET VIDEO PLAYER DATE
		setInterval(function(){ 

			// DATE OBJECT
			var now = new Date();
			var dotw = now.getDay();
			var dd = now.getDate();
			var mm = now.getMonth();
			var yyyy = now.getFullYear();
			var hour = now.getHours();
			var minute = now.getMinutes();
			if (minute < 10) { minute = "0" + minute; }

			// TIMEZONE OFFSET
			var offset = now.getTimezoneOffset();
				offset = Math.abs(offset / 60);

			var dotwNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			$(".dotw").text(dotwNames[dotw]);
			$(".day").text(dd);
			$(".month").text(monthNames[mm]);
			$(".year").text(yyyy);

			$(".hours").text(hour);
			$(".minutes").text(minute);
			$(".offset").text("GMT+" + offset);

		},1000);

		///// OPEN THE VIDEO FEED /////
		$(".flk-footer .stag").click(function(){
			stagParticles();
			$(".flk-footer .poof").addClass("go").delay(800).queue(function(next){
				$(".flk-footer .poof").removeClass("go");
				next();
			});
			$(this).addClass("offRight").delay(1500).queue(function(next){
				$(this).removeClass("offRight");
				$(this).addClass("offLeft");
				next();
			});
			$(".flk-videoLoader").addClass("visible");
		});

		// PLAY VIDEO
		$(".flk-videoLoader .message a").click(function(){
			$(".flk-videoLoader").addClass("play");
			$("video").animate({volume: 1.0}, 1000);
			setupVideoFeed();
		});

		// CLOSE VIDEO
		$(".closeVideo").click(function(){
			$(".flk-videoLoader").removeClass("play");
			$(".flk-videoLoader").removeClass("visible");
			$(".flk-footer .stag").removeClass("offLeft");
			$("video").animate({volume: 0.0}, 1000);
			$('#videoFeed')[0].pause();
		});

		// LIVE TEXT ANIMATION
		setInterval(function(){ 
		   // toggle the class every five second
		   $(".live").toggleClass('v');
		},1000);

		// MUTE VIDEO AUDIO
		var audio = 1;
		$("#toggleAudio").click(function(){
			if ( audio == 1 ) {
				$("#state1").attr("class", "hidden");
				$("#state2").attr("class", "visible");
				$("video").animate({volume: 0.0}, 1000);
				audio = 0;
			} else {
				$("#state1").attr("class", "visible");
				$("#state2").attr("class", "hidden");
				$("video").animate({volume: 1.0}, 1000);
				audio = 1;
			}
		});

		// UNMUTE VIDEO AUDIO
		$(".soundOn").click(function(){
			$(".soundOn").attr("class", "soundOn active");
			$(".soundOff").attr("class", "soundOff");
			$("video").animate({volume: 1.0}, 1000);
		});

	}



	////////////////////////////////////////////
	////// RUN PAGE FUNCTIONS AS REQUIRED //////
	////////////////////////////////////////////

	///// ON WINDOW LOAD /////
	$(window).load(function(){
		sebColour();
		revealNavigation();
		serviceCircleHeights();
		alignWorldArrow(); 
	});

	///// ON WINDOW SCROLL /////
	$(window).scroll(function(){	
		if ( $(window).width() > 820 ) {
			revealNavigation();
			sebColour();
			updateNav();
		}
		hideHeader();
		animateSpecialities();
	});

	///// ON WINDOW RESIZE /////
	$(window).resize(function(){
		serviceCircleHeights();
		awardHeights();
		alignWorldArrow();
	});
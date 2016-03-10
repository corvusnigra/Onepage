$(function() {

	$("a[href=#about]").click(function(){
		$("html,body").animate({
			scrollTop : $(".s-about").offset().top
		}, 1000);
	});

	$("a[href=#services]").click(function(){
		$("html,body").animate({
			scrollTop : $(".s-services").offset().top
		}, 1000);
	});

	$("a[href=#contact]").click(function(){
		$("html,body").animate({
			scrollTop : $(".s-contact").offset().top
		}, 1000);
	});

	$(".arrow-menu").click(function(){
		$("html,body").animate({
			scrollTop : $("header").offset().top
		}, 1000);
	});
  
 
	// init controller
	var controller = new ScrollMagic.Controller();


	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".s-about"})
		.setClassToggle(".arrow-menu", "show-menu")
		.addTo(controller);

		var imgscene = new ScrollMagic.Scene({
			triggerElement: ".s-services"
		}).setClassToggle(".img-services", "up") 
			.addTo(controller);

	$(".img-services img").each( function(index){
    $(this).css('transition-delay', index/10 +'s');
	});

	// 	var yoyo_tween = TweenMax.to('.img-services img', 1, {
	// 		transform: 'scale(1)',
	// 		ease: Cubic.easeOut,
 //      repeat: -1, // this negative value repeats the animation
 //      yoyo: true // make it bounce…yo!
 //    });

	// var imgscene = new ScrollMagic.Scene({
	// 		triggerElement: ".s-services"
	// 	}).setTween(yoyo_tween) 
	// 		.addTo(controller);

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

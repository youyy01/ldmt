$(document).ready(function(){
	resizeStage();
	
	
	// gnb
	$("#gnb>ul>li>a").click(function(){
		if(!$(this).parent("li").hasClass("active")){
			$("#gnb>ul>li").removeClass("active");
			$("#gnb>ul>li .submenu");
			$(this).parent("li").addClass("active");
			$(this).parent("li").find(".submenu");
		}else{
			$(this).parent("li").removeClass("active");
			$(this).parent("li").find(".submenu");
		}	
	});



	function setMyCookie() {		
		myCookieVal = $('.lnb-wrap').hasClass('toggled') ? 'isActive' : 'notActive';
		$.cookie('lnbToggle', myCookieVal);       
	}

	if ($.cookie('lnbToggle') == 'isActive') {
		$('.lnb-wrap').addClass('toggled');    
	} else {
		$('.lnb-wrap').removeClass('toggled');
	}

	$(".lnb-toggle").on('click', function(e) {
		$(".lnb-wrap").toggleClass("toggled");
		setMyCookie();
		resizeStage();
	});
	

	// select2
	$('.selectpicker').select2();

	// usemap
	jQuery('img[usemap]').rwdImageMaps();
	
	// 이벤트 알림
	$('.notice-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  vertical: true,
	  prevArrow: '.prev',
      nextArrow: '.next',
      autoplay: true,
      autoplaySpeed: 3000,
	});
	
	
	
});

$(window).bind("load resize scroll",function(){
	resizeStage();
});



function resizeStage(){
	var winH = $(window).height(),
		docH = $(document).height(),
		headH = $("#header").outerHeight(),
		footH = $(".event-notice-wrap").outerHeight();

	$("#container").css("min-height",winH-headH-footH);
}


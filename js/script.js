$(document).ready(function(){
	resizeStage();
	
	
	// gnb
	/*$("#gnb>ul>li.m2>a").click(function(){
		if(!$(this).parent("li.m2").hasClass("active")){
			$("#gnb>ul>li.m2").removeClass("active");
			$("#gnb>ul>li.m2 .monitor-list");
			$(this).parent("li.m2").addClass("active");
			$(this).parent("li.m2").find(".monitor-list");
		}else{
			$(this).parent("li.m2").removeClass("active");
			$(this).parent("li.m2").find(".monitor-list");
		}	
	});

	$("#gnb>ul>li.m2>a").click(function(e){
		e.preventDefault();
		if($("html").hasClass("monitor-opened")){
			$("#gnb>ul>li.m2").removeClass("active");
			$("html").removeClass("monitor-opened");
			setMyCookie();
			resizeStage();
		}else{			
			$("html").addClass("monitor-opened"); 
			$("#gnb>ul>li.m2").addClass("active");
			setMyCookie();
			resizeStage();
		}
	});*/



	function setMyCookie() {		
		myCookieVal = $('html').hasClass('monitor-opened') ? 'isActive' : 'notActive';
		$.cookie('gnbToggle', myCookieVal);       
	}

	if ($.cookie('gnbToggle') == 'isActive') {
		$('html').addClass('monitor-opened');  
		$("#gnb>ul>li.m2").addClass("active");
	} else {
		$('html').removeClass('monitor-opened');
		$("#gnb>ul>li.m2").removeClass("active");

	}

	$("#gnb>ul>li.m2>a").on('click', function(e) {
		$("html").toggleClass("monitor-opened");
		$("#gnb>ul>li.m2").toggleClass("active");
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


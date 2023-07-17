$(document).ready(function(){
	resizeStage();
	
	
	// gnb
	$("#gnb>ul>li.m1>a").click(function(e){
		e.preventDefault();
		if(!$(this).parent("li").hasClass("active")){
			$("#gnb>ul>li.m1").removeClass("active");
			$("#gnb>ul>li.m1 .monitor-list");
			$(this).parent("li").addClass("active");
			$("#gnb>ul>li.m2").removeClass("active");
			$("#gnb>ul>li.m3").removeClass("active");
			$("#gnb>ul>li.m4").removeClass("active");
			$("html").addClass("cross-opened");
			$("html").removeClass("monitor-opened");
			$("html").removeClass("statis-opened");
			$("html").removeClass("admin-opened");
		}else{
			$(this).parent("li").removeClass("active");
			$("html").removeClass("cross-opened");
		}	
	});

	$("#gnb>ul>li.m2>a").click(function(e){
		e.preventDefault();
		if(!$(this).parent("li").hasClass("active")){
			$("#gnb>ul>li.m2").removeClass("active");
			$(this).parent("li").addClass("active");
			$("#gnb>ul>li.m1").removeClass("active");
			$("#gnb>ul>li.m3").removeClass("active");
			$("#gnb>ul>li.m4").removeClass("active");
			$("html").addClass("monitor-opened"); 
			$("html").removeClass("cross-opened");
			$("html").removeClass("statis-opened");	
			$("html").removeClass("admin-opened");
		}else{
			$(this).parent("li").removeClass("active");
			$("html").removeClass("monitor-opened");
		}	
	});

	$("#gnb>ul>li.m3>a").click(function(e){
		e.preventDefault();
		if(!$(this).parent("li").hasClass("active")){
			$("#gnb>ul>li.m3").removeClass("active");
			$(this).parent("li").addClass("active");
			$("#gnb>ul>li.m1").removeClass("active");
			$("#gnb>ul>li.m2").removeClass("active");
			$("#gnb>ul>li.m4").removeClass("active");
			$("html").addClass("statis-opened"); 
			$("html").removeClass("monitor-opened"); 
			$("html").removeClass("cross-opened");	
			$("html").removeClass("admin-opened");
		}else{
			$(this).parent("li").removeClass("active");
			$("html").removeClass("statis-opened");
		}	
	});

	$("#gnb>ul>li.m4>a").click(function(e){
		e.preventDefault();
		if(!$(this).parent("li").hasClass("active")){
			$("#gnb>ul>li.m4").removeClass("active");
			$(this).parent("li").addClass("active");
			$("#gnb>ul>li.m1").removeClass("active");
			$("#gnb>ul>li.m2").removeClass("active");
			$("#gnb>ul>li.m3").removeClass("active");
			$("html").addClass("admin-opened"); 
			$("html").removeClass("statis-opened"); 
			$("html").removeClass("monitor-opened"); 
			$("html").removeClass("cross-opened");			
		}else{
			$(this).parent("li").removeClass("active");
			$("html").removeClass("admin-opened");
		}	
	});

	

	$(".sitelogo>a").click(function(e){
		e.preventDefault();
		$("#gnb>ul>li").removeClass("active");
		$("html").removeClass("monitor-opened");
		$("html").removeClass("statis-opened");
		$("html").removeClass("cross-opened");
		$("html").removeClass("admin-opened");
	});

	
	// 진입차량 통계 
	$("#map .links > li > a").click(function(e){
		e.preventDefault();
		t = $(this).parent('li');
		if (t.hasClass('active')) {
			t.removeClass('active');
			t.find('.link-content').slideUp('fast');
			return false; 
		}else {
			$("#map .links li").removeClass('active');
			t.addClass('active');	
			if(t.find('div').hasClass('link-content')){		
				$("#map .links li .link-content").slideUp('fast');	
				t.find('.link-content').slideDown('fast');	
				return false;
			}
		}
	});

	$("#map .links .close").click(function(e){
		e.preventDefault();
		$(".link-content").slideUp('fast');
		$("#map .links li").removeClass('active');
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


jQuery(function() {
	//轮播图
	$(".banner").pcarousel({
		type: 'x',
		width: 1190,
		height: 470,
		buttons: true,
	});
	//content_box1,centent第一部分的鼠标经过效果，切换图片
	$(".content_box1_top").on("mouseenter", "li", function() {
		var index = $(this).index();
		$(".content_box1_bottom").children("li").eq(index).animate({
			opacity: 1
		}).siblings('li').animate({
			opacity: 0
		});
	});

	//content_box2，centent第二部分的鼠标经过效果，切换图片
	$(".content_box2_bottom_right_1").on("mouseenter", "li", function() {
		var index = $(this).index();
		$(".content_box2_bottom_right_2").children("li").eq(index).animate({
			opacity: 1
		}).siblings('li').animate({
			opacity: 0
		});
	});

    
	$(".conton_box3_center").on("mouseenter", "ul", function() {
		$(".cen_left1").show();
		$(".cen_right1").show();
	}).on("mouseleave", "ul", function() {
		$(".cen_left1").hide();
		$(".cen_right1").hide();
	});

	$(".cen_left1").on("mouseenter", "ul", function() {
		$(".cen_left1").show();
		$(".cen_right1").show();
	});
	$(".cen_right1").on("mouseenter", "ul", function() {
			$(".cen_left1").show();
			$(".cen_right1").show();
		})
		//左右按钮
	$(".cen_left1").on("click", function() {
		$(".conton_box3_center").children("ul").children("li").eq(0).css({
			opacity: 1
		}).siblings("li").css({
			opacity: 0
		});
	});
	$(".cen_right1").on("click", function() {
		$(".conton_box3_center").children("ul").children("li").eq(1).css({
			opacity: 1
		}).siblings("li").css({
			opacity: 0
		});
	});
	//底部按钮
	$(".cen_left2").on("click", function() {
		$(".conton_box3_center").children("ul").children("li").eq(0).css({
			opacity: 1
		}).siblings("li").css({
			opacity: 0
		});
		$(".cen_left2").addClass("cen_btn_active");
		$(".cen_right2").addClass("cen_btn_active_2");
	}).on("mouseenter", function() {
		$(".conton_box3_center").children("ul").children("li").eq(0).css({
			opacity: 1
		}).siblings("li").css({
			opacity: 0
		});
	});

	$(".cen_right2").on("click", function() {
		$(".conton_box3_center").children("ul").children("li").eq(1).css({
			opacity: 1
		}).siblings("li").css({
			opacity: 0
		});
		$(".cen_right2").addClass("cen_btn_active");
		$(".cen_left2").addClass("cen_btn_active_2");
	}).on("mouseenter", function() {
		$(".conton_box3_center").children("ul").children("li").eq(1).css({
			opacity: 1
		}).siblings("li").css({
			opacity: 0
		});
	});

})
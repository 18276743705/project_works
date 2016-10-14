$(function() {
	//微信下拉显示
	$(".header_left_3").on("mouseenter", function() {
		var wechat_left = $(".header_left_3").offset().left - 6;
		$(".wechat").show().css({
			"top": "0px",
			"left": wechat_left,
			"z-index": "1"
		});
	}).on("mouseleave", function() {
		$(this).addClass("header_left_3");
	});
	$(".wechat").on("mousemove", function() {
		var wechat_left = $(".header_left_3").offset().left - 6;
		$(".wechat").show().css({
			"top": "0px",
			"left": wechat_left,
			"z-index": " 1"
		});
	}).on("mouseout", function() {
		$(".wechat").hide();
	});

	//二维码下拉显示
	$(".header_left_5").on("mouseenter", function() {
			var appphone_left = $(".header_left_5").offset().left - 6;
			$(".appphone").show().css({
				"top": "0px",
				"left": appphone_left,
				"z-index": " 1"
			});
		})
		.on("mouseleave", function() {
			$(this).addClass("header_left_5");
		});
	$(".appphone").on("mousemove", function() {
		var appphone_left = $(".header_left_5").offset().left - 6;
		$(".appphone").show().css({
			"top": "0px",
			"left": appphone_left,
			"z-index": " 1"
		});
	}).on("mouseout", function() {
		$(".appphone").hide();
	});

	//我的银泰下来列表
	$(".header_right_5").on("mouseenter", function() {
		var mylist_left = $(".header_right_5").offset().left - 6;
		$(".mylist").show().css({
			"top": "0px",
			"left": mylist_left,
			"z-index": " 1"
		});
	}).on("mouseleave", function() {
		var mylist_left = $(".header_right_5").offset().left - 6;
		$(".mylist").hide().css({
			"top": "0px",
			"left": mylist_left
		});
	});

	$(".mylist").on("mousemove", function() {
		var mylist_left = $(".header_right_5").offset().left - 6;
		$(".mylist").show().css({
			"top": "0px",
			"left": mylist_left,
			"z-index": " 1"
		});
	}).on("mouseout", function() {
		$(".mylist").hide();
	});

	//一级菜单经过效果
	$(".nav_left_list").on("mouseenter", "li", function() {
		$(this).children(".list_right").addClass("li_active");
	}).on("mouseleave", "li", function() {
		$(this).children(".list_right").removeClass("li_active");
	});

	//二级菜单的显示与隐藏
	$(".nav_left_list_left").on("mouseenter", "li", function() {
		var index = $(this).index() + 1;
		$(".list_" + index).addClass("list_1_active");
	}).on("mouseleave", "li", function() {
		var index = $(this).index() + 1;
		$(".list_" + index).removeClass("list_1_active");
	});

	$(".list_1").on("mouseenter", function() {
		$(this).addClass("list_1_active");
	}).on("mouseleave", function() {
		$(this).removeClass("list_1_active");
	});

	$(".list_2").on("mouseenter", function() {
		$(this).addClass("list_2_active");
	}).on("mouseleave", function() {
		$(this).removeClass("list_2_active");
	});

})
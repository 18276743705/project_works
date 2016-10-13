$(function() {
	$(function() {
		var $list_content = $(".list_content");
		var $ul = $("<ul/>");

		$.ajaxSetup({
			url: "../js/list_load.json",
			success: function(res) {

				$.each(res, function(idx, item) {
					var $li = $("<li/>");
					var price = (item.price * item.off).toFixed(2);
					var $big_img = $("<span/>");
					var $small_img = $("<span/>");
					var $nane = $("<span/>");

					$('<a/>').attr({
						href: "product_details.html"
					}).html('<img src="' + item.big_img + '"/>').addClass("big_img").appendTo($big_img).appendTo($li);

					$('<a/>').attr({
						href: "#"
					}).html('<img src="' + item.small_img + '"/>').addClass("small_img").appendTo($small_img).appendTo($li);

					$("<p/>").html("<span>￥" + price + "</span><del>&yen;" + item.price + "</del>").addClass("price").appendTo($li);
					$("<p/>").html(item.title).addClass("title").appendTo($li);
					$("<span/>").html(item.off + "折").addClass("off").appendTo($li);
					$('<a/>').attr({
						href: "#"
					}).html(item.nane).addClass("nane_a").appendTo($nane);
					$nane.addClass("nane").appendTo($li);

					$li.addClass("li").appendTo($ul);
				});
				$ul.addClass("ul").appendTo($list_content);
			}

		});
		$.ajax();
		$(window).on("scroll", function() {
			var scrollTop = $(window).scrollTop();
			if(scrollTop >= $(document).height() - $(window).height() - 400) {
				$.ajax();

			}
		});

	});
	//隐藏与显示导航菜单
	$(".nav_left").on("mouseenter", function() {
		$(".nav_left_list").addClass("nav_show");
	}).on("mouseleave", function() {
		$(".nav_left_list").hide();
	});

	$(".nav_left_list").on("mouseenter", function() {
		$(".nav_left_list").show();
	}).on("mouseleave", function() {
		$(".nav_left_list").hide();
	});

	$(".nav_2").on("mouseenter", function() {
		$(".nav_left_list").show();
	}).on("mouseleave", function() {
		$(".nav_left_list").hide();
	});

})
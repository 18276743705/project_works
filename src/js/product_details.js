jQuery(function($) {
	//商品
	var i = 0;
	var j = 0;
	//商品数量加减
	$(".pro_gright").on("click", function() {
		var $number = $('.pro_gnum').html();
		var num = Number($number);

		if(num > 1) {
			$('.pro_gnum').html(num - 1);
		}
	});
	$(".pro_gleft").on("click", function() {
		var $number = $('.pro_gnum').html();
		var num = Number($number);
		$('.pro_gnum').html(num + 1);
	});

	//图片的显示遇隐藏
	$(".pro_smallimg_img").on("mouseenter", "li", function() {
		var $index = $(this).index() + 1;
		var $src = '../img/product_details/' + $index + '.jpg'

		$(".pro_bigimg").children("li").children("img").attr({
			src: $src
		})
	});

	//放大镜
	$(".pro_bigimg").children("li").xzoom();

	//购物车的显示与隐藏
	$(".pro_goodbox").hide();
	var top = $(window).height() / 3;
	var left = $(window).width() / 3;
	$(".pro_goodbox").addClass("good_box_active")
	$(".pro_goodbox").css({
		top: top,
		left: left
	})
    
    var tops = $(window).height();
	var lefts = $(window).width();
    //商品数量加减
	$(".pro_goods_right").on("click", function() {
		$(".pro_goodbox").show();
		var number = $(".pro_gnum").html();
		var money = $(".money").html();
		$number = Number(number);
		$money = Number(money);
		$allmoney = $number * $money.toFixed(2);
		$(".car_munber").html(i + $number);
		$(".car_money").html(j + $allmoney);

	});
	//隐藏购物车按钮
	$(".no_img").on("click", function() {
		$(".pro_goodbox").hide();
	});

	$(".no_go").on("click", "a", function() {
		$(".pro_goodbox").hide();
	});


	//倒计时
	var day = new Date();

	function setDayAfter(d, n) {
		var dat = d.getDate();
		dat = dat + n;
		d.setDate(dat);
		return d;
	}
	var date0 = setDayAfter(day, 2);
	var date1 = setDayAfter(day, 1);
	var second = date0.getSeconds();
	var second1 = date1.getSeconds();
	second += 2 * 24 * 60 * 60;
	second1 += 1 * 24 * 60 * 60;
	var timer = setInterval(function() {
		var days = parseInt(second / (24 * 60 * 60));
		var hour = parseInt(second / (60 * 60) % 24);
		var minu = parseInt(second / 60 % 60);
		var seconds = second % (60);
		if(seconds < 10) {
			seconds = '0' + seconds
		}
		$(".daytime").text(days + "天" + hour + "小时" + minu + "分" + seconds + "秒");
		second--;
	}, 1000);
	if(second <= 0) {
		clear(timer);
	};
	
	
	//购物车
	$(".pro_goods_right").on("click",function(){	
		var $title=$(".title").html();
		var $moneys=$(".money").html()
		var $color=$(".colors").html();
		var $length=$(".length").html();
		var $number=$(".pro_gnum").html();
		var $discount=$(".discount").html();
		console.log($title);
		console.log($moneys);
		console.log($color);
		console.log($length);
		console.log($number);
		console.log($discount);
		document.cookie="[{$title,}]"
	})

})
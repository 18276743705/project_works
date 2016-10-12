jQuery(function($){
	//商品
	var i=0;
	var j=0;
	//商品数量加减
	$(".pro_gright").on("click",function(){
		var $number=$('.pro_gnum').html();
		var num = Number($number);
		
		 if(num>1){
		 	 $('.pro_gnum').html(num-1);
		 }
	});
	$(".pro_gleft").on("click",function(){
		var $number=$('.pro_gnum').html();
		var num = Number($number);
			$('.pro_gnum').html(num+1);
	});
	
	//图片的显示遇隐藏
	$(".pro_smallimg_img").on("mouseenter","li",function(){
		var $index=$(this).index()+1;
		var $src='../img/product_details/'+$index+'.jpg'

		$(".pro_bigimg").children("li").children("img").attr({src:$src})
	});
		 
    //放大镜
		$(".pro_bigimg").children("li").xzoom();
		
		
	//购物车的显示与隐藏
	$(".pro_goodbox").hide();
	var top=$(window).height()/3;
	var left=$(window).width()/3;
    $(".pro_goodbox").addClass("good_box_active")
	$(".pro_goodbox").css({top:top,left:left})
    
    $(".pro_goods_right").on("click",function(){
    	$(".pro_goodbox").show();
    	var number=$(".pro_gnum").html();
    	var money=$(".money").html();
        $number=Number(number);
        $money=Number(money);
    	$allmoney= $number*$money.toFixed(2);
    	$(".car_munber").html(i+$number);
    	$(".car_money").html(j+$allmoney);
    	
    });
    //X按钮
    $(".no_img").on("click",function(){
    	$(".pro_goodbox").hide();
    });
    
    $(".no_go").on("click","a",function(){
    	$(".pro_goodbox").hide();
    });
    
			
})

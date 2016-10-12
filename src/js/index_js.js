	jQuery(function(){
				$(".banner").pcarousel({
					type:'x',
					width:1190,
					height:470,
					buttons:true,
					autoPlay:false,
				});
                
                $(". conton_box3_center").pcarousel({
					type:'fade',
					width:390,
					height:370,
					buttons:true,
					autoPlay:true,
				});
              
                //content_box1
                $(".content_box1_top").on("mouseenter","li",function(){
                	var index=$(this).index();
                	$(".content_box1_bottom").children("li").eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});
                });

                //content_box2
                $(".content_box2_bottom_right_1").on("mouseenter","li",function(){
                	var index=$(this).index();
                	$(".content_box2_bottom_right_2").children("li").eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});
                });
                
//              $(".btn_left").on("click",function(){
//              	var len=$(".conton_box3_left_bottom_ul").children().length;
//              	console.log(len);
//              	var index=$(this).index();
//              	$(".conton_box3_left_bottom_ul").children("li").eq(1).animate({opacity:1}).siblings('li').animate({opacity:0});
//              	index++;
////              	if(index>)
////              	console.log("111");
//              })
//              
//              $('.conton_box3_left_bottom_ul').on("mouseenter","li",function(){
//              	var index=$(this).index();
//              	console.log(index)
//              })
                
	})
	

 

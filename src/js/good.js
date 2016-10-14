$(function(){
	//数量加减
	$(".cut").on("click",function(){
		var $numbers=$(".numbers").html();
		var nums = Number($numbers);
		if(nums > 1) {
			$('.numbers').html(nums - 1);
		}
	});
	
	$(".add").on("click",function(){
		var $numbers=$(".numbers").html();
		var nums = Number($numbers);
		$('.numbers').html(nums + 1);
	})
	

	
	
})

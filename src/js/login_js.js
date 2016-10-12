onload=function(){
	var ologin=document.getElementById("login")
	var oinput=ologin.getElementsByTagName("input");
	var ospan=ologin.getElementsByTagName("span");
	var ologin_form=document.getElementById("login_form")
	var otest_number=document.getElementById("test_number");
	var otests=document.getElementById("tests");
	var otext_btn=document.getElementById("text_btn");
	var obtn=document.getElementById("btn");
	var ochecked=document.getElementById("checked");
 	
//	var oldusername = getCookie("username");
// 	var oldpassword = getCookie("password");
   	
	
	oinput[0].onfocus=function(){
	    ospan[0].innerHTML="手机号/E-mail用于登录和找回密码，请正确填写"
	}
	oinput[0].onblur=function(){
		var username=this.value;
		username=username.replace(/\s/gi,"");
		
		if(username.length==0){
			 ospan[0].innerHTML="请输入您的手机号/E-mail！"
			 ospan[0].style.color="red"
	         oinput[0].style.border="1px solid red"
		}else if(/^1\d{10}$/.test(username)){
			ospan[0].innerHTML="该手机号可以使用"
			ologin_form.style.height="520px";
			otests.style.display="block";
			otext_btn.style.display="block";
			ospan[0].style.color="gray"
	        oinput[0].style.border="1px solid gray"
		}
		
//		else if(/^13|5|7|8\d{9}$/.test(username)){
//			ospan[0].innerHTML="该手机号可以使用"
//			ologin_form.style.height="520px";
//			otests.style.display="block";
//			otext_btn.style.display="block";
//
//		}
		
//		else if(oldusername==username){
//			ospan[0].innerHTML="该手机号码已被使用！"
//
//		}
		else{
			ospan[0].innerHTML="请输入正确的手机号码！"
			ospan[0].style.color="red"
	        oinput[0].style.border="1px solid red"
		}

	}
	
	
	oinput[1].onfocus=function(){
	    ospan[1].innerHTML="6-16个字符，可使用字母、数字、符号任意组合";   
	}
	oinput[1].onblur=function(){
		var password=this.value;
		password=password.replace(/\s/gi,"");
		if(password.length==0){
			ospan[1].innerHTML="密码不能为空！"
			ospan[1].style.color="red"
	        oinput[1].style.border="1px solid red"
		}else if(/^.{6,16}$/.test(password)){
			if(/^\d{6,16}$/.test(password)){
			    ospan[1].innerHTML="安全强度低";
			    ospan[1].style.color="gray"
			    oinput[1].style.border="1px solid gray"
		    }else if( (/[a-zA-Z]{1,}/.test(password) ) && (/\d{1,}/.test(password) ) && (/[a-z0-9A-Z]]{6,16}/.test(password) )){
		        ospan[1].innerHTML="安全强度中";
		        ospan[1].style.color="gray"
		        oinput[1].style.border="1px solid gray"
		    }else{
		        ospan[1].innerHTML="安全强度高";
		        ospan[1].style.color="gray"
		        oinput[1].style.border="1px solid gray"
		    }
		}
		else{
			ospan[1].innerHTML="长度为6-16个字符,请确认！";
			ospan[1].style.color="red"
	        oinput[1].style.border="1px solid red"
		}
	        
	    
	}
	
	oinput[2].onfocus=function(){

	    ospan[2].innerHTML="请再次输入您设置的密码";
	}
	oinput[2].onblur=function(){
		var passwords=this.value;
		passwords=passwords.replace(/\s/gi,"");
		
		if(passwords.length==0){
	        ospan[2].innerHTML="重复密码不能为空！";
	        ospan[2].style.color="red"
	        oinput[2].style.border="1px solid red";
			
		}else if(oinput[2].value!=oinput[1].value){
			ospan[2].innerHTML="两次密码不一致,请确认！";
			ospan[2].style.color="red"
	        oinput[2].style.border="1px solid red";
		}else{
			ospan[2].innerHTML="";
			oinput[2].style.border="1px solid gray"
		}
	    
	}
   
	oinput[3].onblur=function(){
		var test=this.value;
		test=test.replace(/\s/gi,"");
		console.log(otest_number.innerHTML);
		if(test.length==0){
			ospan[3].innerHTML="请您填写图形验证码";
			ospan[3].style.color="red"
	        oinput[3].style.border="1px solid red";
		}else if(test==otest_number.innerHTML){
			ospan[3].innerHTML="";
			oinput[3].style.border="1px solid gray"
			
		}else{
			ospan[3].innerHTML="请输入正确的验证码！";
			ospan[3].style.color="red"
	        oinput[3].style.border="1px solid red";
		}
	    
	    
	}
    
    oinput[4].onclick=function(){
    	otest_number.innerHTML=parseInt((Math.random())*10001);
    	oinput[4].style.border="1px solid white";
    }

	
	oinput[5].onfocus=function(){
	    ospan[4].innerHTML="请输入右侧图片中的验证码";
	}
	oinput[5].onblur=function(){
	    ospan[4].innerHTML="请输入验证码！";
	    
	    ospan[4].style.color="red"
	    oinput[5].style.border="1px solid red"
	}
	
	obtn.onclick=function(){
		
   			var ousername= oinput[0].value; 
   			var opassword=oinput[1].value;
   			
   			if(ochecked.checked){
   				
   				var d = new Date;
   				d.setDate(d.getDate() + 10);
   				
   				var username = setCookie("ousername",ousername,d);
   				var password = setCookie("opassword",opassword,d);
   			}
	}
	
	
}

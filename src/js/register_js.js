onload = function() {
	var ospan_1 = document.getElementById("span_1");
	var ospan_2 = document.getElementById("span_2");
	var oleft = document.getElementById("register_left");
	var oright = document.getElementById("register_right");
	var oregisterbtn = document.getElementById("registerbtn");
	var ochecked = document.getElementById("gchecked");
	var ogtest_number = document.getElementById("gtest_number");

	var oinput = oleft.getElementsByTagName("input");
	var ospan = oleft.getElementsByTagName("span");

	var goldusername = getCookie("gousername");
	var goldpassword = getCookie("gopassword");

	if(goldusername) {
		oinput[0].value = goldusername;
		oinput[1].value = goldpassword;
	}

	oinput[0].onfocus = function() {
		ospan[0].innerHTML = "请输入E-mail或手机密码"
	}

	oinput[0].onblur = function() {
		var gusername = this.value;
		gusername = gusername.replace(/\s/gi, "");

		if(/^1\d{10}$/.test(gusername)) {
			ospan[0].innerHTML = "";
			oinput[0].style.border = "1px solid gray"
			oinput[3].style.display = "block"
			ogtest_number.innerHTML = parseInt((Math.random()) * 10001);

		} else {
			ospan[0].innerHTML = "请输入正确的E-mail或已验证的手机号码！";
			ospan[0].style.color = "red"
			oinput[0].style.border = "1px solid red"
		}
	}

	oinput[1].onfocus = function() {
		ospan[1].innerHTML = "请输入登录密码"
	}

	oinput[1].onblur = function() {
		var gpassword = this.value;
		gpassword = gpassword.replace(/\s/gi, "");

		if(/^.{6,16}$/.test(gpassword)) {
			ospan[1].innerHTML = "";
			oinput[1].style.border = "1px solid gray"
		} else {
			ospan[1].innerHTML = "6-16个字符，可使用字母、数字、符号任意组合！";
			ospan[1].style.color = "red"
			oinput[1].style.border = "1px solid red"
		}
	}

	oregisterbtn.onclick = function() {
		var gousername = oinput[0].value;
		var gopassword = oinput[1].value;

		if(ochecked.checked) {
			var d = new Date;
			d.setDate(d.getDate() + 10);

			var gusername = setCookie("gousername", gousername, d);
			var gpassword = setCookie("gopassword", gopassword, d);
		}
		    var usename=getCookie("ousername");
		    var obj=JSON.parse(usename);
		    console.log(obj);
		    for(var i=0; i<obj.length; i++){
		    	var gousername = oinput[0].value;
		        var gopassword = oinput[1].value;
		        if(gousername==obj[i].ousername){
		        	oregisterbtn.href="../index.html"
		        }else{
		        	alert("该用户名未被注册");
		        }
		    }
		
		

	}

	oinput[3].onclick = function() {
		ogtest_number.innerHTML = parseInt((Math.random()) * 10001);
		oinput[3].style.border = "1px solid white";
	}

	ospan_2.onclick = function() {
		ospan_2.style.color = "white";
		ospan_2.style.background = "#C91256";

		ospan_1.style.color = "grey";
		ospan_1.style.background = "white";

		oleft.style.display = "none";
		oright.style.display = "block"
	}

	ospan_1.onclick = function() {
		ospan_1.style.color = "white";
		ospan_1.style.background = "#C91256";

		ospan_2.style.color = "grey";
		ospan_2.style.background = "white";

		oleft.style.display = "block";
		oright.style.display = "none"

	}

}
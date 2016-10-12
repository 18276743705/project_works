function setCookie(name, value, expires, path, domain, secure) {
	var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	if (expires instanceof Date) {
		cookieText += "; expires="+expires;
	}
	if (path) {
		cookieText += "; path="+path;
	}
	if (domain) {
		cookieText += "; domain="+domain;
	}
	if (secure) {
		cookieText += ";secure";
	}
	document.cookie = cookieText; 
	return document.cookie;
}

function getCookie(name) {
	var cookie = decodeURIComponent(document.cookie);
	var arr = cookie.split("; ");
	for (var i=0; i<arr.length; i++) {
		//name5=456
		var arr2 = arr[i].split("=");
		if (arr2.length >= 2) {
			if (arr2[0] == name) {
				return arr2[1];
			}
		}
	}
	return "";
}

function removeCookie(name) {
	var d = new Date();
	d.setDate(d.getDate() + 10);
	document.cookie = decodeURIComponent(name) + "=; expires=" + d;
	return document.cookie;
}
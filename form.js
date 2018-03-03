function showsex(){
	var reg = /^[a-zA-Z\s]*$/;
	var name = document.getElementById("name").value;
	if (reg.test(name) && name !== "") {
		document.getElementById('dsex').style.visibility = "visible"; 
		document.getElementById('sex').style.visibility = "visible";
	}
	else{
		document.getElementById('dsex').style.visibility = "hidden"; 
		document.getElementById('sex').style.visibility = "hidden";
		document.getElementById('dage').style.visibility = "hidden"; 
		document.getElementById('age').style.visibility = "hidden";
		document.getElementById('demail').style.visibility = "hidden"; 
		document.getElementById('email').style.visibility = "hidden";
		document.getElementById('dskin').style.visibility = "hidden"; 
		document.getElementById('skin').style.visibility = "hidden";
		document.getElementById('dloc').style.visibility = "hidden"; 
		document.getElementById('loc').style.visibility = "hidden";
		document.getElementById('dnum').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden";
		document.getElementById('dexp').style.visibility = "hidden"; 
		document.getElementById('exp').style.visibility = "hidden";
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}

function showage(){
	var reg = /^[male|female|MALE|FEMALE]*$/;
	var sex = document.getElementById("sex").value;
	if (reg.test(sex) && sex !== "") {
		document.getElementById('dage').style.visibility = "visible"; 
		document.getElementById('age').style.visibility = "visible";
	}
	else{
		document.getElementById('dage').style.visibility = "hidden"; 
		document.getElementById('age').style.visibility = "hidden";
		document.getElementById('demail').style.visibility = "hidden"; 
		document.getElementById('email').style.visibility = "hidden";
		document.getElementById('dskin').style.visibility = "hidden"; 
		document.getElementById('skin').style.visibility = "hidden";
		document.getElementById('dloc').style.visibility = "hidden"; 
		document.getElementById('loc').style.visibility = "hidden";
		document.getElementById('dnum').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden";
		document.getElementById('dexp').style.visibility = "hidden"; 
		document.getElementById('exp').style.visibility = "hidden";
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}

function showmail(){
	var reg = /^[0-9]*$/;
	var age = document.getElementById("age").value;
	if (reg.test(age) && age !== "") {
		if (age <=15){
		document.getElementById('young').style.visibility = "visible";
		document.getElementById('demail').style.visibility = "hidden"; 
		document.getElementById('email').style.visibility = "hidden";
		document.getElementById('dskin').style.visibility = "hidden"; 
		document.getElementById('skin').style.visibility = "hidden";
		document.getElementById('dloc').style.visibility = "hidden"; 
		document.getElementById('loc').style.visibility = "hidden";
		document.getElementById('dnum').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden";
		document.getElementById('dexp').style.visibility = "hidden"; 
		document.getElementById('exp').style.visibility = "hidden";
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";

		}
		if (age >=16){
		document.getElementById('young').style.visibility = "hidden";
		document.getElementById('demail').style.visibility = "visible"; 
		document.getElementById('email').style.visibility = "visible";
        }	
	}
	else{
		document.getElementById('demail').style.visibility = "hidden"; 
		document.getElementById('email').style.visibility = "hidden";
		document.getElementById('dskin').style.visibility = "hidden"; 
		document.getElementById('skin').style.visibility = "hidden";
		document.getElementById('dloc').style.visibility = "hidden"; 
		document.getElementById('loc').style.visibility = "hidden";
		document.getElementById('dnum').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden";
		document.getElementById('dexp').style.visibility = "hidden"; 
		document.getElementById('exp').style.visibility = "hidden";
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}

function showskin(){
	var mail = document.getElementById("email").value;
	if (mail !== "") {
		document.getElementById('dskin').style.visibility = "visible"; 
		document.getElementById('skin').style.visibility = "visible";
	}
	else{
		document.getElementById('dskin').style.visibility = "hidden"; 
		document.getElementById('skin').style.visibility = "hidden";
		document.getElementById('dloc').style.visibility = "hidden"; 
		document.getElementById('loc').style.visibility = "hidden";
		document.getElementById('dnum').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden";
		document.getElementById('dexp').style.visibility = "hidden"; 
		document.getElementById('exp').style.visibility = "hidden";
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}

function showlocation(){
	var reg = /^[a-zA-Z\s]*$/;
	var skin = document.getElementById("skin").value;
	if (reg.test(skin) && skin !== "") {
		document.getElementById('dloc').style.visibility = "visible"; 
		document.getElementById('loc').style.visibility = "visible";
	}
	else{
		document.getElementById('dloc').style.visibility = "hidden"; 
		document.getElementById('loc').style.visibility = "hidden";
		document.getElementById('dnum').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden";
		document.getElementById('dexp').style.visibility = "hidden"; 
		document.getElementById('exp').style.visibility = "hidden";
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}

function shownum(){
	var reg = /^[a-zA-Z\s]*$/;
	var loc = document.getElementById("loc").value;
	if (reg.test(loc) && loc !== "") {
		document.getElementById('dnum').style.visibility = "visible"; 
		document.getElementById('num').style.visibility = "visible";
	}
	else{
		document.getElementById('dnum').style.visibility = "hidden"; 
		document.getElementById('num').style.visibility = "hidden";
		document.getElementById('dexp').style.visibility = "hidden"; 
		document.getElementById('exp').style.visibility = "hidden";
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}

function showexp(){
	var reg = /^[0-9]*$/;
	var num = document.getElementById("num").value;
	if (reg.test(num) && num !== "") {
		document.getElementById('dexp').style.visibility = "visible"; 
		document.getElementById('exp').style.visibility = "visible";

	} else{
		document.getElementById('dexp').style.visibility = "hidden"; 
		document.getElementById('exp').style.visibility = "hidden";
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}

function showabout(){
	var reg = /^[0-9]*$/;
	var exp = document.getElementById("exp").value;
	if (reg.test(exp) && exp !== "") {
		document.getElementById('dabout').style.visibility = "visible"; 
		document.getElementById('about').style.visibility = "visible";
	}
	else{
		document.getElementById('dabout').style.visibility = "hidden"; 
		document.getElementById('about').style.visibility = "hidden";
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}

function showstat(){
	var reg = /^[a-zA-Z\s\,\.]*$/;
	var about = document.getElementById("about").value;
	if (reg.test(about) && about !== "") {
		document.getElementById('dstat').style.visibility = "visible"; 
		document.getElementById('stat').style.visibility = "visible";
	}
	else{
		document.getElementById('dstat').style.visibility = "hidden"; 
		document.getElementById('stat').style.visibility = "hidden";
	}
}


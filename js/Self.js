var conversation;
var name = localStorage.getItem('name');

function find() { // Handler
	var Self = document.getElementById('Self').value;
	
	if (Self.indexOf("보자") != -1) {
		if (from_path == 1) {
			localStorage.setItem('four', 1);
			location.href = "fourth_1_1_1.html";
		}
		else {
			localStorage.setItem('four', 1);
			location.href = "fourth_1_3_1.html";
		}
	}
	else if (Self.indexOf("아니다") != -1) {
		if (from_path == 1) {
			localStorage.setItem('four', 2);
			location.href = "fourth_1_1_2.html";
		}
		else {
			localStorage.setItem('four', 2);
			location.href = "fourth_1_3_2.html";	
		}
	}
	else conversation = "지금 다른 생각을 할 때가 아니다!";
	
	$('.conversation').before(name + ' : ' + Self + '<br/> 생각 : ' + conversation + '<br/><br/>');
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"Self\" placeholder=\"중간고사 볼까? 말까?\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/>');

	localStorage.setItem('old', old);
}
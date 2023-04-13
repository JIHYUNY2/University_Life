var conversation;
var name = localStorage.getItem('name');

function find() { // Handler
	var LeeMinSong = document.getElementById('LeeMinSong').value;
	
	if (LeeMinSong == "") {
		conversation = "내 고백에 대한 답을 해줄래?..";
	}
	else if (LeeMinSong == "좋아요") {
		location.href = "sixth_2_1_yes.html";
	}
	else if (LeeMinSong == "죄송합니다") {
		location.href = "sixth_2_1_no.html";
	}
	else conversation = "내 고백에 대한 답을 해줄래?..";
	
	$('.conversation').before(name + ' : ' + LeeMinSong + '<br/> 민성 오빠 : ' + conversation + '<br/><br/>');
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"LeeMinSong\" placeholder=\"민성 오빠에게 뭐라고 할까?\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/>');

	localStorage.setItem('old', old);
}
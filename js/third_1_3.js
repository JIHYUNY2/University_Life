var from_path = 3;

var name = localStorage.getItem('name');

var money = localStorage.getItem('money');
money -= 30000;
localStorage.setItem('money', money);

var content = "선배들에게 학교생활하면서 알고 있으면 좋을 꿀팁도 듣고 술게임도 하다보니 분위기가 점점 무르익었다.§§\"" + name + "랑 우리 친구들은 학교 다니는거 어때? 재밌어?\"§§\"네!! 캠퍼스도 너무 예쁘고 선배님,동기들도 좋고 고등학교 때 생각했던 캠퍼스 라이프랑 얼추 비슷한 것 같아요!\"§§\"다행이다! 아이구 윤우 쟤 또 엄청 취했네 쟤 좀 부축해줘봐!\"§§서희 선배와 동기들은 술을 조절해서 마셔서 아직까진 멀쩡했지만 윤우 선배는 많이 취하신 것 같았다.■";
const text = document.querySelector(".text");
var index = 0;

function typing(){
	if (content[index] == '§') //강제 개행
	{
		text.innerHTML += '<br/>';
		index++;
	}
	else if (content[index] == '※') // 지연 표시
	{
		index++;
		sleep(750);
		text.innerHTML += content[index++];	
	}
	else if (content[index] == '☆') { // 이미지 1
		text.innerHTML += "<br/><br/><img src=\"../image/busstop.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>";
		index++;	
	}
	else if (content[index] == '■') {
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="#" rel="external" style="float:right" onclick="talk();">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "선배들에게 학교생활하면서 알고 있으면 좋을 꿀팁도 듣고 술게임도 하다보니 분위기가 점점 무르익었다.<br/><br/>\"" + name + "랑 우리 친구들은 학교 다니는거 어때? 재밌어?\"<br/><br/>\"네!! 캠퍼스도 너무 예쁘고 선배님,동기들도 좋고 고등학교 때 생각했던 캠퍼스 라이프랑 얼추 비슷한 것 같아요!\"<br/><br/>\"다행이다! 아이구 윤우 쟤 또 엄청 취했네 쟤 좀 부축해줘봐!\"<br/><br/>서희 선배와 동기들은 술을 조절해서 마셔서 아직까진 멀쩡했지만 윤우 선배는 많이 취하신 것 같았다.<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function talk() {
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"JoYoonWoo\" placeholder=\"윤우선배께 뭐라고 할까?\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/><br/>');
	$('.help').html('<a onclick="help();"><img src="../image\\help.png" height="50" width="50"></a> <- HINT');
}

function help() {
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_third_1_3.png" height="240" width="240"></a>');
}
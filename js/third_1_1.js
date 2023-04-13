var from_path = 1;

var name = localStorage.getItem('name');

var content = "선배들에게 학교생활하면서 알고 있으면 좋을 꿀팁도 듣고 술게임도 하다보니 어느덧 다들 취기가 올랐고 아르바이트 갈 시간이 되었다.§§※\"선배님들... 저 이제 아르바이트 가봐야 할 것 같습니다..!\"§§※\"뭐??!!! 이시간에 아르바이트?? 오늘만 빼! 하루정돈 안가도 괜찮아!!\"§§※\"아 그게.. 제가 교대 안해주면 대신 해줄사람이 없어서 가봐야 합니다..\"§§※\"안돼안돼 못가! 갈거면 조금만 더 마시고가!\"§§※\"윤우야! ※" + name + "이 알바하러 가봐야 한다잖아 다음에 또 놀면되지~\"§§※윤우 선배는 술에 많이 취해서 계속 더 놀자고 붙잡았고 나는 아르바이트를 한시간 정도 늦게 되었다.■";
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
	
	text.innerHTML = "선배들에게 학교생활하면서 알고 있으면 좋을 꿀팁도 듣고 술게임도 하다보니 어느덧 다들 취기가 올랐고 아르바이트 갈 시간이 되었다.<br/><br/>\"선배님들... 저 이제 아르바이트 가봐야 할 것 같습니다..!\"<br/><br/>\"뭐??!!! 이시간에 아르바이트?? 오늘만 빼! 하루정돈 안가도 괜찮아!!\"<br/><br/>\"아 그게.. 제가 교대 안해주면 대신 해줄사람이 없어서 가봐야 합니다..\"<br/><br/>\"안돼안돼 못가! 갈거면 조금만 더 마시고가!\"<br/><br/>\"윤우야! " + name + "이 알바하러 가봐야 한다잖아 다음에 또 놀면되지~\"<br/><br/>윤우 선배는 술에 많이 취해서 계속 더 놀자고 붙잡았고 나는 아르바이트를 한시간 정도 늦게 되었다.<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
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
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_third_1_1.png" height="240" width="240"></a>');
}
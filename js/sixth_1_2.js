var name = localStorage.getItem('name');
var from_path = 5;

var content = "윤우 선배랑 사귀고 나서 학교 생활은 여전히 빠듯했다.§§매일 같이 프로젝트 과제와 복습을 하느라 데이트를 한다고 하여도 식사만 하고 헤어지고 있다.§§\"그러니까.. 포인터라는 것이 주소를 참조하는 것이라는 거야?\"§§\"맞아! 나중에 자료구조 할 때 엄청 중요하니까 꼭 알고 있어야 해!\"§§갑자기 밖에서 환호 소리가 들려왔다.§§\"아 맞아 오늘 세븐틴 온다 그랬지?\"§§\"세븐틴?!!!! 정말?!!\"§§몇 년 동안 덕질을 하고 있는 \'세븐틴\'을 실제적으로 볼 수 있는 기회잖아?!§§\"근데.. " + name + "... 이거 오늘 제출이야..\"■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "윤우 선배랑 사귀고 나서 학교 생활은 여전히 빠듯했다.<br/><br/>매일 같이 프로젝트 과제와 복습을 하느라 데이트를 한다고 하여도 식사만 하고 헤어지고 있다.<br/><br/>\"그러니까.. 포인터라는 것이 주소를 참조하는 것이라는 거야?\"<br/><br/>\"맞아! 나중에 자료구조 할 때 엄청 중요하니까 꼭 알고 있어야 해!\"<br/><br/>갑자기 밖에서 환호 소리가 들려왔다.<br/><br/>\"아 맞아 오늘 세븐틴 온다 그랬지?\"<br/><br/>\"세븐틴?!!!! 정말?!!\"<br/><br/>몇 년 동안 덕질을 하고 있는 \'세븐틴\'을 실제적으로 볼 수 있는 기회잖아?!<br/><br/>\"근데.. " + name + "... 이거 오늘 제출이야..\"<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
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
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_sixth_1_2.png" height="240" width="240"></a>');
}
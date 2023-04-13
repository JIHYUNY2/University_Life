var from_path = 2;

var name = localStorage.getItem('name');

var content = "선배들에게 학교생활하면서 알고 있으면 좋을 꿀팁도 듣고 술게임도 하다보니 어느덧 다들 취기가 올랐고 문득 내일까지 제출해야 할 과제가 떠올랐다.§§※\"선배님들.. 이제 가봐야 할 것 같습니다..\"§§※\"응? 갑자기? 왜?\"§§※\"과제!? 그거 하나쯤은 안해도 괜찮아! 과제가 중요해? 우리랑 노는게 더 중요하지! 나중에 해 나중에!!\"§§※윤우선배는 과제를 하러가야 한다는 나를 붙잡고 보내주지 않았다.■";
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
	
	text.innerHTML = "선배들에게 학교생활하면서 알고 있으면 좋을 꿀팁도 듣고 술게임도 하다보니 어느덧 다들 취기가 올랐고 문득 내일까지 제출해야 할 과제가 떠올랐다.<br/><br/>\"선배님들.. 이제 가봐야 할 것 같습니다..\"<br/><br/>\"응? 갑자기? 왜?\"<br/><br/>\"과제!? 그거 하나쯤은 안해도 괜찮아! 과제가 중요해? 우리랑 노는게 더 중요하지! 나중에 해 나중에!!\"<br/><br/>윤우선배는 과제를 하러가야 한다는 나를 붙잡고 보내주지 않았다.<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
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
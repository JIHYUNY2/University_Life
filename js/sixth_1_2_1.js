var name = localStorage.getItem('name');

var content = "\"프로젝트 때문에 어쩔 수 없어.. 얼른 끝내고 보고 오자! 알겠지?\"§§\"응!\"§§윤우 선배랑 최대한 빨리 했고 1시간 반 만에 끝내고 마서 바로 축제 공연하는 곳으로 뛰쳐갔다.§§\"저희는 세븐틴 이였습니다! 감사합니다!!\"§§혼신의 힘을 다해 뛰어갔지만 결국 내 최애 연예인을 보지 못 하게 되었다....■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"seventh_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\"프로젝트 때문에 어쩔 수 없어.. 얼른 끝내고 보고 오자! 알겠지?\"<br/><br/>\"응!\"<br/><br/>윤우 선배랑 최대한 빨리 했고 1시간 반 만에 끝내고 마서 바로 축제 공연하는 곳으로 뛰쳐갔다.<br/><br/>\"저희는 세븐틴 이였습니다! 감사합니다!!\"<br/><br/>혼신의 힘을 다해 뛰어갔지만 결국 내 최애 연예인을 보지 못 하게 되었다....<br/><br/><br/><br/><br/><a href=\"seventh_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

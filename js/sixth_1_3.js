var name = localStorage.getItem('name');

var content = "\"" + name + "! ※너는 요리 담당 해줘!\"§§※컴퓨터공학부 학생회에서 축제 때 윤우 선배랑 포장마차를 열게 되었다.§§※\"오빠. 오빠가 요리 해주면 안 돼?\"§§※\"" + name + ".. 미안해.. 너가 요리 진짜 잘 하잖아?... 내가 나중에 맛있는거 사줄게..\"§§※\"그래...\"§§※그렇게 축제 때 정신 없이 포장마차를 운영하였고 생각보다 많은 사람들이 와서 음식을 먹고 갔다.§§※\"모두들 수고했어요!!\"§§※\"수고하셨습니다! 이제 우리도 회식하러 가볼까요?\"§§※포장마차로 많은 돈을 벌었고 일부분은 학생회비로 이전이 되고 나머지로 회식 비용으로 사용하였다.§§※\"수아 선배, 한 잔 따라드릴게요!\"§§※\"그래. 요즘 윤우 오빠랑 잘 지내고 있어?\"§§※\"잘 지내고 있죠! 그치 오빠?\"§§※\"어! 잘 지내고 있지!\"§§※그러자 수아 선배가 배시시 웃으며 말했다.§§※\"그럼 둘이 뽀뽀해.\"§§※\"네?\"§§※그렇게 둘이 정식커플임을 보여주는 분위기가 되었다.■";
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
	
	text.innerHTML = "\"" + name + "! 너는 요리 담당 해줘!\"<br/><br/>컴퓨터공학부 학생회에서 축제 때 윤우 선배랑 포장마차를 열게 되었다.<br/><br/>\"오빠. 오빠가 요리 해주면 안 돼?\"<br/><br/>\"" + name + ".. 미안해.. 너가 요리 진짜 잘 하잖아?... 내가 나중에 맛있는거 사줄게..\"<br/><br/>\"그래...\"<br/><br/>그렇게 축제 때 정신 없이 포장마차를 운영하였고 생각보다 많은 사람들이 와서 음식을 먹고 갔다.<br/><br/>\"모두들 수고했어요!!\"<br/><br/>\"수고하셨습니다! 이제 우리도 회식하러 가볼까요?\"<br/><br/>포장마차로 많은 돈을 벌었고 일부분은 학생회비로 이전이 되고 나머지로 회식 비용으로 사용하였다.<br/><br/>\"수아 선배, 한 잔 따라드릴게요!\"<br/><br/>\"그래. 요즘 윤우 오빠랑 잘 지내고 있어?\"<br/><br/>\"잘 지내고 있죠! 그치 오빠?\"<br/><br/>\"어! 잘 지내고 있지!\"<br/><br/>그러자 수아 선배가 배시시 웃으며 말했다.<br/><br/>\"그럼 둘이 뽀뽀해.\"<br/><br/>\"네?\"<br/><br/>그렇게 둘이 정식커플임을 보여주는 분위기가 되었다.<br/><br/><br/><br/><br/><a href=\"seventh_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

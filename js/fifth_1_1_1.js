var name = localStorage.getItem('name');
var money = localStorage.getItem('money');
money -= 110000;
localStorage.setItem('money', money);

localStorage.setItem('four', 1);

var content = "\"아~~ 오늘도 힘들었다!\"§§※\"그러게요.. 원래 오늘 알바 하는 날 아니었는데!!\"§§※\"너도 수고했어ㅎㅎ 근데 " + name + "아※ 혹시 남자친구 있어..?!\"§§※\"남자친구 없는데 왜요?!\"§§※\"그럼 번호 줄수 있어?!\"§§※나도 민성오빠가 열심히 알바하는 모습을 보고 괜찮다고 생각했었는데 민성오빠가 먼저 번호를 달라고 해서 서로 번호 교환을 했다.§§※- 한 달 후§§※(소지금 -110000원)§§※그렇게 민성오빠와 나는 사귀게 되었고 집이 가까워서 매일 만나다 보니 돈을 꽤 많이 쓰게 되었다.§§※\"이번주도 돈 엄청 많이 썼네..\"§§※\"" + name + "아 ※돈 부담되면 내가 좀 더 낼까? 난 모아둔거 있어서 더 쓸 수 있을 것 같아!\"§§※\"아냐아냐 더치페이 해야지! 다음 주 부터 쿠팡 물류 아르바이트 틈틈히 하려구!\"§§※\"괜찮겠어..? 그거 힘들다던데...\"§§※\"그것도 다 경험이지 뭐!\"§§※민성오빠와 연애하고 데이트 하는 것은 좋았지만 그 만큼 돈도 많이 쓰게 되니까 조금은 부담스럽기도 했다.■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"sixth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\"아~~ 오늘도 힘들었다!\"<br/><br/>\"그러게요.. 원래 오늘 알바 하는 날 아니었는데!!\"<br/><br/>\"너도 수고했어ㅎㅎ 근데 " + name + "아 혹시 남자친구 있어..?!\"<br/><br/>\"남자친구 없는데 왜요?!\"<br/><br/>\"그럼 번호 줄수 있어?!\"<br/><br/>나도 민성오빠가 열심히 알바하는 모습을 보고 괜찮다고 생각했었는데 민성오빠가 먼저 번호를 달라고 해서 서로 번호 교환을 했다.<br/><br/>- 한 달 후<br/><br/>(소지금 -110000원)<br/><br/>그렇게 민성오빠와 나는 사귀게 되었고 집이 가까워서 매일 만나다 보니 돈을 꽤 많이 쓰게 되었다.<br/><br/>\"이번주도 돈 엄청 많이 썼네..\"<br/><br/>\"" + name + "아 돈 부담되면 내가 좀 더 낼까? 난 모아둔거 있어서 더 쓸 수 있을 것 같아!\"<br/><br/>\"아냐아냐 더치페이 해야지! 다음 주 부터 쿠팡 물류 아르바이트 틈틈히 하려구!\"<br/><br/>\"괜찮겠어..? 그거 힘들다던데...\"<br/><br/>\"그것도 다 경험이지 뭐!\"<br/><br/>민성오빠와 연애하고 데이트 하는 것은 좋았지만 그 만큼 돈도 많이 쓰게 되니까 조금은 부담스럽기도 했다.<br/><br/><br/><br/><br/><a href=\"sixth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

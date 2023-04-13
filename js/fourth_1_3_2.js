var name = localStorage.getItem('name');

var money = localStorage.getItem('money');
money -= 25000;
localStorage.setItem('money', money);

var content = "\'에휴... 됐다. 어차피 공부도 안 해서 D 받아도 재수강을 하여야 하겠지...\'§§※\"" + name + "! ※다 씻었는데 너 안 씻어??\"§§※\"그냥 재수강 하려고... 어차피 공부도 안 해서.. 후..\"§§※\"정말 괜찮겠어?? 그럼 괜찮으니까 내 자취방에 있어! 시험 보고 올게! 오늘 저녁에 시험 끝나서 윤우 선배랑 컴퓨터공학부 애들 다 와서 파티한다니까 같이 가자!\"§§※\"정말?! 고마워! 기다리고 있을게!\"§§※\"응응!\"§§※강민희가 나가고 저녁까지 핸드폰만 만지작거리며 영화를 보았다.§§※그렇게 술자리를 가니 컴퓨터공학부 친구들이 모두 반겨줬다!§§※\"자자! 이제 다 모였으니까 한 잔 씩 할까?! 윤우 선배 꿀주 말아주세요!\"§§※소주 잔에 소주와 맥주 9대 1로 따르며 다들 한 잔 씩 하니 점점 서로 취기가 올라 말소리가 커지기 시작했다.§§※\"윤우 선배.. 혹시 여자친구 없지 않아요?\"§§※내 옆에 있던 남자 학우가 윤우 선배에게 말을 걸었다.§§※\"어..? 갑자기 왜??\"§§※그러자 갑자기 다들 말이 없어졌고 서로 눈치를 보며 의미심장한 미소를 지었다.§§※\"선배. 저희들 잠깐 바람 쐬러 나갔다 올게요!\"§§※\"아니! 야!!! 다 어디 가!!!!\"§§※강민희도 나에게 윙크하더니 나가버렸다.§§※그렇게 윤우 선배랑 단 둘이 남았다.§§※\"...\"§§※\"...\"§§※윤우 선배의 얼굴이 빨개졌고 나를 힐끔 바라보았다.§§※\"선배.. 한 잔 하실래요?..\"§§※그러자 윤우 선배가 미소를 지으며 맥주잔을 받았다.§§※\"고마워.\"§§※(소지금 -25000원)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="fifth_1_3.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\'에휴... 됐다. 어차피 공부도 안 해서 D 받아도 재수강을 하여야 하겠지...\'<br/><br/>\"" + name + "! 다 씻었는데 너 안 씻어??\"<br/><br/>\"그냥 재수강 하려고... 어차피 공부도 안 해서.. 후..\"<br/><br/>\"정말 괜찮겠어?? 그럼 괜찮으니까 내 자취방에 있어! 시험 보고 올게! 오늘 저녁에 시험 끝나서 윤우 선배랑 컴퓨터공학부 애들 다 와서 파티한다니까 같이 가자!\"<br/><br/>\"정말?! 고마워! 기다리고 있을게!\"<br/><br/>\"응응!\"<br/><br/>강민희가 나가고 저녁까지 핸드폰만 만지작거리며 영화를 보았다.<br/><br/>그렇게 술자리를 가니 컴퓨터공학부 친구들이 모두 반겨줬다!<br/><br/>\"자자! 이제 다 모였으니까 한 잔 씩 할까?! 윤우 선배 꿀주 말아주세요!\"<br/><br/>소주 잔에 소주와 맥주 9대 1로 따르며 다들 한 잔 씩 하니 점점 서로 취기가 올라 말소리가 커지기 시작했다.<br/><br/>\"윤우 선배.. 혹시 여자친구 없지 않아요?\"<br/><br/>내 옆에 있던 남자 학우가 윤우 선배에게 말을 걸었다.<br/><br/>\"어..? 갑자기 왜??\"<br/><br/>그러자 갑자기 다들 말이 없어졌고 서로 눈치를 보며 의미심장한 미소를 지었다.<br/><br/>\"선배. 저희들 잠깐 바람 쐬러 나갔다 올게요!\"<br/><br/>\"아니! 야!!! 다 어디 가!!!!\"<br/><br/>강민희도 나에게 윙크하더니 나가버렸다.<br/><br/>그렇게 윤우 선배랑 단 둘이 남았다.<br/><br/>\"...\"<br/><br/>\"...\"<br/><br/>윤우 선배의 얼굴이 빨개졌고 나를 힐끔 바라보았다.<br/><br/>\"선배.. 한 잔 하실래요?..\"<br/><br/>그러자 윤우 선배가 미소를 지으며 맥주잔을 받았다.<br/><br/>\"고마워.\"<br/><br/>(소지금 -25000원)<br/><br/><br/><br/><br/><a href=\"fifth_1_3.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

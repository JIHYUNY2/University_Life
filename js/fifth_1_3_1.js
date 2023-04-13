var name = localStorage.getItem('name');

var money = localStorage.getItem('money');
money -= 40000;
localStorage.setItem('money', money);

localStorage.setItem('four', 1);

var content = "\"안녕안녕ㅎㅎ 아 너가 " + name + "구나! ※윤우한테 얘기 많이 들었어!!§§※\"수아 선배가 웃으면서 나에게 말을 건넸다.§§※\"윤우선배한테요!??! 무슨얘기지.. 아무튼 반가워요 선배ㅎㅎ\"§§※\"너가 신입생 중에서 제일 예쁘다고 그렇게 말을 하던데??!\"§§※\"야 김수아.. 비밀이라 했잖아!!!!\"§§※\"어차피 " + name + "도 너가 좋아하는거 알고 있는거 아니었어?! 윤우 너가 썸타는 중이라며!!\"§§※\"네 맞아요! 윤우선배랑 썸타는 중이에요!ㅎㅎ\"§§※나는 수아 선배가 장난치는 줄 알고 맞받아치듯이 대답했다.§§※\"그래? 그럼 나랑 강형이랑 다음주에 한강가는데 우리랑 더블데이트하자!\"§§※\"어 좋다! " + name + "야 ※그럼 우리 오늘부터 1일인거야!?\"§§※\".........네???? 네............... 그래요!\"§§※\"오오오~~~~~\"§§※분위기에 휩쓸려 얼떨결에 고백을 받아드렸고 평소에도 윤우선배가 괜찮다고 생각하고 있었기 때문에 나름 기분이 나쁘진 않았다.§§※(소지금 -40000원)■";
const text = document.querySelector(".text");
var index = 0;

var money = localStorage.getItem('money');
money -= 40000;
localStorage.setItem('money', money);

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

$('div[id="content_start"]').on("tap", function() {
	clearInterval(Id);
	
	text.innerHTML = "\"안녕안녕ㅎㅎ 아 너가 " + name + "구나! 윤우한테 얘기 많이 들었어!!<br/><br/>\"수아 선배가 웃으면서 나에게 말을 건넸다.<br/><br/>\"윤우선배한테요!??! 무슨얘기지.. 아무튼 반가워요 선배ㅎㅎ\"<br/><br/>\"너가 신입생 중에서 제일 예쁘다고 그렇게 말을 하던데??!\"<br/><br/>\"야 김수아.. 비밀이라 했잖아!!!!\"<br/><br/>\"어차피 " + name + "도 너가 좋아하는거 알고 있는거 아니었어?! 윤우 너가 썸타는 중이라며!!\"<br/><br/>\"네 맞아요! 윤우선배랑 썸타는 중이에요!ㅎㅎ\"<br/><br/>나는 수아 선배가 장난치는 줄 알고 맞받아치듯이 대답했다.<br/><br/>\"그래? 그럼 나랑 강형이랑 다음주에 한강가는데 우리랑 더블데이트하자!\"<br/><br/>\"어 좋다! " + name + "야 그럼 우리 오늘부터 1일인거야!?\"<br/><br/>\".........네???? 네............... 그래요!\"<br/><br/>\"오오오~~~~~\"<br/><br/>분위기에 휩쓸려 얼떨결에 고백을 받아드렸고 평소에도 윤우선배가 괜찮다고 생각하고 있었기 때문에 나름 기분이 나쁘진 않았다.<br/><br/>(소지금 -40000원)<br/><br/><br/><br/><br/><a href=\"sixth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

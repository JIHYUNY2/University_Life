var name = localStorage.getItem('name');

var money = localStorage.getItem('money');
money -= 45000;
localStorage.setItem('money', money);

localStorage.setItem('four', 2);

var content = "\"안녕안녕ㅎㅎ 아 너가 " + name + "구나! ※윤우한테 얘기 많이 들었어!!\"§§※수아 선배가 웃으면서 나에게 말을 건넸다.§§※\"윤우선배한테요!??! 무슨얘기지.. 아무튼 반가워요 선배ㅎㅎ\"§§※\"너가 신입생 중에서 제일 예쁘다고 그렇게 말을 하던데??!§§※\"야 김수아.. 비밀이라 했잖아!!!!\"§§※\"어차피 " + name + "도 너가 좋아하는거 알고 있는거 아니었어?! 윤우 너가 썸타는 중이라며!!\"§§※\"네? 그게 무슨..... 저희 썸 안타는데요..?\"§§※윤우선배와 내가 썸을 타고 있다는 수아선배의 말에 당황해서 정색하며 말을 했다.§§※\"아 그래..? 장난친건데 기분나빴으면 미안하다 " + name + "..\"§§※\"...........그럼 수아랑 강형이랑 민정이 왔으니까 다같이 짠 한 번 할까..?\"§§※\"쨘~~~\"§§※윤우선배가 화제를 전환하며 분위기를 바꿔보려 했지만 이미 싸해진 분위기는 돌이킬 수가 없었고 나도 애써 웃으며 분위기를 띄우려고 노력했다.§§※(소지금 -45000원)■";
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

$('div[id="content_start"]').on("tap", function() {
	clearInterval(Id);
	
	text.innerHTML = "\"안녕안녕ㅎㅎ 아 너가 " + name + "구나! 윤우한테 얘기 많이 들었어!!\"<br/><br/>수아 선배가 웃으면서 나에게 말을 건넸다.<br/><br/>\"윤우선배한테요!??! 무슨얘기지.. 아무튼 반가워요 선배ㅎㅎ\"<br/><br/>\"너가 신입생 중에서 제일 예쁘다고 그렇게 말을 하던데??!<br/><br/>\"야 김수아.. 비밀이라 했잖아!!!!\"<br/><br/>\"어차피 " + name + "도 너가 좋아하는거 알고 있는거 아니었어?! 윤우 너가 썸타는 중이라며!!\"<br/><br/>\"네? 그게 무슨..... 저희 썸 안타는데요..?\"<br/><br/>윤우선배와 내가 썸을 타고 있다는 수아선배의 말에 당황해서 정색하며 말을 했다.<br/><br/>\"아 그래..? 장난친건데 기분나빴으면 미안하다 " + name + "..\"<br/><br/>\"...........그럼 수아랑 강형이랑 민정이 왔으니까 다같이 짠 한 번 할까..?\"<br/><br/>\"쨘~~~\"<br/><br/>윤우선배가 화제를 전환하며 분위기를 바꿔보려 했지만 이미 싸해진 분위기는 돌이킬 수가 없었고 나도 애써 웃으며 분위기를 띄우려고 노력했다.<br/><br/>(소지금 -45000원)<br/><br/><br/><br/><br/><a href=\"sixth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

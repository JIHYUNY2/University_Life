var name = localStorage.getItem('name');

localStorage.setItem('four', 2);

var content = "\"아니 여기서 for문을 왜써! 너 C언어 할 줄 모르지!\"§§※\"잘 모를수도 있죠.. 알려주면 되지 왜 화를 내고 그러세요..\"§§※\"계속 똑같은거 알려줬는데 모르니까 그러지!\"§§※윤우선배는 C프로그래밍 재수강이었어서 과제를 쉽게 했지만 나는 처음 배우는 거라서 과제 하는 것이 너무 어려웠다.§§※\"아 선배 그냥 저 혼자 공부하고 과제 마무리 할게요 신경쓰지 마세요!\"§§※\"그래 알겠어.. 하다가 막히는거 생기면 말하구 난 이제 가볼게 열심히 해~\"§§※\'내가 너무 심했나....\'§§※공부하느라 예민해져서 윤우선배에게 화를 내버렸고 윤우선배는 기분이 나빴는지 도서관을 나갔다.■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="sixth_1.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\"아니 여기서 for문을 왜써! 너 C언어 할 줄 모르지!\"<br/><br/>\"잘 모를수도 있죠.. 알려주면 되지 왜 화를 내고 그러세요..\"<br/><br/>\"계속 똑같은거 알려줬는데 모르니까 그러지!\"<br/><br/>윤우선배는 C프로그래밍 재수강이었어서 과제를 쉽게 했지만 나는 처음 배우는 거라서 과제 하는 것이 너무 어려웠다.<br/><br/>\"아 선배 그냥 저 혼자 공부하고 과제 마무리 할게요 신경쓰지 마세요!\"<br/><br/>\"그래 알겠어.. 하다가 막히는거 생기면 말하구 난 이제 가볼게 열심히 해~\"<br/><br/>\'내가 너무 심했나....\'<br/><br/>공부하느라 예민해져서 윤우선배에게 화를 내버렸고 윤우선배는 기분이 나빴는지 도서관을 나갔다.<br/><br/><br/><br/><br/><a href=\"sixth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
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
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_fifth_1_2.png" height="240" width="240"></a>');
}
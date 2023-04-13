var from_path = 2;

var name = localStorage.getItem('name');

money = localStorage.getItem('money');
money = Number(money);
money += 10000;

var content = "\"그래?.. 어쩔 수 없지! 그럼 번호 좀 줄래?? 나중에 같이 놀자!\"§§※강민희에게 번호를 줬다.§§※(컬렉션에 '강민희'가 추가되었다!!!!)§§※\"" + name + "! ※잘 가!\"§§※두 명이서 학교 정문 쪽으로 걸어갔다.§§※아르바이트는 아직 못 구했지만 친구가 같이 하자는 식당에서 아르바이트를 할 예정이니까 어차피 같이 놀지도 못하겠지..§§※심지어 부모님께서 대학 등록금 전부를 내주실 수 없다고 하셔서 아르바이트를 빡세게 해야할 상황이다.§§※일주일 후...§§※아르바이트를 결국 공강시간에 풀타임으로 하게 되었다. 지금처럼 하면 아마 다음 학기 등록금 걱정은 없겠지???§§※계산해보았는데 지금 친구들이랑 술을 마시며 펑펑 쓴다면 다음 학기 강제 휴학을 하여야 할 수도 있다고 한다.... ※돈 아껴야지..§§※그리하여 지금 편의점에서 컵라면을 사서 친해진 강민희와 함께 먹으며 다음 강의를 기다리고 있다.§§※\"" + name + "!! ※그나저나 오늘 저녁에 술 마시러 갈래?! 과 친구들이 너 엄청 궁금하대!\"§§※(소지금 + 10000원)■";
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
	
	text.innerHTML = "\"그래?.. 어쩔 수 없지! 그럼 번호 좀 줄래?? 나중에 같이 놀자!\"<br/><br/>강민희에게 번호를 줬다.<br/><br/>(컬렉션에 '강민희'가 추가되었다!!!!)<br/><br/>\"" + name + " 잘 가!\"<br/><br/>두 명이서 학교 정문 쪽으로 걸어갔다.<br/><br/>아르바이트는 아직 못 구했지만 친구가 같이 하자는 식당에서 아르바이트를 할 예정이니까 어차피 같이 놀지도 못하겠지..<br/><br/>심지어 부모님께서 대학 등록금 전부를 내주실 수 없다고 하셔서 아르바이트를 빡세게 해야할 상황이다.<br/><br/>일주일 후...<br/><br/>아르바이트를 결국 공강시간에 풀타임으로 하게 되었다. 지금처럼 하면 아마 다음 학기 등록금 걱정은 없겠지???<br/><br/>계산해보았는데 지금 친구들이랑 술을 마시며 펑펑 쓴다면 다음 학기 강제 휴학을 하여야 할 수도 있다고 한다.... 돈 아껴야지..<br/><br/>그리하여 지금 편의점에서 컵라면을 사서 친해진 강민희와 함께 먹으며 다음 강의를 기다리고 있다.<br/><br/>\"" + name + "!! 그나저나 오늘 저녁에 술 마시러 갈래?! 과 친구들이 너 엄청 궁금하대!\"<br/><br/>(소지금 + 10000원)<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function talk() {
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"GangMinHee\" placeholder=\"강민희에게 뭐라고 할까?\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/><br/>');
	$('.help').html('<a onclick="help();"><img src="../image\\help.png" height="50" width="50"></a> <- HINT');
}

function help() {
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_second_1.png" height="240" width="240"></a>');
}

localStorage.setItem('money', money);

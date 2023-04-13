var name = localStorage.getItem('name');

localStorage.setItem('Professor', 1);

var content = "\"그래?.. 어쩔 수 없지! 그럼 나중에 보자!\"§§※두 명이서 학교 정문 쪽으로 걸어갔다.§§※지금 친구들이랑 노닥거리는 것보다 장학금을 받는 것이 훨씬 이득일테니 공부나 하자.§§※부모님께서 장학금을 받으면 모두 용돈으로 사용하여도 된다고 하셨으니까.§§※버스가 섰고 만원 버스에 몸을 끼워넣어 겨우 탔다.§§※창문 밖에 바라보니 아까 같이 술 마시자는 강민희와 친구들이 즐겁게 걸어가고 있는 것이 보였다.§§※" + name + " 학생?\"§§※\"어? 교수님? 교수님께서도 지금 시간에 퇴근하시나요?\"§§※\"할 게 많아서 지금 퇴근한단다. 아까 수업 시간에 엄청 열중해서 듣던데 궁금한 게 있니?\"§§※교수님과 함께 귀가하면서 수업 시간에 배웠었던 강의들을 여쭤보았다.§§※(컬렉션 '유현철 교수님'이 추가되었다!!!!)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="third_1.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\"그래?.. 어쩔 수 없지! 그럼 나중에 보자!\"<br/><br/>두 명이서 학교 정문 쪽으로 걸어갔다.<br/><br/>지금 친구들이랑 노닥거리는 것보다 장학금을 받는 것이 훨씬 이득일테니 공부나 하자.<br/><br/>부모님께서 장학금을 받으면 모두 용돈으로 사용하여도 된다고 하셨으니까.<br/><br/>버스가 섰고 만원 버스에 몸을 끼워넣어 겨우 탔다.<br/><br/>창문 밖에 바라보니 아까 같이 술 마시자는 강민희와 친구들이 즐겁게 걸어가고 있는 것이 보였다.<br/><br/>" + name + " 학생?\"<br/><br/>\"어? 교수님? 교수님께서도 지금 시간에 퇴근하시나요?\"<br/><br/>\"할 게 많아서 지금 퇴근한단다. 아까 수업 시간에 엄청 열중해서 듣던데 궁금한 게 있니?\"<br/><br/>교수님과 함께 귀가하면서 수업 시간에 배웠었던 강의들을 여쭤보았다.<br/><br/>(컬렉션 '유현철 교수님'이 추가되었다!!!!)<br/><br/><br/><br/><br/><a href=\"third_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
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

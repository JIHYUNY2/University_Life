var from_path = 1;

var name = localStorage.getItem('name');

var content = "\"오늘 웹 프로그래밍 수업은 여기까지 하겠습니다. 다들 과제 있는거 아시죠?\"§§\"...\"§§\"이렇게 하여야 3, 4학년 되어서 후회 안 해요! 나중에 후회하지 말고 공부는 계속하세요. 복습도!\"§§여러 잡생각에 수업 하나도 못 들었네※.※.※.☆책상 옆에다 놓은 가방을 들고 일어나서 강의실 문 밖을 나가서 오늘도 똑같이 집으로 가는 버스를 타러 정류장에 줄을 섰다.§§※\"좀 일찍 끝내주지.. 또 만원 버스를 타야하잖아?!※\"§§\"" + name + "??\"§§※누군가가 내 뒤에서 이름을 불렀다.§§※\"네?\"§§※\"" + name + "?? 맞지? 아까 너의 옆에서 수업 듣고 있었던 강민희야! 컴퓨터공학부 맞지??\"§§※같은 학과로 보이는 두 학우가 내 뒤에서 미소를 지으며 나에게 말을 걸었다.§§※\"어! 맞아! 아까 옆에서 수업 들었던 사람 맞지?!!※\"§§\"오늘 컴퓨터공학부 몇 명하고 같이 술 마실껀데 같이 가지 않을래?!!\"■";
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
	
	text.innerHTML = "\"오늘 웹 프로그래밍 수업은 여기까지 하겠습니다. 다들 과제 있는거 아시죠?\"<br/><br/>\"...\"<br/><br/>\"이렇게 하여야 3, 4학년 되어서 후회 안 해요! 나중에 후회하지 말고 공부는 계속하세요. 복습도!\"<br/><br/>여러 잡생각에 수업 하나도 못 들었네...<br/><br/><img src=\"../image/busstop.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>책상 옆에다 놓은 가방을 들고 일어나서 강의실 문 밖을 나가서 오늘도 똑같이 집으로 가는 버스를 타러 정류장에 줄을 섰다.<br/><br/>\"좀 일찍 끝내주지.. 또 만원 버스를 타야하잖아?!\"<br/><br/>\"" + name + "??\"<br/><br/>누군가가 내 뒤에서 이름을 불렀다.<br/><br/>\"네?\"<br/><br/>\"" + name + "?? 맞지? 아까 너의 옆에서 수업 듣고 있었던 강민희야! 컴퓨터공학부 맞지??\"<br/><br/>같은 학과로 보이는 두 학우가 내 뒤에서 미소를 지으며 나에게 말을 걸었다.<br/><br/>\"어! 맞아! 아까 옆에서 수업 들었던 사람 맞지?!!\"<br/><br/>\"오늘 컴퓨터공학부 몇 명하고 같이 술 마실껀데 같이 가지 않을래?!!\"<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a><br/>";
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
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_first_2.png" height="240" width="240"></a>');
}

var name = localStorage.getItem('name');
var from_path = 1;

var content = "\'아.. 아르바이트 하느라 공부도 못 했는데... 큰일이네\'§§※그와중에 오늘 수업 끝나자마자 식당에 급하게 한 명이 빠졌다고 채워달라고 해서 한다고 한 상황이여서 공부도 못하는 상황이다...§§※그래도 교통비하고 시급 30분 더 쳐준다고 했으니까..§§※\"" + name + "!\"§§※옆자리에 있던 강민희가 말을 걸었다.§§※\"어? 왜??\"§§※\"이따가 도서관 갈껀데 같이 안 갈래??\"§§※\"나 큰일 났어!... 오늘 아르바이트 대타로 뛰어주기로 했어.... 중간고사 그냥 안 볼까?\"§§※\"엥?? 정말???\"■";
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
	
	text.innerHTML = "\'아.. 아르바이트 하느라 공부도 못 했는데... 큰일이네\'<br/><br/>그와중에 오늘 수업 끝나자마자 식당에 급하게 한 명이 빠졌다고 채워달라고 해서 한다고 한 상황이여서 공부도 못하는 상황이다...<br/><br/>그래도 교통비하고 시급 30분 더 쳐준다고 했으니까..<br/><br/>\"" + name + "!\"<br/><br/>옆자리에 있던 강민희가 말을 걸었다.<br/><br/>\"어? 왜??\"<br/><br/>\"이따가 도서관 갈껀데 같이 안 갈래??\"<br/><br/>\"나 큰일 났어!... 오늘 아르바이트 대타로 뛰어주기로 했어.... 중간고사 그냥 안 볼까?\"<br/><br/>\"엥?? 정말???\"<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function talk() {
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"Self\" placeholder=\"중간고사 볼까? 말까?\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/><br/>');
	$('.help').html('<a onclick="help();"><img src="../image\\help.png" height="50" width="50"></a> <- HINT');
}

function help() {
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_fourth_1.png" height="240" width="240"></a>');
}


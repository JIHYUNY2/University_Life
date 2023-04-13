var name = localStorage.getItem('name');

var from_path = 2;

var content = "\""+ name + "! 같이 공부하러 가자!\"§§※\"나 지금 너무 배고픈데 저녁 먼저 먹으러 가면 안 될까?!\"§§※\"" + name + "... 너 또 그러다 술 마시잖아.. 나 진짜 시험 공부 해야해..\§§※\"신입생 때 안 해보면 언제 해보겠어! 가자! 응?\"§§※강민희가 웃으며 말했다.§§※\"그래! 솔직히 우리가 언제 이래보겠어?!!! 가자!\"§§※그렇게 컴퓨터공학부 여러 명이서 술자리를 가지게 되었다.§§※\"마셔마셔!!!!\"§§※......§§※정신 차려보니 강민희 자취방이였다...§§※옆에는 강민희가 자고 있고 시계는 아직 시험시간 1시간 전이다...§§※\"민희야....\"§§※\"응?... " + name + "...\"§§※\"어제 나 이상한 짓 안 했지?..\"§§※\"응.. 그냥 재미있게 놀았어.... 시험 한 시간 전이네.. 나 먼저 씻을게..\"§§※강민희가 일어나서 먼저 화장실에 들어가 씻었다.§§※\'하... 어차피 공부도 안 했는데 가서 봐봤자 의미 없을 것 같은데... 20점 이하는 무조건 D를 준다고 교수님이 말하셨다..\'§§※\'중간고사 안 볼까...\'■";
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
	
	text.innerHTML = "\""+ name + "! 같이 공부하러 가자!\"<br/><br/>\"나 지금 너무 배고픈데 저녁 먼저 먹으러 가면 안 될까?!\"<br/><br/>\"" + name + "... 너 또 그러다 술 마시잖아.. 나 진짜 시험 공부 해야해..\<br/><br/>\"신입생 때 안 해보면 언제 해보겠어! 가자! 응?\"<br/><br/>강민희가 웃으며 말했다.<br/><br/>\"그래! 솔직히 우리가 언제 이래보겠어?!!! 가자!\"<br/><br/>그렇게 컴퓨터공학부 여러 명이서 술자리를 가지게 되었다.<br/><br/>\"마셔마셔!!!!\"<br/><br/>......<br/><br/>정신 차려보니 강민희 자취방이였다...<br/><br/>옆에는 강민희가 자고 있고 시계는 아직 시험시간 1시간 전이다...<br/><br/>\"민희야....\"<br/><br/>\"응?... " + name + "...\"<br/><br/>\"어제 나 이상한 짓 안 했지?..\"<br/><br/>\"응.. 그냥 재미있게 놀았어.... 시험 한 시간 전이네.. 나 먼저 씻을게..\"<br/><br/>강민희가 일어나서 먼저 화장실에 들어가 씻었다.<br/><br/>\'하... 어차피 공부도 안 했는데 가서 봐봤자 의미 없을 것 같은데... 20점 이하는 무조건 D를 준다고 교수님이 말하셨다..\'<br/><br/>\'중간고사 안 볼까...\'<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
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


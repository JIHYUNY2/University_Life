var name = localStorage.getItem('name');
var one = localStorage.getItem('one');
var four = localStorage.getItem('four');
var six = localStorage.getItem('six');

var content = "학교 곳곳에 공모전 전단지가 붙기 시작했다.§§※미디어 콘텐츠 공모전, 3분 영상 공모전, UCC 공모전 등등...§§※얼핏 듣기로는 공모전이 취업할 때 도움이 많이 된다고 들었는데..§§※1학년부터 4학년까지 조를 짜서 공모전 준비를 시작하는 분위기였다.■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "학교 곳곳에 공모전 전단지가 붙기 시작했다.<br/><br/>미디어 콘텐츠 공모전, 3분 영상 공모전, UCC 공모전 등등...<br/><br/>얼핏 듣기로는 공모전이 취업할 때 도움이 많이 된다고 들었는데..<br/><br/>1학년부터 4학년까지 조를 짜서 공모전 준비를 시작하는 분위기였다.<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function next() {
	if (one == 1 && four == 1) {
		location.href = "seventh_1_1.html";
	}
	else if (one == 2 && four == 1) {
		location.href = "seventh_1_2.html";
	}
	else if (one == 3 && four == 1) {
		location.href = "seventh_1_3.html";
	}
	else if (one == 1 && four == 2) {
		if (six == 0) {
			location.href = "seventh_2_1_no.html";
		}
		else location.href = "seventh_2_1_yes.html";
	}
	else if (one == 2 && four == 2) {
		location.href = "seventh_2_2.html";
	}
	else if (one == 3 && four == 2) {
		location.href = "seventh_2_3.html";
	}
}
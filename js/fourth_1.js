var name = localStorage.getItem('name');
var one = localStorage.getItem('one');

var content = "윤우 선배와 술자리를 가지고 나서부터 학교에서 자주 만나게 되었다.§§※과제도 많은 도움을 주시고 점심도 많이 사주시기 시작하셨다.§§※그러나 이젠 누군가를 만나기는 힘들어졌다.§§※대학교에서의 가장 중요한 시기. ※중※간※고※사가 다가왔다!§§※\"내일 웹 프로그래밍 중간고사인거 알고 있죠?? 수업 시간에 배운 실습과 과제들을 제대로 숙지를 했다면 문제는 전혀 어렵지 않게 낼 것이니 잘 준비하고 내일 보도록 해요!\"■";
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
		if (one == 1) {
			text.innerHTML += '<br/><br/><br/><br/><br/><a href="fourth_1_1.html" rel="external" style="float:right">다음으로..</a>';	
		}
		else if (one == 2) {
			text.innerHTML += '<br/><br/><br/><br/><br/><a href="fourth_1_2.html" rel="external" style="float:right">다음으로..</a>';	
		}
		else if (one == 3) {
			text.innerHTML += '<br/><br/><br/><br/><br/><a href="fourth_1_3.html" rel="external" style="float:right">다음으로..</a>';	
		}
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "윤우 선배와 술자리를 가지고 나서부터 학교에서 자주 만나게 되었다.<br/><br/>과제도 많은 도움을 주시고 점심도 많이 사주시기 시작하셨다.<br/><br/>그러나 이젠 누군가를 만나기는 힘들어졌다.<br/><br/>대학교에서의 가장 중요한 시기. 중간고사가 다가왔다!<br/><br/>\"내일 웹 프로그래밍 중간고사인거 알고 있죠?? 수업 시간에 배운 실습과 과제들을 제대로 숙지를 했다면 문제는 전혀 어렵지 않게 낼 것이니 잘 준비하고 내일 보도록 해요!\"<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next_html();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function next_html() {
	if (one == 1) {
		location.href = "fourth_1_1.html";
	}
	else if (one == 2) {
		location.href = "fourth_1_2.html";
	}
	else if (one == 3) {
		location.href = "fourth_1_3.html";	
	}
}

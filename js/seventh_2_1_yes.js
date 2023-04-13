var name = localStorage.getItem('name');

var content = "민성 오빠와 다시 사귀게 되고 첫 데이트는 스터디 카페에서 하기로 했다.§§※\"오빠! 뭐해!?\"§§※\"나 공모전 한번 나가보려구.. 소프트웨어 공모전인데 너도 컴공이지?! 같이 나갈래?\"§§※\"어떻게 하면 되는데??\"§§※\"사회적 약자 생활개선을 위한 웹이나 앱 개발이 주제인데 어떻게 할 지 고민중이야!\"§§※\"우와 재밌겠다! 같이 하자!\"§§※공모전 주제를 정하는데 남자친구여서 그런지 시간 가는줄 모르고 3시간 동안 주제에 대해 이야기를 나눴고 민성오빠와 사이가 더 가까워지는 기분이 들었다.■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "민성 오빠와 다시 사귀게 되고 첫 데이트는 스터디 카페에서 하기로 했다.<br/><br/>\"오빠! 뭐해!?\"<br/><br/>\"나 공모전 한번 나가보려구.. 소프트웨어 공모전인데 너도 컴공이지?! 같이 나갈래?\"<br/><br/>\"어떻게 하면 되는데??\"<br/><br/>\"사회적 약자 생활개선을 위한 웹이나 앱 개발이 주제인데 어떻게 할 지 고민중이야!\"<br/><br/>\"우와 재밌겠다! 같이 하자!\"<br/><br/>공모전 주제를 정하는데 남자친구여서 그런지 시간 가는줄 모르고 3시간 동안 주제에 대해 이야기를 나눴고 민성오빠와 사이가 더 가까워지는 기분이 들었다.<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

var name = localStorage.getItem('name');

var content = "\'교수님\'§§※집 앞 도서관에 도착해서 공부를 하려고 노트북을 켰는데 교수님께 전화가 왔다.§§※\"교수님 안녕하세요!\"§§※\"" + name + "! ※저번에 공모전 물어봤었지? 괜찮은 공모전 하나 있는데 한번 참여해볼래?\"§§※\"네! 혹시 어떤 공모전인가요?!\"§§※\"내일 점심시간에 내 방 잠깐 올수 있니? 설명해줄게~\"§§※해야 할 과제도 산더미처럼 많았지만 공모전까지 나가면...§§※더 바빠질거라는 생각에 서둘러 학교에서 하던 과제를 시작했다.■";
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
	
	text.innerHTML = "\'교수님\'<br/><br/>집 앞 도서관에 도착해서 공부를 하려고 노트북을 켰는데 교수님께 전화가 왔다.<br/><br/>\"교수님 안녕하세요!\"<br/><br/>\"" + name + "! 저번에 공모전 물어봤었지? 괜찮은 공모전 하나 있는데 한번 참여해볼래?\"<br/><br/>\"네! 혹시 어떤 공모전인가요?!\"<br/><br/>\"내일 점심시간에 내 방 잠깐 올수 있니? 설명해줄게~\"<br/><br/>해야 할 과제도 산더미처럼 많았지만 공모전까지 나가면...<br/><br/>더 바빠질거라는 생각에 서둘러 학교에서 하던 과제를 시작했다.<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

var name = localStorage.getItem('name');

var content = "학교 벽에 공모전 홍보 전단지로 가득 차있었다.§§※\'나도 공모전 나가고 싶은데※.※.※.\'§§※공모전 전단지를 쭉 봤는데 대부분 팀으로 나가야 하는 것 같았다.§§※\"민희야..! 나랑 같이 공모전 나갈래!?\"§§※\"아 미안.. 나 과제가 많아서..\"§§※\'역시.. 나랑 나가줄 리 없지..\'§§※엘리베이터를 기다리고 있던 민희에게 같이 공모전에 나가자고 제안했지만 퇴짜를 맞았고 혼자 나갈 수 있는 공모전을 찾아보기 시작했다.§§※\'1인 미디어 콘텐츠 공모전\'§§※고등학교 때 취미로 동영상을 편집하고 영상을 찍었던 경험이 있었어서 미디어 콘텐츠 공모전이 제일 먼저 눈에 띄었고 바로 지원서를 작성하기 시작했다.■";
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
	
	text.innerHTML = "학교 벽에 공모전 홍보 전단지로 가득 차있었다.<br/><br/>\'나도 공모전 나가고 싶은데...\'<br/><br/>공모전 전단지를 쭉 봤는데 대부분 팀으로 나가야 하는 것 같았다.<br/><br/>\"민희야..! 나랑 같이 공모전 나갈래!?\"<br/><br/>\"아 미안.. 나 과제가 많아서..\"<br/><br/>\'역시.. 나랑 나가줄 리 없지..\'<br/><br/>엘리베이터를 기다리고 있던 민희에게 같이 공모전에 나가자고 제안했지만 퇴짜를 맞았고 혼자 나갈 수 있는 공모전을 찾아보기 시작했다.<br/><br/>\'1인 미디어 콘텐츠 공모전\'<br/><br/>고등학교 때 취미로 동영상을 편집하고 영상을 찍었던 경험이 있었어서 미디어 콘텐츠 공모전이 제일 먼저 눈에 띄었고 바로 지원서를 작성하기 시작했다.<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

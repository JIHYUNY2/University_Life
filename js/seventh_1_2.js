var name = localStorage.getItem('name');

var content = "- 한신대학교§§※\"뭐가 이렇게 많이 붙어있어..?\"§§※\"요새 공모전 시즌이래잖아~ " + name + " ※우리도 나가볼까? 선배들이 공모전 얘기 엄청 하시던데\"§§※\"그럴까..? 근데 어떤거 하지? 민희야 너 뭐 좀 알아?!\"§§※\"일단 시작해보자! 우리는 컴공이니까.. 소프트웨어 공모전 어때!\"§§※\"그래! 매주 월수금마다 학교 끝나고 3시간씩만 투자해보자ㅎㅎ\"§§※민희와 한 달간 학교에서 배운 코딩 스킬과 막히는 부분은 선배들의 도움을 받으며 공모전 준비를 헀다.§§※\"꺆~~~ 무슨일이야!! " + name + "야 ※발표난거 봤어??! 우리 우수상이래!!!\"§§※\"역시 우리 컴공 에이슨가봐.. 상금으로 뭐하지?!\"§§※\"말해뭐해 술먹어야지~ 이따 7시에 한신포차!! 우리 동기들도 부를게!! 이따봐!\"§§※처음이라서 서툴렀지만 꾸준하게 노력한 결과 우수상을 받게 되었고 한달 만에 코딩 실력도 월등히 좋아진 것 같아 뿌듯했다.■";
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
	
	text.innerHTML = "- 한신대학교<br/><br/>\"뭐가 이렇게 많이 붙어있어..?\"<br/><br/>\"요새 공모전 시즌이래잖아~ " + name + " 우리도 나가볼까? 선배들이 공모전 얘기 엄청 하시던데\"<br/><br/>\"그럴까..? 근데 어떤거 하지? 민희야 너 뭐 좀 알아?!\"<br/><br/>\"일단 시작해보자! 우리는 컴공이니까.. 소프트웨어 공모전 어때!\"<br/><br/>\"그래! 매주 월수금마다 학교 끝나고 3시간씩만 투자해보자ㅎㅎ\"<br/><br/>민희와 한 달간 학교에서 배운 코딩 스킬과 막히는 부분은 선배들의 도움을 받으며 공모전 준비를 헀다.<br/><br/>\"꺆~~~ 무슨일이야!! " + name + "야 발표난거 봤어??! 우리 우수상이래!!!\"<br/><br/>\"역시 우리 컴공 에이슨가봐.. 상금으로 뭐하지?!\"<br/><br/>\"말해뭐해 술먹어야지~ 이따 7시에 한신포차!! 우리 동기들도 부를게!! 이따봐!\"<br/><br/>처음이라서 서툴렀지만 꾸준하게 노력한 결과 우수상을 받게 되었고 한달 만에 코딩 실력도 월등히 좋아진 것 같아 뿌듯했다.<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

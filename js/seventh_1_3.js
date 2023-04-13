var name = localStorage.getItem('name');

var content = "축제가 끝나고 어느새 시끌벅적하던 학교도 조용해 졌다.§§※\"으~ 다들 수고 했어! 이제 슬슬 정리해 볼까!?\"§§※\"이게 다 뭐람.. 무슨 종이가 이렇게 떨어져있지?!\"§§※포장마차 정리를 하는데 떨어진 종이를 보니 소프트웨어 공모전 전단지였다.§§※\"수아선배! 이거 나가 보셨어요!?\"§§※\"아 그거? 1학년 때 한번 나갔었지! 상은 못받았지만..\"§§※\"어땠어요??!\"§§※\"음.. 힘들긴 했는데 나중에 자소서에 한줄 더 쓸 거리도 생기고 결과물 만들고나서 그 성취감이 제일 컸어! 물론 실력도 훨씬 늘었구..\"§§※포장마차를 정리하면서 수아선배가 공모전에 나갔었던 이야기를 계속 해주셨고 좋은 경험이 될 것 같아 공모전 준비를 하기로 마음먹었다.■";
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
	
	text.innerHTML = "축제가 끝나고 어느새 시끌벅적하던 학교도 조용해 졌다.<br/><br/>\"으~ 다들 수고 했어! 이제 슬슬 정리해 볼까!?\"<br/><br/>\"이게 다 뭐람.. 무슨 종이가 이렇게 떨어져있지?!\"<br/><br/>포장마차 정리를 하는데 떨어진 종이를 보니 소프트웨어 공모전 전단지였다.<br/><br/>\"수아선배! 이거 나가 보셨어요!?\"<br/><br/>\"아 그거? 1학년 때 한번 나갔었지! 상은 못받았지만..\"<br/><br/>\"어땠어요??!\"<br/><br/>\"음.. 힘들긴 했는데 나중에 자소서에 한줄 더 쓸 거리도 생기고 결과물 만들고나서 그 성취감이 제일 컸어! 물론 실력도 훨씬 늘었구..\"<br/><br/>포장마차를 정리하면서 수아선배가 공모전에 나갔었던 이야기를 계속 해주셨고 좋은 경험이 될 것 같아 공모전 준비를 하기로 마음먹었다.<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

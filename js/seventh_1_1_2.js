var name = localStorage.getItem('name');

var content = "수민이와 미영광홍 친구 1명과 UCC 공모전을 준비하게 되었고 한 달간 준비 했지만 아쉽게 수상은 하지 못했다.§§※\"아쉽다 수민아.. 우리가 제일 잘한 것 같은데..\"§§※\"괜찮아! 다 경험이고 경력이지 뭐ㅎㅎ 처음 나간거니까 나간거에 의미를 두자구!\"§§※\"맞지맞지! 근데 생각보다 재밌었어.. 우리 공모전 또나갈까?! 다음달에 소프트웨어 공모전 하나 있던데!\"§§※\"소프트웨어..? 나 그런거 잘 모르는데...\"§§※\"내가 다 알려줄게! 다 배우면서 하는거지~~\"§§※\"오~ " + name + " ※든든한데?? 그래 나가보자! 나중에 취업할 때 자기소개서에 쓸 거 많아지겠다ㅎㅎ\"§§※\"내일부터 시작하는걸로! 일단 나 알바하러 가야되니까 수민아 내일보자!!\"■";
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
	
	text.innerHTML = "수민이와 미영광홍 친구 1명과 UCC 공모전을 준비하게 되었고 한 달간 준비 했지만 아쉽게 수상은 하지 못했다.<br/><br/>\"아쉽다 수민아.. 우리가 제일 잘한 것 같은데..\"<br/><br/>\"괜찮아! 다 경험이고 경력이지 뭐ㅎㅎ 처음 나간거니까 나간거에 의미를 두자구!\"<br/><br/>\"맞지맞지! 근데 생각보다 재밌었어.. 우리 공모전 또나갈까?! 다음달에 소프트웨어 공모전 하나 있던데!\"<br/><br/>\"소프트웨어..? 나 그런거 잘 모르는데...\"<br/><br/>\"내가 다 알려줄게! 다 배우면서 하는거지~~\"<br/><br/>\"오~ " + name + " 든든한데?? 그래 나가보자! 나중에 취업할 때 자기소개서에 쓸 거 많아지겠다ㅎㅎ\"<br/><br/>\"내일부터 시작하는걸로! 일단 나 알바하러 가야되니까 수민아 내일보자!!\"<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

var name = localStorage.getItem('name');

var content = "민성 오빠와 학교 축제를 즐기다가 주변 술집에 가서 술을 기울였다.§§※현재 대학 등록금도 내야하는 상황이여서 돈을 아껴써야하는 상황인데 식비나 교통비를 다 빼면 민성 오빠와의 데이트 비용으로 다 써버리고 있다.....§§※술자리가 거의 끝날 때 쯤에 민성 오빠에게 말했다.§§※\"오빠, 오늘도 미안한데 나 진짜 돈이 없어서 오빠가 혹시 내줄 수 있어?\"§§※\"" + name + ".※.※. ※너 아르바이트 하잖아? 솔직히 지금까지 데이트 할 때 너가 낸 적은 거의 없는거 알아?\"§§※민성 오빠의 말투에 갑자기 화가 치밀어 올랐다.§§※\"나 대학등록금을 내가 부담해야되서 돈 없는 걸 어떡해?\"§§※\"그럼 나도 너랑 똑같은 대학생인데 나는 대학등록금 안 내니? 나도 너처럼 아르바이트 하고 용돈 안 받아가면서 데이트 하고 있어.\"§§※분위기가 갑자기 안 좋아졌고 돈 문제 말고도 지금까지 서운했던 것들을 한 번에 말하며 싸우기 시작했다.§§※\"됐다. 됐어. 오늘은 여기까지 마시고 헤어지자.\"§§※\"...\"§§※그렇게 오늘 서로 더치페이를 하고 각자 집으로 갔다...■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"seventh_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "민성 오빠와 학교 축제를 즐기다가 주변 술집에 가서 술을 기울였다.<br/><br/>현재 대학 등록금도 내야하는 상황이여서 돈을 아껴써야하는 상황인데 식비나 교통비를 다 빼면 민성 오빠와의 데이트 비용으로 다 써버리고 있다.....<br/><br/>술자리가 거의 끝날 때 쯤에 민성 오빠에게 말했다.<br/><br/>\"오빠, 오늘도 미안한데 나 진짜 돈이 없어서 오빠가 혹시 내줄 수 있어?\"<br/><br/>\"" + name + "... 너 아르바이트 하잖아? 솔직히 지금까지 데이트 할 때 너가 낸 적은 거의 없는거 알아?\"<br/><br/>민성 오빠의 말투에 갑자기 화가 치밀어 올랐다.<br/><br/>\"나 대학등록금을 내가 부담해야되서 돈 없는 걸 어떡해?\"<br/><br/>\"그럼 나도 너랑 똑같은 대학생인데 나는 대학등록금 안 내니? 나도 너처럼 아르바이트 하고 용돈 안 받아가면서 데이트 하고 있어.\"<br/><br/>분위기가 갑자기 안 좋아졌고 돈 문제 말고도 지금까지 서운했던 것들을 한 번에 말하며 싸우기 시작했다.<br/><br/>\"됐다. 됐어. 오늘은 여기까지 마시고 헤어지자.\"<br/><br/>\"...\"<br/><br/>그렇게 오늘 서로 더치페이를 하고 각자 집으로 갔다...<br/><br/><br/><br/><br/><a href=\"seventh_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

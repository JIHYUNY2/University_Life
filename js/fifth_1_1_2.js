var name = localStorage.getItem('name');
var money = localStorage.getItem('money');

localStorage.setItem('four', 2);

var content = "\"아~~ 오늘도 힘들었다!\"§§※\"그러게요.. 원래 오늘 알바 하는 날 아니었는데!!\"§§※\"너도 수고했어ㅎㅎ 근데 " + name + "아 혹시 남자친구 있어..?! 일하면서 봤는데 내 이상형이랑 가까워서 친해지고 싶어..!\"§§※나도 민성오빠에게 관심은 있었지만 아직은 연애보단 돈이 더 중요하다고 생각했기 때문에 거절하기로 마음먹었다.§§※\"음.. 저는 아직 연애 생각이 없어서.. 그냥 친구해요 우리!\"■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"sixth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\"아~~ 오늘도 힘들었다!\"<br/><br/>\"그러게요.. 원래 오늘 알바 하는 날 아니었는데!!\"<br/><br/>\"너도 수고했어ㅎㅎ 근데 " + name + "아 혹시 남자친구 있어..?! 일하면서 봤는데 내 이상형이랑 가까워서 친해지고 싶어..!\"<br/><br/>나도 민성오빠에게 관심은 있었지만 아직은 연애보단 돈이 더 중요하다고 생각했기 때문에 거절하기로 마음먹었다.<br/><br/>\"음.. 저는 아직 연애 생각이 없어서.. 그냥 친구해요 우리!\"<br/><br/><br/><br/><br/><a href=\"sixth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

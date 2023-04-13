var name = localStorage.getItem('name');

var content = "민성오빠와 완전히 끝을 내고 예전에 민성오빠와 갔던 카페에 갔다.§§※\"어!? 민희야!\"§§※\"" + name + "? 너가 여기 어쩐일이야??\"§§※\"나 이 카페 원래 자주오는데.. 여기서 뭐해??\"§§※\"친구가 공모전 나가자구 해서 고민중이었어..\"§§※\"공모전? 나도 할래!!\"§§※\"그럴래? 한번 물어볼게. 아 그리고 너 지금 남친 없지?!\"§§※\"웅 없는데 왜?\"§§※\"같이 공모전 나가는 친구가 전에 너 소개 시켜달라고 했었거든 프사보고.. 소개 받을 생각있어?!\"§§※\"아니.. 지금은 연애할 시기가 아닌거 같애..\"§§※\"에이 그냥 연락만 해보는거지 뭐! 꼭 연애 해야하나!\"§§※\"음.. 그럼 한번 받아볼까?\"§§※당분간 연애를 하지 않을 계획이었지만 민희의 말에 연락이라도 한 번 해보기로 하고 연락처를 교환했다.■";
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
	
	text.innerHTML = "민성오빠와 완전히 끝을 내고 예전에 민성오빠와 갔던 카페에 갔다.<br/><br/>\"어!? 민희야!\"<br/><br/>\"" + name + "? 너가 여기 어쩐일이야??\"<br/><br/>\"나 이 카페 원래 자주오는데.. 여기서 뭐해??\"<br/><br/>\"친구가 공모전 나가자구 해서 고민중이었어..\"<br/><br/>\"공모전? 나도 할래!!\"<br/><br/>\"그럴래? 한번 물어볼게. 아 그리고 너 지금 남친 없지?!\"<br/><br/>\"웅 없는데 왜?\"<br/><br/>\"같이 공모전 나가는 친구가 전에 너 소개 시켜달라고 했었거든 프사보고.. 소개 받을 생각있어?!\"<br/><br/>\"아니.. 지금은 연애할 시기가 아닌거 같애..\"<br/><br/>\"에이 그냥 연락만 해보는거지 뭐! 꼭 연애 해야하나!\"<br/><br/>\"음.. 그럼 한번 받아볼까?\"<br/><br/>당분간 연애를 하지 않을 계획이었지만 민희의 말에 연락이라도 한 번 해보기로 하고 연락처를 교환했다.<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

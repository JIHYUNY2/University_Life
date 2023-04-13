var name = localStorage.getItem('name');

var content = "\"그래? 그럼 어쩔 수 없지! 알았어. 근데 매일 뭐 때문에 그렇게 바빠? 과제? 아르바이트?\"§§※\"사실 아르바이트를 매일 하여야 하는 상황이여서... 미안해..\"§§※강민희가 웃으며 말했다.§§※\"아니야! 바쁘면 어쩔 수 없지.\"§§※\"다음 주에 정말 시간 나니까 다음 주에 꼭 먹자!!\"§§※\"그래그래!\"§§※그 뒤로는 서로 사적인 말은 거의 오고가지 않았고 과제 이야기만 오고 갔다...■";
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
	else if (content[index] == '■') {
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="third_1.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\"그래? 그럼 어쩔 수 없지! 알았어. 근데 매일 뭐 때문에 그렇게 바빠? 과제? 아르바이트?\"<br/><br/>\"사실 아르바이트를 매일 하여야 하는 상황이여서... 미안해..\"<br/><br/>강민희가 웃으며 말했다.<br/><br/>\"아니야! 바쁘면 어쩔 수 없지.\"<br/><br/>\"다음 주에 정말 시간 나니까 다음 주에 꼭 먹자!!\"<br/><br/>\"그래그래!\"<br/><br/>그 뒤로는 서로 사적인 말은 거의 오고가지 않았고 과제 이야기만 오고 갔다...<br/><br/><br/><br/><br/><a href=\"third_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

localStorage.setItem('money', money);
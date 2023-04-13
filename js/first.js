var content = "신입생이 되어 2주가 지나고§※지금 있는 곳은 고등학교가 아니라는 것을 알게 되었다.§§※공부, 아르바이트, 노는 것을 마음대로 할 수 있고 그 자유에 대하여 책임이 있다는 것을※.※.※.☆벌써 과제도 물 밀려오듯이 들어오고 어느 정도 적응도 되었다.§§※수능이 끝나자마자 부모님께서는 용돈을 끊어버리셨고 아르바이트를 하며 사회생활을 해보라고 하셨다.... ※안 그래도 구하기 힘든데..§§※동네 친구들 말로는 지금 아니면 언제 놀아보냐고 연애도 하고 친구 좀 사귀고 대학생 생활비 대출이라는 것이 있는데 이거라도 받아서 꼭 놀아보라고 한다.§§※그러나... 주어진 시간은 한정적이라는 것!§§※대학 생활을 어떻게 하여야 잘 했다고 할 수 있을까?......◆";
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
		text.innerHTML += "<br/><br/><img src=\"../image/project.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>";
		index++;	
	}
	else if (content[index] == '◆') { // 다음으로
		sleep(1000);
		index++;
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="first_2.html" rel="external" style="float:right">다음으로..</a>';
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "신입생이 되어 2주가 지나고<br/>지금 있는 곳은 고등학교가 아니라는 것을 알게 되었다.<br/><br/>공부, 아르바이트, 노는 것을 마음대로 할 수 있고 그 자유에 대하여 책임이 있다는 것을...<br/><br/><img src=\"../image/project.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>벌써 과제도 물 밀려오듯이 들어오고 어느 정도 적응도 되었다.<br/><br/>수능이 끝나자마자 부모님께서는 용돈을 끊어버리셨고 아르바이트를 하며 사회생활을 해보라고 하셨다.... 안 그래도 구하기 힘든데..<br/><br/>동네 친구들 말로는 지금 아니면 언제 놀아보냐고 연애도 하고 친구 좀 사귀고 대학생 생활비 대출이라는 것이 있는데 이거라도 받아서 꼭 놀아보라고 한다.<br/><br/>그러나... 주어진 시간은 한정적이라는 것!<br/><br/>대학 생활을 어떻게 하여야 잘 했다고 할 수 있을까?......<br/><br/><br/><br/><br/><a href=\"first_2.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);
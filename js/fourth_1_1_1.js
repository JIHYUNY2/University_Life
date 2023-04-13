var name = localStorage.getItem('name');
localStorage.setItem('Test_Paper', 1);

var content = "갑자기 중요한 시험이 잡혔다고 하여 사장님께 죄송하다고 하였고 다행히 식당이 많이 안 바빠서 괜찮다고 하셨다!§§※그렇게 강민희와 컴퓨터공학부 친구들과 함께 도서관에서 머리 싸메고 공부를 하였다.§§※\"그러니까.. 어... 수업시간에 이 코딩이 제일 중요하다고 했었다고 한거지??\"§§※\"그렇다던데? 이거 공부만 해도 반은 먹고 들어간대!\"§§※진짜 혼자서 공부했으면 큰일 날 뻔 했다! 분명 교수님께서 그렇게 말하셨던 기억이 전혀 없는데!§§다같이 저녁을 먹고 헤어졌고 그렇게 공부했던 부분들은 거의 다 나와서 그럭저럭 시험을 치게 되었다!§§※(\'" + name + "의 시험지\' 컬렉션이 추가되었다!)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="fifth_1_1.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "갑자기 중요한 시험이 잡혔다고 하여 사장님께 죄송하다고 하였고 다행히 식당이 많이 안 바빠서 괜찮다고 하셨다!<br/><br/>그렇게 강민희와 컴퓨터공학부 친구들과 함께 도서관에서 머리 싸메고 공부를 하였다.<br/><br/>\"그러니까.. 어... 수업시간에 이 코딩이 제일 중요하다고 했었다고 한거지??\"<br/><br/>\"그렇다던데? 이거 공부만 해도 반은 먹고 들어간대!\"<br/><br/>진짜 혼자서 공부했으면 큰일 날 뻔 했다! 분명 교수님께서 그렇게 말하셨던 기억이 전혀 없는데!<br/><br/>다같이 저녁을 먹고 헤어졌고 그렇게 공부했던 부분들은 거의 다 나와서 그럭저럭 시험을 치게 되었다!<br/><br/>(\'" + name + "의 시험지\' 컬렉션이 추가되었다!)<br/><br/><br/><br/><br/><a href=\"fifth_1_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);


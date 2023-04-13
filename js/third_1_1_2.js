var name = localStorage.getItem('name');

var content = "\"" + name + "아 ※지금 몇시니?\"§§※\"사장님※.※. 오늘 과 선배들이랑 대면식이 있었어서.. 죄송합니다..\"§§※\"그래도 한시간이나 늦으면 어떡해.. 이번엔 처음이니까 그냥 넘어가는데 앞으로 또 늦으면 얄짤없어!\"§§※사장님께선 신입생인 내 사정을 이해해 주셨고 늦은만큼 더 열심히 알바에 임했다.§§※(알바비 + 50000원)§§※(술값 - 50000원)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="fourth_1.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\"" + name + "아 지금 몇시니?\"<br/><br/>\"사장님.. 오늘 과 선배들이랑 대면식이 있었어서.. 죄송합니다..\"<br/><br/>\"그래도 한시간이나 늦으면 어떡해.. 이번엔 처음이니까 그냥 넘어가는데 앞으로 또 늦으면 얄짤없어!\"<br/><br/>사장님께선 신입생인 내 사정을 이해해 주셨고 늦은만큼 더 열심히 알바에 임했다.<br/><br/>(알바비 + 50000원)<br/><br/>(술값 - 50000원)<br/><br/><br/><br/><br/><a href=\"fourth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

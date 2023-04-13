var name = localStorage.getItem('name');
localStorage.setItem('six', 0);

var content = "\"그래.. 그럼 어쩔 수 없지... 미안해.\"§§※민성 오빠가 먼저 식당으로 들어갔고 나도 뒤따라서 들어갔다.§§※그 뒤로는 주문할 때 말고는 나에게 말을 전혀 걸지 않았다.■";
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
	
	text.innerHTML = "\"그래.. 그럼 어쩔 수 없지... 미안해.\"<br/><br/>민성 오빠가 먼저 식당으로 들어갔고 나도 뒤따라서 들어갔다.<br/><br/>그 뒤로는 주문할 때 말고는 나에게 말을 전혀 걸지 않았다.<br/><br/><br/><br/><br/><a href=\"seventh_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

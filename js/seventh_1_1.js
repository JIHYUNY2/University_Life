var name = localStorage.getItem('name');

var content = "\'띵\'§§집에 누워서 아르바이트를 더 하려고 알아보던 중 UCC 공모전 홍보 문자가 왔다.§§\'최우수상 500만원 우수상 250만원 장려상 100만원\'§§공모전에 나가서 수상만 하면 알바를 하면서 벌 수 있는 돈보다 훨씬 더 많은 상금을 탈 수 있었다.§§UCC면 미디어 영상 광고 홍보학과 친구랑 하는게 좋을 것 같아 미영광홍 수민이에게 전화를 했다.§§(컬렉션 '이수민'이 추가되었다!!!!)§§\"수민아! 혹시 너도 UCC 공모전 문자 받았어?\"§§\"안 그래도 나가보려고 했는데! 같이 할래??!\"§§\"좋지좋지!! 열심히 해볼게!\"■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\'띵\'<br/><br/>집에 누워서 아르바이트를 더 하려고 알아보던 중 UCC 공모전 홍보 문자가 왔다.<br/><br/>\'최우수상 500만원 우수상 250만원 장려상 100만원\'<br/><br/>공모전에 나가서 수상만 하면 알바를 하면서 벌 수 있는 돈보다 훨씬 더 많은 상금을 탈 수 있었다.<br/><br/>UCC면 미디어 영상 광고 홍보학과 친구랑 하는게 좋을 것 같아 미영광홍 수민이에게 전화를 했다.<br/><br/>(컬렉션 '이수민'이 추가되었다!!!!)<br/><br/>\"수민아! 혹시 너도 UCC 공모전 문자 받았어?\"<br/><br/>\"안 그래도 나가보려고 했는데! 같이 할래??!\"<br/><br/>\"좋지좋지!! 열심히 해볼게!\"<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function next() {
	var possible = true_false(20);
	
	if (possible == true) {
		location.href = "seventh_1_1_1.html";
	}
	else {
		location.href = "seventh_1_1_2.html";
	}
}

function true_false(value) {
	var i = Math.random()*100;
	var m = Math.floor(i) + 1;
	
	if (m <= value)
	{
		return true;
	}
	else return false;
	
} // 어떤 일에 대한 성공했는가? value는 확률 (0~100)
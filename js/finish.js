var name = localStorage.getItem('name');

var content = "몇 달 후...§§※\"15000원 입니다.\"§§※용돈이 없고 집에서는 대학등록금도 내주기 힘들다고 해서 휴학을 내고 돈을 벌고 있다.§§※내 20살은 이렇게 아르바이트만 하며 끝나고 21살 때부터 학교를 계속 다닐 생각이다...§§※(※G※A※M※E ※O※V※E※R※)■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"format();\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "몇 달 후...<br/><br/>\"15000원 입니다.\"<br/><br/>용돈이 없고 집에서는 대학등록금도 내주기 힘들다고 해서 휴학을 내고 돈을 벌고 있다.<br/><br/>내 20살은 이렇게 아르바이트만 하며 끝나고 21살 때부터 학교를 계속 다닐 생각이다...<br/><br/>(GAME OVER)<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"format();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function true_false(value) {
	var i = Math.random()*100;
	var m = Math.floor(i) + 1;
	
	if (m <= value)
	{
		return true;
	}
	else return false;
	
} // 어떤 일에 대한 성공했는가? value는 확률 (0~100)

function format() {
	localStorage.clear();
	
	alert("게임 오버로 게임이 초기화 됩니다.");
	location.href = "../index.html";
}
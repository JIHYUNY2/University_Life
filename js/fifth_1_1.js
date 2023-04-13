var name = localStorage.getItem('name');

var content = "\"수고하셨습니다~!\"§§※\"열심히 일을 하다 보니 어느새 알바 끝날 시간이 되어 집에 갈 준비를 하고 있었다.\"§§※\"" + name + "아!\"§§※\"네 민성오빠!\"§§※\"이제 집가?! 나도 집가는데 같이가자!\"§§※마침 집가는 길이 어두워서 무서웠는데 민성오빠가 같이 집에 가자고 해서 내심 기분이 좋았다.■";
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
	
	text.innerHTML = "\"수고하셨습니다~!\"<br/><br/>\"열심히 일을 하다 보니 어느새 알바 끝날 시간이 되어 집에 갈 준비를 하고 있었다.\"<br/><br/>\"" + name + "아!\"<br/><br/>\"네 민성오빠!\"<br/><br/>\"이제 집가?! 나도 집가는데 같이가자!\"<br/><br/>마침 집가는 길이 어두워서 무서웠는데 민성오빠가 같이 집에 가자고 해서 내심 기분이 좋았다.<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>";
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

function next() {
	var possible = true_false(40);
	
	if (possible == true) {
			location.href = "fifth_1_1_1.html";
			index++;
		}
	else if (possible == false) {
			location.href = "fifth_1_1_2.html";
			index++;	
		}
}

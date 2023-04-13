var name = localStorage.getItem('name');

var content = "밖이 너무 시끄러워 내다보니 다들 축제하느라 소음을 내고 있었다.§§※\'공부하고 싶은 사람들은 생각 안 해주나?\'§§※짜증이 가득한 상태에서 도서관에 앉아 남은 과제를 끝내고 있다.§§※그러자 아까부터 계속 신경이 쓰였던 시선이 한 번에 느껴졌고 나도 모르게 고개를 돌렸다.§§※\"...\"§§※건너편에 윤우 선배를 보자 바로 고개를 숙이며 책을 보고 있었다.§§※아니.. 보는 척인 것 같다...§§※곧바로 모든 책들을 가방에 집어넣고 도서관을 나와 집 앞 도서관으로 향했다.■";
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
	
	text.innerHTML = "밖이 너무 시끄러워 내다보니 다들 축제하느라 소음을 내고 있었다.<br/><br/>\'공부하고 싶은 사람들은 생각 안 해주나?\'<br/><br/>짜증이 가득한 상태에서 도서관에 앉아 남은 과제를 끝내고 있다.<br/><br/>그러자 아까부터 계속 신경이 쓰였던 시선이 한 번에 느껴졌고 나도 모르게 고개를 돌렸다.<br/><br/>\"...\"<br/><br/>건너편에 윤우 선배를 보자 바로 고개를 숙이며 책을 보고 있었다.<br/><br/>아니.. 보는 척인 것 같다...<br/><br/>곧바로 모든 책들을 가방에 집어넣고 도서관을 나와 집 앞 도서관으로 향했다.<br/><br/><br/><br/><br/><a href=\"seventh_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);
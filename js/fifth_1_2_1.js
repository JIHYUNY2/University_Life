var name = localStorage.getItem('name');

localStorage.setItem('YoonJiHwan', 1);

localStorage.setItem('four', 1);

var content = "윤우선배와 도서관에서 C프로그래밍 과제를 마무리하고 학교앞 편의점에서 맥주를 마시기로 했다.§§※\"어?! 조윤우! " + name + "!\"§§※편의점 앞에 앉아있는데 윤우선배의 동기인 지환선배가 우리에게 인사를 했다.§§※('윤지환 오빠' 컬렉션이 추가되었다.)§§※\"오~ 조윤우 그렇게 " + name + " 좋다고 그러더니 드디어 사귀는거야?!\"§§※\"야.. 아직 안사겨..\"§§※\"아 그래? 그럼 오늘부터 사귀면 되겠네! " + name + "야 ※윤우가 너 좋다고 맨날 그런다?? 귀에 딱지 앉겠으니까 빨리 사겨줘!\"§§※취기가 오른사이 윤우선배는 나에게 고백했고 조금 꼰대긴 하지만 츤데레인 성격이 좋았기 때문에 윤우선배와 사귀게 되었다.";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="sixth_1.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "윤우선배와 도서관에서 C프로그래밍 과제를 마무리하고 학교앞 편의점에서 맥주를 마시기로 했다.<br/><br/>\"어?! 조윤우! " + name + "!\"<br/><br/>편의점 앞에 앉아있는데 윤우선배의 동기인 지환선배가 우리에게 인사를 했다.<br/><br/>('윤지환 오빠' 컬렉션이 추가되었다.)<br/><br/>\"오~ 조윤우 그렇게 " + name + " 좋다고 그러더니 드디어 사귀는거야?!\"<br/><br/>\"야.. 아직 안사겨..\"<br/><br/>\"아 그래? 그럼 오늘부터 사귀면 되겠네! " + name + "야 윤우가 너 좋다고 맨날 그런다?? 귀에 딱지 앉겠으니까 빨리 사겨줘!\"<br/><br/>취기가 오른사이 윤우선배는 나에게 고백했고 조금 꼰대긴 하지만 츤데레인 성격이 좋았기 때문에 윤우선배와 사귀게 되었다.<br/><br/><br/><br/><br/><a href=\"sixth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function talk() {
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"JoYoonWoo\" placeholder=\"윤우선배께 뭐라고 할까?\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/><br/>');
	$('.help').html('<a onclick="help();"><img src="../image\\help.png" height="50" width="50"></a> <- HINT');
}

function help() {
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_fifth_1_2.png" height="240" width="240"></a>');
}
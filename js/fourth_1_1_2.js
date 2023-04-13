var name = localStorage.getItem('name');
localStorage.setItem('HanX_Master', 1);
localStorage.setItem('LeeMinSong', 1);

money = localStorage.getItem('money');
money = Number(money);
money += 110000;

var content = "바로 택시를 타고 아르바이트 하러 달려갔고 사장님이 반겨주셨다!§§※\"" + name + "! ※와줘서 정말 고맙다! 얼른 일할 준비 해주렴!\"§§※대타여서 항상 같이 일하던 사람과는 전혀 달라서 웬지 모르게 긴장감이 흐른다.§§※\"이민성! 이 쪽은 " + name + "! 오늘 대타로 왔어!\"§§※\'처음 보는 오빠인데?\'§§※띵동!§§※\"지금 인사할 시간이 없네! 얼른 일하자!\"§§※바쁘게 주문을 받고 정신 없이 일을 하였다.§§※\"" + name + "! ※여기 테이블 얼른 치워라!\"§§※\"네!\"§§※테이블로 다가가려는데 이민성 오빠가 먼저 테이블 앞에 섰다.§§※\"맥주잔이 많아서 내가 할테니까 " + name + "이 저 쪽 주문 받아줘!\"§§※\"고마워요.\"§§※주문이 온 테이블로 걸어가며 뒤로 힐끔힐끔 민성 오빠를 바라보았다.§§※('한X 포차 사장님' 컬렉션이 추가되었다.)§※('이민성 오빠' 컬렉션이 추가되었다.)§§※(소지금 + 110000원)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="fifth_1_1.html.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "바로 택시를 타고 아르바이트 하러 달려갔고 사장님이 반겨주셨다!<br/><br/>\"" + name + "! 와줘서 정말 고맙다! 얼른 일할 준비 해주렴!\"<br/><br/>대타여서 항상 같이 일하던 사람과는 전혀 달라서 웬지 모르게 긴장감이 흐른다.<br/><br/>\"이민성! 이 쪽은 " + name + "! 오늘 대타로 왔어!\"<br/><br/>\'처음 보는 오빠인데?\'<br/><br/>띵동!<br/><br/>\"지금 인사할 시간이 없네! 얼른 일하자!\"<br/><br/>바쁘게 주문을 받고 정신 없이 일을 하였다.<br/><br/>\"" + name + "! 여기 테이블 얼른 치워라!\"<br/><br/>\"네!\"<br/><br/>테이블로 다가가려는데 이민성 오빠가 먼저 테이블 앞에 섰다.<br/><br/>\"맥주잔이 많아서 내가 할테니까 " + name + "이 저 쪽 주문 받아줘!\"<br/><br/>\"고마워요.\"<br/><br/>주문이 온 테이블로 걸어가며 뒤로 힐끔힐끔 민성 오빠를 바라보았다.<br/><br/>('한X 포차 사장님' 컬렉션이 추가되었다.)<br/>('이민성 오빠' 컬렉션이 추가되었다.)<br/><br/>(소지금 + 110000원)<br/><br/><br/><br/><br/><a href=\"fifth_1_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

localStorage.setItem('money', money);
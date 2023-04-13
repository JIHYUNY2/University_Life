var name = localStorage.getItem('name');
var money = localStorage.getItem('money');
money -= 30000;
localStorage.setItem('FourMuri', 1);

var content = "학교 앞에 있는 막걸리 집에 다 같이 앉았다.§§※\"얘들아! " + name + " 왔다!\"§§※그러자 나를 기다렸다는 듯이 5명이 환호를 하며 나를 앉혔다.§§※\"" + name + "! ※막걸리 마셔본 적 있어?\"§§※\"막걸리??? 친구들이랑 소맥 밖에 안 마셔봤는데...\"§§※\"에이. 그럼 잘 마시겠네?! 이모! 여기 얼음 막걸리 대 자로 주세요!!\"☆§§※얼음 막걸리를 한 모금 마시자마자 달콤한 맛에 눈이 돌아갔다.§§\"※오? 엄청 맛있는데?\"§§컴퓨터공학부 5명이서 술을 마시니까 금방 친해졌고 서로 번호 교환도 하였다!§§※(컬렉션 '컴퓨터공학부 4인방'가 추가되었다!!!!)§§※\"" + name + "가 좋아하는 랜덤 게임!!! 게임 스타트!!!\"§§※거의 꼭두새벽이 되니 주변의 말소리가 커져 큰 목소리로 말해야 서로 알아들을 수 있었다...§§※\"신난다!! 재미난다!!! 더 게임 오브 데스!!\"§§※뭐.. 재미있으면 됐지..§§※(소지금 -30000원)■";
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
		text.innerHTML += "<br/><br/><img src=\"../image/makgolri.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/>";
		index++;	
	}
	else if (content[index] == '■') {
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="third_1.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "학교 앞에 있는 막걸리 집에 다 같이 앉았다.<br/><br/>\"얘들아! " + name + " 왔다!\"<br/><br/>그러자 나를 기다렸다는 듯이 5명이 환호를 하며 나를 앉혔다.<br/><br/>\"" + name + "! 막걸리 마셔본 적 있어?\"<br/><br/>\"막걸리??? 친구들이랑 소맥 밖에 안 마셔봤는데...\"<br/><br/>\"에이. 그럼 잘 마시겠네?! 이모! 여기 얼음 막걸리 대 자로 주세요!!\"<br/><br/><img src=\"../image/makgolri.jpg\" height=\"150\" width=\"250\" style=\"margin-left:35px; border: 1px solid #2EE59D\"><br/><br/><br/><br/>얼음 막걸리를 한 모금 마시자마자 달콤한 맛에 눈이 돌아갔다.<br/><br/>\"오? 엄청 맛있는데?\"<br/><br/>컴퓨터공학부 5명이서 술을 마시니까 금방 친해졌고 서로 번호 교환도 하였다!<br/><br/>(컬렉션 '컴퓨터공학부 4인방'가 추가되었다!!!!)<br/><br/>\"" + name + "가 좋아하는 랜덤 게임!!! 게임 스타트!!!\"<br/><br/>거의 꼭두새벽이 되니 주변의 말소리가 커져 큰 목소리로 말해야 서로 알아들을 수 있었다...<br/><br/>\"신난다!! 재미난다!!! 더 게임 오브 데스!!\"<br/><br/>뭐.. 재미있으면 됐지..<br/><br/>(소지금 -30000원)<br/><br/><br/><br/><br/><a href=\"third_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

localStorage.setItem('money', money);
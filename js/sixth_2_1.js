var name = localStorage.getItem('name');

var content = "축제가 되었고 강민희와 몇몇 컴퓨터공학부 친구들과 함께 재미있게 놀았다.§§※그래봤자 축제음식 몇 개 사먹는게 전부일테니 별로 돈을 쓰지 않을 것이여서 걱정 없이 놀았다!§§※\"아! 오늘 세븐틴도 보고 재미있었다! ※" + name + "! ※회식하자! 너 아르바이트 때문에 너무 뺐잖아?!!\"§§※강민희에게 너무 미안할 정도로 계속 거절하긴 한 것 같다..§§※\"그래. 가자!\"§§※그렇게 택시를 다 같이 타고 지하철을 타서 어느 번화가로 왔다.§§※\"엥? 여기 우리 집이랑 되게 가까운데?\"§§※\"오늘 한신포차 갈꺼야! 친구들이 그렇게 맛있었다고 가고 싶어 하더라!\"§§※지금 시간이면... 민성 오빠가 일할 시간인데.. 하필..§§※\"" + name + ".. 표정이 왜 그래?... 혹시 싫어?\"§§※\"아.. 아니야!! 가자!\"§§※그렇게 한신포차로 들어가게 되었고 자리에 앉았다.§§※\"어? " + name + "? 지금 시간에 여긴 무슨 일이야?\"§§※역시나 민성 오빠가 나를 보자마자 말을 걸었다.§§※\"" + name + "! 너 여기서 아르바이트 한다고 했었지?...\"§§※\"저 친구들이랑 술 마시려고 왔어요.\"§§※민성 오빠에게 주문을 하고 신나게 마셨다.§§※30분 정도 지나자 핸드폰 진동이 울렸다.§§※\'" + name + ". 잠깐 밖으로 나와줄래?\'§§※밖으로 나가자 민성 오빠가 서있었다.§§※\"무슨 일이에요?\"§§※\"... 술 마시는데 불러서 미안해.. 마지막으로 말할게.. 나는 정말 이상형과 가까운 너에게 반했고 진심으로 너를 좋아해. 내가 최선을 다 할게. 사귀어줄 수 있겠니?\"■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "축제가 되었고 강민희와 몇몇 컴퓨터공학부 친구들과 함께 재미있게 놀았다.<br/><br/>그래봤자 축제음식 몇 개 사먹는게 전부일테니 별로 돈을 쓰지 않을 것이여서 걱정 없이 놀았다!<br/><br/>\"아! 오늘 세븐틴도 보고 재미있었다! " + name + "! 회식하자! 너 아르바이트 때문에 너무 뺐잖아?!!\"<br/><br/>강민희에게 너무 미안할 정도로 계속 거절하긴 한 것 같다..<br/><br/>\"그래. 가자!\"<br/><br/>그렇게 택시를 다 같이 타고 지하철을 타서 어느 번화가로 왔다.<br/><br/>\"엥? 여기 우리 집이랑 되게 가까운데?\"<br/><br/>\"오늘 한신포차 갈꺼야! 친구들이 그렇게 맛있었다고 가고 싶어 하더라!\"<br/><br/>지금 시간이면... 민성 오빠가 일할 시간인데.. 하필..<br/><br/>\"" + name + ".. 표정이 왜 그래?... 혹시 싫어?\"<br/><br/>\"아.. 아니야!! 가자!\"<br/><br/>그렇게 한신포차로 들어가게 되었고 자리에 앉았다.<br/><br/>\"어? " + name + "? 지금 시간에 여긴 무슨 일이야?\"<br/><br/>역시나 민성 오빠가 나를 보자마자 말을 걸었다.<br/><br/>\"" + name + "! 너 여기서 아르바이트 한다고 했었지?...\"<br/><br/>\"저 친구들이랑 술 마시려고 왔어요.\"<br/><br/>민성 오빠에게 주문을 하고 신나게 마셨다.<br/><br/>30분 정도 지나자 핸드폰 진동이 울렸다.<br/><br/>\'" + name + ". 잠깐 밖으로 나와줄래?\'<br/><br/>밖으로 나가자 민성 오빠가 서있었다.<br/><br/>\"무슨 일이에요?\"<br/><br/>\"... 술 마시는데 불러서 미안해.. 마지막으로 말할게.. 나는 정말 이상형과 가까운 너에게 반했고 진심으로 너를 좋아해. 내가 최선을 다 할게. 사귀어줄 수 있겠니?\"<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function talk() {
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"LeeMinSong\" placeholder=\"민성 오빠에게 뭐라고 할까?\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/><br/>');
	$('.help').html('<a onclick="help();"><img src="../image\\help.png" height="50" width="50"></a> <- HINT');
}

function help() {
	$('.help').html('<a onclick="talk();"><img src="..\\image\\helper\\helper_sixth_2_1.png" height="240" width="240"></a>');
}
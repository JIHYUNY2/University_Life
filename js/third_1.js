var name = localStorage.getItem('name');
var one = localStorage.getItem('one');

localStorage.setItem('JoYoonWoo', 1);
localStorage.setItem('KimSeoHee', 1);

var content = "\"" + name + "! 과 단톡 봤어?\"§§※\'오늘 저녁 7시 한신포차, 1학년은 왠만하면 필참!!\'§§※민희의 말에 컴퓨터공학부 단톡을 보니 오늘 선배들과의 대면식이 있다는 메세지가 와있었다.§§※\"아.. 대면식? 민희야 너도 갈거지? 이따 같이갈래? 나 혼자가기 좀 무섭다..^^\"§§※\"당연히 가야지!! 선배들 제대로 처음 보는 자린데! 그럼 7시에 한신포차 앞에서 보자!\"§§※동기들은 수업을 같이 들으면서 종종 마주쳤지만 선배들은 입학하고 마주칠 일이 거의 없었기 때문에 기대반 걱정반으로 7시가 되기를 기다렸다.§§※\"얘들아 안녕~~!!\"§§그렇게 7시가 되었고 한신포차엔 1학년 동기들과 선배들로 북적거렸다.§§※\"안녕하세요!!\"§§\"다들 나 알지? 내이름은 조윤우야! 오늘 재밌게 놀아보자!\"§§※조윤우라면.. 과단톡에서 항상 공지를 띄워주던 선배였다. 단톡에선 격식체로 말하셔서 몰랐는데 실제로 보니까 텐션이 엄청 높고 밝아 보였다.§§※\"자 오늘은 이 테이블에 앉아볼까~~? 안녕 얘들아 우리 자기소개 한번씩 할까?!\"§§※윤우 선배는 나와 민희, 그리고 얼마전에 같이 술먹었던 컴공4인방이 앉아있던 테이블에 앉았다.§§※\"안녕하세요 21학번 " + name + "입니다! 잘부탁드립니다!\"§§※\"어 그래 " + name + "? 단톡에서 이름 몇 번 봤어! 잘 부탁해! ※이건 내 전화번호고 궁금한거나 도움 필요한거 있으면 언제든지 연락하구!\"§§※\"뭐야 조윤우!! 왜 너번호만 줘! 자 여기 얘말고 나한테도 연락해!ㅋㅋ\"§§※윤우선배와 같이 있던 서희선배도 자신의 번호를 내 핸드폰에 찍어 주었다.§§※(컬렉션에 '조윤우', '김서희'가 추가되었다!!!!)■";
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
		if (one == 1) {
			text.innerHTML += '<br/><br/><br/><br/><br/><a href="third_1_1.html" rel="external" style="float:right">다음으로..</a>';	
		}
		else if (one == 2) {
			text.innerHTML += '<br/><br/><br/><br/><br/><a href="third_1_2.html" rel="external" style="float:right">다음으로..</a>';	
		}
		else if (one == 3) {
			text.innerHTML += '<br/><br/><br/><br/><br/><a href="third_1_3.html" rel="external" style="float:right">다음으로..</a>';	
		}
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "\"" + name + "! 과 단톡 봤어?\"<br/><br/>\'오늘 저녁 7시 한신포차, 1학년은 왠만하면 필참!!\'<br/><br/>민희의 말에 컴퓨터공학부 단톡을 보니 오늘 선배들과의 대면식이 있다는 메세지가 와있었다.<br/><br/>\"아.. 대면식? 민희야 너도 갈거지? 이따 같이갈래? 나 혼자가기 좀 무섭다..^^\"<br/><br/>\"당연히 가야지!! 선배들 제대로 처음 보는 자린데! 그럼 7시에 한신포차 앞에서 보자!\"<br/><br/>동기들은 수업을 같이 들으면서 종종 마주쳤지만 선배들은 입학하고 마주칠 일이 거의 없었기 때문에 기대반 걱정반으로 7시가 되기를 기다렸다.<br/><br/>\"얘들아 안녕~~!!\"<br/><br/>그렇게 7시가 되었고 한신포차엔 1학년 동기들과 선배들로 북적거렸다.<br/><br/>\"안녕하세요!!\"<br/><br/>\"다들 나 알지? 내이름은 조윤우야! 오늘 재밌게 놀아보자!\"<br/><br/>조윤우라면.. 과단톡에서 항상 공지를 띄워주던 선배였다. 단톡에선 격식체로 말하셔서 몰랐는데 실제로 보니까 텐션이 엄청 높고 밝아 보였다.<br/><br/>\"자 오늘은 이 테이블에 앉아볼까~~? 안녕 얘들아 우리 자기소개 한번씩 할까?!\"<br/><br/>윤우 선배는 나와 민희, 그리고 얼마전에 같이 술먹었던 컴공4인방이 앉아있던 테이블에 앉았다.<br/><br/>\"안녕하세요 21학번 " + name + "입니다! 잘부탁드립니다!\"<br/><br/>\"어 그래 " + name + "? 단톡에서 이름 몇 번 봤어! 잘 부탁해! 이건 내 전화번호고 궁금한거나 도움 필요한거 있으면 언제든지 연락하구!\"<br/><br/>\"뭐야 조윤우!! 왜 너번호만 줘! 자 여기 얘말고 나한테도 연락해!ㅋㅋ\"<br/><br/>윤우선배와 같이 있던 서희선배도 자신의 번호를 내 핸드폰에 찍어 주었다.<br/><br/>(컬렉션에 '조윤우', '김서희'가 추가되었다!!!!)<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next_html();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function next_html() {
	if (one == 1) {
		location.href = "third_1_1.html";
	}
	else if (one == 2) {
		location.href = "third_1_2.html";
	}
	else if (one == 3) {
		location.href = "third_1_3.html";	
	}
}

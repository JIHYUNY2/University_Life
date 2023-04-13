var name = localStorage.getItem('name');
var money = localStorage.getItem('money');
money -= 3000;

var content = "저번에 컴퓨터공학부 회식 자리를 가지고 나서부터 컴퓨터공학부 학생회 사람들이 나를 멀리하기 시작하였다.§§※그래도 남아있는 친구는 강민희인데 소문을 듣기에는 윤우 선배가 \'" + name + "가 선배들한테 꼬리치고 다닌다.\'라는 소문을 퍼뜨리고 있다고 한다.§§※들은 직후에는 진짜 화가 났지만 신입생이다보니 내가 변론하여도 효과가 없다....§§※\"아 맞아! 오늘 축제였지?\"§§※걸어가다 닭꼬치 냄새에 이끌려 바로 푸드카트로 다가갔다.§§※\"...\"§§※닭꼬치를 팔던 수아 선배와 눈이 마주쳤고 순간 나는 얼음이 되었다...§§※\"닭.. 닭꼬치 하나... 주세요\"§§※\"3000원 입니다.\"§§※\"맛은 제일 매운 맛으로 주세요.\"§§※\"없는데요? 다른거 드세요.\"§§※\"... 그럼 있는 걸로 주세요..\"§§※그렇게 수아 선배가 닭꼬치를 주며 다른 선배들과 서로 눈치 보며 비웃는게 보였다.§§※들고 조용히 학교 공원으로 가서 벤치에 앉았다.§§※닭고치를 한 입 베어물고 오물오물 씹었다.§§※\".... 흑.. 흑흑.. 으아앙..\"§§※(소지금 -3000원)■";
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
	
	text.innerHTML = "저번에 컴퓨터공학부 회식 자리를 가지고 나서부터 컴퓨터공학부 학생회 사람들이 나를 멀리하기 시작하였다.<br/><br/>그래도 남아있는 친구는 강민희인데 소문을 듣기에는 윤우 선배가 \'" + name + "가 선배들한테 꼬리치고 다닌다.\'라는 소문을 퍼뜨리고 있다고 한다.<br/><br/>들은 직후에는 진짜 화가 났지만 신입생이다보니 내가 변론하여도 효과가 없다....<br/><br/>\"아 맞아! 오늘 축제였지?\"<br/><br/>걸어가다 닭꼬치 냄새에 이끌려 바로 푸드카트로 다가갔다.<br/><br/>\"...\"<br/><br/>닭꼬치를 팔던 수아 선배와 눈이 마주쳤고 순간 나는 얼음이 되었다...<br/><br/>\"닭.. 닭꼬치 하나... 주세요\"<br/><br/>\"3000원 입니다.\"<br/><br/>\"맛은 제일 매운 맛으로 주세요.\"<br/><br/>\"없는데요? 다른거 드세요.\"<br/><br/>\"... 그럼 있는 걸로 주세요..\"<br/><br/>그렇게 수아 선배가 닭꼬치를 주며 다른 선배들과 서로 눈치 보며 비웃는게 보였다.<br/><br/>들고 조용히 학교 공원으로 가서 벤치에 앉았다.<br/><br/>닭고치를 한 입 베어물고 오물오물 씹었다.<br/><br/>\".... 흑.. 흑흑.. 으아앙..\"<br/><br/>(소지금 -3000원)<br/><br/><br/><br/><br/><a href=\"seventh_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

localStorage.setItem('money', money);
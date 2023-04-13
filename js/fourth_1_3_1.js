var name = localStorage.getItem('name');
localStorage.setItem('Test_Paper', 1);
var money = localStorage.getItem('money');
money -= 100000;

var content = "강민희가 화장실에서 나오고 나도 들어가서 외출 준비를 하였다.§§※\'공부는 안 했지만.. 너무 떨린다.... 아..\'§§※\"" + name + "! 왜 이리 긴장 되어 있어?! 너무 걱정하지 마.. 기말시험 때 잘 보면 되지!\"§§※\"그렇지?.. 아무것도 안 했지만 긴장이 되네?...\"§§※시험장에 앉자 강민희와 친구들 모두 책을 피고 뭐라도 보고 있었다.§§※나도 뭐라도 봐야되나...§§※\"" + name + ".. 이 코드라도 외워! 이거는 꼭 나온대!\"§§※강민희가 조심스럽게 책 페이지를 펴서 내 앞에 놓아줬다.§§※\"정말 고맙다..\"§§※그렇게 시험 10분 전에 대충 코드라도 외웠다... 그래도 영어 공부는 어느 정도 했어서 코드 암기는 잘 되어졌다.§§※\'!DOCTYPE html이였지?...\'§§※시험지에 서술형으로 손코딩을 그적였다.§§※그렇게 다행히 평균 점수보다 살짝 아래였지만 중간고사를 안 봤다면 큰일 났을 뻔 하였다.§§※\"민희야 진짜 고맙다.... 너 아니였으면 진짜 D 받을 뻔 했어..\"§§※\"그럼 오늘 술 쏘던가!\"§§※\"그래그래! 오늘 기분이다! 쏜다!\"§§※그래도 아주 안 좋은 학점은 안 받을 수 있었고 재미있게 중간고사를 끝내고 술자리를 가지게 되었다!§§※(소지금 -100000원)§§※('XX의 시험지' 컬렉션이 추가되었다!)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="fifth_1_3.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "강민희가 화장실에서 나오고 나도 들어가서 외출 준비를 하였다.<br/><br/>\'공부는 안 했지만.. 너무 떨린다.... 아..\'<br/><br/>\"" + name + "! 왜 이리 긴장 되어 있어?! 너무 걱정하지 마.. 기말시험 때 잘 보면 되지!\"<br/><br/>\"그렇지?.. 아무것도 안 했지만 긴장이 되네?...\"<br/><br/>시험장에 앉자 강민희와 친구들 모두 책을 피고 뭐라도 보고 있었다.<br/><br/>나도 뭐라도 봐야되나...<br/><br/>\"" + name + ".. 이 코드라도 외워! 이거는 꼭 나온대!\"<br/><br/>강민희가 조심스럽게 책 페이지를 펴서 내 앞에 놓아줬다.<br/><br/>\"정말 고맙다..\"<br/><br/>그렇게 시험 10분 전에 대충 코드라도 외웠다... 그래도 영어 공부는 어느 정도 했어서 코드 암기는 잘 되어졌다.<br/><br/>\'!DOCTYPE html이였지?...\'<br/><br/>시험지에 서술형으로 손코딩을 그적였다.<br/><br/>그렇게 다행히 평균 점수보다 살짝 아래였지만 중간고사를 안 봤다면 큰일 났을 뻔 하였다.<br/><br/>\"민희야 진짜 고맙다.... 너 아니였으면 진짜 D 받을 뻔 했어..\"<br/><br/>\"그럼 오늘 술 쏘던가!\"<br/><br/>\"그래그래! 오늘 기분이다! 쏜다!\"<br/><br/>그래도 아주 안 좋은 학점은 안 받을 수 있었고 재미있게 중간고사를 끝내고 술자리를 가지게 되었다!<br/><br/>(소지금 -100000원)<br/><br/>('XX의 시험지' 컬렉션이 추가되었다!)<br/><br/><br/><br/><br/><a href=\"fifth_1_3.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

localStorage.setItem('money', money);
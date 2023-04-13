var name = localStorage.getItem('name');
var from_path = 5;

localStorage.setItem('SeoMinJeung', 1);

var content = "- 한신포차§§※\"아 시험 끝나니까 너무 홀가분하다~\"§§※\"다들 시험 잘봤어?\"§§※\"네........니요.....? 모르겠어요! 잘 안나오면 재수강하죠 뭐ㅎㅎ\"§§※\"어허어허~ 저학년때부터 학점관리 안해놓으면 나중에 후회한다?!!\"§§※\"나중일은 나중에 생각할래요ㅎㅎ 아 윤우선배!! 오늘 학생회 선배들 오신다고 하지 않았어요??\"§§※\"곧 올때 됐는데.. 아 저기 왔네!\"§§※\"안녕 얘들아~~~!!!\"§§※얼굴만 알던 학생회 선배 3명이 우리가 있던 테이블로 걸어왔다.§§※(\'서민정 선배\' 컬렉션이 추가되었다.)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "- 한신포차<br/><br/>\"아 시험 끝나니까 너무 홀가분하다~\"<br/><br/>\"다들 시험 잘봤어?\"<br/><br/>\"네........니요.....? 모르겠어요! 잘 안나오면 재수강하죠 뭐ㅎㅎ\"<br/><br/>\"어허어허~ 저학년때부터 학점관리 안해놓으면 나중에 후회한다?!!\"<br/><br/>\"나중일은 나중에 생각할래요ㅎㅎ 아 윤우선배!! 오늘 학생회 선배들 오신다고 하지 않았어요??\"<br/><br/>\"곧 올때 됐는데.. 아 저기 왔네!\"<br/><br/>\"안녕 얘들아~~~!!!\"<br/><br/>얼굴만 알던 학생회 선배 3명이 우리가 있던 테이블로 걸어왔다.<br/><br/>(\'서민정 선배\' 컬렉션이 추가되었다.)<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function next() {
	var possible = true_false(40);
	
	if (possible == true) {
			location.href = "fifth_1_3_1.html";
			index++;
		}
		else {
			location.href = "fifth_1_3_2.html";
			index++;	
		}
}

function true_false(value) {
	var i = Math.random()*100;
	var m = Math.floor(i) + 1;
	
	if (m <= value)
	{
		return true;
	}
	else return false;
	
} // 어떤 일에 대한 성공했는가? value는 확률 (0~100)
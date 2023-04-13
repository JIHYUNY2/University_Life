var name = localStorage.getItem('name');
localStorage.setItem('Test_Paper', 1);
localStorage.setItem('four', 1);

var content = "그래도 과제 다 하고 예습 복습도 다 하여서 중간고사 쯤이야 금방 풀겠지.§§※그러자 뒤에서 말소리가 들려왔다.§§※\"민희야. 오늘 같이 공부 할래?\"§§※\"그래그래! 도서관 갈까? 윤우 선배도 온다고 하시더라고! 공부도 잘하시고 족보도 있으셔서 엄청 도움 될 것 같아!\"§§※\"그래! 가자!\"§§※민희와 친구들은 가방을 들고 바로 강의실 밖으로 나갔다.§§※\".※.※.※.※\"§§※이젠 말도 걸지도 않는구나...§§※조용히 가방을 들고 강의실 밖을 나와 집으로 향했다.§§※\"그래. 남 신경 써봤자 나만 잘하면 되지. 쟤네들 술 마실 때 나는 공부 열심히 했으니까!\"§§※다음 HTML 그림을 보고 손코딩을 하시오.§§※\'아.. 그래도 어제 공부한 내용들이 나왔네! 집 가서 공부하기 잘했다!\'§§※중간고사 시험은 이번에 쉽게 나와서 별 문제 없이 모든 답안을 적어 제출하였다.§§※\"이번에 평균은 51.7점이고 80점대는 2명, 70점대는 5명... 성적 확인하고 싶으신 분들 모두 앞으로 나와주세요!\"§§※그러자 모두들 일어나서 강당 앞으로 나갔다.§§※5분 기다리자 내 차례가 왔다.§§※\"" + name + " 입니다!\"§§※\"" + name + "?§§ 잠시만..\"교수님이 내 시험지를 찾는 동안 무심결에 74점 강민희 시험지를 보게 되었다.§§※\'강민희도 놀 거 다 놀고 공부 열심히 했나보네....\'§§※내 시험지에도 74점이란 점수가 적혀있었다.§§※\"최상위 점수 맞을 수 있었는데 손코딩 문제에서 태그 작성 실수가 많았구나.. 너무 낙담하지 말고 기말고사 때 실수 하지 않도록 하렴.\"§§※그렇게 터덜터덜 자리로 돌아와 앉았다.§§※(\'" + name + "의 시험지\' 컬렉션이 추가되었다!)■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="fifth_1_2.html" rel="external" style="float:right">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "그래도 과제 다 하고 예습 복습도 다 하여서 중간고사 쯤이야 금방 풀겠지.<br/><br/>그러자 뒤에서 말소리가 들려왔다.<br/><br/>\"민희야. 오늘 같이 공부 할래?\"<br/><br/>\"그래그래! 도서관 갈까? 윤우 선배도 온다고 하시더라고! 공부도 잘하시고 족보도 있으셔서 엄청 도움 될 것 같아!\"<br/><br/>\"그래! 가자!\"<br/><br/>민희와 친구들은 가방을 들고 바로 강의실 밖으로 나갔다.<br/><br/>\"....\"<br/><br/>이젠 말도 걸지도 않는구나...<br/><br/>조용히 가방을 들고 강의실 밖을 나와 집으로 향했다.<br/><br/>\"그래. 남 신경 써봤자 나만 잘하면 되지. 쟤네들 술 마실 때 나는 공부 열심히 했으니까!\"<br/><br/>다음 HTML 그림을 보고 손코딩을 하시오.<br/><br/>\'아.. 그래도 어제 공부한 내용들이 나왔네! 집 가서 공부하기 잘했다!\'<br/><br/>중간고사 시험은 이번에 쉽게 나와서 별 문제 없이 모든 답안을 적어 제출하였다.<br/><br/>\"이번에 평균은 51.7점이고 80점대는 2명, 70점대는 5명... 성적 확인하고 싶으신 분들 모두 앞으로 나와주세요!\"<br/><br/>그러자 모두들 일어나서 강당 앞으로 나갔다.<br/><br/>5분 기다리자 내 차례가 왔다.<br/><br/>\"" + name + " 입니다!\"<br/><br/>\"" + name + "?<br/><br/> 잠시만..\"교수님이 내 시험지를 찾는 동안 무심결에 74점 강민희 시험지를 보게 되었다.<br/><br/>\'강민희도 놀 거 다 놀고 공부 열심히 했나보네....\'<br/><br/>내 시험지에도 74점이란 점수가 적혀있었다.<br/><br/>\"최상위 점수 맞을 수 있었는데 손코딩 문제에서 태그 작성 실수가 많았구나.. 너무 낙담하지 말고 기말고사 때 실수 하지 않도록 하렴.\"<br/><br/>그렇게 터덜터덜 자리로 돌아와 앉았다.<br/><br/>(\'" + name + "의 시험지\' 컬렉션이 추가되었다!)<br/><br/><br/><br/><br/><a href=\"fifth_1_2.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);
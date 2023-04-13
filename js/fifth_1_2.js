var name = localStorage.getItem('name');
var from_path = 4;

var content = "계속 공부와 과제에만 얽매여 친구들과 멀어지니 대학생활을 잘 하고 있는게 맞는지 회의감이 들었고 다시 친구들과 친하게 지내고 싶은 마음에 친구들이 간다던 학교 도서관으로 향했다.§§※\"윤우선배!!\"§§※\어? " + name + "아 ※왠일로 도서관에 왔어? 너 원래 집에서 공부하는거 좋아하잖아!\"§§※\"그냥 오늘은 도서관이 땡겼어요ㅎㅎ\"§§※\"너도 C프로그래밍 듣지? 그거 조별과제 있는데 나랑 같이 할래?\"§§※\"좋아요! 안그래도 누구랑 할지 고민중이었어요ㅎㅎ\"■";
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
		text.innerHTML += '<br/><br/><br/><br/><br/><a href="#" rel="external" style="float:right" onclick="talk();">다음으로..</a>';
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "계속 공부와 과제에만 얽매여 친구들과 멀어지니 대학생활을 잘 하고 있는게 맞는지 회의감이 들었고 다시 친구들과 친하게 지내고 싶은 마음에 친구들이 간다던 학교 도서관으로 향했다.<br/><br/>\"윤우선배!!\"<br/><br/>\어? " + name + "아 왠일로 도서관에 왔어? 너 원래 집에서 공부하는거 좋아하잖아!\"<br/><br/>\"그냥 오늘은 도서관이 땡겼어요ㅎㅎ\"<br/><br/>\"너도 C프로그래밍 듣지? 그거 조별과제 있는데 나랑 같이 할래?\"<br/><br/>\"좋아요! 안그래도 누구랑 할지 고민중이었어요ㅎㅎ\"<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"talk();\">다음으로..</a>";
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
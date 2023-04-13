var name = localStorage.getItem('name');
var one = localStorage.getItem('one');
var four = localStorage.getItem('four');

var content = "메세지 한 통이 왔다.§§※\'내일부터 축제 기간!\'§§※대학 생활에서 가장 기대가 되는 것은 축제!!§§※연예인도 오니까 학교 분위기는 왁자지껄해지고 있다.§§※다른 동아리들도 축제 기간을 앞두고 긴장을 하며 공연 준비를 하고 있다.■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "메세지 한 통이 왔다.<br/><br/>\'내일부터 축제 기간!\'<br/><br/>대학 생활에서 가장 기대가 되는 것은 축제!!<br/><br/>연예인도 오니까 학교 분위기는 왁자지껄해지고 있다.<br/><br/>다른 동아리들도 축제 기간을 앞두고 긴장을 하며 공연 준비를 하고 있다.<br/><br/><br/><br/><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"next();\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

function next() {
	if (one == 1 && four == 1) {
		location.href = "sixth_1_1.html";
	}
	else if (one == 2 && four == 1) {
		location.href = "sixth_1_2.html";
	}
	else if (one == 3 && four == 1) {
		location.href = "sixth_1_3.html";
	}
	else if (one == 1 && four == 2) {
		location.href = "sixth_2_1.html";
	}
	else if (one == 2 && four == 2) {
		location.href = "sixth_2_2.html";
	}
	else if (one == 3 && four == 2) {
		location.href = "sixth_2_3.html";
	}
}

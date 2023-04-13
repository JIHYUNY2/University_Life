var name = localStorage.getItem('name');

var content = "수민이와 미영광홍 친구 1명과 UCC 공모전을 준비하게 되었고 한 달간 준비 한 결과 우수상을 받게 되었다.§§※\"와~~!! 대박!!! 상 받을 줄 몰랐는데 우수상이나 받았어!! 수민아 너 덕분이야...\"§§※\"역시 한다면 한다니까~~! " + name + " ※너는 상금으로 뭐할거야?!\"§§※\"나는 그냥 생활비로 쓰려구! 아르바이트 한달정도만 쉬면서 공부도 하고 친구들이랑도 놀게!!\"§§※\"오~~ 드디어 놀 시간 생긴거야!? 나랑도 놀아야지!!!\"§§※\"당연하지!! 말나온김에 오늘 술먹자 내가 쏜다!!\"■";
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
		text.innerHTML += "<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
		index++;
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

$('div[id="content_start"]').on("tap", function(){
	clearInterval(Id);
	
	text.innerHTML = "수민이와 미영광홍 친구 1명과 UCC 공모전을 준비하게 되었고 한 달간 준비 한 결과 우수상을 받게 되었다.<br/><br/>\"와~~!! 대박!!! 상 받을 줄 몰랐는데 우수상이나 받았어!! 수민아 너 덕분이야...\"<br/><br/>\"역시 한다면 한다니까~~! " + name + " 너는 상금으로 뭐할거야?!\"<br/><br/>\"나는 그냥 생활비로 쓰려구! 아르바이트 한달정도만 쉬면서 공부도 하고 친구들이랑도 놀게!!\"<br/><br/>\"오~~ 드디어 놀 시간 생긴거야!? 나랑도 놀아야지!!!\"<br/><br/>\"당연하지!! 말나온김에 오늘 술먹자 내가 쏜다!!\"<br/><br/><br/><br/><br/><a href=\"eighth_1.html\" rel=\"external\" style=\"float:right\">다음으로..</a>";
}); // 모바일 환경에서 터치를 하였을 때

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 35);

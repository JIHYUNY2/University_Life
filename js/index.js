////////////캐릭터 얼굴 선택////////////
var value = Math.floor(Math.random() * 100) + 1;

if (value <= 25) {
	localStorage.setItem('face', 1);
}
else if (value > 25 && value <= 50) {
	localStorage.setItem('face', 2);
}
else if (value > 50 && value <= 75) {
	localStorage.setItem('face', 3);
}
else localStorage.setItem('face', 4);
///////////////////////////////////

var content = "※대※학※생※활 §※입 ※학 ※원 ※서§§§☆";
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
		sleep(900);
		index++;
		text.innerHTML += content[index++];	
	}
	else if (content[index] == '☆') { // 내용 표시
		text.innerHTML += "<input type=\"text\" id=\"name\" placeholder=\"당신의 이름은?\"><br/><br/><input type=\"number\" id=\"old\" placeholder=\"당신의 나이는?\"><br/><a href=\"#\" rel=\"external\" style=\"float:right\" onclick=\"check_name();\">작성완료!!</a>";
		index++;	
	}
	else text.innerHTML += content[index++];
	
  	if(index >= content.length){
		clearInterval(Id);
    }
}

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
} // Sleep

var Id = setInterval(typing, 25);
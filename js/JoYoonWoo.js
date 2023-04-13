var conversation;
var name = localStorage.getItem('name');

function find() { // Handler
	var JoYoonWoo = document.getElementById('JoYoonWoo').value;
	
	if (JoYoonWoo == "") {
		conversation = "무슨 말이 하고 싶은거야?";
	}
	else if (JoYoonWoo.indexOf("알겠어..") != -1) {
		if (from_path == 5) {
			real_old = real_old + 1;
			location.href = "sixth_1_2_1.html";
		}
		else conversation = "어떤게 알겠는데?";
	}
	else if (JoYoonWoo.indexOf("죄송합니다 정말 가봐야해요") != -1) {
		if (from_path == 1) {
			real_old = real_old + 5;
			location.href = "third_1_1_2.html";
		}
		else if (from_path == 2) {
			location.href = "fourth_1.html";
		}
		else if (from_path == 5) {
			real_old = real_old + 5;
			conversation = "프로젝트 이렇게나 남겨두고?..";
		}
		else {
			conversation = "엥?...";
		}
	}
	else if (JoYoonWoo.indexOf("선배 부축해드릴까요") != -1) {
		if (from_path == 1 || from_path == 2) {
			real_old = real_old + 2;
			conversation = "나 아직 안 취했어! 너가 가는 이유 먼저 이야기 해!";
		}
		else if (from_path == 3){
			location.href = "fourth_1.html";
		}
		else {
			conversation = "안 취했는데?";
		}
	}
	else if (JoYoonWoo.indexOf("과제 끝나고 술 마셔요") != -1) {
		if (from_path == 4) {
			real_old = real_old - 2;
			location.href = "fifth_1_2_1.html";
		}
		else if (from_path == 5) {
			conversation = "프로젝트 다 끝나고도 못 마실걸?";
		}
		else {
			conversation = "무슨 과제?";
		}
	}
	else if (JoYoonWoo.indexOf("for문 쓸까요?") != -1) {
		if (from_path == 4) {
			real_old = real_old + 2;
			location.href = "fifth_1_2_2.html";
		}
		else if (from_path == 5) {
			conversation = "지금 포인터 개념을 배우는데?";
		}
		else {
			conversation = "for문? 갑자기? 무슨 for문?";
		}
	}
else if (JoYoonWoo.indexOf("주량") != -1) {
   conversation = "나?! 주량이란 걸 세본 적이 없어! 그니까 걱정 마!";
}
else if (JoYoonWoo.indexOf("알바") != -1) {
   conversation = "알바가 중요해~ 선배가 중요해~?!";
}
else if (JoYoonWoo.indexOf("과제") != -1) {
   conversation = "원래 과제는 내일부터! 몰라!?";
}
else if (JoYoonWoo.indexOf("전화") != -1) {
   conversation = "전화오면 나 바꿔줘! 내가 커버 쳐줄게!";
}
else if (JoYoonWoo.indexOf("학점") != -1) {
   conversation = "오늘 하루 공부 안해도 학점 잘 나올거야ㅎㅎ!";
}
else if (JoYoonWoo.indexOf("안주") != -1) {
   conversation = "안주 더 시켜줄까?";
}
else if (JoYoonWoo.indexOf("술") != -1) {
   conversation = "술은 원래 먹으면서 느는거야^^";
}
else if (JoYoonWoo.indexOf("컴공") != -1) {
   conversation = "컴공은 원래 선배들과의 소통이 중요해!";
}
else if (JoYoonWoo.indexOf("집") != -1) {
   conversation = "집에 금송아지라도 뒀니?!";
}
else if (JoYoonWoo.indexOf("하") != -1) {
   conversation = "지금 선배 앞에서 한숨쉬는 거니!?";
}
else if (JoYoonWoo.indexOf("통금") != -1) {
   conversation = "이미 늦었잖아! 하루정돈 괜찮을거야";
}
else if (JoYoonWoo.indexOf("걱정") != -1) {
   conversation = "연락 드리면 괜찮지 않을까?!";
}
else if (JoYoonWoo.indexOf("수업") != -1) {
   conversation = "내가 너 나이땐 맨날 술먹고 수업도 안늦고 잘 들었다구~";
}
else if (JoYoonWoo.indexOf("택시") != -1) {
   conversation = "좀만 더 놀아주면 내가 택시비 줄게!";
}
else if (JoYoonWoo.indexOf("사장") != -1) {
   conversation = "사장님께 내가 전화 드려줄까?";
}
else if (JoYoonWoo.indexOf("공부") != -1) {
   conversation = "공부는 내일부터!";
}
else if (JoYoonWoo.indexOf("야") != -1) {
   conversation = "오케이! 야라고 불러도 뭐라안할테니까 더마시자ㅎㅎ!";
}
else if (JoYoonWoo.indexOf("취했") != -1) {
   conversation = "아냐 안취했어! 이제 시작이지";
}
else if (JoYoonWoo.indexOf("취해") != -1) {
   conversation = "아냐 안취했어! 이제 시작이지";
}
else if (JoYoonWoo.indexOf("선배") != -1) {
   conversation = "선배 말을 잘들어야지!";
}
else if (JoYoonWoo.indexOf("신고") != -1) {
   conversation = "아....미안.....";
}
else if (JoYoonWoo.indexOf("윤우") != -1) {
	real_old = real_old - 2;
   conversation = "이제 선배 이름 막부르는거야!?";
}
else if (JoYoonWoo.indexOf("버스") != -1) {
   conversation = "버스 이미 끊겼으니까 좀 이따가 택시타구가ㅎㅎ";
}
else if (JoYoonWoo.indexOf("후회") != -1) {
   conversation = "지금 가면 진짜 너 후회한다!?";
}
else if (JoYoonWoo.indexOf("죄송") != -1) {
   conversation = "죄송 할 필요 없어 좀만 더 놀면 되지ㅎㅎ!";
}
else if (JoYoonWoo.indexOf("민희") != -1) {
   conversation = "민희도 더 놀거지?!";
}
else if (JoYoonWoo.indexOf("꺼져") != -1) {
   conversation = "진짜 너무하다 너...";
}
else if (JoYoonWoo.indexOf("애들") != -1) {
   conversation = "쟤네도 한 두시간 더 있는다고 했어!";
}
else if (JoYoonWoo.indexOf("돈") != -1) {
   conversation = "당연히 내가 사줄거지!";
}
else if (JoYoonWoo.indexOf("뭔데") != -1) {
   conversation = "나? 너 선배지!";
}
else if (JoYoonWoo.indexOf("늦었") != -1) {
   conversation = "늦긴 뭘 늦어 대학생은 이 시간부터 시작이지!";
}
else if (JoYoonWoo.indexOf("ㅅㅂ") != -1) {
	real_old = real_old -5 ;
   conversation = "어 그래 일단 마시면서 욕하자!";
}
else if (JoYoonWoo.indexOf("취업") != -1) {
	real_old = real_old - 3;
   conversation = "인맥 쌓는 것도 취업 준비 하는거야!";
}
else if (JoYoonWoo.indexOf("짤려") != -1) {
   conversation = "그니까 내가 잘 말해 준다니까!?";
}
else if (JoYoonWoo.indexOf("엄마") != -1) {
   conversation = "부모님도 이해해 주실거야!";
}
else if (JoYoonWoo.indexOf("속") != -1) {
   conversation = "속 안좋아? 내가 약 사다줄게 앉아있어!!";
}
else if (JoYoonWoo.indexOf("내일") != -1) {
   conversation = "내일 일은 내일 생각해는거야 원래!";
}
else if (JoYoonWoo.indexOf("낼") != -1) {
   conversation = "내일 일은 내일 생각해는거야 원래!";
}
else if (JoYoonWoo.indexOf("졸려") != -1) {
   conversation = "졸려? 우리가 잠 깨워줄게!";
}
else if (JoYoonWoo.indexOf("늦어") != -1) {
   conversation = "이왕 늦은거 조금만 더 늦자!";
}
else if (JoYoonWoo.indexOf("니가") != -1) {
   conversation = "너?? 지금 선배한테 너라고 한거야?!";
}
else if (JoYoonWoo.indexOf("늦잠") != -1) {
   conversation = "내가 모닝콜 해줄게 됐지!?";
}
else if (JoYoonWoo.indexOf("안돼") != -1) {
   conversation = "아냐 돼! 된다구!!";
}
else if (JoYoonWoo.indexOf("책임") != -1) {
   conversation = "내가 다 책임져줄게 나만 믿어!";
}
else if (JoYoonWoo.indexOf("시간") != -1) {
   conversation = "한 두시간 더 놀아도 괜찮잖아!";
}
else if (JoYoonWoo.indexOf("대면식") != -1) {
   conversation = "대면식은 원래 먹고 죽을때까지 노는거야!";
}
else if (JoYoonWoo.indexOf("신입") != -1) {
   conversation = "신입생이니까 선배 말을 잘들어야지!";
}
else if (JoYoonWoo.indexOf("다음") != -1) {
   conversation = "다음이 어딨어! 오늘이 중요한거지!";
}
else if (JoYoonWoo.indexOf("담") != -1) {
   conversation = "다음이 어딨어! 오늘이 중요한거지!";
}
else if (JoYoonWoo.indexOf("많이") != -1) {
   conversation = "아냐 아직 부족해..";
}
else if (JoYoonWoo.indexOf("체력") != -1) {
   conversation = "너는 아직 젊잖아!?";
}
else if (JoYoonWoo.indexOf("너무") != -1) {
   conversation = "아니야 아직 부족해..";
}
else if (JoYoonWoo.indexOf("장난") != -1) {
   conversation = "장난치는거 아니야 빨리와!";
}
else if (JoYoonWoo.indexOf("아저씨") != -1) {
   conversation = "지금... 뭐라했어.........?";
}
else if (JoYoonWoo.indexOf("가야") != -1) {
   conversation = "쪼~ 금만 더 있다 가면 진짜 보내줄게!";
}
else if (JoYoonWoo.indexOf("꼰대") != -1) {
   conversation = "꼰대!? 진짜 꼰대가 뭔지 보여줘?";
}
else if (JoYoonWoo.indexOf("교시") != -1) {
   conversation = "충분히 일어날 수 있어! 너 젊잖아!";
}
else if (JoYoonWoo.indexOf("안녕") != -1) {
   conversation = "안녕 못해 빨리 일루와~";
}
else if (JoYoonWoo.indexOf("몰라") != -1) {
   conversation = "모르긴 뭘 몰라! 좀 더 놀자~~!";
}
else if (JoYoonWoo.indexOf("ㅠ") != -1) {
   conversation = "왜 울라고 그래..";
}
else if (JoYoonWoo.indexOf("종강") != -1) {
   conversation = "종강 하고는 너무 늦잖아!";
}
else if (JoYoonWoo.indexOf("공강") != -1) {
   conversation = "공강날은 공강날이고 오늘은 오늘이지!";
}
else if (JoYoonWoo.indexOf("학생회") != -1) {
   conversation = "학생회는 원래 이렇게 노는거야!";
}
else if (JoYoonWoo.indexOf("재수강") != -1) {
   conversation = "재수강? 하면 되지! 나도 재수강 몇 개 했는데 학점 잘 나왔어!";
}
else if (JoYoonWoo.indexOf("밀려") != -1) {
   conversation = "괜찮아 내일부터 하면 돼!";
}
else if (JoYoonWoo.indexOf("밀린") != -1) {
   conversation = "괜찮아 내일부터 하면 돼!";
}
else if (JoYoonWoo.indexOf("나이") != -1) {
   conversation = "나이가 뭐가 중요해!?";
}
else if (JoYoonWoo.indexOf("동기") != -1) {
   conversation = "동기들도 있는데! 너도 더 놀다 가야지!";
}
else if (JoYoonWoo.indexOf("상태") != -1) {
   conversation = "내 상태가 왜!? 멀쩡한데??";
}
else if (JoYoonWoo.indexOf("ㅋ") != -1) {
   conversation = "뭐가 그렇게 웃긴데?";
}
else if (JoYoonWoo.indexOf("그만") != -1) {
   conversation = "딱 이것만 먹고 그만 먹자!";
}
else if (JoYoonWoo.indexOf("싫어") != -1) {
   conversation = "아이 정 없게 왜그래~!";
}
else if (JoYoonWoo.indexOf("왜") != -1) {
   conversation = "뭘 왜는 왜야 다 좋아하니까 그런거지!";
}
else if (JoYoonWoo.indexOf("대학") != -1) {
   conversation = "원래 학교 생활이 다 그런거야";
}
else if (JoYoonWoo.indexOf("막차") != -1) {
   conversation = "막차 이미 끊겼지! 더 마시고 택시타고 가!!";
}
else if (JoYoonWoo.indexOf("몇 살") != -1) {
   conversation = "나 23살 인데? 군대 다녀왔어.";
}
else if (JoYoonWoo.indexOf("남자친구") != -1) {
   conversation = "나 동성애자 아닌데?..";
}
else if (JoYoonWoo.indexOf("여자친구") != -1) {
   conversation = "나 여자친구 없어... 외롭다..";
}
else if (JoYoonWoo.indexOf("응애") != -1) {
   conversation = "너 애기야? 20살 애기?..";
}
else if (JoYoonWoo.indexOf("사줘") != -1) {
   conversation = "나도 학생이여서 거지야..";
}
else if (JoYoonWoo.indexOf("앙") != -1) {
   conversation = "귀엽네 ㅎㅎ";
}
else if (JoYoonWoo.indexOf("소맥") != -1) {
   conversation = "한 잔 더 마실까? 짠짠!";
}
else if (JoYoonWoo.indexOf("컴공") != -1) {
   conversation = "코딩이 많이 어렵긴 하지.. 그래도 열심히 하면 취업은 되니까 포기하지 마!";
}
else if (JoYoonWoo.indexOf("뀨") != -1) {
   conversation = "귀여워 ㅎ.. 반하겠어";
}
else if (JoYoonWoo.indexOf("젓가락") != -1) {
   conversation = "젓가락 안 떨어트렸는데?";
}
else if (JoYoonWoo.indexOf("사이다") != -1) {
   conversation = "그래.. 사이다 줄게.. 기다려";
}
else if (JoYoonWoo.indexOf("콜라") != -1) {
   conversation = "콜라? 콜라는 없는데?... 주문줘야겠다.";
}
else if (JoYoonWoo.indexOf("재미") != -1) {
   conversation = "지금부터 재밌게 놀아줄게!!";
}
else if (JoYoonWoo.indexOf("대중교통") != -1) {
   conversation = "막차 이미 끊겼지! 더 마시고 택시타고 가!!";
}
else if (JoYoonWoo.indexOf("형") != -1) {
   conversation = "어 그랭 불렀어?!?";
}
else if (JoYoonWoo.indexOf("오빠") != -1) {
   conversation = "어 그랭 불렀어?!?";
}
else if (JoYoonWoo.indexOf("자꾸") != -1) {
   conversation = "그니까 좀만 더 놀자구~~!!!";
}
else if (JoYoonWoo.indexOf("오지랖") != -1) {
   conversation = "내가 다 너 생각해서 하는말이야!";
}
else if (JoYoonWoo.indexOf("화") != -1) {
   conversation = "그렇다고 그렇게 화내진 말구...";
}
else if (JoYoonWoo.indexOf("플젝") != -1) {
   conversation = "그거 내가 도와줄게!!!";
}
else if (JoYoonWoo.indexOf("혼") != -1) {
   conversation = "내가 쉴드 쳐줄게 전화번호 줘봐~!!!";
}
else if (JoYoonWoo.indexOf("오늘") != -1) {
   conversation = "일단 오늘은 놀고! 나중에도 또 놀고!";
}
else if (JoYoonWoo.indexOf("맥주") != -1) {
   conversation = "맛있는 맥주 있는데 저거 시켜줄게!!";
}
else if (JoYoonWoo.indexOf("소주") != -1) {
   conversation = "소맥 한잔만 더 마시고가 그럼!!";
}
else if (JoYoonWoo.indexOf("안주") != -1) {
   conversation = "먹고싶은거 다말해!! 다 시켜줄게!!!";
}
else if (JoYoonWoo.indexOf("배불") != -1) {
   conversation = "얘기 하다보면 소화 돼ㅎㅎ";
}
else if (JoYoonWoo.indexOf("토") != -1) {
   conversation = "원래 토하면서 마시는거지~~!!";
}
else if (JoYoonWoo.indexOf("게임") != -1) {
   conversation = "컴퓨터 게임보단 술게임이 짱이지~~!";
}
else if (JoYoonWoo.indexOf("가방") != -1) {
   conversation = "내가 좀만 더 놀고 갈 때 챙겨줄게";
}
else if (JoYoonWoo.indexOf("쟤네") != -1) {
   conversation = "너도 있어야 재밌다구";
}
else if (JoYoonWoo.indexOf("노잼") != -1) {
   conversation = "재미없었구나~~ 지금부터 재밌게 놀자!";
}
else if (JoYoonWoo.indexOf("돼지") != -1) {
   conversation = "너보다 날씬하거든";
}
else if (JoYoonWoo.indexOf("남친") != -1) {
   conversation = "너 남친 없는거 다알아!";
}
else if (JoYoonWoo.indexOf("심심") != -1) {
   conversation = "술게임 좀 할까?!";
}
else if (JoYoonWoo.indexOf("화장실") != -1) {
   conversation = "화장실 갔다가 오는거 맞지!!?";
}
else if (JoYoonWoo.indexOf("도망") != -1) {
   conversation = "내가 잡으러 갈거야!";
}
else if (JoYoonWoo.indexOf("연락") != -1) {
   conversation = "내가 대신 말해줄게!";
}
else if (JoYoonWoo.indexOf("추워") != -1) {
   conversation = "저기 과잠 있는데 저거 입고가!";
}
else if (JoYoonWoo.indexOf("누가") != -1) {
   conversation = "내가!!";
}
else if (JoYoonWoo.indexOf("파티") != -1) {
   conversation = "파티는 원래 밤새서 하는게 국룰이지";
}
else if (JoYoonWoo.indexOf("폰") != -1) {
   conversation = "전화 오면 받아 줄게! 이런거 잘해ㅎㅎ";
}
else if (JoYoonWoo.indexOf("이상") != -1) {
   conversation = "뭐가 이상해 나 완전 맨정신인데~";
}
else if (JoYoonWoo.indexOf("밤") != -1) {
   conversation = "대학교 때 아니면 언제 이렇게 놀아보겠어!";
}
else if (JoYoonWoo.indexOf("대학") != -1) {
   conversation = "원래 대학생활이 다 이런거야~~";
}
else if (JoYoonWoo.indexOf("언니") != -1) {
   conversation = "언니들도 다 늦게까지 논다고 했어!";
}
else if (JoYoonWoo.indexOf("잔") != -1) {
   conversation = "잔 비었다! 따라줄게ㅎㅎ";
}
else if (JoYoonWoo.indexOf("썸") != -1) {
   conversation = "너 누구 좋아해?!";
}
else if (JoYoonWoo.indexOf("슨배") != -1) {
   conversation = "선배님 말 잘들어야지!";
}
else if (JoYoonWoo.indexOf("술주정") != -1) {
   conversation = "술주정이라니! 아주 멀쩡해 지금";
}
else conversation = "??";
	
	$('.conversation').before(name + ' : ' + JoYoonWoo + '<br/> 윤우 선배 : ' + conversation + '<br/><br/>');
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"JoYoonWoo\" placeholder=\"윤우 선배에게 뭐라고 할까?\\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/>');

	localStorage.setItem('old', old);
}
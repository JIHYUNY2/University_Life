var conversation;
var name = localStorage.getItem('name');
var real_old = localStorage.getItem('real_old');

function find() { // Handler
	var GangMinHee = document.getElementById('GangMinHee').value;
	
	if (GangMinHee == "") {
		conversation = "그래서 술 마시러 갈래?";
	}
	else if (GangMinHee.indexOf("미안해 아르바이트 때문에") != -1) { // first_2 1번 선택지
		if (from_path == 1) {
			localStorage.setItem('one', 1);
			real_old = real_old + 5;
			location.href = "..\\html\\second_1.html";	
		}
		else {
			conversation = "저번에도 아르바이트라고 하지 않았어?? 조금만 마실껀데 놀자!";
		}
	}
	else if (GangMinHee.indexOf("미안해 과제 때문에") != -1) { // first_2 2번 선택지
		if (from_path == 1) {
			localStorage.setItem('one', 2);
			real_old = real_old + 6;
			location.href = "..\\html\\second_2.html";	
		}
		else {
			conversation = "과제 기한 아직 많이 남았잖아?! 조금만 마실껀데 놀자!";
		}
	}
	else if (GangMinHee.indexOf("그래 가자") != -1) { // first_2 3번 선택지
		if (from_path == 1) {
			localStorage.setItem('one', 3);
			real_old = real_old -2;
			location.href = "..\\html\\second_3.html";	
		}
		else {
			conversation = "너무 내가 너에게 강압적으로 했나?.. 정말 괜찮은거 맞지?";
		}
	}
	else if (GangMinHee.indexOf("그래") != -1) { // second_1_mini 1번 선택지
		if (from_path == 1) {
			real_old = real_old - 2;
			localStorage.setItem('one', 3);
			location.href = "..\\html\\second_3.html";		
		}
		else if (from_path == 2) {
			real_old = real_old + 1;
			location.href = "..\\html\\second_1_mini1.html";	
		}
	}
	
	else if (GangMinHee.indexOf("미안해 바빠서") != -1) { // second_1_mini 2번 선택지
		if (from_path == 1) {
			real_old = real_old + 3;
			conversation = "무슨 일 때문에 바빠?";		
		}
		else if (from_path == 2) {
			real_old = real_old + 4;
			location.href = "..\\html\\second_1_mini2.html";	
		}
	}
	else if (GangMinHee.indexOf("미안해") != -1) {
		if (from_path == 1) {
			real_old = real_old +2;
			conversation = "무슨 일 때문에 그런데?";		
		}
		else if (from_path == 2) {
			real_old = real_old + 1;
			location.href = "..\\html\\second_1_mini2.html";	
		}
	}
	else if (GangMinHee.indexOf("안녕") != -1) {
      conversation = "응? 그래! 안녕?!";
   }
   else if (GangMinHee.indexOf("몇 살") != -1) {
      conversation = "20살! 재수 안 하고 바로 들어왔어!!! 너도 20살 맞지?";
   }
   else if (GangMinHee.indexOf("주량") != -1) {
      conversation = "나 2병이야! 근데 너는 술 잘 마실거 같아 ㅎㅎ";
      real_old--;
   }
   else if (GangMinHee.indexOf("키") != -1) {
      conversation = "키? 164cm인데?? 왜 물어봐??";
   }
   else if (GangMinHee.indexOf("성별") != -1) {
      conversation = "응? 여자인데??";
   }
   else if (GangMinHee.indexOf("못 생겼어") != -1) {
      conversation = name + "!.. 왜 그래?.. 내가 못 살게 굴기라도 했니?";
  }
  else if (GangMinHee.indexOf("이쁘다") != -1) {
  	real_old = real_old + 2;
      conversation = "ㅎㅎ 고마워! 너도 이뻐!";
  }
   else if (GangMinHee.indexOf("살아") != -1) {
      conversation = "나 서울에서 살아! 조금 멀기는 하지만 부모님이 엄격하셔서 통학하고 있어!";
   }
   else if (GangMinHee.indexOf("게임") != -1) {
   	real_old = real_old - 3;
      conversation = "나 게임 잘 안 해! 재미가 없더라구.";
   }
   else if (GangMinHee.indexOf("연애") != -1) {
   	real_old = real_old + 2;
      conversation = "연애?? 대학생활의 로망인데 ㅎㅎ! 언젠가는 꼭 해보고 싶다";
   }
   else if (GangMinHee.indexOf("남친") != -1) {
      conversation = "남자친구 아직 못 사귀었어...";
   }
   else if (GangMinHee.indexOf("과제") != -1) {
      conversation = "웹 프로그래밍 기초 과제 있다고 하더라고! 이거 내일부터 조금씩 하려고!";
      real_old++;
   }
   else if (GangMinHee.indexOf("술") != -1) {
      conversation = "그래서 술 마시러 갈꺼야?";
   }
   else if (GangMinHee.indexOf("마라탕") != -1) {
      conversation = "나 마라탕 엄청 좋아해! 특히 제일 맵게 해서 먹는 걸 좋아해! 다음에 먹으러 가지 않을래?";
   }
   else if (GangMinHee.indexOf("화장품") != -1) {
      conversation = "난 인니슾으리 화장품 좋아해! 이번에 로드샵 세일 한다는데 같이 가지 않을래?";
   }
    else if (GangMinHee.indexOf("용돈") != -1) {
      conversation = "용돈은 따로 안 받고 알바하면서 자급자족으로 살고 있어~";
   } 
   else if (GangMinHee.indexOf("알바") != -1) {
      conversation = "나는 지금 냉면집 알바를 하고 있는데, 역시 음식점 알바는 힘들다 ㅠㅠ";
   }
   else if (GangMinHee.indexOf("인스타") != -1) {
      conversation = "너도 인스타 해? 나랑 맞팔하자!";
   }
   else if (GangMinHee.indexOf("동아리") != -1) {
      conversation = "역시 대학의 꽃은 동아리지~ 나는 밴드 동아리를 하고 싶어! 노래를 랄라랄라~~";
   }
   else if (GangMinHee.indexOf("노래방") != -1) {
      conversation = "노래방 너무 가고 싶다 ㅠㅠ 우리 학교 수업 끝나고 코노 고고??";
   }
   else if (GangMinHee.indexOf("만화") != -1) {
      conversation = "학교 앞에 엄청 좋은 만화 카페 있는데, 가지 않을래? 만화 종류 엄청 많아!";
   }
   else if (GangMinHee.indexOf("노트북") != -1) {
      conversation = "나는 사과 노트북 샀어 ㅎ 요즘 이게 카페 입장권이라며?";
   }
   else if (GangMinHee.indexOf("취미") != -1) {
      conversation = "내 취미는 일본어야! 이제 시대에 맞춰 글로벌~한 인재가 돼야지 ";
   }
   else if (GangMinHee.indexOf("충전기") != -1) {
      conversation = "혹시 충전기 들고 왔어? 아~배터리 5%야 망했다 ㅠㅠ";
   }
   else if (GangMinHee.indexOf("향수") != -1) {
      conversation = "나는 머스크 향이 좋더라! 중성적인 향..";
   }
   else if (GangMinHee.indexOf("썸") != -1) {
      conversation = "사실 며칠 전부터 연락하던 선배가 있는데....아잇 부끄러워><";
   }
   else if (GangMinHee.indexOf("고백") != -1) {
      conversation = "나는 집 근처 공원에 있는 의자에 앉아서 고백하는게 로망이야....ㅎ";
   }
   else if (GangMinHee.indexOf("커피") != -1) {
      conversation = "나는 얼죽아!! 얼어 죽어도 아이스아메리카노!!";
   }
   else if (GangMinHee.indexOf("카페") != -1) {
      conversation = "나는 SNS 감성 이쁜 카페가 좋더라~";
   }
   else if (GangMinHee.indexOf("셀카") != -1) {
      conversation = "셀카는 핸드폰을 45도 각도로 틀어서...아앗..사실 나 셀카 잘 못 찍어.....";
  }
   else if (GangMinHee.indexOf("학교") != -1) {
      conversation = "우리 학교 공기가 참 좋아~ 다만 산 위에 있어서 등교가 힘들 수도..ㅎㅎ";
  }
   else if (GangMinHee.indexOf("버스") != -1) {
      conversation = "우리 학교 가는 버스 너무 없지 않아? 나는 택시를 더 많이 탄 듯....내 돈ㅠㅠ";
  }
   else if (GangMinHee.indexOf("지하철") != -1) {
      conversation = "출근 시간이라 그런가 지하철에 사람 엄청 많더라~ 완전 지옥철....";
  }
   else if (GangMinHee.indexOf("고양이") != -1) {
      conversation = "우리 학교에 고양이 엄청 많지 않아? 수업이 힘들다가도 지나가다가 보면 힐링된다~";
  }
   else if (GangMinHee.indexOf("자취") != -1) {
      conversation = "나 자취하고 있는데 나중에 우리 집에서 같이 영화보자 ㅎㅎ";
  }
   else if (GangMinHee.indexOf("맛집") != -1) {
      conversation = "학교 앞이랑 역 근처에도 맛집 엄청 많던데 우리 수업 끝나고 맛집 탐방이나 갈까??";
  }
   else if (GangMinHee.indexOf("옷") != -1) {
      conversation = "우리도 이제 새내기인데 좀 꾸며야지 ㅎ 당장 옷 사러가자!!";
  }
   else if (GangMinHee.indexOf("선배") != -1) {
      conversation = "우리 과 선배들 다 너무 멋있으시고 코딩도 잘 하더라ㅠㅠ 나도 저런 선배가 될 수 있을까...?";
  }
   else if (GangMinHee.indexOf("후배") != -1) {
      conversation = "내년이면 나도 후배가 생기겠지? 아~몇 개월 뒤면 헌내기라니 슬프다 ㅠㅠ";
  }
   else if (GangMinHee.indexOf("스터디") != -1) {
      conversation = "역시 다 같이 공부하면 공부가 잘 되는 것 같아! 다만 잡담은 금지 ㅎㅎ";
      real_old++;
  }
   else if (GangMinHee.indexOf("해장") != -1) {
      conversation = "해장은 무조건 물냉이지! 아 상상만 해도 속 풀린다^^";
  }
   else if (GangMinHee.indexOf("교수") != -1) {
      conversation = "유 교수님 수업 들어? 아 너무 재밌어~너도 다음 학기에 들어봐!";
  }
   else if (GangMinHee.indexOf("냉면") != -1) {
      conversation = "물냉 질리면 비냉~ 비냉 질리면 물냉~";
  }
  else if (GangMinHee.indexOf("에버랜드") != -1) {
      conversation = "방학 때 에버랜드 갈래?? 재미있는데!";
  }
  else if (GangMinHee.indexOf("사이다") != -1) {
      conversation = "나도 사이다 먹고 싶어지잖아!";
  }
  else if (GangMinHee.indexOf("콜라") != -1) {
      conversation = "나 콜라 좋아해!";
  }
  else if (GangMinHee.indexOf("예의") != -1) {
      conversation = "?... 갑자기 무섭게 왜 그래...";
      real_old--;
  }
  else if (GangMinHee.indexOf("비") != -1) {
      conversation = "오늘 우천 예보가 있었나?.. 없었던 거 같은데..";
  }
  else if (GangMinHee.indexOf("보드게임") != -1) {
      conversation = "보드게임 좋아해?? 나도 엄청 좋아하는데! 나중에 루미큐브하자!";
  }
  else if (GangMinHee.indexOf("동아리") != -1) {
      conversation = "입부 하고 싶은 곳은 많은데 시간이 없어서.. 미안";
  }
  else if (GangMinHee.indexOf("빡쳐") != -1) {
      conversation = "혹시 화나게 했니?... 미안..";
  }
  else if (GangMinHee.indexOf("인덱스") != -1) {
      conversation = "인덱스라는 것은 데이터베이스의 동작 속도를 높혀주는 자료구조를 의미해!";
      real_old++;
  }
  else if (GangMinHee.indexOf("객체지향") != -1) {
      conversation = "객체 간에 메시지를 보내어 데이터 처리하는 것을 의미해!";
      real_old++;
  }
  else if (GangMinHee.indexOf("서점") != -1) {
      conversation = "서점? 서점 어디있는지 모르겠네.. ㅎㅎ";
  }
  else if (GangMinHee.indexOf("학식") != -1) {
      conversation = "학식 말고! 더 맛있는거 먹지 않을래?";
  }
  else if (GangMinHee.indexOf("윤우") != -1) {
      conversation = "윤우 선배 어떻게 알아?! 언급한 적도 없는데... 혹시?..";
  }
  else if (GangMinHee.indexOf("짝사랑") != -1) {
      conversation = "짝사랑?... 너 혹시?.. 좋아하는 사람 있어?";
  }
  else if (GangMinHee.indexOf("남자") != -1) {
      conversation = "??? 남자?..";
  }
  else if (GangMinHee.indexOf("버스") != -1) {
      conversation = "한 15분 넘게 기다려야 될 걸? 게다가 마지막 버스도 일러서..";
  }
  else if (GangMinHee.indexOf("인스펙션") != -1) {
      conversation = "인스펙션이라는 것은 특별 훈련을 받은 중재자가 회의를 진행하는 것을 의미해";
      real_old++;
  }
  else if (GangMinHee.indexOf("애자일") != -1) {
      conversation = "애자일 방법론은 계획에 너무 치중하면 속도가 느려지는 단점을 극복하기 위하여 프로토 타입을 계속 출시하여 보완해나가는 방법이야!";
  }
  else if (GangMinHee.indexOf("테스팅") != -1) {
      conversation = "블랙 박스 테스팅은 명세 기반 테스팅이고 화이트 박스 테스팅은 소스 기반으로 검증 및 테스팅 하는 방법이야!";
  }
  else if (GangMinHee.indexOf("스텍") != -1) {
      conversation = "스텍은 자료구조의 한 연산으로 선입선출이고 팝, 푸쉬 연산들이 존재해.";
  }
  else if (GangMinHee.indexOf("스택") != -1) {
      conversation = "스텍은 자료구조의 한 연산으로 선입선출이고 팝, 푸쉬 연산들이 존재해.";
  }
   else if (GangMinHee.indexOf("큐") != -1) {
      conversation = "큐는 자료구조의 한 연산으로 후입선출이야.";
  }
   else if (GangMinHee.indexOf("파레토") != -1) {
      conversation = "파레토의 원리는 80프로의 오류는 20프로의 모듈에서 발견이 된다는 원리야. 즉, 복잡한 모듈에서 많은 오류가 발생한다는 것이지!";
  }
   else if (GangMinHee.indexOf("인생") != -1) {
      conversation = "인생은 길면 80년인데 그래도 즐기면서 살자! 응? 가자! ㅎㅎ";
  }
   else if (GangMinHee.indexOf("워크스루") != -1) {
      conversation = "워크스루라는 것은 문서 작성자가 회의를 진행하는 것을 의미해!";
  }
   else if (GangMinHee.indexOf("인사") != -1) {
      conversation = "인사?.. 어.. 안녕!!! 나는 강민희라고 해!";
  }
   else if (GangMinHee.indexOf("핸드크림") != -1) {
      conversation = "핸드크림? 여기... 나 있어! ㅎㅎ";
  }
   else if (GangMinHee.indexOf("대출") != -1) {
      conversation = "대출?.. 학생 대출이라고 있더라. 150만원 인가 준다던데?..";
      real_old++;
  }
   else if (GangMinHee.indexOf("사채업자") != -1) {
      conversation = "... 뭔 그런 소리를 하니?..";
  }
   else if (GangMinHee.indexOf("자료구조") != -1) {
      conversation = "자료구조라는 것은 컴퓨터 과학에서 효율적인 접근 및 수정을 할 수 있게 하는 자료의 조작을 의미해!";
  }
   else if (GangMinHee.indexOf("교재") != -1) {
      conversation = "교재라면 아까 너 수업시간에 피고 있었던 책이 교재 아니야?";
  }
   else if (GangMinHee.indexOf("맥주") != -1) {
      conversation = "맥주 좋아해?!! 마시러 가자!";
  }
   else if (GangMinHee.indexOf("회") != -1) {
      conversation = "너 회 좋아해? 나는.. 알레르기 있어서.. 미안..ㅠㅠ";
  }
   else if (GangMinHee.indexOf("조개") != -1) {
      conversation = "조개?.. 나 해산물 못 먹어.. 미안해";
  }
   else if (GangMinHee.indexOf("얼굴") != -1) {
      conversation = "내 얼굴 왜?";
  }
   else if (GangMinHee.indexOf("바지") != -1) {
      conversation = "내 바지 어때? 이거 개강한다고 해서 백화점에서 산거당! ㅎㅎ";
  }
   else if (GangMinHee.indexOf("옷") != -1) {
      conversation = "내꺼 옷 어떄? 이거 나름 메이커야!";
  }
   else if (GangMinHee.indexOf("구두") != -1) {
      conversation = "오늘 술 마실 작정하고 와서.. 구두는 못 신었어 ㅎㅎ";
  }
   else if (GangMinHee.indexOf("도로") != -1) {
      conversation = "도로?.. 나 지금 인도 위에 서있는데?";
  }
   else if (GangMinHee.indexOf("인도") != -1) {
      conversation = "혹시? 인도? 나 인도 위에 서있는데? 나라 인도는 갑자기 왜?";
      real_old++;
  }
   else if (GangMinHee.indexOf("만화") != -1) {
      conversation = "나 만화를 안 봐서..";
  }
   else if (GangMinHee.indexOf("기타") != -1) {
      conversation = "너 기타 연주하니? 나 악기 아예 다룰 줄 몰라..";
  }
   else if (GangMinHee.indexOf("피아노") != -1) {
      conversation = "나 초등학생 때 피아노 쳤었어!!";
  }
   else if (GangMinHee.indexOf("드럼") != -1) {
      conversation = "드럼 엄청 멋있던데?! 나도 드럼 배워보고 싶다!";
  }
   else if (GangMinHee.indexOf("보컬") != -1) {
      conversation = "보컬? 나 노래방 자주 가! ㅎㅎ";
  }
   else if (GangMinHee.indexOf("노래방") != -1) {
      conversation = "노래방? 이따가 그럼 노래방 갈래?";
  }
   else if (GangMinHee.indexOf("강민희") != -1) {
      conversation = "맞아! 내 이름이 강민희야! 반가워!";
  }
   else if (GangMinHee.indexOf("아이스크림") != -1) {
      conversation = "술 마시고 후식으로 딱이지! 그럼 아이스크림 먹을래?!";
  }
   else if (GangMinHee.indexOf("아이셔") != -1) {
      conversation = "향 있는 소주는 좀... 그래 ㅎ";
  }
   else if (GangMinHee.indexOf("청포도이슬") != -1) {
      conversation = "청포도 좋아하긴 한데.. 소주에 섞는 건 좀..";
  }
   else if (GangMinHee.indexOf("팀플") != -1) {
      conversation = "팀플? 아직 팀플 이야기는 못 들은 것 같은데?";
  }
   else if (GangMinHee.indexOf("공모전") != -1) {
      conversation = "1학년인데 벌써 공모전이라니?.. 너 되게 열심히 하는 구나!";
  }
   else if (GangMinHee.indexOf("모텔") != -1) {
      conversation = "취하면 나 자취하니까 내 자취방으로 와! ㅎㅎ 언제든 환영이야!";
      real_old++;
  }
   else if (GangMinHee.indexOf("할로윈") != -1) {
      conversation = "벌써?! 아직 할로윈 되려면 한참 남았는데?";
  }
   else if (GangMinHee.indexOf("토끼") != -1) {
      conversation = "토끼 귀엽지.. ㅠㅠ... 나중에 동물원 같이 가자!";
  }
   else if (GangMinHee.indexOf("태양") != -1) {
      conversation = "하늘에 비치는 태양? 썬칩 먹고 싶다..";
  }
   else if (GangMinHee.indexOf("신입생") != -1) {
      conversation = "어! 맞아 나 신입생이야!";
  }
   else if (GangMinHee.indexOf("고민") != -1) {
      conversation = "고민 있어?... 그럼 같이 마시면서 이야기 해줘.. 다 들어줄게!";
      real_old++;
  }
   else if (GangMinHee.indexOf("부모님") != -1) {
      conversation = "혹시 부모님이 엄하셔?..";
  }
   else if (GangMinHee.indexOf("선풍기") != -1) {
      conversation = "선풍기?.. 되게 여러 이야기를 하네?";
  }
   else if (GangMinHee.indexOf("고데기") != -1) {
      conversation = "오늘 고데기까지 풀 메이크 업하고 왔는데.. 이제 귀찮아서 안 하려구..";
  }
   else if (GangMinHee.indexOf("립스틱") != -1) {
      conversation = "나 입생로랑 쓰고 있어!";
  }
   else if (GangMinHee.indexOf("카카오톡") != -1) {
      conversation = "카카오톡? 나 쓰고 있는데?";
  }
   else if (GangMinHee.indexOf("휴지") != -1) {
      conversation = "휴지?.. 나 있는데 줄까?";
  }
   else if (GangMinHee.indexOf("사탕") != -1) {
      conversation = "나 입냄새 억제 사탕 있어! 너도 하나 줄까?";
  }
   else if (GangMinHee.indexOf("다리") != -1) {
      conversation = "다리 왜? 나 너무 살쪄보여?";
  }
   else if (GangMinHee.indexOf("닭다리") != -1) {
      conversation = "이따 그럼 안주로 치킨 먹자!.. 닭다리 꼭 너 줄게..";
  }
   else if (GangMinHee.indexOf("생일") != -1) {
      conversation = "생일? 너 혹시 오늘 생일이야?! 생일 축하해!";
  }
   else if (GangMinHee.indexOf("선물") != -1) {
      conversation = "선물?.. 그.. 그래... 줄게!";
  }
   else if (GangMinHee.indexOf("케이크") != -1) {
      conversation = "케이크?! 생일이야? 그럼 당연히 준비하지 ㅋ";
  }
   else if (GangMinHee.indexOf("머리카락") != -1) {
      conversation = "머리카락?.... 갑자기 왜? 뭐 묻었어?";
  }
   else if (GangMinHee.indexOf("마스크") != -1) {
      conversation = "마스크.. 하긴 오늘 미세먼지 많다더라.. 근데 화장 다 묻어서 좀...";
  }
   else if (GangMinHee.indexOf("함수") != -1) {
      conversation = "함수를 통해서 이 모듈이 어떤 역할을 하는지 나타낼 수 있어!";
  }
   else if (GangMinHee.indexOf("OOP") != -1) {
      conversation = "OOP는 객체지향 프로그래밍의 줄임말이야!";
  }
   else if (GangMinHee.indexOf("스케듈링") != -1) {
      conversation = "잡 스케듈링 이야기 하는거야? 주어진 프로세스들을 효율적으로 처리하기 위해 우선순위에 따라 처리하는 것을 의미해!";
      real_old++;
  }
  else if (GangMinHee.indexOf("몸무게") != -1) {
      conversation = "몸무게... 비밀이야.. 왜 물어보는거야?..";
  }
   else if (GangMinHee.indexOf("+") != -1) {
      conversation = "미안해.. 나 계산 못 해..";
  }
  else if (GangMinHee.indexOf("-") != -1) {
      conversation = "미안해.. 나 계산 못 해..";
  }
  else if (GangMinHee.indexOf("/") != -1) {
      conversation = "미안해.. 나 계산 못 해..";
  }
  else if (GangMinHee.indexOf("%") != -1) {
      conversation = "미안해.. 나 계산 못 해..";
  }
  else if (GangMinHee.indexOf("*") != -1) {
      conversation = "미안해.. 나 계산 못 해..";
  }
  else if (GangMinHee.indexOf("/0") != -1) {
      conversation = "0 나누기를 하면 계산 못 하지..";
  }
  else if (GangMinHee.indexOf("ㅗ") != -1) {
      conversation = "(강민희가 불쾌한 눈빛으로 나를 바라보았다.)";
      real_old--;
  }
  else if (GangMinHee.indexOf("딱밤") != -1) {
      conversation = "딱밤?.. 갑자기 무슨 소리야? 때리려고?..";
  }
  else if (GangMinHee.indexOf("가방") != -1) {
      conversation = "나 가방 친오빠가 쓰던거 물려받아서 쓰고 있어..";
  }
  else if (GangMinHee.indexOf("사랑해") != -1) {
      conversation = "어?.. 나도 사랑해...";
  }
  else if (GangMinHee.indexOf("예뻐") != -1) {
      conversation = "고마워! 너도 예뻐!";
  }
  else if (GangMinHee.indexOf("소주") != -1) {
      conversation = "난 소주 파가 아니고 소맥 파 ㅎㅎ.. 먹으러 갈래?!";
  }
  else if (GangMinHee.indexOf("소맥") != -1) {
      conversation = "나 소맥을 엄청 좋아하지!!! 얼른 가자!";
  }
  else if (GangMinHee.indexOf("맞을래") != -1) {
      conversation = "(강민희의 얼굴이 빨개지고 뒷걸음질을 하였다.)";
  }
  else if (GangMinHee.indexOf("유유") != -1) {
      conversation = "저도 술 안 마시러 가는 " + name + "때문에 슬퍼용..";
  }
  else if (GangMinHee.indexOf("재수") != -1) {
      conversation = "재수?.. 난 이 학교 만족하고 있어!";
      real_old++;
  }
  else if (GangMinHee.indexOf("중국어") != -1) {
      conversation = "나 중국어 못 해..";
  }
  else if (GangMinHee.indexOf("일본어") != -1) {
      conversation = "나 일본어 못 해..";
  }
  else if (GangMinHee.indexOf("빌려줘") != -1) {
      conversation = "없어.. 미안해.. 못 빌려주겠다.";
  }
  else if (GangMinHee.indexOf("뽀뽀") != -1) {
      conversation = "무.. 무슨 소리야.... 너 왜 그래?";
  }
  else if (GangMinHee.indexOf("이어폰") != -1) {
      conversation = "이어폰 빌려달라고?.. 일단 술집 가서 생각하자 ㅎㅎ";
  }
  else if (GangMinHee.indexOf("날씨") != -1) {
      conversation = "오늘 날씨 좋대! 그러니 걱정하지 말라구!";
  }
  else if (GangMinHee.indexOf("치킨") != -1) {
      conversation = "그래! 우리 치킨 먹으러 가자!";
  }
  else if (GangMinHee.indexOf("애완") != -1) {
      conversation = "어! 나 푸들 강아지 키우고 있어! 이름은 멍이야!";
  }
  else if (GangMinHee.indexOf("밴드") != -1) {
      conversation = "?? 밴드? 나 다룰 줄 아는 악기 피아노 밖에 없는데..";
  }
  else if (GangMinHee.indexOf("나이") != -1) {
      conversation = "나.. 20살이야! 재수 안 하고 들어왔어!";
  }
  else if (GangMinHee.indexOf("수시") != -1) {
      conversation = "나 수시 다 떨어져서.. 정시로 들어왔어!";
  }
  else if (GangMinHee.indexOf("정시") != -1) {
      conversation = "나 정시로 들어왔어! 수능 공부해서.. ㅎㅎ";
  }
  else if (GangMinHee.indexOf("장학금") != -1) {
      conversation = "장학금? 그거야 뭐... 어.. 나중에 생각해도 될 것 같네.";
      real_old++;
  }
  else if (GangMinHee.indexOf("에휴") != -1) {
      conversation = "왜 한숨 셔.. 미안해..";
      real_old--;
  }
  else if (GangMinHee.indexOf("굴") != -1) {
      conversation = "나 해산물 못 먹어.. 미안해..";
  }
  else if (GangMinHee.indexOf("먹자") != -1) {
      conversation = "그래! 먹으러 가자!";
  }
  else if (GangMinHee.indexOf("이뻐") != -1) {
      conversation = "고마워... 너도 이뻐! ㅎㅎ";
  }
  else if (GangMinHee.indexOf("아침") != -1) {
      conversation = "아침까지 마시고 해장하자!";
  }
  else if (GangMinHee.indexOf("택시") != -1) {
      conversation = "여기서 택시 타고 역까지 가면 기본요금을 나올걸?... 아마도..";
  }
  else if (GangMinHee.indexOf("죽고") != -1) {
      conversation = "갑자기 무서운 소리를 하고 그래?... 내가 무슨 잘못이라도 했니?";
  }
  else if (GangMinHee.indexOf("짜증나") != -1) {
      conversation = "왜.. 왜 그래?.. 일단 진정하고!";
  }
  else if (GangMinHee.indexOf("여동생") != -1) {
      conversation = "너 여동생 있어?";
  }
  else if (GangMinHee.indexOf("컴퓨터공학부") != -1) {
      conversation = "취업 잘 된다고 해서... 사실 이 학과에 들어오게 되었어..";
      real_old++;
  }
  else if (GangMinHee.indexOf("수업") != -1) {
      conversation = "수업? 수업이 왜?";
  }
  else if (GangMinHee.indexOf("상담") != -1) {
      conversation = "그럼 이따 가서 따로 나와 상담할까?";
  }
  else if (GangMinHee.indexOf("힘들다") != -1) {
      conversation = "힘든 일 있어?... 이따가 따로 말해줘 그럼.. 도와줄게!";
      real_old++;
  }
  else if (GangMinHee.indexOf("자살") != -1) {
      conversation = "아직 새파란 20살이야.. 너무 낙담하지 말고.. 최선을 다해서 살면 괜찮아질꺼야.. 말로 밖에 못 해줘서 미안해.";
      real_old++;
  }
  else if (GangMinHee.indexOf("남소") != -1) {
      conversation = "나?... 주변에 아는 남자가 없어서..";
  }
  else if (GangMinHee.indexOf("여소") != -1) {
      conversation = "남소 원하는거 맞지?..";
  }
  else if (GangMinHee.indexOf("핸드폰") != -1) {
      conversation = "핸드폰? 나 있는데? 왜?";
  }
  else if (GangMinHee.indexOf("셀카") != -1) {
      conversation = "셀카 찍자고?... 그럴까?..";
  }
  else if (GangMinHee.indexOf("가위") != -1) {
      conversation = "가위가 필요하나?... 나 없어 미안해";
  }
  else if (GangMinHee.indexOf("어묵") != -1) {
      conversation = "곤약 어묵 먹자! 그럼.";
  }
  else if (GangMinHee.indexOf("오뎅") != -1) {
      conversation = "곤약 오뎅 먹자! 그럼";
  }
  else if (GangMinHee.indexOf("사케") != -1) {
      conversation = "나 아직 사케 못 마셔봤는데.. 제사 지낼 때 먹는 정종이랑 맛이 비슷하다고 하더라구";
  }
  else if (GangMinHee.indexOf("터미네이터") != -1) {
      conversation = "나 터미네이터 영화 재미있게 봤는데! ㅎㅎ. 어릴 때부터 부모님께서 틀어주셨어";
  }
  else if (GangMinHee.indexOf("빅데이터") != -1) {
      conversation = "빅데이터라는 것은 어떤 기업에서 처리할 수 없는 양의 데이터(PB 정도)를 의미해!";
  }
  else if (GangMinHee.indexOf("정사영") != -1) {
      conversation = "정사영은 3차원 물체를 2차원으로 차원 축소를 하는 것을 의미해!";
  }
  else if (GangMinHee.indexOf("Java") != -1) {
      conversation = "Java는 객체지향프로그램 자동화 도구야.";
      real_old++;
  }
  else if (GangMinHee.indexOf("자바") != -1) {
      conversation = "나도 자바 해야되는데.. 자바 중요하대!";
  }
  else if (GangMinHee.indexOf("C") != -1) {
      conversation = "임베디드 시스템에 중요한게 C라는데.. C언어가 매우 중요하다고 하더라..";
  }
  else if (GangMinHee.indexOf("자바스크립트") != -1) {
      conversation = "웹 프로그래밍 기초 때 자바스크립트 이야기 엄청 하던데.. 사실 아무것도 모르겠어.";
  }
  else if (GangMinHee.indexOf("술게임") != -1) {
      conversation = "술게임?... 할까 말까?";
  }
  else if (GangMinHee.indexOf("미용실") != -1) {
      conversation = "학교 앞에 영림미용실이 되게 잘 한다고 하던데? 나중에 꼭 가봐";
  }
  else if (GangMinHee.indexOf("염색") != -1) {
      conversation = "너 뭔가 탈색하고 흰 색으로 염색하면 이쁠 것 같아! ㅎㅎ";
  }
  else if (GangMinHee.indexOf("김장") != -1) {
      conversation = "김장? 벌써 김장 시기인가?";
  }
  else if (GangMinHee.indexOf("축제") != -1) {
      conversation = "학교 축제 5월에 있대! 뭐 아직 한참 남긴 했지만..";
  }
  else if (GangMinHee.indexOf("푸들") != -1) {
      conversation = "푸들 키우는데 얘가 너무 영리해서 좀 영악한 성질이 있긴 해.. ㅎ";
  }
  else if (GangMinHee.indexOf("멍이") != -1) {
      conversation = "우리 멍이 3살 암컷이야! ㅎㅎ. 너무 귀여워! 얼른 또 보고 싶다";
  }
  else if (GangMinHee.indexOf("화장실") != -1) {
      conversation = "화장실? 저 쪽인데.. 갔다 올래?";
  }
  else if (GangMinHee.indexOf("렌즈") != -1) {
      conversation = "렌즈 끼고 왔어? 나 렌즈통 있으니까 걱정하지 마!";
  }
  else if (GangMinHee.indexOf("햄버거") != -1) {
      conversation = "햄버거는 나중에 점심으로 먹자! 안주는 조금 그렇잖아?";
  }
  else if (GangMinHee.indexOf("볼펜") != -1) {
      conversation = "볼펜은 지금 필요 없지 않을까?..";
  }
  else if (GangMinHee.indexOf("디퓨져") != -1) {
      conversation = "디퓨져 향 좋지! 근데 그게 왜?";
  }
  else if (GangMinHee.indexOf("반지") != -1) {
      conversation = "나 반지 없지... 있었으면 이미 남친 있다는 의미겠지? ㅎㅎ";
      real_old++;
  }
  else if (GangMinHee.indexOf("편의점") != -1) {
      conversation = "편의점에서 술 먹자는 건 아니겠지?";
  }
  else if (GangMinHee.indexOf("컵라면") != -1) {
      conversation = "라면 좋아해? 그럼 짜빠구리 시켜먹을까?";
  }
  else if (GangMinHee.indexOf("마셔") != -1) {
      conversation = "그럼 마실까?";
      real_old--;
  }
  else if (GangMinHee.indexOf("번데기") != -1) {
      conversation = "너.. 아저씨 취향인거 같아... 번데기 나는 못 먹겠어 미안해..";
  }
  else if (GangMinHee.indexOf("청국장") != -1) {
      conversation = "??... 청국장?..";
  }
  else if (GangMinHee.indexOf("김치찌개") != -1) {
      conversation = "찌개 종류도 좋지! 오래 마실 수 있으니까!";
  }
  else if (GangMinHee.indexOf("부추전") != -1) {
      conversation = "그럼 부추전이랑 먹을까? 토속적이네 ㅎ";
  }
  else if (GangMinHee.indexOf("김치전") != -1) {
      conversation = "김치전 좋지! 먹자!";
  }
  else if (GangMinHee.indexOf("최선") != -1) {
      conversation = "최선을 다하면 안 이루어질 것이 없지! 그리고 나도 너에게 먹자고 최선을 다하고 있고 ㅎ";
  }
  else if (GangMinHee.indexOf("냉장고") != -1) {
      conversation = "냉장고? 갑자기?";
  }
  else if (GangMinHee.indexOf("슬러쉬") != -1) {
      conversation = "나도 슬러쉬 먹고 싶다. 후식으로 먹자!";
  }
  else if (GangMinHee.indexOf("나무") != -1) {
      conversation = "나무? 갑자기 왠 나무?";
  }
  else if (GangMinHee.indexOf("근육") != -1) {
      conversation = "나 근육 하나도 없어.. PT라도 받아볼까?";
      real_old++;
  }
  else if (GangMinHee.indexOf("헬스") != -1) {
      conversation = "나도 헬스 다니고 싶다... 살 좀 쪄보여?";
  }
  else if (GangMinHee.indexOf("긴 생머리") != -1) {
      conversation = "너 긴 생머리로 기르면 이쁠 것 같아!";
  }
  else if (GangMinHee.indexOf("싸대기") != -1) {
      conversation = "싸대기??..";
      real_old--;
  }
  else if (GangMinHee.indexOf("가슴") != -1) {
      conversation = "가슴이 왜?";
      real_old--;
  }
  else if (GangMinHee.indexOf("먼지") != -1) {
      conversation = "오늘 미세먼지가 많다고 하더라..";
  }
  else if (GangMinHee.indexOf("개념없네") != -1) {
      conversation = "뭐? 너무한거 아니야?";
  }
  else if (GangMinHee.indexOf("배달") != -1) {
      conversation = "배달 시켜먹자고? 그건 좀..";
  }
  else if (GangMinHee.indexOf("충전기") != -1) {
      conversation = "배터리 충전기 필요해? 나 있는데 빌려줄까?";
  }
  else if (GangMinHee.indexOf("빨라") != -1) {
      conversation = "뭐가? 빨라?";
  }
  else if (GangMinHee.indexOf("네?") != -1) {
      conversation = "동갑인데 말 놓아도 돼!";
  }
  else if (GangMinHee.indexOf("만지지 마") != -1) {
      conversation = "뭘 했다고 그래?... 안 만졌는데?";
      real_old--;
  }
  else if (GangMinHee.indexOf("말벌") != -1) {
      conversation = "말벌 있어? 어디?!! 무서워!...";
  }
  else if (GangMinHee.indexOf("개미") != -1) {
      conversation = "개미 있어?.. 어디에?";
      real_old--;
  }
  else if (GangMinHee.indexOf("거미") != -1) {
      conversation = "거미?!! 어디??...";
      real_old--;
  }
  else if (GangMinHee.indexOf("취한다") != -1) {
      conversation = "벌써 취한다고?";
  }
  else if (GangMinHee.indexOf("양말") != -1) {
      conversation = "나 양말 신고 왔는데?.. 내일 신을 것도 내 자취방에 있으니까 걱정 마 ㅎㅎ";
  }
  else if (GangMinHee.indexOf("민증") != -1) {
      conversation = "민증 두고 왔어?... 설마?!..";
  }
  else if (GangMinHee.indexOf("경찰") != -1) {
      conversation = "에이 설마 경찰서 갈 정도까지 마시겠어?..";
  }
  else if (GangMinHee.indexOf("소녀시대") != -1) {
      conversation = "소녀시대 노래 좋지!.. 근데 나는 그 세대가 아니여서 잘 몰라..";
  }
  else if (GangMinHee.indexOf("빅뱅") != -1) {
      conversation = "빅뱅 노래 좋지!..";
  }
  else if (GangMinHee.indexOf("카라") != -1) {
      conversation = "프리티 걸 알아!";
  }
  else if (GangMinHee.indexOf("시간 없어") != -1) {
      conversation = "시간 없다고?... 갑자기?";
  }
  else if (GangMinHee.indexOf("돈 빌려줘") != -1) {
      conversation = "나도 거지야..";
  }
  else if (GangMinHee.indexOf("2차") != -1) {
      conversation = "2차도 가자!";
  }
  else if (GangMinHee.indexOf("코로나") != -1) {
      conversation = "코로나 맥주? 그거는 여기 없는데?";
  }
  else if (GangMinHee.indexOf("주사") != -1) {
      conversation = "너 주사 맞아?";
  }
  else if (GangMinHee.indexOf("섹스") != -1) {
      conversation = "더러워..";
  }
  else if (GangMinHee.indexOf("몸살") != -1) {
      conversation = "몸살 걸렸을 때 술 마시면 체온 올라가서 괜찮아져! ㅎㅎ.";
  }
  else if (GangMinHee.indexOf("외장하드") != -1) {
      conversation = "외장하드? 나 집에 없는데?..";
  }
  else if (GangMinHee.indexOf("보조배터리") != -1) {
      conversation = "나 보조배터리 있어! 빌려줄까?";
  }
  else if (GangMinHee.indexOf("결혼하자") != -1) {
      conversation = "???? 결혼?... 너무 급작스러운데?";
      real_old++;
  }
  else if (GangMinHee.indexOf("미래가 없다") != -1) {
      conversation = "왜 이리 낙관적이야?... 넌 할 수 있어 화이팅!";
  }
  else if (GangMinHee.indexOf("지구멸망") != -1) {
      conversation = "지구온난화가 심해지긴 하지...";
  }
  else if (GangMinHee.indexOf("미분") != -1) {
      conversation = "미분? 한 차원을 낮추는데 사용하는 것이 미분 아니야?";
  }
  else if (GangMinHee.indexOf("적분") != -1) {
      conversation = "적분?.. 이건 한 차원 늘려주는 건가? 모르겠다..";
  }
  else if (GangMinHee.indexOf("테일러") != -1) {
      conversation = "테일러 급수는... 음.. 세계에서 가장 아름다운 수 밖에 몰라..";
  }
  else if (GangMinHee.indexOf("순환") != -1) {
      conversation = "얼마 전에 C에서 순환에 대해서 배운 건 기억 나!";
  }
  else if (GangMinHee.indexOf("김치") != -1) {
      conversation = "김치?.. 안주로 김치만 먹는 거는 좀..";
  }
  else if (GangMinHee.indexOf("만두") != -1) {
      conversation = "만두 먹고 싶어? 그럼 만두 먹을까?";
  }
  else if (GangMinHee.indexOf("싫어") != -1) {
      conversation = "왜.. 그래도 재미있을텐데 가자!!";
  }
  else if (GangMinHee.indexOf("코딩") != -1) {
      conversation = "코딩 어렵지... 나중에 같이 과제하자!";
  }
  else if (GangMinHee.indexOf("라면") != -1) {
      conversation = "라면은 당연히 해장으로 먹는거지!";
  }
  else if (GangMinHee.indexOf("아르바이트") != -1) {
      conversation = "저번에도 아르바이트 때문이라 했잖아?.. ㅠㅠ..";
  }
  else if (GangMinHee.indexOf("내가 왜") != -1) {
      conversation = "너무한거 아니야?.. 그래도 가자!.. 응?";
  }
  else if (GangMinHee.indexOf("빡쳐") != -1) {
      conversation = "화나게 했니?.. 미안해..";
  }
  else if (GangMinHee.indexOf("핸드크림") != -1) {
      conversation = "손 많이 거칠어? 핸드크림 빌려줄까?";
  }
  else if (GangMinHee.indexOf("자판기") != -1) {
      conversation = "자판기?? 탄산 음료나 주스는 술 마시면서 먹자!";
  }
  else if (GangMinHee.indexOf("베개") != -1) {
      conversation = "??? 나 라텍스 베개를 쓰고 있는데 거북목에 좋다고 하더라고!";
  }
  else if (GangMinHee.indexOf("축구") != -1) {
      conversation = "나 운동 잘 못하는데... 너는 잘 하니?";
  }
  else if (GangMinHee.indexOf("운동") != -1) {
      conversation = "운동? 나 운동 잘 못하는데...";
  }
  else if (GangMinHee.indexOf("눈썹") != -1) {
      conversation = "나 눈썹? 화장하고 왔는데";
  }
  else if (GangMinHee.indexOf("화장") != -1) {
      conversation = "섀도우 크림 바르고 왔는데 어때?";
      real_old++;
  }
  else if (GangMinHee.indexOf("회사") != -1) {
      conversation = "나 아직 아르바이트 하는데?";
}
else if (GangMinHee.indexOf("통근") != -1) {
      conversation = "어! 나 통근해서 회사 다니고 있어";
}
else if (GangMinHee.indexOf("마우스") != -1) {
      conversation = "마우스? 과제하려고?";
}
else if (GangMinHee.indexOf("데이터베이스") != -1) {
      conversation = "데이터들의 집합을 의미해";
}
else if (GangMinHee.indexOf("교육") != -1) {
      conversation = "교육? 무슨 교육?";
}
else if (GangMinHee.indexOf("기업") != -1) {
      conversation = "기업? 아직 1학년인데?";
      real_old++;
}
else if (GangMinHee.indexOf("진로") != -1) {
      conversation = "진로 소주? 아니면 앞으로의 미래를 이야기 하는건가?";
}
else if (GangMinHee.indexOf("충전기") != -1) {
      conversation = "충전기 나한테 있어! 이따가 빌려줄게";
}
else if (GangMinHee.indexOf("이메일") != -1) {
      conversation = "이메일? 내 이메일은 minhee6521@net.com 이야. 근데 왜?";
}
else if (GangMinHee.indexOf("죽는다는 것") != -1) {
      conversation = "갑자기 진지한 이야기를 하네....";
}
else if (GangMinHee.indexOf("초콜릿") != -1) {
      conversation = "초콜릿 달고 맛있지!..";
}
else if (GangMinHee.indexOf("이야기") != -1) {
      conversation = "응응! 술 마시면서 이야기 하자";
      real_old++;
}
else if (GangMinHee.indexOf("빅데이터") != -1) {
      conversation = "빅데이터라는 것은 회사에서도 처리할 수 없는 양의 데이터를 의미해";
      real_old++;
}
else if (GangMinHee.indexOf("노래방") != -1) {
      conversation = "노래방 이따 가자!";
}
else if (GangMinHee.indexOf("교통카드") != -1) {
      conversation = "교통카드? 충전해야하니?";
}
else if (GangMinHee.indexOf("이리와") != -1) {
      conversation = "이리 오라고?.... 지금 너 앞에 있는데?";
      real_old++;
}
else if (GangMinHee.indexOf("OS") != -1) {
      conversation = "오퍼레이팅 시스템을 의미하는 운영체제는 하드웨어와 소프트웨어 사이에 존재하는 것이야";
      real_old++;
}
else if (GangMinHee.indexOf("다이어트") != -1) {
      conversation = "다이어트하라고? 그럼 안주 조금만 먹으면 되지!";
}
else if (GangMinHee.indexOf("dir") != -1) {
      conversation = "<강민희> [말하기]";
}
else if (GangMinHee.indexOf("말하기") != -1) {
      conversation = "난 컴퓨터가 아니야 ㅎ";
}
else if (GangMinHee.indexOf("햇빛") != -1) {
      conversation = "햇빛 너무 쨍쨍하지? 썬크림은 바르고 다녀야 겠어!";
}
else if (GangMinHee.indexOf("썬크림") != -1) {
      conversation = "썬크림 필요해? 빌려줄까?";
      real_old++;
}
else if (GangMinHee.indexOf("머리끈") != -1) {
      conversation = "머리끈 필요해? 나 두 개 있는데 빌려줄까?";
}
else if (GangMinHee.indexOf("벡터") != -1) {
      conversation = "스칼라는 크기만 나타낸다면 벡터는 크기와 방향을 나타내는 것이야";
}
else if (GangMinHee.indexOf("애자일") != -1) {
      conversation = "애자일 방법론이라는 것은 문서에 너무 열중하여 프로젝트를 하다보면 걸리는 시간이 많아져서 프로토타입을 출시하고 계속 보완해나가는 방법을 나타내.";
}
else if (GangMinHee.indexOf("뒷담") != -1) {
      conversation = "뒷담? 그런거 안 해... 불만인거 있으면 바로 말하니까";
      real_old++;
}
else if (GangMinHee.indexOf("불만있어") != -1) {
      conversation = "무섭게 왜 그래?...";
      real_old--;
}
else if (GangMinHee.indexOf("들어줘") != -1) {
      conversation = "가방을 들어달라고?..... 나도 들고 있는게 있어서.. 미안해";
}
else if (GangMinHee.indexOf("문자") != -1) {
      conversation = "사용하는 메신저로만 연락하는데..";
}
else if (GangMinHee.indexOf("뛰어") != -1) {
      conversation = "갑자기 뛰라고? 힘든데..";
}
else if (GangMinHee.indexOf("사귀자") != -1) {
      conversation = "그래. 우리 사귀자 ^^. 그러니까 술 마시자!";
}
else if (GangMinHee.indexOf("콘센트") != -1) {
      conversation = "핸드폰 충전은 나 충전기도 있으니까 할 수 있을거야!";
}
else if (GangMinHee.indexOf("말티즈") != -1) {
      conversation = "어! 나 말티즈 키워!";
}
else if (GangMinHee.indexOf("화재") != -1) {
      conversation = "어디 불났어?";
      real_old--;
}
else if (GangMinHee.indexOf("수능") != -1) {
      conversation = "수능 끝나고 학교 밖을 나올 때가 생각난다.. 진짜 짜릿했는데";
      real_old++;
}
else if (GangMinHee.indexOf("자연로그") != -1) {
      conversation = "자연로그? e가 밑인 로그를 의미하는거 아니야?";
      real_old++;
}
else if (GangMinHee.indexOf("힘내") != -1) {
      conversation = "고마워. 나 힘든 거 없는데";
      real_old++;
}
else if (GangMinHee.indexOf("행복해") != -1) {
      conversation = "나도 너를 봐서 행복해 ㅎㅎ!";
}
else if (GangMinHee.indexOf("게임기") != -1) {
      conversation = "너 게임 좋아해? 나는 게임을 안 해서.. 미안";
}
else if (GangMinHee.indexOf("프로젝트") != -1) {
      conversation = "프로젝트 과제 학기 말에 내주신다더라.. 같이 하자!";
}
else if (GangMinHee.indexOf("자동차") != -1) {
      conversation = "뒤에 차 와? 안 오는데?";
}
else if (GangMinHee.indexOf("베이커리") != -1) {
      conversation = "학교 주변에 베이커리 있는데 맛있어서 점심 때 가끔 먹어";
}
else if (GangMinHee.indexOf("달리기") != -1) {
      conversation = "나 달리기 잘 못해!";
}
else if (GangMinHee.indexOf("퇴근시간") != -1) {
      conversation = "퇴근시간에 사람 엄청 많지...";
      real_old++;
}
else if (GangMinHee.indexOf("밤하늘") != -1) {
      conversation = "밤하늘 보면 이쁘지!! 오늘 밤에는 별 볼 시간이 있으려나?";
}
else if (GangMinHee.indexOf("군대") != -1) {
      conversation = "너 입대해?? 많이 힘들겠다..";
}
else if (GangMinHee.indexOf("와이파이") != -1) {
      conversation = "거기도 와이파이 있으니까 걱정 하지마!";
}
else if (GangMinHee.indexOf("LTE") != -1) {
      conversation = "나 데이터 다 써서 LTE 안 되고 3G 밖에 안 돼...";
}
else if (GangMinHee.indexOf("치마") != -1) {
      conversation = "나 치마는 별로 안 좋아해서... 청바지가 좋아!";
}
else if (GangMinHee.indexOf("출근") != -1) {
      conversation = "출근이 아니고 통학이겠지.";
}
else if (GangMinHee.indexOf("공원") != -1) {
      conversation = "공원은 나중에 가고 얼른 같이 가자!";
}
else if (GangMinHee.indexOf("전시회") != -1) {
      conversation = "전시회 하는 곳이 있어?";
}
else if (GangMinHee.indexOf("자바스크립트") != -1) {
      conversation = "자바스크립트도 객체 지향 프로그래밍이야";
}
else if (GangMinHee.indexOf("가족") != -1) {
      conversation = "나 언니 한 명 있어!";
}
else if (GangMinHee.indexOf("포멧") != -1) {
      conversation = "컴퓨터 포멧 해야해?!";
}
else if (GangMinHee.indexOf("포맷") != -1) {
      conversation = "컴퓨터 포맷 해야해?!";
}
else if (GangMinHee.indexOf("영어") != -1) {
      conversation = "나 영어 잘 못하는데..";
}
else if (GangMinHee.indexOf("교양") != -1) {
      conversation = "수업 중에 요리 수업도 있더라?! 대학교에 다양한 수업이 있는지 몰랐어!";
}
else if (GangMinHee.indexOf("축구") != -1) {
      conversation = "나 운동 잘 못해서... 축구는 좀..";
}
else if (GangMinHee.indexOf("일본어") != -1) {
      conversation = "일본어 할 줄 몰라.. 미안";
}
else if (GangMinHee.indexOf("러시아어") != -1) {
      conversation = "러시아어?... 보드카 밖에 몰라.";
}
else if (GangMinHee.indexOf("정치질") != -1) {
      conversation = "나는 그런거 안 해. 그래도 다 같은 사람인데..";
}
else if (GangMinHee.indexOf("비누") != -1) {
      conversation = "나 샤워할 때 비누 안 쓰고 바디워시 쓰는데 갑자기 웬 비누?";
}
else if (GangMinHee.indexOf("진동모드") != -1) {
      conversation = "나는 수업할 때 진동모드 안 써. 반드시 무음!";
}
else if (GangMinHee.indexOf("에티켓") != -1) {
      conversation = "나 에티켓 준수하는 편이라 생각해";
}
else if (GangMinHee.indexOf("통조림") != -1) {
      conversation = "나 술 마실 때 황도 먹고 싶으면 가끔 사서 먹어";
}
else if (GangMinHee.indexOf("속옷") != -1) {
      conversation = "??? 부끄럽게 무슨 말이야.";
}
else if (GangMinHee.indexOf("뽀얗다") != -1) {
      conversation = "고마워. 나 피부 뽀얀 편이야";
}
else if (GangMinHee.indexOf("nbsp") != -1) {
      conversation = "nbsp는 html5에서 빈 칸을 띄우게 하고 싶을 때 사용하는 것이야";
}
else if (GangMinHee.indexOf("손톱") != -1) {
      conversation = "매니큐어는 별로 안 좋아해서.. 아니면 손톱 자르라는 건가?";
}
else if (GangMinHee.indexOf("염색") != -1) {
      conversation = "머릿결이 별로 안 좋아서 염색은 못 할 거 같아..";
}
else if (GangMinHee.indexOf("반지") != -1) {
      conversation = "나 애인 없어서 반지도 없어";
}
else if (GangMinHee.indexOf("자가용") != -1) {
      conversation = "나도 자가용 있으면 좋겠다... 근데 아직 부모님이 운전하지 말래..";
}
else if (GangMinHee.indexOf("보험") != -1) {
      conversation = "보험 가입하라는 거는 아니겠지?";
      real_old--;
}
	else conversation = "??";
	
	$('.conversation').before(name + ' : ' + GangMinHee + '<br/> 강민희 : ' + conversation + '<br/><br/>');
	$('.talk').html('<br/><br/>' + name + ' : <input type=\"text\" id=\"GangMinHee\" placeholder=\"강민희에게 뭐라고 할까?\"><br/><br/><a href=\"#\" rel=\"external\" onclick=\"find();\">작성완료!!</a><br/>');

	localStorage.setItem('real_old', real_old);
}
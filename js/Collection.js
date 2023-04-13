var name = localStorage.getItem('name');

var GangMinHee = localStorage.getItem('GangMinHee');
var FourMuri = localStorage.getItem('FourMuri');
var Professor = localStorage.getItem('Professor');
var JoYoonWoo = localStorage.getItem('JoYoonWoo');
var KimSeoHee = localStorage.getItem('KimSeoHee');
var Test_Paper = localStorage.getItem('Test_Paper');
var HanX_Master = localStorage.getItem('HanX_Master');
var LeeMinSong = localStorage.getItem('LeeMinSong');
var YoonJiHwan = localStorage.getItem('YoonJiHwan');
var SeoMinJeung = localStorage.getItem('SeoMinJeung');

$(document).ready(function() {
	if (GangMinHee == 1) {
		$('.GangMinHee').html('<img src="../image/GangMinHee.png" height="150" width="150"><p style="font-size:15px;">강민희</p><p style="font-size:15px;">나이 : 20, 성별 : 여자</p><p style="font-size:15px;">웹 프로그래밍 수업을 듣고 <br/>집으로 귀가하는 도중에 <br/>먼저 말을 걸어주었다.<br/>학교에서 제일 친한 친구이다.</p>');	
	}
	else {
		$('.GangMinHee').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (FourMuri == 1) {
		$('.FourMuri').html('<img src="../image/Muri.jpg" height="150" width="150"><p style="font-size:15px;">컴퓨터공학부 4인방</p><p style="font-size:15px;">평균 나이 : 20, 성별 : 여자</p><p style="font-size:15px;">강민희와 함께 다니는 과 친구들.<br/>신입생이여서 모두 술자리 가지는 것을<br/>좋아한다. (막걸리 좋아함)</p>');	
	}
	else {
		$('.FourMuri').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (Professor == 1) {
		$('.Professor').html('<img src="../image/Professor.png" height="150" width="150"><p style="font-size:15px;">유현철 교수님</p><p style="font-size:15px;">나이 : 47, 성별 : 남자</p><p style="font-size:15px;">웹 프로그래밍 교수님<br/>인자하시고 학생들을 배려하시는<br/>교수님이시다.<br/>항상 유현철 교수님의 강의는 <br/>인기가 많아 수강신청이 어렵다고 한다.</p>');	
	}
	else {
		$('.Professor').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (JoYoonWoo == 1) {
		$('.JoYoonWoo').html('<img src="../image/JoYoonWoo.png" height="150" width="150"><p style="font-size:15px;">조윤우 선배</p><p style="font-size:15px;">나이 : 23, 성별 : 남자</p><p style="font-size:15px;">컴퓨터공학부에서 학생회를 맡으신 선배이다.<br/>술자리를 좋아하고 약간 꼰대기질이 있다.<br/>그리하여 싫어하는 사람도 있는 것 같다.</p>');	
	}
	else {
		$('.JoYoonWoo').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (KimSeoHee == 1) {
		$('.KimSeoHee').html('<img src="../image/KimSeoHee.png" height="150" width="150"><p style="font-size:15px;">김서희 선배</p><p style="font-size:15px;">나이 : 22, 성별 : 여자</p><p style="font-size:15px;">학생회에 들어가신 상태이고 학생회장을<br/>출마하실 생각이신 것 같다.<br/>많은 사람들에게 친절하셔서<br/>모든 사람들에게 인기가 많은 것 같다.</p>');	
	}
	else {
		$('.KimSeoHee').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (Test_Paper == 1) {
		$('.Test_Paper').html('<img src="../image/Test_Paper.png" height="150" width="150"><p style="font-size:15px;">시험지</p><p style="font-size:15px;">나이 : X, 성별 : X</p><p style="font-size:15px;">웹 프로그래밍의 시험지이다.<br/>너무 긴장을 하여서 풀었는지<br/>수정테이프로 수정된 부분이 많다.<br/>이 시험지를 버리지 않고 <br/>가방에 둔 채 다니고 있다.</p>');	
	}
	else {
		$('.Test_Paper').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (HanX_Master == 1) {
		$('.HanX_Master').html('<img src="../image/HanX_Master.png" height="150" width="150"><p style="font-size:15px;">한X포차 사장님</p><p style="font-size:15px;">나이 : 42, 성별 : 남자</p><p style="font-size:15px;">한신 포차 사장님이시다.<br/>수석 셰프까지 하시고 퇴직하여<br/>한신 포차를 하고 계신다.<br/>일에 대해서는 깐깐하시지만<br/>아르바이트 생들에게 잘 해주신다.</p>');	
	}
	else {
		$('.HanX_Master').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (LeeMinSong == 1) {
		$('.LeeMinSong').html('<img src="../image/LeeMinSong.png" height="150" width="150"><p style="font-size:15px;">이민성 오빠</p><p style="font-size:15px;">나이 : 24, 성별 : 남자</p><p style="font-size:15px;">한신 포차에서 다른 타임에 일하는 오빠.<br/>나를 만나고 나서부터 사장님이<br/>둘이 이어주신다고 맞는 타임으로 옮겨주셨다...<br/>공부를 잘 하여 성적이 좋은 것으로<br/>알고 있다.</p>');	
	}
	else {
		$('.LeeMinSong').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (YoonJiHwan == 1) {
		$('.YoonJiHwan').html('<img src="../image/YoonJiHwan.png" height="150" width="150"><p style="font-size:15px;">윤지환 오빠</p><p style="font-size:15px;">나이 : 23, 성별 : 남자</p><p style="font-size:15px;">윤우 선배의 같은 과 친구.<br/>성적도 꽤 좋으시고 학생회에서 활동하신다.<br/>근데 약간 입이 싸서 비밀을 못 지켜<br/>트러블이 있는 사람도 있는 것으로<br/>알고 있다.</p>');	
	}
	else {
		$('.YoonJiHwan').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}
	
	if (SeoMinJeung == 1) {
		$('.SeoMinJeung').html('<img src="../image/SeoMinJeung.png" height="150" width="150"><p style="font-size:15px;">서민정 선배</p><p style="font-size:15px;">나이 : 22, 성별 : 여자</p><p style="font-size:15px;">컴퓨터공학부 학생회 선배.<br/>술자리를 많이 좋아하시지는 않아<br/>가끔 술자리에 나오신다.<br/>윤지환 선배의 소문으로는<br/>짝사랑하는 사람이 있다는데?..</p>');	
	}
	else {
		$('.SeoMinJeung').html('<img src="../image/Unknown.jpg" height="150" width="150"><p style="font-size:15px;">아직 만난 적 없는 사람</p>');	
	}

	if (GangMinHee == 1 && FourMuri  == 1 && Professor  == 1 && JoYoonWoo == 1 && KimSeoHee == 1 && Test_Paper == 1 && HanX_Master == 1 && LeeMinSong == 1 && YoonJiHwan == 1 && SeoMinJeung == 1) {
		var already = localStorage.getItem('requset_collection');

		if (already != 1) {
			var ok_2 = confirm("모든 컬렉션을 획득하였습니다! 보상을 수령하시겠습니까?");

			if (ok_2 == true) {
				money = localStorage.getItem('money');
				money = Number(money);
				money += 1000000;
				localStorage.setItem('money', money);
				alert("수령되었습니다. 소지금 + 1000000원");
				localStorage.setItem('requset_collection', 1);
			}
		}
	}
});

function clear_collection() {
	var ok = confirm("컬렉션 완성되면 보상이 주어지며 초기화 할 경우 다시 모든 컬렉션을 모아야 합니다! 그래도 초기화 하시겠습니까? (초기화 후 메인 화면 이동 !!)");
	
	if (ok == true) {
localStorage.removeItem('GangMinHee');
localStorage.removeItem('FourMuri');
localStorage.removeItem('Professor');
localStorage.removeItem('JoYoonWoo');
localStorage.removeItem('KimSeoHee');
localStorage.removeItem('Test_Paper');
localStorage.removeItem('HanX_Master');
localStorage.removeItem('LeeMinSong');
localStorage.removeItem('YoonJiHwan');
localStorage.removeItem('SeoMinJeung');

location.href = "../index.html";
	}
}

///////////// 캐릭터 표시 시스템 ////////////

var face = localStorage.getItem('face');
var name = localStorage.getItem('name');
var money = localStorage.getItem('money');
var old = localStorage.getItem('old');

var s = location.pathname;
localStorage.setItem('path_save', s);

 function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    
 function onDeviceReady() {
        document.addEventListener("backbutton", onBackKeyDown, false);
    }
    
    function onBackKeyDown() {
    	var ok = confirm("게임을 종료합니다.");
    	if (ok == true) {
    		navigator.app.exitApp();
    	}
    }

$(document).ready(function() {
	if (face == 1) {
		$('.face_setting').html('<img src="../image/1.png" alt="주인공" height="80" width="80" style="float:left"/>');
	}
	else if (face == 2) {
		$('.face_setting').html('<img src="../image/2.png" alt="주인공" height="80" width="80" style="float:left"/>');
	}
	else if (face == 3) {
		$('.face_setting').html('<img src="../image/3.png" alt="주인공" height="80" width="80" style="float:left"/>');
	}
	else {
		$('.face_setting').html('<img src="../image/4.png" alt="주인공" height="80" width="80" style="float:left"/>');
	}
	
	$('.char_name').html('<div>&nbsp;&nbsp;&nbsp;'+ name + '</div>');
	$('.char_name').css({'font-size':'13px'});
	
	$('.money').html('<div>&nbsp;&nbsp;&nbsp;'+ money + '원</div>');
	if (money <= 10000) {
		$('.money').css({'font-size':'13px', 'color':'red'});
	}
	else $('.money').css({'font-size':'13px', 'color':'blue'});

	$('.old').html('<div>&nbsp;&nbsp;&nbsp;'+ old + '살</div>');
	$('.old').css({'font-size':'13px'});
	
	if (money <= 0 && money != null) {
		location.href = "finish.html";
	}
});

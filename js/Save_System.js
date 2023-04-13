var convert = new String(); //변형된 값

function convert_file(value) {
	//////// 시스템 변수 //////
	var old = localStorage.getItem('old');
	var real_old = localStorage.getItem('real_old');
	var face = localStorage.getItem('face');
	var one = localStorage.getItem('one');
	var four = localStorage.getItem('four');
	var six = localStorage.getItem('six');
	
	if (old == null) {
		old = "0";
	}
	if (real_old == null) {
		real_old = "0";
	}
	if (face == null) {
		face = "0";
	}
	if (one == null) {
		one = "0";
	}
	if (four == null) {
		four = "0";
	}
	if (six == null) {
		six = "0";
	}
	
	convert = old + real_old + face + one + four + six;
	
	if (value == 1) {
		localStorage.setItem('convert1', convert);
		var path = localStorage.getItem('path_save');
		localStorage.setItem('convert1_path', path);
		var name = localStorage.getItem('name');
		localStorage.setItem('convert1_name', name);
	}
	else if (value == 2) {
		localStorage.setItem('convert2', convert);
		var path = localStorage.getItem('path_save');
		localStorage.setItem('convert2_path', path);
		var name = localStorage.getItem('name');
		localStorage.setItem('convert2_name', name);
	}
	else if (value == 3) {
		localStorage.setItem('convert3', convert);
		var path = localStorage.getItem('path_save');
		localStorage.setItem('convert3_path', path);
		var name = localStorage.getItem('name');
		localStorage.setItem('convert3_name', name);
	}
	else if (value == 4) {
		localStorage.setItem('convert4', convert);
		var path = localStorage.getItem('path_save');
		localStorage.setItem('convert4_path', path);
		var name = localStorage.getItem('name');
		localStorage.setItem('convert4_name', name);
	}
}

function decomposition_file(value) {
	if (value == 1) {
		convert = localStorage.getItem('convert1');
	} 
	else if (value == 2) {
		convert = localStorage.getItem('convert2');
	}
	else if (value == 3) {
		convert = localStorage.getItem('convert3');
	}
	else if (value == 4) {
		convert = localStorage.getItem('convert4');
	}
	
	var old = convert.charAt(0);
	var real_old = convert.charAt(1);
	var face = convert.charAt(2);
	var one = convert.charAt(3);
	var four = convert.charAt(4);
	var six = convert.charAt(5);
	
	localStorage.setItem('old', old);
	localStorage.setItem('real_old', real_old);
	localStorage.setItem('face', face);
	localStorage.setItem('one', one);
	localStorage.setItem('four', four);
	localStorage.setItem('six', six);
}

function confirm_file() {
				var convert1 = localStorage.getItem('convert1');
				var convert2 = localStorage.getItem('convert2');
				var convert3 = localStorage.getItem('convert3');
				var convert4 = localStorage.getItem('convert4');
				
				if (convert1 == null) {
					$('.file1').html('<a onclick="file_save(1);">파일이 존재하지 않습니다.</a>');
					$('.file1').css({'border':'3px solid black', 'padding':'30px'});
				}
				else if (convert1 != null) {
					$('.file1').html('<a onclick="file_open(1);">파일 1</a>');
					$('.file1').css({'border':'4px solid black', 'padding':'30px'});
				}
				if (convert2 == null) {
					$('.file2').html('<a onclick="file_save(2);">파일이 존재하지 않습니다.</a>');
					$('.file2').css({'border':'3px solid black', 'padding':'30px'});
				}
				else if (convert2 != null) {
					$('.file2').html('<a onclick="file_open(2);">파일 2</a>');
					$('.file2').css({'border':'4px solid black', 'padding':'30px'});
				}
				if (convert3 == null) {
					$('.file3').html('<a onclick="file_save(3);">파일이 존재하지 않습니다.</a>');
					$('.file3').css({'border':'3px solid black', 'padding':'30px'});
				}
				else if (convert3 != null) {
					$('.file3').html('<a onclick="file_open(3);">파일 3</a>');
					$('.file3').css({'border':'4px solid black', 'padding':'30px'});
				}
				if (convert4 == null) {
					$('.file4').html('<a onclick="file_save(4);">파일이 존재하지 않습니다.</a>');
					$('.file4').css({'border':'3px solid black', 'padding':'30px'});
				}
				else if (convert4 != null) {
					$('.file4').html('<a onclick="file_open(4);">파일 4</a>');
					$('.file4').css({'border':'4px solid black', 'padding':'30px'});
				}
}
		
function file_open(value) {
				var ok = confirm("파일을 엽니다.");
				if (ok == true) {
					clear_file();
					decomposition_file(value);
					
					if (value == 1) {
						var path = localStorage.getItem('convert1_path');
						location.href = path;	
					}
					else if (value == 2) {
						var path = localStorage.getItem('convert2_path');
						location.href = path;
					}
					else if (value == 3) {
						var path = localStorage.getItem('convert3_path');
						location.href = path;	
					}
					else if (value == 4) {
						var path = localStorage.getItem('convert4_path');
						location.href = path;
					}
				}
}

function clear_file() {
	localStorage.removeItem('old');
	localStorage.removeItem('real_old');
	localStorage.removeItem('face');
	localStorage.removeItem('one');
	localStorage.removeItem('four');
	localStorage.removeItem('six');
}
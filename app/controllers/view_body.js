var soryin = require('soryin');

$.viewFontSize = Alloy.createController('view_fontSize');


var a_num = 70;

var a = 1;

function change_a() {
	$.labProcess.text = (a + "%");
	if (a < a_num) {
		a++;
	}
}

var descs = [ {
	'icon' : "0xf2b5",
	'title' : "眼睛",
	'subView' : $.viewFontSize.getView()
} ];

var options = {
	'descs' : descs,
	'table' : $.table,
	'bgColor' : Alloy.Globals.soryinBgColor,
	'selColor' : Alloy.Globals.soryinOrangeColor
};

soryin.ckTableView(options);
$.init = function() {
	
	$.progressView.width='1%';
	$.progressView.animate({
		width : '70%',
		duration : 800
	});
	var crear_a = setInterval(change_a, (3000 / a_num));

}
var soryin = require('soryin');
$.timeFormat = Alloy.createController('time_format');
$.viewEmoji = Alloy.createController('view_emoji');
var a_num = 90;

var a = 1;

function change_a() {
	$.labProcess.text = (a + "%");
	if (a < a_num) {
		a++;
	}
}

var descs = [ {
	'icon' : "0xe037",
	'title' : "时间显示",
	'subView' : $.timeFormat.getView()
}, {
	'icon' : '0xe038',
	'title' : "绘文字",
	'subView' : $.viewEmoji.getView()
} ];

var options = {
	'descs' : descs,
	'table' : $.table,
	'bgColor' : Alloy.Globals.soryinBgColor,
	'selColor' : Alloy.Globals.soryinGreenColor
};

soryin.ckTableView(options);

$.init = function() {
	$.progressView.width='1%';
	$.progressView.animate({
		width : '90%',
		duration : 800
	});
	var crear_a = setInterval(change_a, (3000 / a_num));

}

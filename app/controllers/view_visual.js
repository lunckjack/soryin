var entypo = require('ti.entypo');
// 默认颜色
$.tab1.backgroundColor = "#494949";
$.tab2.backgroundColor = "#fff";
$.tab1.width = Ti.Platform.displayCaps.platformWidth / 2;
$.tab2.width = Ti.Platform.displayCaps.platformWidth / 2;
$.tab1.height = '50dp';
$.tab2.height = '50dp';
$.l2.text = entypo.fromCodePoint("0xe074");
$.l4.text = entypo.fromCodePoint("0xe073");
$.l2.color = "#fff";
$.l1.color = "#fff";

$.color = Alloy.createController('view_color');
$.mark = Alloy.createController('view_mark');
$.contentView.add($.color.getView());
$.tab1.addEventListener('click', function() {
	$.tab1.backgroundColor = "#494949";
	$.tab2.backgroundColor = "#fff";
	$.l1.color = "#fff";
	$.l2.color = "#fff";
	$.l3.color = "#7F8C8D";
	$.l4.color = "#7F8C8D";

	$.contentView.removeAllChildren();
	$.contentView.add($.color.getView());
});
$.tab2.addEventListener('click', function() {
	$.tab1.backgroundColor = "#fff";
	$.tab2.backgroundColor = "#494949";

	$.l1.color = "#7F8C8D";
	$.l2.color = "#7F8C8D";
	$.l3.color = "#fff";
	$.l4.color = "#fff";

	$.contentView.removeAllChildren();
	$.contentView.add($.mark.getView());
});

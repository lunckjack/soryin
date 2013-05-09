var entypo = require('ti.entypo');

var curHeight = Ti.Platform.displayCaps.platformHeight;
var curWidth = Ti.Platform.displayCaps.platformWidth;

$.view_right.width = curWidth - 110;
var curview = "";
// 自我
$.view_left.addEventListener('click', function() {
	// var setView = Alloy.createController('view_block').getView();
	//var setView = Alloy.createController('view_detail').getView();
	var setView = Alloy.createController('view_location').getView();
	if (curview != "") {
		$.content.remove(curview);
	}
	curview = setView;
	$.content.add(curview);
	$.scrollable.scrollToView(1);
});

// 经验、记录总数
$.view_express.addEventListener('click', function() {
	var recordView = Alloy.createController('view_record').getView();

	if (curview != "") {
		$.content.remove(curview);
	}
	curview = recordView;
	$.content.add(curview);
	$.scrollable.scrollToView(1);
});

// 返回
$.backBtn.addEventListener('click', function() {
	$.scrollable.scrollToView(0);
});

var icons = [ {
	'iconName' : "icon_me",
	'iconColor' : "#fff", // icon 我
	'iconCode' : "0xe007"
}, {
	'iconName' : 'icon_cover',
	'iconColor' : '#ccc', // icon 封面
	'iconCode' : '0xf1b2'
}, {
	'iconName' : 'icon_express',
	'iconColor' : '#fff', // icon 经验
	'iconCode' : '0xf2b0'
}, {
	'iconName' : 'icon_level',
	'iconColor' : '#fff', // icon 级别
	'iconCode' : '0xf2e6'
}, {
	'iconName' : 'icon_attention',
	'iconColor' : '#fff', // icon 关注
	'iconCode' : '#ED1E79'
}, {
	'iconName' : 'icon_like',
	'iconColor' : '#494949', // icon 喜好
	'iconCode' : '#0xe029'
}, {
	'iconName' : 'icon_body',
	'iconColor' : '#494949', // icon 身体
	'iconCode' : '#0xe007'
} ];

/**
 * set icon
 */
function setIconFont() {
	// for ( var i = 0; i < icons.length; i++) {
	// var iconName = icons[i].iconName;
	// var iconColor = icons[i].iconColor;
	// var iconCode = icons[i].iconCode;
	//		
	//		
	// }
	// icon 我
	$.icon_me.text = entypo.fromCodePoint("0xe007");
	$.icon_me.color = "#fff";
	// icon 封面
	$.icon_cover.text = entypo.fromCodePoint("0xf1b2");
	$.icon_cover.color = "#ccc";
	// icon 经验
	$.icon_express.text = entypo.fromCodePoint("0xf2b0");
	$.icon_express.color = "#29ABE2";
	$.expressNum.color = "#29ABE2";
	$.lab_express.color = "#29ABE2";
	// icon 级别
	$.icon_level.text = entypo.fromCodePoint("0xf2e6");
	$.icon_level.color = "#29ABE2";
	$.levelNum.color = "#29ABE2";
	$.lab_level.color = "#29ABE2";
	// icon 关注
	$.icon_attention.text = entypo.fromCodePoint("0xe02d");
	$.icon_attention.color = "#ED1E79";
	$.attentionNum.color = "#ED1E79";
	$.lab_attention.color = "#ED1E79";
	// icon 喜好
	$.icon_like.text = entypo.fromCodePoint("0xe029");
	$.icon_like.color = "#494949";
	$.likePercent.color = "#494949";
	$.lab_like.color = "#494949";
	// icon 身体
	$.icon_body.text = entypo.fromCodePoint("0xe044");
	$.icon_body.color = "#494949";
	$.bodyPercent.color = "#494949";
	$.lab_body.color = "#494949";

	// 返回
	$.backBtn.text = entypo.fromCodePoint("0xe023");
}
// 设置icon
setIconFont();
$.index.open();

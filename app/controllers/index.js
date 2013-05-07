var entypo = require('ti.entypo');
var ui = require('ui');
var curHeight = Ti.Platform.displayCaps.platformHeight;
var curWidth = Ti.Platform.displayCaps.platformWidth;

$.view_right.width = curWidth - 110;
$.seting = Alloy.createController('view_setting');
$.record = Alloy.createController('view_record');
$.visual = Alloy.createController('view_visual');
$.level = Alloy.createController('view_level');

// 自我
$.view_left.addEventListener('click', function() {
	scrollToView($.content, $.seting.getView(), 1);
});

// 经验、记录总数
$.view_express.addEventListener('click', function() {
	scrollToView($.content, $.record.getView(), 1);
});

/**
 * 切换界面
 * 
 * @param parentView
 * @param curView
 * @param index
 */
function scrollToView(parentView, curView, curIndex) {
	parentView.add(curView);
	$.scrollable.scrollToView(curIndex);
}
/**
 * 腾讯QQ
 */
$.seting.on('onSwitchQQ', function(e) {
	alert('腾讯QQ');
});
/**
 * 新浪微博
 */
$.seting.on('onSwitchSina', function(e) {
	alert('新浪微博');
});
/**
 * 快速上手
 */
$.seting.on('onSwitchSplash', function(e) {
	alert('快速上手');
});

/**
 * 视觉语言
 */
$.seting.on('onSwitchVisual', function(e) {
	scrollToView($.childContent, $.visual.getView(), 2);
});

/**
 * 版权信息
 */
$.seting.on('onSwitchCopyRight', function(e) {
	// scrollToView($.childContent, $.visual.getView(), 2);
	alert('版权信息');
});

// 级别
$.view_level.addEventListener('click', function() {
	scrollToView($.content, $.level.getView(), 1);
});

// 返回首页
$.backToIndex.addEventListener('click', function() {
	$.scrollable.scrollToView(0);
	$.content.removeAllChildren();
});
// 返回上一级
$.backToParent.addEventListener('click', function() {
	$.scrollable.scrollToView(1);
	$.childContent.removeAllChildren();
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
	$.icon_cover.text = entypo.fromCodePoint("0xe02b");
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

	// 返回首页
	$.backToIndex.text = entypo.fromCodePoint("0xe023");
	// 返回上一级
	$.backToParent.text = entypo.fromCodePoint("0xe023");

	$.splashBackBtn.text = entypo.fromCodePoint("0xe023");

	$.splashIcon.text = entypo.fromCodePoint("0xe007");
	$.splashIcon.color = "#fff";

	$.viewIcon2.text = entypo.fromCodePoint("0xe07f");
	$.viewIcon2.color = "#fff";

}
// 设置icon
setIconFont();

// 第一次启动显示说明
var loadFirst = Ti.App.Properties.getBool('loadFist', true);
if (loadFirst) {
	$.readView1.visible = true;
	ui.zoom($.readView1, function() {
		// Ti.App.Properties.setBool('loadFist', false);
	});

	$.readView1.addEventListener('click', function() {
		this.visible = false;
		$.readView2.visible = true;
		ui.zoom($.readView2, function() {

		});
	});
	$.readView2.addEventListener('click', function() {
		this.visible = false;
		$.readView3.visible = true;
		ui.zoom($.readView3, function() {

		});
	});
	$.splashBackBtn.addEventListener('click', function() {
		ui.unzoom($.readView3, function() {

		});
	});

	$.viewInfo1.top = (curHeight / 2) - $.viewInfo1.height;
	$.viewInfo2.top = (curHeight / 2) - $.viewInfo2.height;
}

$.index.open();
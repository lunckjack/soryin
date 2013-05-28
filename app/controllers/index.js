var entypo = require('ti.entypo');
var ui = require('ui');
var curHeight = Ti.Platform.displayCaps.platformHeight;
var curWidth = Ti.Platform.displayCaps.platformWidth;

$.view_right.width = curWidth - 110;
$.seting = Alloy.createController('view_setting');
$.record = Alloy.createController('view_record');
$.visual = Alloy.createController('view_visual');
$.level = Alloy.createController('view_level');
$.fun = Alloy.createController('view_fun');
$.publish = Alloy.createController('view_publish');
$.sense = Alloy.createController('view_sense');
$.like = Alloy.createController('view_like');
$.body = Alloy.createController('view_body');

var pageImg = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,
		"/img/bg.svg");
$.webview.html = "<html><head><style> html, body { margin: 0px; padding: 0px; } </style></head><body><image src="
		+ pageImg.getNativePath()
		+ " style='width:320;height:480;'/></body></html>";

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
 * 发布
 */
$.fun.on('onSwitchPublish', function(e) {
	scrollToView($.content, $.publish.getView(), 1);
});

/**
 * 读取
 */
$.fun.on('onSwitchSense', function(e) {
	scrollToView($.content, $.sense.getView(), 1);
});
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

// 喜好

$.view_like.addEventListener('click', function() {
	$.like.init();
	scrollToView($.content, $.like.getView(), 1);

});
// 身体

$.view_body.addEventListener('click', function() {
	$.body.init();
	scrollToView($.content, $.body.getView(), 1);
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

// 滚动结束调用此函数
$.scrollView.addEventListener('scrollend', function() {
	viewAnimation();
});
// 单击时候触发
$.scrollView.addEventListener('click', function() {
	viewAnimation();
});
/**
 * 隐藏回退按钮
 */
function hideBackIndexButton() {

	ui.translate2($.backToIndex, -70, 0, 0, 200, function() {

	});
}
/**
 * 显示回退按钮
 */
function showBackIndexButton() {
	ui.translate2($.backToIndex, 0, 0, 0, 200, function() {

	});
}

$.sense.on('hideBackButton', function(e) {
	hideBackIndexButton();
});
$.sense.on('showBackButton', function(e) {
	showBackIndexButton();
});

$.record.on('hideBackButton', function(e) {
	hideBackIndexButton();
});
$.record.on('showBackButton', function(e) {
	showBackIndexButton();
});
var isAdd = false;
/**
 * 扫描和发布按钮现实，有动画
 */
function viewAnimation() {
	if (!isAdd) {
		$.viewFun.add($.fun.getView());
		$.scrollView.scrollTo(0, 100);
		isAdd = true;
	}

}

/**
 * set icon
 */
function setIconFont() {

	var defaultColor = '#fff';
	var colorBlue = Alloy.Globals.soryinBlueColor;
	var pinkColor = Alloy.Globals.soryinPinkColor;
	var kwColor = Alloy.Globals.soryinKwGrayColor;
	// icon 我
	$.icon_me.text = entypo.fromCodePoint("0xe007");
	$.icon_me.color = "#fff";
	// icon 封面
	$.icon_cover.text = entypo.fromCodePoint("0xe02b");
	$.icon_cover.color = "#ccc";
	// icon 经验
	$.icon_express.text = entypo.fromCodePoint("0xe07a");
	$.icon_express.color = defaultColor;
	$.expressNum.color = defaultColor;
	$.lab_express.color = defaultColor;
	// icon 级别
	$.icon_level.text = entypo.fromCodePoint("0xf2e6");
	$.icon_level.color = defaultColor;
	$.levelNum.color = defaultColor;
	$.lab_level.color = defaultColor;
	// icon 关注
	$.icon_attention.text = entypo.fromCodePoint("0xe02d");
	$.icon_attention.color = defaultColor;
	$.attentionNum.color = defaultColor;
	$.lab_attention.color = defaultColor;

	$.icon_mine.text = entypo.fromCodePoint("0xe038");
	$.icon_mine.color = defaultColor;
	$.mineNum.color = defaultColor;
	$.lab_mine.color = defaultColor;

	// icon 喜好
	$.icon_like.text = entypo.fromCodePoint("0xe08a");
	$.icon_like.color = defaultColor;
	$.likePercent.color = defaultColor;
	$.lab_like.color = defaultColor;
	// icon 身体
	$.icon_body.text = entypo.fromCodePoint("0xe044");
	$.icon_body.color = defaultColor;
	$.bodyPercent.color = defaultColor;
	$.lab_body.color = defaultColor;

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
		Ti.App.Properties.setBool('loadFist', false);
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

var a = 1, b = 1, c = 1, d = 1, e = 1;
var a_num = 36, b_num = 3, c_num = 5, d_num = 100, e_num = 0;

function changeExpress() {

	$.expressNum.text = a;
	if (a < a_num) {
		a++;
	}

}

function changeLevel() {
	$.levelNum.text = b;
	if (b < b_num) {
		b++;
	}
}
function changeAttention() {
	$.attentionNum.text = c;
	if (c < c_num) {
		c++;
	}
}
function changeLike() {
	$.likePercent.text = (d + "%");
	
	if (d < d_num) {
		d++;
	}
	
}
function changeBody() {
	$.bodyPercent.text = (e + "%");
	if (e < e_num) {
		e++;
	}
}
{
	var crear_a = setInterval(changeExpress, (3000 / a_num));
	var crear_b = setInterval(changeLevel, (3000 / b_num));
	var crear_c = setInterval(changeAttention, (3000 / c_num));
	var crear_d = setInterval(changeLike, (3000 / d_num));
	var crear_e = setInterval(changeBody, (3000 / e_num));
}
if(d_num>10){
	$.likePercent.font = { fontSize: 25,fontFamily : 'Orbitron'}
}

$.index.open();
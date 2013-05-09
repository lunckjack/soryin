var ui = require('ui');
var entypo = require('ti.entypo');
var httpClient = require('HttpClient');
// var args = arguments[0] || {};

// var taskType = args._taskType;
// var taskKey = args._taskKey;

var taskKey = "0500caca7edc4e1ebb2ba99920ea6a09";
var taskType = "event";
//经度
var currentLon = Ti.App.Properties.getString('curLongitude');
//维度
var currentLat = Ti.App.Properties.getString('curLatitude');
//默认颜色
$.tab1.backgroundColor = "#fff";
$.tab2.backgroundColor = "#f2f2f2";

var table, view, webView;
//初始化图片
function installImageView(retData) {
	var picturesArray = retData.data.pictures;
	// 图片划分四分之一
	//当前屏幕的宽度
	var imageWidth = (Ti.Platform.displayCaps.platformWidth / 4) - 10;
	//计算行数
	view = Titanium.UI.createView({
		layout : "vertical",
		top : '5dp'
	});
	//创建一个View 防治ImageView
	var viewImg = Titanium.UI.createView({
		layout : "horizontal",
		width : Titanium.UI.FILL,
		height : Titanium.UI.SIZE
	});
	for ( i = 0; i < picturesArray.length; i++) {
		var tImage = Titanium.UI.createImageView({
			width : imageWidth,
			height : imageWidth,
			image : picturesArray[i],
			border : "2",
			textAlign : "center",
			borderColor : "#ccc",
			top : '5dp',
			left : 5
		});
		viewImg.add(tImage);
	}
	//记录图片的个数
	var viewSum = Titanium.UI.createView({
		layout : "horizontal",
		top : '5dp',
		width : Titanium.UI.SIZE,
		height : Titanium.UI.SIZE
	});
	var labelImgCount = Titanium.UI.createLabel({
		text : picturesArray.length,
		font : {
			fontSize : '36dp',
			fontFamily : 'HiraginoSansGB-W6'
		},
		color : "#cccccc"
	});
	var labelImgText = Titanium.UI.createLabel({
		text : '张',
		color : "#cccccc"
	});
	viewSum.add(labelImgCount);
	viewSum.add(labelImgText);

	view.add(viewImg);
	view.add(viewSum);
}

$.tab1.addEventListener('click', function() {
	$.tab1.backgroundColor = "#fff";
	$.tab2.backgroundColor = "#f2f2f2";

	//加载描述
	$.contentView.remove(webView);
	$.contentView.add(webView);
	//$.contentView.remove(table);
	$.contentView.remove(view);
});
$.tab2.addEventListener('click', function() {
	$.tab1.backgroundColor = "#f2f2f2";
	$.tab2.backgroundColor = "#fff";

	$.contentView.remove(webView);
	//$.contentView.remove(table);
	$.contentView.remove(view);
	$.contentView.add(view);
});

//获取event详情
function getEvents() {
	var initOptions = {
		url : Alloy.Globals.getEvent,
		method : 'POST',
		timeout : 20000
	};
	//参数
	var callParams = {
		_taskKey : taskKey,
		_taskType : taskType,
		_currentLon : currentLon,
		_currentLat : currentLat
	};
	httpClient.req(initOptions, callParams, function(retData) {
		loadView(retData);
	}, function() {

	});
}

function loadView(retData) {
	if (retData == '') {
		createWebView('暂无数据');
		createImageView('');
	} else {
		//创建并加载webview
		createWebView(retData);
		//创建并加载ImageView
		createImageView(retData);
	}

}

function createImageView(jsonObject) {
	installImageView(jsonObject);
}

/**
 * 创建并加载webview
 */
function createWebView(jsonObject) {
	//创建一个WebView
	webView = Ti.UI.createWebView({
		hideShadow : true,
		backgroundColor : 'white',
		html : "<html><head></head><body>" + jsonObject.data.description + "</body></html>"
	});
	// 加载view
	//加载描述
	$.contentView.add(webView);
}

//初始化加载
$.init = function(ready) {
	//获取数据
	getEvents();
};

$.tab1.width = Ti.Platform.displayCaps.platformWidth / 2;
$.tab2.width = Ti.Platform.displayCaps.platformWidth / 2;
$.tab1.height = '50dp';
$.tab2.height = '50dp';
$.l2.text = entypo.fromCodePoint("0xe005");
$.l4.text = entypo.fromCodePoint("0xe006");

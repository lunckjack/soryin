var ui = require('ui');
function moveLine1() {
	ui.translate2($.line1, -960, 0, 0, 10000, function() {

	});
}

function moveLine2() {
	ui.translate2($.line2, 960, 0, 0, 10000, function() {

	});
}

setTimeout(moveLine1, 10)
setTimeout(moveLine2, 10)
var picker;
var scanResult;
setTimeout(function() {
	// scandit
	var scanditsdk = require("com.mirasense.scanditsdk");

	// instantiate the Scandit SDK Barcode Picker view
	picker = scanditsdk.createView({
		"width" : Ti.Platform.displayCaps.platformWidth,
		"height" : Ti.Platform.displayCaps.platformHeight
	});

	var view_top = Alloy.createController('view_top').getView();
	var view_function = Alloy.createController('sub_scan').getView();
	// 初始化
	// Initialize the barcode picker, remember to paste your own app key here.
	picker.init("fmO1OEi9EeKSCIDaX4SRAsSBxn5OL4SDl8Hr5N/TOi8", 0);
	// /扫描成功后声音提示
	picker.setBeepEnabled(true);
	// 启动震动
	picker.setVibrateEnabled(true);
	// 设置扫描窗口大小
	picker.setViewfinderSize(0.6, 0.20);
	// logo不可见
	picker.setInfoBannerOffset(20);

	// 扫描成功回调函数
	picker.setSuccessCallback(function(e) {
		picker.stopScanning();

		scanResult = e.barcode;

		if (scanResult.indexOf('soryin') > 0) {
			// 跳转block主界面
			var mainViewCon = Alloy.createController('evt_main', {
				barcode : e.barcode,
				symbology : e.symbology,
				isCamera : true
			});

			var mainView = mainViewCon.getView();
			// 隐藏底部tab
			mainView.hideTabBar();
			mainViewCon.init();
			mainView.open({
				animated : true
			});
			// mytabGroup.fireEvent('refleshLog');
			$.mainWin.fireEvent('cameraClose');
			$.mainWin.close();
		} else {
			alert('不合法的扫描请求！');
			$.mainWin.close();
		}
	});

	// Start the scanning proces
	picker.startScanning();
	$.cameraView.add(picker);
	$.mainWin.add(view_top);
	$.mainWin.add(view_function);

}, 10)
// 返回
$.backBtn.addEventListener('click', function() {
	picker.stopScanning();
	$.mainWin.close();
});

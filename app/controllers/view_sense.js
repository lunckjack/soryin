var ui = require('ui');
var entypo = require('ti.entypo');
var picker;
var scanResult;
$.search = Alloy.createController('view_search');
setTimeout(function() {
	// scandit
	var scanditsdk = require("com.mirasense.scanditsdk");

	// instantiate the Scandit SDK Barcode Picker view
	picker = scanditsdk.createView({
		"width" : Ti.Platform.displayCaps.platformWidth,
		"height" : Ti.Platform.displayCaps.platformHeight,
		backgroundColor : '#f2f2f2'
	});

	// var view_top = Alloy.createController('view_top').getView();
	// var view_function = Alloy.createController('sub_scan').getView();
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

		// if (scanResult.indexOf('soryin') > 0) {
		// // 跳转block主界面
		// var mainViewCon = Alloy.createController('evt_main', {
		// barcode : e.barcode,
		// symbology : e.symbology,
		// isCamera : true
		// });
		//
		// var mainView = mainViewCon.getView();
		// // 隐藏底部tab
		// mainView.hideTabBar();
		// mainViewCon.init();
		// mainView.open({
		// animated : true
		// });
		// // mytabGroup.fireEvent('refleshLog');
		// $.mainWin.fireEvent('cameraClose');
		// $.mainWin.close();
		// } else {
		// alert('不合法的扫描请求！');
		// // $.mainWin.close();
		// }
	});
	
	// Start the scanning proces
	picker.startScanning();
	$.cameraView.add(picker);

}, 10);

$.iconSense.text = entypo.fromCodePoint("0xe02f");
$.viewSearch.addEventListener('click', function(e) {
	$.view.visible = true;
	$.trigger('hideBackButton', e);
	ui.zoom($.view, function() {
		ui.translate2($.searchView.getView('searchView'), 0, -180, 0, 200,
				function() {
					
				});
	});

});
$.view.addEventListener('click', function(e) {
	ui.translate2($.searchView.getView('searchView'), 0, 180, 0, 200,
			function() {
				ui.unzoom($.view, function() {
					$.trigger('showBackButton', e);
				});
			});
});

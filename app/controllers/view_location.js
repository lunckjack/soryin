var ui = require('ui');
var entypo = require('ti.entypo');
var httpClient = require('HttpClient');
var taskKey = "0500caca7edc4e1ebb2ba99920ea6a09";
var taskType = "event";
//经度
var currentLon = Ti.App.Properties.getString('curLongitude');
//维度
var currentLat = Ti.App.Properties.getString('curLatitude');
var prevrow = 0;
var isOpen = false;
var retDatas;
$.table1.addEventListener('click', function(e) {
	if (!e.row.isSub) {
		if (e.row.isOpen) {
			e.row.isOpen = false;
			isOpen = false;
			ui.rotate(e.row.arrow, 0, 250, function() {
			});

			$.table1.deleteRow(e.index + 1);

		} else {
			e.row.isOpen = true;
			ui.rotate(e.row.arrow, 90, 250, function() {
			});
			if (prevrow >= e.index) {
				setTimeout(function() {
					$.table1.scrollToTop(e.index * 50, {
						animated : true
					});
				}, 100);
			} else {
				if (isOpen) {
					setTimeout(function() {
						$.table1.scrollToTop((e.index - 1) * 50, {
							animated : true
						});
					}, 100);
				} else {
					setTimeout(function() {
						$.table1.scrollToTop(e.index * 50, {
							animated : true
						});
					}, 100);
				}
			}
			isOpen = true;
			prevrow = e.index;
			$.table1.insertRowAfter(e.index, e.row.subrow);
			var rows = $.table1.data[0].rows;
			for ( i = 0; i < rows.length; i++) {
				if (rows[i].isOpen && i != e.index) {
					ui.rotate(rows[i].arrow, 0, 250, function() {
					});
					$.table1.deleteRow(i + 1);
					rows[i].isOpen = false;
				}
			}
		}
	}
});

/**
 * 滑动结束触发此函数
 */
$.scrollableView.addEventListener('scrollend', function(e) {
	 loadTableView(e.currentPage);
 });

/**
 *加载数据
 */
function loadTableView(currentPage) {
	switch (currentPage) {
		case currentPage:
			createTable(currentPage);
			break;
	}
}

//动态创建tableView
function createTable(_currentPage) {
	var data = [];
	var title;
	var icon;
	var activityArray = retDatas.data.activityBasicInfos;
	for (var i = 0; i < 3; i++) {
		if (i == 0) {
			icon = "0xe004";
			title = activityArray[_currentPage].locationsInfo[0].street;//创建街道--原本为address，现改为street
		} else if (i == 1) {
			icon = "0xe018";
			title = activityArray[_currentPage].locationsInfo[0].building;//创建建筑
		} else if (i == 2) {
			icon = "0xe003";
			title = activityArray[_currentPage].locationsInfo[0].room;//创建房间
		}

		var row = Ti.UI.createTableViewRow({
			height : '80dp',
			selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
			selectedBackgroundColor : 'transparent'
		});
		row.isOpen = false;

		var title = Ti.UI.createLabel({
			font : {
				fontSize : 23,
				fontFamily : '冬青黑体简体中文',
			},
			text : title,
			color : Alloy.Globals.green,
			textAlign : "center",
			width : "150dp",
			top : 20
		});

		var line = Ti.UI.createView({
			height : '80dp',
			left : '69.5dp',
			width : '1dp',
			backgroundColor : Alloy.Globals.gray
		});
		var subrow = Ti.UI.createTableViewRow({
			selectedBackgroundColor : 'transparent',
			layout : 'vertical',
			height : Titanium.UI.SIZE
		});
		//创建MAP  视图
		if (i == 0) {
			var lat = activityArray[_currentPage].locationsInfo[0].lat;
			var lng = activityArray[_currentPage].locationsInfo[0].lng;
			createMapView(title, lat, lng, subrow);
		} else {
			var title1 = Ti.UI.createLabel({
				left : '25dp',
				font : {
					fontSize : '24dp'
				},
				right : '25dp',
				top : '20dp',
				text : "描述"
			});
			subrow.add(title1);
		}

		var logo = Ti.UI.createLabel({
			text : entypo.fromCodePoint(icon),
			font : {
				fontSize : '39dp',
				fontFamily : 'soryin'
			},
			left : '5dp',
			textAlign : 'center',
			color : Alloy.Globals.green
		});

		var arrow = Ti.UI.createImageView({
			image : '/imgs/utility/pointer.png',
			right : '10dp'
		});
		row.add(logo);
		row.add(line);
		row.add(title);
		row.add(arrow);
		subrow.isSub = true;
		row.subrow = subrow;
		row.arrow = arrow;
		data[i] = row;
	}

	$.table1.setData(data);
}

function reqLocation() {
	var initOptions = {
		url : Alloy.Globals.requestURL,
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
	//模拟发一个请求
	httpClient.req(initOptions, callParams, function(retData) {
		retDatas = retData;
		var activityArray = retData.data.activityBasicInfos;
		//获取所有的activity
		for (var i = 0; i < activityArray.length; i++) {
			//距离当前活动位置
			var location = activityArray[i].locationsInfo[0].location;
			var location ='10000';
			var viewVel = Ti.UI.createView({
				layout : 'vertical',
				backgroundColor : "#f2f2f2",
				top : 0,
				width : Titanium.UI.FILL,
				height : Titanium.UI.FILL
			});

			var labDistancetText = Ti.UI.createLabel({
				color : Alloy.Globals.green,
				font : {
					fontSize : '20dp',
					fontFamily : '冬青黑体简体中文',
				},
				text : "",//改版 变为没有了
				width : Titanium.UI.SIZE,
				height : Titanium.UI.SIZE
			});
			var labDistance = Ti.UI.createLabel({
				color : Alloy.Globals.green,
				font : {
					fontSize : '60dp',
					fontFamily : 'Orbitron'
				},
				top : '0dp',
				text : location,//距离
				width : Titanium.UI.SIZE,
				height : Titanium.UI.SIZE
			});

			var labText = Ti.UI.createLabel({
				left : '180dp',
				top : '0',
				font : {
					fontSize : '25dp',
					fontFamily : '冬青黑体简体中文'
				},
				text : "公里",
				color:Alloy.Globals.green,
				width : Titanium.UI.SIZE,
				height : Titanium.UI.SIZE
			});
			viewVel.add(labDistancetText);
			viewVel.add(labDistance);
			viewVel.add(labText);
			$.scrollableView.addView(viewVel);
		}
		//设置显示哪一页
		loadTableView(0);
		$.scrollableView.setCurrentPage(0);
	}, function() {

	});
}

/**
 *
 * @param {Object} title
 * @param {Object} subrow
 */
function createMapView(title, lat, lng, subrow) {
	var mountainView = Titanium.Map.createAnnotation({
		latitude : lat,
		longitude : lng,
		title : title,
		pincolor : Titanium.Map.ANNOTATION_RED,
		animate : true,
		myid : 1 // Custom property to uniquely identify this annotation.
	});

	var mapview = Titanium.Map.createView({
		mapType : Titanium.Map.STANDARD_TYPE,
		region : {
			latitude : 23.124655,
			longitude : 113.361224,
			latitudeDelta : 0.01,
			longitudeDelta : 0.01
		},
		animate : true,
		regionFit : true,
		userLocation : true,
		annotations : [mountainView],
		height : '150dp'
	});
	subrow.add(mapview);
}

$.init = function(ready) {
	//获取数据
	reqLocation();
};

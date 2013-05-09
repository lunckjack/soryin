var ui = require('ui');
var entypo = require('ti.entypo');
var httpClient = require('HttpClient');
var taskKey = "0500caca7edc4e1ebb2ba99920ea6a09";
var taskType = "event";
//经度
var currentLon = Ti.App.Properties.getString("curLongitude");
//维度
var currentLat = Ti.App.Properties.getString("curLatitude");
//table1....
var data = [];
var prevrow = 0;
var isOpen = false;
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
 *  获取所有的activity
 */
function getActivitys() {

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

	//模拟发一个请求
	httpClient.req(initOptions, callParams, function(retData) {

		var activitysArray = retData.data.activityBasicInfos;

		for (var i = 0; i < activitysArray.length; i++) {
			var dataModel = activitysArray[i];
			createTableView(i, dataModel);
		}
		$.table1.setData(data);
	}, function() {

	});

}

function createTableView(id, dataModel) {
	//标题
	var title = dataModel.activityName;
	//描述
	var content = dataModel.activityDescription;

	var row = Ti.UI.createTableViewRow({
		height : '80dp',
		selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
		selectedBackgroundColor : 'transparent'
	});
	row.isOpen = false;
	//标题
	var title = Ti.UI.createLabel({
		font : {
			fontSize : '20dp',
			fontFamily : 'HiraginoSansGB-W6',
		},
		text : title,
		color : '#7F8C8D',
		textAlign : "center",
		width : "150dp",
		top : 20
	});
	//标题上的竖线
	var line = Ti.UI.createView({
		height : '50',
		left : '60',
		width : '1',
		backgroundColor : "#CCCCCC"
	});
	var number = Ti.UI.createLabel({
		text : id + 1,
		font : {
			fontSize : '39dp',
			fontFamily : 'Orbitron'
		},
		left : '15',
		width : '60dp',
		textAlign : 'center',
		color : '#2ECC71'
	});
	//小活动描述
	var title1 = Ti.UI.createLabel({
		left : '25dp',
		font : {
			fontSize : '24dp'
		},
		right : '25dp',
		top : '20dp',
		text : content
	});

	var arrow = Ti.UI.createImageView({
		image : '/imgs/utility/pointer.png',
		right : '10dp'
	});
	row.add(title);
	row.add(number);
	row.add(line);
	row.add(arrow);
	var subrow = Ti.UI.createTableViewRow({
		selectedBackgroundColor : 'transparent',
		layout : 'vertical',
		height : Titanium.UI.SIZE
	});

	// var subVie
	// createSubView(dataModel, subrow);

	subrow.isSub = true;
	subrow.add(title1);
	row.subrow = subrow;
	row.arrow = arrow;
	data[id] = row;
}

$.init = function(ready) {
	//获取数据
	getActivitys();

};

/**
 *  创建子布局
 * @param {Object} _dataModel
 * @param {Object} _subrow
 */
function createSubView(_dataModel, _subrow) {
	//条件
	var conditionsArray = dataModel.conditions;
	//限制
	var constrainsArray = dataModel.constrains;
	//步骤
	var stepsArray = dataModel.steps;
}

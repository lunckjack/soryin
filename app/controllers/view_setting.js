var entypo = require('ti.entypo');

// 登录
var tableLoginData = [];
var loginData = [ "腾讯QQ", "新浪微博" ];
for (i = 0; i < loginData.length; i++) {
	var rowtitle;
	var rowcolor;
	var rowtext;
	var iconColor;
	var selBackColor;
	if (i == 0) {
		rowtitle = loginData[0];
		rowtext = entypo.fromCodePoint("0xe033");
		rowcolor = '#3890e2';
		selBackColor = 'blue';
	} else if (i == 1) {
		rowtitle = loginData[1];
		rowtext = entypo.fromCodePoint("0xe00b");
		rowcolor = '#d52b2a';
		selBackColor = 'red';
	}

	var row = Ti.UI.createTableViewRow({
		height : '50',
		selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE,
		backgroundColor : rowcolor,
		selectedBackgroundColor : selBackColor
	});
	row.isOpen = false;
	// 标题
	var title = Ti.UI.createLabel({
		font : {
			fontSize : '25',
			fontFamily : 'HiraginoSansGB-W3',
		},
		text : rowtitle,
		textAlign : "center",
		
		left : 80,
		color : '#ffffff',
		top : 10
	});

	// 图标
	var icon = Ti.UI.createLabel({
		text : rowtext,
		left : 20,
		font : {
			fontSize : '30',
			fontFamily : 'soryin'
		},
		color : '#fff'
	});

	var arrow = Ti.UI.createLabel({
		text : entypo.fromCodePoint("0xf3c9"),
		right : '10dp',
		font : {
			fontSize : '20',
			fontFamily : 'soryin'
		},
		color : '#fff'
	});
	row.add(icon);
	row.add(title);
	row.add(arrow);
	row.arrow = arrow;
	tableLoginData[i] = row;
}
$.table1.setData(tableLoginData);

// 向导
var dataConditionArray = [ "快速上手", "缩影语言" ];
var rowTextArray = [ '0xe03a', '0xe03b' ];
var tableData = [];
createSetingView(dataConditionArray, rowTextArray, tableData);
$.table2.setData(tableData);

// 其他
var otableData = [];
// dataConditionArray = [ '推荐', '意见','版权','条款' ];
var odataConditionArray = [ '版权' ];
var orowTextArray = [ '0xe036' ];
createSetingView(odataConditionArray, orowTextArray, otableData);
$.table3.setData(otableData);

/**
 * 创建View
 * 
 * @param {Object}
 *            dataConditionArray
 * @param {Object}
 *            rowTextArray
 */
function createSetingView(dataArray, rowArray, tableDatas) {
	for (i = 0; i < dataArray.length; i++) {
		var row = Ti.UI
				.createTableViewRow({
					height : '50',
					selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY
				});
		row.isOpen = false;

		var line = Ti.UI.createView({
			height : '50',
			left : '70',
			width : '1dp',
			backgroundColor : "#cecece"
		});
		// 图标
		var icon = Ti.UI.createLabel({
			text : entypo.fromCodePoint(rowArray[i]),
			left : 20,
			font : {
				fontSize : '30',
				fontFamily : 'soryin'
			},
		});
		// 标题
		var title = Ti.UI.createLabel({
			font : {
				fontSize : '25',
				fontFamily : 'HiraginoSansGB-W3',
			},
			text : dataArray[i],
			left : 80,
			top : 10,
			textAlign : "center",
		});
		var arrow = Ti.UI.createLabel({
			text : entypo.fromCodePoint("0xf3c9"),
			right : 10,
			font : {
				fontSize : '20',
				fontFamily : 'soryin'
			}
		});

		row.add(icon);
		row.add(line);
		row.add(title);
		row.add(arrow);
		row.arrow = arrow;
		tableDatas[i] = row;
	}
}
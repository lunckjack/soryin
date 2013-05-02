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
		width : "200",
		left : '50',
		color : '#ffffff'
	});

	// 图标
	var icon = Ti.UI.createLabel({
		text : rowtext,
		left : '5',
		textAlign : 'center',
		font : {
			fontSize : '30',
			fontFamily : 'soryin'
		},
		color : '#ffffff'
	});

	var arrow = Ti.UI.createLabel({
		text : entypo.fromCodePoint("0xf3c9"),
		right : '10dp',
		font : {
			fontSize : '20',
			fontFamily : 'soryin'
		},
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
createSetingView(dataConditionArray, rowTextArray);
$.table2.setData(tableData);

// 其他
tableData = [];
dataConditionArray = [ '推荐给朋友', '帮我们改进' ];
rowTextArray = [ '0xe035', '0xe036' ];
createSetingView(dataConditionArray, rowTextArray);
$.table3.setData(tableData);

/**
 * 创建View
 * 
 * @param {Object}
 *            dataConditionArray
 * @param {Object}
 *            rowTextArray
 */
function createSetingView(dataConditionArray, rowTextArray) {
	for (i = 0; i < dataConditionArray.length; i++) {
		var row = Ti.UI
				.createTableViewRow({
					height : '50',
					selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY
				});
		row.isOpen = false;
		// 标题
		var title = Ti.UI.createLabel({
			font : {
				fontSize : '25',
				fontFamily : 'HiraginoSansGB-W3',
			},
			text : dataConditionArray[i],
			textAlign : "center",
			width : "200dp",
			left : '50dp'
		});

		var line = Ti.UI.createView({
			height : '50',
			left : '69.5dp',
			width : '1dp',
			backgroundColor : "#cecece"
		});
		// 图标
		var icon = Ti.UI.createLabel({
			text : entypo.fromCodePoint(rowTextArray[i]),
			left : '5dp',
			textAlign : 'center',
			font : {
				fontSize : '30',
				fontFamily : 'soryin'
			},
			color : '#000'
		});

		var arrow = Ti.UI.createLabel({
			text : entypo.fromCodePoint("0xf3c9"),
			right : '10dp',
			font : {
				fontSize : '20',
				fontFamily : 'soryin'
			},
		});
		row.add(icon);
		row.add(line);
		row.add(title);
		row.add(arrow);
		row.arrow = arrow;
		tableData[i] = row;
	}
}
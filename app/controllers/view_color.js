var entypo = require('ti.entypo');
$.iconColor.text = entypo.fromCodePoint("0xe070");

var colors = [ {
	'colorName' : "缩影橙",
	'iconColor' : Alloy.Globals.soryinOrangeColor, // 缩影橙
	'colorDesc' : "缩影"
}, {
	'colorName' : '石灰绿',
	'iconColor' : Alloy.Globals.soryinGreenColor, // 石灰绿
	'colorDesc' : '安全|正确|通行'
}, {
	'colorName' : '大洞蓝',
	'iconColor' : Alloy.Globals.soryinBlueColor, // 大洞蓝
	'colorDesc' : '普通信息'
}, {
	'colorName' : '石榴红',
	'iconColor' : Alloy.Globals.soryinSlRedColor, // 石榴红
	'colorDesc' : '停止|警告'
}, {
	'colorName' : '小桃红',
	'iconColor' : Alloy.Globals.soryinPinkColor, // 小桃红
	'colorDesc' : '喜欢'
}, {
	'colorName' : '矿物灰',
	'iconColor' : Alloy.Globals.soryinKwGrayColor, // 矿物灰
	'colorDesc' : '细节'
}, {
	'colorName' : '石棉灰',
	'iconColor' : Alloy.Globals.soryinSmGrayColor, // 石棉灰
	'colorDesc' : '辅助'
} ];
var tableData = [];
function loadColorTableView() {
	for ( var i = 0; i < colors.length; i++) {
		var colorName = colors[i].colorName;
		var iconColor = colors[i].iconColor;
		var colorDesc = colors[i].colorDesc;
		var row = Ti.UI
				.createTableViewRow({
					height : 60,
					selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,

				});
		var title = Ti.UI.createLabel({
			left : 20,
			width : 50,
			height : 50,
			backgroundColor : iconColor,
			borderRadius : 25
		});
		// 标题
		var desc = Ti.UI.createLabel({
			font : {
				fontSize : '24',
				fontFamily : 'HiraginoSansGB-W3',
			},
			text : colorDesc,
			color : iconColor,
			left : 100,
			textAlign : 'center'
		});
		row.add(title);
		row.add(desc);
		tableData[i] = row;
	}

	$.colorTable.setData(tableData);
}
loadColorTableView();
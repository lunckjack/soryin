var entypo = require('ti.entypo');
$.iconColor.text = entypo.fromCodePoint("0xe070");

var colors = [ {
	'colorName' : "缩影橙",
	'iconColor' : "#F39C12", // 缩影橙
	'colorDesc' : "缩影信息|功能"
}, {
	'colorName' : '石灰绿',
	'iconColor' : '#2ECC71', // 石灰绿
	'colorDesc' : '即将|正确|通行'
}, {
	'colorName' : '大洞蓝',
	'iconColor' : '#29ABE2', // 大洞蓝
	'colorDesc' : '一般信息'
}, {
	'colorName' : '石榴红',
	'iconColor' : '#BF382A', // 石榴红
	'colorDesc' : '结束|警告|危险'
}, {
	'colorName' : '小桃红',
	'iconColor' : '#ED1E79', // 小桃红
	'colorDesc' : '喜欢'
}, {
	'colorName' : '矿物灰',
	'iconColor' : '#494949', // 矿物灰
	'colorDesc' : '文字内容|陪衬'
}, {
	'colorName' : '石棉灰',
	'iconColor' : '#7F8C8D', // 石棉灰
	'colorDesc' : '其他辅助'
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
			text : colorName,
			left : 0,
			width : 110,
			height : 60,
			font : {
				fontSize : '24',
				fontFamily : "HiraginoSansGB-W3",
			},
			color : '#fff',
			backgroundColor : iconColor,
			textAlign:'center'
		});
		// 标题
		var desc = Ti.UI.createLabel({
			font : {
				fontSize : '24',
				fontFamily : 'HiraginoSansGB-W3',
			},
			text : colorDesc,
			color : iconColor,
			left : 130,
			textAlign:'center'
		});

		row.add(title);
		row.add(desc);
		tableData[i] = row;
	}

	$.colorTable.setData(tableData);
}
loadColorTableView();
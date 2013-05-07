var entypo = require('ti.entypo');
var ui = require('ui');
var tableData = [];
function loadSearchTable() {
	for ( var i = 0; i < 3; i++) {
		var icon;
		var desc;
		switch (i) {
		case 0:
			icon = "0xe066";
			desc = "搜身边";
			break;
		case 1:
			icon = "0xe065";
			desc = "搜云端";
			break;
		case 2:
			icon = "0xe07a";
			desc = "最新发布";
			break;
		}
		var row = Ti.UI
				.createTableViewRow({
					height : 60,
					selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
					backgroundColor : '#F39C12',
				});
		var viewRoot = Ti.UI.createView({
			width : Titanium.UI.FILL,
			height : Titanium.UI.SIZE,
		});
		var view = Ti.UI.createView({
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			layout : 'horizontal',
		});
		var icon = Ti.UI.createLabel({
			text : entypo.fromCodePoint(icon),
			font : {
				fontSize : '30',
				fontFamily : 'soryin'
			},
			color : "#fff"
		});
		var desc = Ti.UI.createLabel({
			text : desc,
			font : {
				fontSize : '25',
				fontFamily : 'HiraginoSansGB-W3',
			},
			color : "#fff",
			left:5
		});
		view.add(icon);
		view.add(desc);
		viewRoot.add(view);
		row.add(viewRoot);
		tableData[i] = row;
	}
	$.searchTable.setData(tableData);
}
loadSearchTable();

function onClickSearchTable(e) {

}
var entypo = require('ti.entypo');
var args = arguments[0] || {};

$.chk.color = "#000";
$.chk.text = entypo.fromCodePoint("0xe01c");
var checkState = false;
exports.init = function(callback) {
	$.checkbox.addEventListener('click', function() {
		checkState = !checkState;
		// $.chk.borderColor="#F39C12";
		changeState(checkState);
		callback(checkState);
	});
	_.extend($.chk, args);
};

function changeState(state) {
	$.chk.color = (state) ? Alloy.Globals.soryinSmGrayColor : "#fff";
	$.chk.text = (state) ? entypo.fromCodePoint("0xe064") : entypo
			.fromCodePoint("0xe01c");
}
// 设置被选中
exports.setChecked = function(state) {
	// alert();
	changeState(state);
	checkState=state;
}
// 是否被选选中
exports.isChecked = function() {
	return checkState;
}
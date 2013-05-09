var args = arguments[0] || {};

exports.init = function (callback) {
	$.lbl.text = args.message || 'Set "message" attribute to change';
	var checkState = false;
	$.checkbox.addEventListener('click', function() {
		checkState = !checkState;
		$.chk.borderColor="#F39C12";
		$.chk.text = (checkState) ? '\u2714' : '';
		callback(checkState);
	});
	_.extend($.chk, args);
	_.extend($.lbl, args);
};
var args = arguments[0] || {};
var ui = require('ui');
var direction = true;
exports.init = function(callback) {
	var checkState = false;
	//默认右边
	
//	$.switchbox.addEventListener('click', function() {
//		checkState = !checkState;
//		callback(checkState);
//		
////		scllow();
//	});

	$.circleView.addEventListener('click', function() {
		checkState = !checkState;
		callback(checkState);
		
//		scllow();
	});
	$.circleView.addEventListener('swipe', function(e) {
		if(e.direction=='left'){
			scllow();
		}else if(e.direction=='right'){
			scllow();
		}
	});
	_.extend($.switchbox, args);
	_.extend($.circleView, args);
};
function scllow() {
	if (direction) {
		//划向左边
		ui.rotate($.circleView, -50, 0, function() {
			
		});
		direction = false;
	} else {
		//划向右边
		ui.rotate($.circleView, 0, 0,function() {

		});
		direction = true;
	}
}
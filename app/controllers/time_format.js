$.ckTime.init(function(state) {

	if (state) {
		if ($.ckTime12.isChecked) {
			$.ckTime12.setChecked(false);
		}
		if ($.ckTime24.isChecked) {
			$.ckTime24.setChecked(false);
		}

		$.time.color = Alloy.Globals.soryinOrangeColor;
		$.labTime.color = Alloy.Globals.soryinOrangeColor;

		$.time12.color = '#000';
		$.labTime12.color = '#000';

		$.time24.color = '#000';
	} else {
		$.time.color = '#000';
		$.labTime.color = '#000';
	}

});

$.ckTime12.init(function(state) {

	if (state) {
		if ($.ckTime.isChecked) {
			$.ckTime.setChecked(false);
		}
		if ($.ckTime24.isChecked) {
			$.ckTime24.setChecked(false);
		}

		$.time12.color = Alloy.Globals.soryinOrangeColor;
		$.labTime12.color = Alloy.Globals.soryinOrangeColor;

		$.time.color = '#000';
		$.labTime.color = '#000';

		$.time24.color = '#000';
	} else {
		$.time12.color = '#000';
		$.labTime12.color = '#000';
	}
});

$.ckTime24.init(function(state) {

	if (state) {

		if ($.ckTime.isChecked) {
			$.ckTime.setChecked(false);
		}
		if ($.ckTime12.isChecked) {
			$.ckTime12.setChecked(false);
		}
		$.time24.color = Alloy.Globals.soryinOrangeColor;

		$.time.color = '#000';
		$.labTime.color = '#000';
		$.time12.color = '#000';
		$.labTime12.color = '#000';
	} else {
		$.time24.color = '#000';
	}
});

function getFormattedTime() {
	var amPM = '';
	var d = new Date();

	var time12Hour;
	var currentHour = d.getHours();

	// 计算12小时制
	if (currentHour < 12) {
		amPM = 'AM';
	} else {
		amPM = 'PM';
	}

	if (currentHour == 0) {
		time12Hour = 12;
	}

	if (currentHour > 12) {
		time12Hour = currentHour - 12;
	}

	var currentMinute = d.getMinutes();
	currentMinute = currentMinute + '';

	if (currentMinute.length == 1) {
		currentMinute = '0' + currentMinute;
	}

	$.time12.text = time12Hour + ':' + currentMinute + ' '
	$.labTime12.text = amPM;

	// 计算24小时
	$.time24.text = currentHour + ':' + currentMinute + ' ';

	$.time.text = currentHour + ':' + currentMinute + ' ';
}
// 定时器，5S 更新一次
var clockInterval = setInterval(getFormattedTime, 5000);
getFormattedTime();
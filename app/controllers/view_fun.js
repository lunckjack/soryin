var entypo = require('ti.entypo');
$.iconPublish.text = entypo.fromCodePoint("0xe067");
$.iconSense.text = entypo.fromCodePoint("0xe06b");

$.viewPublish.addEventListener('click', function(e) {
	$.trigger('onSwitchPublish', e);
});

$.viewSense.addEventListener('click', function(e) {
	$.trigger('onSwitchSense', e);
});
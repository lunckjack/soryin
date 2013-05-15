$.ckSmall.init(function(state) {
	if (state) {
		if ($.ckMidnum.isChecked) {
			$.ckMidnum.setChecked(false);
		}
		if ($.ckBig.isChecked) {
			$.ckBig.setChecked(false);
		}

		$.labSmall.color = Alloy.Globals.soryinOrangeColor;
		$.labMidum.color = '#000';
		$.labBig.color = '#000';
	} else {
		$.labSmall.color = '#000';
	}

});

$.ckMidnum.init(function(state) {
	if (state) {
		if ($.ckSmall.isChecked) {
			$.ckSmall.setChecked(false);
		}
		if ($.ckBig.isChecked) {
			$.ckBig.setChecked(false);
		}
		$.labMidum.color = Alloy.Globals.soryinOrangeColor;
		$.labSmall.color = '#000';
		$.labBig.color = '#000';
	} else {
		$.labMidum.color = '#000';
	}

});

$.ckBig.init(function(state) {
	if (state) {
		if ($.ckSmall.isChecked) {
			$.ckSmall.setChecked(false);
		}
		if ($.ckMidnum.isChecked) {
			$.ckMidnum.setChecked(false);
		}
		$.labBig.color = Alloy.Globals.soryinOrangeColor;
		$.labMidum.color = '#000';
		$.labSmall.color = '#000';
	} else {

		$.labBig.color = '#000';
	}

});
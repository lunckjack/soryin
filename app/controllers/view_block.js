var entypo = require('ti.entypo');
var curHeight = Ti.Platform.displayCaps.platformHeight;
var curWidth = Ti.Platform.displayCaps.platformWidth;

setIconFont();//加载图标文字
function setIconFont(){
	$.icon_V.text=entypo.fromCodePoint("0xe06f");
	$.text_eventType.text="活动";
	$.icon_eventType.text=entypo.fromCodePoint("0xe008");
	
	//时间
	$.viewTimeAndLocation_Time_icon.text=entypo.fromCodePoint("0xe016");
	$.viewTimeAndLocation_Time_textView_bigText.text="23";
	$.viewTimeAndLocation_Time_textView_smallText.text="天后";
	
	//距离
	$.viewTimeAndLocation_Location_icon.text=entypo.fromCodePoint("0xe009");
	$.viewTimeAndLocation_Location_textView_bigText.text="17";
	$.viewTimeAndLocation_Location_textView_smallText.text="公里";
	
	//机构
	$.viewEntity_organization_icon.text=entypo.fromCodePoint("0xe017");
	$.viewEntity_organization_textView_bigText.text="2";
	$.viewEntity_organization_textView_smallText.text="机构";
	
	//人物
	$.viewEntity_personal_icon.text=entypo.fromCodePoint("0xe007");
	$.viewEntity_personal_textView_bigText.text="1";
	$.viewEntity_personal_textView_smallText.text="人物";
	
	//列表
	$.viewFoot_top_activityList_icon.text=entypo.fromCodePoint("0xe019");
	$.viewFoot_top_activityList_textView_bigText.text='4';
	$.viewFoot_top_activityList_textView_smallText.text='列表';
	
	//条件
	$.viewFoot_top_condition_icon.text=entypo.fromCodePoint("0xe012");
	$.viewFoot_top_condition_textView_bigText.text='0';
	$.viewFoot_top_condition_textView_smallText.text='条件';
	
	//步骤
	$.viewFoot_foot_steps_icon.text=entypo.fromCodePoint("0xe001");
	$.viewFoot_foot_steps_textView_bigText.text='5';
	$.viewFoot_foot_steps_textView_smallText.text='步骤';
	
	//限制
	$.viewFoot_foot_constrain_icon.text=entypo.fromCodePoint("0xe011");
	$.viewFoot_foot_constrain_textView_bigText.text='3';
	$.viewFoot_foot_constrain_textView_smallText.text='限制';
	
}

function Controller() {
    function setIconFont() {
        $.icon_V.text = entypo.fromCodePoint("0xe06f");
        $.text_eventType.text = "活动";
        $.icon_eventType.text = entypo.fromCodePoint("0xe008");
        $.viewTimeAndLocation_Time_icon.text = entypo.fromCodePoint("0xe016");
        $.viewTimeAndLocation_Time_textView_bigText.text = "23";
        $.viewTimeAndLocation_Time_textView_smallText.text = "天后";
        $.viewTimeAndLocation_Location_icon.text = entypo.fromCodePoint("0xe009");
        $.viewTimeAndLocation_Location_textView_bigText.text = "17";
        $.viewTimeAndLocation_Location_textView_smallText.text = "公里";
        $.viewEntity_organization_icon.text = entypo.fromCodePoint("0xe017");
        $.viewEntity_organization_textView_bigText.text = "2";
        $.viewEntity_organization_textView_smallText.text = "机构";
        $.viewEntity_personal_icon.text = entypo.fromCodePoint("0xe007");
        $.viewEntity_personal_textView_bigText.text = "1";
        $.viewEntity_personal_textView_smallText.text = "人物";
        $.viewFoot_top_activityList_icon.text = entypo.fromCodePoint("0xe019");
        $.viewFoot_top_activityList_textView_bigText.text = "4";
        $.viewFoot_top_activityList_textView_smallText.text = "列表";
        $.viewFoot_top_condition_icon.text = entypo.fromCodePoint("0xe012");
        $.viewFoot_top_condition_textView_bigText.text = "0";
        $.viewFoot_top_condition_textView_smallText.text = "条件";
        $.viewFoot_foot_steps_icon.text = entypo.fromCodePoint("0xe001");
        $.viewFoot_foot_steps_textView_bigText.text = "5";
        $.viewFoot_foot_steps_textView_smallText.text = "步骤";
        $.viewFoot_foot_constrain_icon.text = entypo.fromCodePoint("0xe011");
        $.viewFoot_foot_constrain_textView_bigText.text = "3";
        $.viewFoot_foot_constrain_textView_smallText.text = "限制";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_block = Ti.UI.createWindow({
        backgroundColor: "F7F3F2",
        id: "view_block"
    });
    $.__views.view_block && $.addTopLevelView($.__views.view_block);
    var __alloyId30 = [];
    $.__views.__alloyId31 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId31"
    });
    __alloyId30.push($.__views.__alloyId31);
    $.__views.viewTop = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: "110",
        id: "viewTop"
    });
    $.__views.__alloyId31.add($.__views.viewTop);
    $.__views.viewTop_viewEventType = Ti.UI.createView({
        backgroundColor: Alloy.Globals.btn_orange,
        width: 110,
        height: 110,
        left: 0,
        id: "viewTop_viewEventType",
        layout: "horizontal"
    });
    $.__views.viewTop.add($.__views.viewTop_viewEventType);
    $.__views.icon_V = Ti.UI.createLabel({
        width: 15,
        height: 15,
        font: {
            fontSize: "15",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.near_whilte,
        left: 5,
        top: 5,
        id: "icon_V"
    });
    $.__views.viewTop_viewEventType.add($.__views.icon_V);
    $.__views.viewTop_viewEventType_iconView = Ti.UI.createView({
        id: "viewTop_viewEventType_iconView",
        layout: "vertical"
    });
    $.__views.viewTop_viewEventType.add($.__views.viewTop_viewEventType_iconView);
    $.__views.icon_eventType = Ti.UI.createLabel({
        width: 50,
        height: 50,
        font: {
            fontSize: "49",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.whilte,
        left: 10,
        top: 10,
        id: "icon_eventType"
    });
    $.__views.viewTop_viewEventType_iconView.add($.__views.icon_eventType);
    $.__views.text_eventType = Ti.UI.createLabel({
        color: Alloy.Globals.whilte,
        font: {
            fontSize: "28.5",
            fontFamily: "冬青黑体简体中文"
        },
        top: 10,
        left: 10,
        id: "text_eventType"
    });
    $.__views.viewTop_viewEventType_iconView.add($.__views.text_eventType);
    $.__views.img_default = Ti.UI.createLabel({
        id: "img_default"
    });
    $.__views.viewTop.add($.__views.img_default);
    $.__views.__alloyId32 = Ti.UI.createScrollView({
        showVerticalScrollIndicator: "true",
        layout: "vertical",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.viewTimeAndLocation = Ti.UI.createView({
        height: 100,
        width: Titanium.UI.FILL,
        borderRadius: 6,
        borderColor: Alloy.Globals.gray,
        left: 10,
        top: 10,
        right: 10,
        id: "viewTimeAndLocation",
        layout: "horizontal"
    });
    $.__views.__alloyId32.add($.__views.viewTimeAndLocation);
    $.__views.viewTimeAndLocation_Time = Ti.UI.createView({
        width: 150,
        height: 100,
        id: "viewTimeAndLocation_Time",
        layout: "horizontal"
    });
    $.__views.viewTimeAndLocation.add($.__views.viewTimeAndLocation_Time);
    $.__views.viewTimeAndLocation_Time_icon = Ti.UI.createLabel({
        width: 60,
        height: 60,
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.green,
        left: 15,
        top: 20,
        id: "viewTimeAndLocation_Time_icon"
    });
    $.__views.viewTimeAndLocation_Time.add($.__views.viewTimeAndLocation_Time_icon);
    $.__views.viewTimeAndLocation_Time_textView = Ti.UI.createView({
        id: "viewTimeAndLocation_Time_textView",
        layout: "vertical"
    });
    $.__views.viewTimeAndLocation_Time.add($.__views.viewTimeAndLocation_Time_textView);
    $.__views.viewTimeAndLocation_Time_textView_bigText = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "Orbitron"
        },
        color: Alloy.Globals.green,
        left: 17.5,
        top: 20,
        id: "viewTimeAndLocation_Time_textView_bigText"
    });
    $.__views.viewTimeAndLocation_Time_textView.add($.__views.viewTimeAndLocation_Time_textView_bigText);
    $.__views.viewTimeAndLocation_Time_textView_smallText = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "冬青黑体简体中文"
        },
        color: Alloy.Globals.gray,
        left: 17,
        top: 0,
        id: "viewTimeAndLocation_Time_textView_smallText"
    });
    $.__views.viewTimeAndLocation_Time_textView.add($.__views.viewTimeAndLocation_Time_textView_smallText);
    $.__views.viewTimeAndLocation_Location = Ti.UI.createView({
        width: 150,
        height: 100,
        id: "viewTimeAndLocation_Location",
        layout: "horizontal"
    });
    $.__views.viewTimeAndLocation.add($.__views.viewTimeAndLocation_Location);
    $.__views.viewTimeAndLocation_Location_icon = Ti.UI.createLabel({
        width: 60,
        height: 60,
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.green,
        left: 15,
        top: 20,
        id: "viewTimeAndLocation_Location_icon",
        layout: "vertical"
    });
    $.__views.viewTimeAndLocation_Location.add($.__views.viewTimeAndLocation_Location_icon);
    $.__views.viewTimeAndLocation_Location_textView = Ti.UI.createView({
        id: "viewTimeAndLocation_Location_textView",
        layout: "vertical"
    });
    $.__views.viewTimeAndLocation_Location.add($.__views.viewTimeAndLocation_Location_textView);
    $.__views.viewTimeAndLocation_Location_textView_bigText = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "Orbitron"
        },
        color: Alloy.Globals.green,
        left: 17.5,
        top: 20,
        id: "viewTimeAndLocation_Location_textView_bigText"
    });
    $.__views.viewTimeAndLocation_Location_textView.add($.__views.viewTimeAndLocation_Location_textView_bigText);
    $.__views.viewTimeAndLocation_Location_textView_smallText = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "冬青黑体简体中文"
        },
        color: Alloy.Globals.green,
        left: 17,
        top: 0,
        id: "viewTimeAndLocation_Location_textView_smallText"
    });
    $.__views.viewTimeAndLocation_Location_textView.add($.__views.viewTimeAndLocation_Location_textView_smallText);
    $.__views.viewEntity = Ti.UI.createView({
        height: 100,
        width: Titanium.UI.FILL,
        borderRadius: 6,
        borderColor: Alloy.Globals.gray,
        left: 10,
        top: 10,
        right: 10,
        id: "viewEntity",
        layout: "horizontal"
    });
    $.__views.__alloyId32.add($.__views.viewEntity);
    $.__views.viewEntity_organization = Ti.UI.createView({
        width: 150,
        height: 100,
        id: "viewEntity_organization",
        layout: "horizontal"
    });
    $.__views.viewEntity.add($.__views.viewEntity_organization);
    $.__views.viewEntity_organization_icon = Ti.UI.createLabel({
        width: 60,
        height: 60,
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.blue_grey,
        left: 15,
        top: 20,
        id: "viewEntity_organization_icon"
    });
    $.__views.viewEntity_organization.add($.__views.viewEntity_organization_icon);
    $.__views.viewEntity_organization_textView = Ti.UI.createView({
        id: "viewEntity_organization_textView",
        layout: "vertical"
    });
    $.__views.viewEntity_organization.add($.__views.viewEntity_organization_textView);
    $.__views.viewEntity_organization_textView_bigText = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "Orbitron"
        },
        color: "7F8C8D",
        left: 17.5,
        top: 20,
        id: "viewEntity_organization_textView_bigText"
    });
    $.__views.viewEntity_organization_textView.add($.__views.viewEntity_organization_textView_bigText);
    $.__views.viewEntity_organization_textView_smallText = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "冬青黑体简体中文"
        },
        color: Alloy.Globals.gray,
        left: 17,
        top: 0,
        id: "viewEntity_organization_textView_smallText"
    });
    $.__views.viewEntity_organization_textView.add($.__views.viewEntity_organization_textView_smallText);
    $.__views.viewEntity_personal = Ti.UI.createView({
        width: 150,
        height: 100,
        id: "viewEntity_personal",
        layout: "horizontal"
    });
    $.__views.viewEntity.add($.__views.viewEntity_personal);
    $.__views.viewEntity_personal_icon = Ti.UI.createLabel({
        width: 60,
        height: 60,
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.blue_grey,
        left: 15,
        top: 20,
        id: "viewEntity_personal_icon"
    });
    $.__views.viewEntity_personal.add($.__views.viewEntity_personal_icon);
    $.__views.viewEntity_personal_textView = Ti.UI.createView({
        id: "viewEntity_personal_textView",
        layout: "vertical"
    });
    $.__views.viewEntity_personal.add($.__views.viewEntity_personal_textView);
    $.__views.viewEntity_personal_textView_bigText = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "Orbitron"
        },
        color: "7F8C8D",
        left: 17.5,
        top: 20,
        id: "viewEntity_personal_textView_bigText"
    });
    $.__views.viewEntity_personal_textView.add($.__views.viewEntity_personal_textView_bigText);
    $.__views.viewEntity_personal_textView_smallText = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "冬青黑体简体中文"
        },
        color: Alloy.Globals.gray,
        left: 17,
        top: 0,
        id: "viewEntity_personal_textView_smallText"
    });
    $.__views.viewEntity_personal_textView.add($.__views.viewEntity_personal_textView_smallText);
    $.__views.viewFoot = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        borderRadius: 6,
        borderColor: Alloy.Globals.gray,
        left: 10,
        top: 10,
        right: 10,
        bottom: 10,
        id: "viewFoot",
        layout: "vertical"
    });
    $.__views.__alloyId32.add($.__views.viewFoot);
    $.__views.viewFoot_top = Ti.UI.createView({
        height: 100,
        width: Titanium.UI.FILL,
        id: "viewFoot_top",
        layout: "horizontal"
    });
    $.__views.viewFoot.add($.__views.viewFoot_top);
    $.__views.viewFoot_top_condition = Ti.UI.createView({
        width: 150,
        height: 100,
        id: "viewFoot_top_condition",
        layout: "horizontal"
    });
    $.__views.viewFoot_top.add($.__views.viewFoot_top_condition);
    $.__views.viewFoot_top_activityList_icon = Ti.UI.createLabel({
        width: 60,
        height: 60,
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.blue_grey,
        left: 15,
        top: 20,
        id: "viewFoot_top_activityList_icon"
    });
    $.__views.viewFoot_top_condition.add($.__views.viewFoot_top_activityList_icon);
    $.__views.viewFoot_top_activityList_textView = Ti.UI.createView({
        id: "viewFoot_top_activityList_textView",
        layout: "vertical"
    });
    $.__views.viewFoot_top_condition.add($.__views.viewFoot_top_activityList_textView);
    $.__views.viewFoot_top_activityList_textView_bigText = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "Orbitron"
        },
        color: "7F8C8D",
        left: 17.5,
        top: 20,
        id: "viewFoot_top_activityList_textView_bigText"
    });
    $.__views.viewFoot_top_activityList_textView.add($.__views.viewFoot_top_activityList_textView_bigText);
    $.__views.viewFoot_top_activityList_textView_smallText = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "冬青黑体简体中文"
        },
        color: Alloy.Globals.gray,
        left: 17,
        top: 0,
        id: "viewFoot_top_activityList_textView_smallText"
    });
    $.__views.viewFoot_top_activityList_textView.add($.__views.viewFoot_top_activityList_textView_smallText);
    $.__views.viewFoot_top_condition = Ti.UI.createView({
        width: 150,
        height: 100,
        id: "viewFoot_top_condition",
        layout: "horizontal"
    });
    $.__views.viewFoot_top.add($.__views.viewFoot_top_condition);
    $.__views.viewFoot_top_condition_icon = Ti.UI.createLabel({
        width: 60,
        height: 60,
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.blue_grey,
        left: 15,
        top: 20,
        id: "viewFoot_top_condition_icon"
    });
    $.__views.viewFoot_top_condition.add($.__views.viewFoot_top_condition_icon);
    $.__views.viewFoot_top_condition_textView = Ti.UI.createView({
        id: "viewFoot_top_condition_textView",
        layout: "vertical"
    });
    $.__views.viewFoot_top_condition.add($.__views.viewFoot_top_condition_textView);
    $.__views.viewFoot_top_condition_textView_bigText = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "Orbitron"
        },
        color: "7F8C8D",
        left: 17.5,
        top: 20,
        id: "viewFoot_top_condition_textView_bigText"
    });
    $.__views.viewFoot_top_condition_textView.add($.__views.viewFoot_top_condition_textView_bigText);
    $.__views.viewFoot_top_condition_textView_smallText = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "冬青黑体简体中文"
        },
        color: Alloy.Globals.gray,
        left: 17,
        top: 0,
        id: "viewFoot_top_condition_textView_smallText"
    });
    $.__views.viewFoot_top_condition_textView.add($.__views.viewFoot_top_condition_textView_smallText);
    $.__views.viewFoot_foot = Ti.UI.createView({
        height: 100,
        width: Titanium.UI.FILL,
        id: "viewFoot_foot",
        layout: "horizontal"
    });
    $.__views.viewFoot.add($.__views.viewFoot_foot);
    $.__views.viewFoot_foot_steps = Ti.UI.createView({
        width: 150,
        height: 100,
        id: "viewFoot_foot_steps",
        layout: "horizontal"
    });
    $.__views.viewFoot_foot.add($.__views.viewFoot_foot_steps);
    $.__views.viewFoot_foot_steps_icon = Ti.UI.createLabel({
        width: 60,
        height: 60,
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.blue_grey,
        left: 15,
        top: 20,
        id: "viewFoot_foot_steps_icon"
    });
    $.__views.viewFoot_foot_steps.add($.__views.viewFoot_foot_steps_icon);
    $.__views.viewFoot_foot_steps_textView = Ti.UI.createView({
        id: "viewFoot_foot_steps_textView",
        layout: "vertical"
    });
    $.__views.viewFoot_foot_steps.add($.__views.viewFoot_foot_steps_textView);
    $.__views.viewFoot_foot_steps_textView_bigText = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "Orbitron"
        },
        color: "7F8C8D",
        left: 17.5,
        top: 20,
        id: "viewFoot_foot_steps_textView_bigText"
    });
    $.__views.viewFoot_foot_steps_textView.add($.__views.viewFoot_foot_steps_textView_bigText);
    $.__views.viewFoot_foot_steps_textView_smallText = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "冬青黑体简体中文"
        },
        color: Alloy.Globals.gray,
        left: 17,
        top: 0,
        id: "viewFoot_foot_steps_textView_smallText"
    });
    $.__views.viewFoot_foot_steps_textView.add($.__views.viewFoot_foot_steps_textView_smallText);
    $.__views.viewFoot_foot_constrain = Ti.UI.createView({
        width: 150,
        height: 100,
        id: "viewFoot_foot_constrain",
        layout: "horizontal"
    });
    $.__views.viewFoot_foot.add($.__views.viewFoot_foot_constrain);
    $.__views.viewFoot_foot_constrain_icon = Ti.UI.createLabel({
        width: 60,
        height: 60,
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: Alloy.Globals.blue_grey,
        left: 15,
        top: 20,
        id: "viewFoot_foot_constrain_icon"
    });
    $.__views.viewFoot_foot_constrain.add($.__views.viewFoot_foot_constrain_icon);
    $.__views.viewFoot_foot_constrain_textView = Ti.UI.createView({
        id: "viewFoot_foot_constrain_textView",
        layout: "vertical"
    });
    $.__views.viewFoot_foot_constrain.add($.__views.viewFoot_foot_constrain_textView);
    $.__views.viewFoot_foot_constrain_textView_bigText = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "Orbitron"
        },
        color: "7F8C8D",
        left: 17.5,
        top: 20,
        id: "viewFoot_foot_constrain_textView_bigText"
    });
    $.__views.viewFoot_foot_constrain_textView.add($.__views.viewFoot_foot_constrain_textView_bigText);
    $.__views.viewFoot_foot_constrain_textView_smallText = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "冬青黑体简体中文"
        },
        color: Alloy.Globals.gray,
        left: 17,
        top: 0,
        id: "viewFoot_foot_constrain_textView_smallText"
    });
    $.__views.viewFoot_foot_constrain_textView.add($.__views.viewFoot_foot_constrain_textView_smallText);
    $.__views.maskview = Ti.UI.createView({
        backgroundColor: Alloy.Globals.black,
        opacity: 0,
        id: "maskview",
        visible: "false"
    });
    $.__views.__alloyId31.add($.__views.maskview);
    $.__views.actionview = Ti.UI.createView({
        backgroundColor: "transparent",
        id: "actionview"
    });
    $.__views.maskview.add($.__views.actionview);
    $.__views.m2 = Ti.UI.createView({
        height: "200dp",
        width: "310dp",
        backgroundColor: "#494949",
        bottom: "0",
        id: "m2",
        layout: "vertical"
    });
    $.__views.actionview.add($.__views.m2);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId33"
    });
    $.__views.m2.add($.__views.__alloyId33);
    $.__views.email = Ti.UI.createView({
        id: "email"
    });
    $.__views.__alloyId33.add($.__views.email);
    $.__views.toEmail = Ti.UI.createButton({
        width: "57dp",
        height: "57dp",
        top: 0,
        image: "/imgs/share/icon-email.png",
        id: "toEmail"
    });
    $.__views.email.add($.__views.toEmail);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        text: "电子邮件",
        id: "__alloyId34"
    });
    $.__views.email.add($.__views.__alloyId34);
    $.__views.msg = Ti.UI.createView({
        id: "msg"
    });
    $.__views.__alloyId33.add($.__views.msg);
    $.__views.toMsg = Ti.UI.createButton({
        width: "57dp",
        height: "57dp",
        top: 0,
        image: "/imgs/share/icon-sms.png",
        id: "toMsg"
    });
    $.__views.msg.add($.__views.toMsg);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        text: "短信",
        id: "__alloyId35"
    });
    $.__views.msg.add($.__views.__alloyId35);
    $.__views.evernote = Ti.UI.createView({
        id: "evernote"
    });
    $.__views.__alloyId33.add($.__views.evernote);
    $.__views.toEvernote = Ti.UI.createButton({
        width: "57dp",
        height: "57dp",
        top: 0,
        image: "/imgs/share/icon-evernote.png",
        id: "toEvernote"
    });
    $.__views.evernote.add($.__views.toEvernote);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        text: "印象笔记",
        id: "__alloyId36"
    });
    $.__views.evernote.add($.__views.__alloyId36);
    $.__views.line = Ti.UI.createView({
        width: "310dp",
        height: "1",
        border: "1",
        backgroundColor: Alloy.Globals.whilte,
        top: "5dp",
        bottom: "5dp",
        id: "line"
    });
    $.__views.m2.add($.__views.line);
    $.__views.__alloyId37 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId37"
    });
    $.__views.m2.add($.__views.__alloyId37);
    $.__views.msg = Ti.UI.createView({
        id: "msg"
    });
    $.__views.__alloyId37.add($.__views.msg);
    $.__views.toWeixin = Ti.UI.createButton({
        width: "57dp",
        height: "57dp",
        top: 0,
        image: "/imgs/share/icon-wechat.png",
        id: "toWeixin"
    });
    $.__views.msg.add($.__views.toWeixin);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        text: "微信",
        id: "__alloyId38"
    });
    $.__views.msg.add($.__views.__alloyId38);
    $.__views.copy = Ti.UI.createView({
        id: "copy"
    });
    $.__views.__alloyId37.add($.__views.copy);
    $.__views.toWeibo = Ti.UI.createButton({
        width: "57dp",
        height: "57dp",
        top: 0,
        image: "/imgs/share/icon-weibo.png",
        id: "toWeibo"
    });
    $.__views.copy.add($.__views.toWeibo);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "微博",
        id: "__alloyId39"
    });
    $.__views.copy.add($.__views.__alloyId39);
    $.__views.scrollable = Ti.UI.createScrollableView({
        backgroundColor: Alloy.Globals.reg_gray,
        views: __alloyId30,
        id: "scrollable"
    });
    $.__views.view_block.add($.__views.scrollable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    Ti.Platform.displayCaps.platformHeight;
    Ti.Platform.displayCaps.platformWidth;
    setIconFont();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
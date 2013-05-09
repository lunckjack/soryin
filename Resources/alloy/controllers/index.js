function Controller() {
    function setIconFont() {
        $.icon_me.text = entypo.fromCodePoint("0xe007");
        $.icon_me.color = "#fff";
        $.icon_cover.text = entypo.fromCodePoint("0xf1b2");
        $.icon_cover.color = "#ccc";
        $.icon_express.text = entypo.fromCodePoint("0xf2b0");
        $.icon_express.color = "#29ABE2";
        $.expressNum.color = "#29ABE2";
        $.lab_express.color = "#29ABE2";
        $.icon_level.text = entypo.fromCodePoint("0xf2e6");
        $.icon_level.color = "#29ABE2";
        $.levelNum.color = "#29ABE2";
        $.lab_level.color = "#29ABE2";
        $.icon_attention.text = entypo.fromCodePoint("0xe02d");
        $.icon_attention.color = "#ED1E79";
        $.attentionNum.color = "#ED1E79";
        $.lab_attention.color = "#ED1E79";
        $.icon_like.text = entypo.fromCodePoint("0xe029");
        $.icon_like.color = "#494949";
        $.likePercent.color = "#494949";
        $.lab_like.color = "#494949";
        $.icon_body.text = entypo.fromCodePoint("0xe044");
        $.icon_body.color = "#494949";
        $.bodyPercent.color = "#494949";
        $.lab_body.color = "#494949";
        $.backBtn.text = entypo.fromCodePoint("0xe023");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#f2f2f2",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.viewTop = Ti.UI.createView({
        height: "110",
        width: Titanium.UI.FILL,
        id: "viewTop"
    });
    $.__views.__alloyId2.add($.__views.viewTop);
    $.__views.view_left = Ti.UI.createView({
        height: "110",
        layout: "vertical",
        width: "110",
        backgroundColor: "#F39C12",
        left: 0,
        id: "view_left"
    });
    $.__views.viewTop.add($.__views.view_left);
    $.__views.icon_me = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        id: "icon_me"
    });
    $.__views.view_left.add($.__views.icon_me);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        color: "#fff",
        text: "我",
        id: "__alloyId3"
    });
    $.__views.view_left.add($.__views.__alloyId3);
    $.__views.view_right = Ti.UI.createView({
        height: "110",
        layout: "vertical",
        backgroundColor: "#fff",
        right: 0,
        id: "view_right"
    });
    $.__views.viewTop.add($.__views.view_right);
    $.__views.icon_cover = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        id: "icon_cover"
    });
    $.__views.view_right.add($.__views.icon_cover);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "#ccc",
        text: "添加封面",
        id: "__alloyId4"
    });
    $.__views.view_right.add($.__views.__alloyId4);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showHorizontalScrollIndifcator: "true",
        showVerticalScrollIndicator: "true",
        layout: "vertical"
    });
    $.__views.__alloyId2.add($.__views.scrollView);
    $.__views.viewContent = Ti.UI.createView({
        height: "200",
        width: Titanium.UI.FILL,
        backgroundColor: "#fff",
        borderRadius: "10",
        borderWidth: "1",
        borderColor: "#f2f2f2",
        top: "10",
        left: "10",
        right: "10",
        id: "viewContent"
    });
    $.__views.scrollView.add($.__views.viewContent);
    $.__views.view_express = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        left: 10,
        top: 10,
        id: "view_express"
    });
    $.__views.viewContent.add($.__views.view_express);
    $.__views.icon_express = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        id: "icon_express"
    });
    $.__views.view_express.add($.__views.icon_express);
    $.__views.__alloyId5 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId5"
    });
    $.__views.view_express.add($.__views.__alloyId5);
    $.__views.expressNum = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        text: "36",
        id: "expressNum"
    });
    $.__views.__alloyId5.add($.__views.expressNum);
    $.__views.lab_express = Ti.UI.createLabel({
        text: "经验",
        id: "lab_express"
    });
    $.__views.__alloyId5.add($.__views.lab_express);
    $.__views.view_level = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 10,
        right: 10,
        id: "view_level"
    });
    $.__views.viewContent.add($.__views.view_level);
    $.__views.icon_level = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        id: "icon_level"
    });
    $.__views.view_level.add($.__views.icon_level);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId6"
    });
    $.__views.view_level.add($.__views.__alloyId6);
    $.__views.levelNum = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        text: "1",
        id: "levelNum"
    });
    $.__views.__alloyId6.add($.__views.levelNum);
    $.__views.lab_level = Ti.UI.createLabel({
        text: "级别",
        id: "lab_level"
    });
    $.__views.__alloyId6.add($.__views.lab_level);
    $.__views.view_attention = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        left: 10,
        bottom: 0,
        id: "view_attention"
    });
    $.__views.viewContent.add($.__views.view_attention);
    $.__views.icon_attention = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        id: "icon_attention"
    });
    $.__views.view_attention.add($.__views.icon_attention);
    $.__views.__alloyId7 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId7"
    });
    $.__views.view_attention.add($.__views.__alloyId7);
    $.__views.attentionNum = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        text: "5",
        id: "attentionNum"
    });
    $.__views.__alloyId7.add($.__views.attentionNum);
    $.__views.lab_attention = Ti.UI.createLabel({
        text: "关注",
        id: "lab_attention"
    });
    $.__views.__alloyId7.add($.__views.lab_attention);
    $.__views.viewBoottom = Ti.UI.createView({
        height: "100",
        width: Titanium.UI.FILL,
        backgroundColor: "#fff",
        borderRadius: "10",
        borderWidth: "1",
        borderColor: "#f2f2f2",
        top: "10",
        left: "10",
        right: "10",
        id: "viewBoottom"
    });
    $.__views.scrollView.add($.__views.viewBoottom);
    $.__views.view_like = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        left: 10,
        top: 10,
        id: "view_like"
    });
    $.__views.viewBoottom.add($.__views.view_like);
    $.__views.icon_like = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        id: "icon_like"
    });
    $.__views.view_like.add($.__views.icon_like);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId8"
    });
    $.__views.view_like.add($.__views.__alloyId8);
    $.__views.likePercent = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        text: "0%",
        id: "likePercent"
    });
    $.__views.__alloyId8.add($.__views.likePercent);
    $.__views.lab_like = Ti.UI.createLabel({
        text: "喜好",
        id: "lab_like"
    });
    $.__views.__alloyId8.add($.__views.lab_like);
    $.__views.view_body = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 10,
        right: 10,
        id: "view_body"
    });
    $.__views.viewBoottom.add($.__views.view_body);
    $.__views.icon_body = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        id: "icon_body"
    });
    $.__views.view_body.add($.__views.icon_body);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId9"
    });
    $.__views.view_body.add($.__views.__alloyId9);
    $.__views.bodyPercent = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        text: "0%",
        id: "bodyPercent"
    });
    $.__views.__alloyId9.add($.__views.bodyPercent);
    $.__views.lab_body = Ti.UI.createLabel({
        text: "身体",
        id: "lab_body"
    });
    $.__views.__alloyId9.add($.__views.lab_body);
    $.__views.__alloyId10 = Ti.UI.createView({
        id: "__alloyId10"
    });
    __alloyId1.push($.__views.__alloyId10);
    $.__views.content = Ti.UI.createView({
        id: "content"
    });
    $.__views.__alloyId10.add($.__views.content);
    $.__views.backBtn = Ti.UI.createLabel({
        font: {
            fontSize: "70",
            fontFamily: "soryin"
        },
        bottom: -10,
        left: 0,
        color: "#ccc",
        opacity: "0.8",
        id: "backBtn"
    });
    $.__views.__alloyId10.add($.__views.backBtn);
    $.__views.scrollable = Ti.UI.createScrollableView({
        views: __alloyId1,
        id: "scrollable",
        scrollingEnabled: "false"
    });
    $.__views.index.add($.__views.scrollable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    Ti.Platform.displayCaps.platformHeight;
    var curWidth = Ti.Platform.displayCaps.platformWidth;
    $.view_right.width = curWidth - 110;
    var curview = "";
    $.view_left.addEventListener("click", function() {
        var setView = Alloy.createController("view_location").getView();
        "" != curview && $.content.remove(curview);
        curview = setView;
        $.content.add(curview);
        $.scrollable.scrollToView(1);
    });
    $.view_express.addEventListener("click", function() {
        var recordView = Alloy.createController("view_record").getView();
        "" != curview && $.content.remove(curview);
        curview = recordView;
        $.content.add(curview);
        $.scrollable.scrollToView(1);
    });
    $.backBtn.addEventListener("click", function() {
        $.scrollable.scrollToView(0);
    });
    setIconFont();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
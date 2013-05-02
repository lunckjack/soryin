function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#f2f2f2",
        top: 0,
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
        width: Titanium.UI.FILL,
        height: "110",
        layout: "horizontal",
        id: "viewTop"
    });
    $.__views.__alloyId2.add($.__views.viewTop);
    $.__views.view_myself = Ti.UI.createView({
        width: "110",
        height: "110",
        backgroundColor: "#F39C12",
        layout: "vertical",
        id: "view_myself"
    });
    $.__views.viewTop.add($.__views.view_myself);
    $.__views.lab_myself = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        id: "lab_myself"
    });
    $.__views.view_myself.add($.__views.lab_myself);
    $.__views.label1 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        color: "#ffffff",
        id: "label1",
        text: "我"
    });
    $.__views.view_myself.add($.__views.label1);
    $.__views.view_addPage = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: "110",
        backgroundColor: "#ffffff",
        layout: "vertical",
        id: "view_addPage"
    });
    $.__views.viewTop.add($.__views.view_addPage);
    $.__views.defView = Ti.UI.createView({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "defView",
        layout: "vertical"
    });
    $.__views.view_addPage.add($.__views.defView);
    $.__views.lab_addPage = Ti.UI.createLabel({
        color: "#cccccc",
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        id: "lab_addPage"
    });
    $.__views.defView.add($.__views.lab_addPage);
    $.__views.label1 = Ti.UI.createLabel({
        id: "label1",
        text: "添加封面"
    });
    $.__views.defView.add($.__views.label1);
    $.__views.viewFun = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "viewFun"
    });
    $.__views.__alloyId2.add($.__views.viewFun);
    $.__views.scrollView = Ti.UI.createScrollView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "scrollView",
        showHorizontalScrollIndifcator: "true",
        showVerticalScrollIndicator: "true",
        layout: "vertical"
    });
    $.__views.__alloyId2.add($.__views.scrollView);
    $.__views.viewContent = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: "200",
        backgroundColor: "#ffffff",
        borderRadius: "10",
        borderWidth: "2",
        borderColor: "#f2f2f2",
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        layout: "vertical",
        id: "viewContent"
    });
    $.__views.scrollView.add($.__views.viewContent);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizontal",
        height: "110",
        id: "__alloyId3"
    });
    $.__views.viewContent.add($.__views.__alloyId3);
    $.__views.vv1 = Ti.UI.createView({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        top: 10,
        id: "vv1",
        layout: "horizontal"
    });
    $.__views.__alloyId3.add($.__views.vv1);
    $.__views.experienceIcon = Ti.UI.createLabel({
        color: "#28aaff",
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        id: "experienceIcon"
    });
    $.__views.vv1.add($.__views.experienceIcon);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "vertical",
        left: "5",
        id: "__alloyId4"
    });
    $.__views.vv1.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "#28aaff",
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        text: "36",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "经验",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.vv2 = Ti.UI.createView({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        top: 10,
        id: "vv2",
        layout: "horizontal",
        x: "x"
    });
    $.__views.__alloyId3.add($.__views.vv2);
    $.__views.levelIcon = Ti.UI.createLabel({
        color: "#28aaff",
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        id: "levelIcon"
    });
    $.__views.vv2.add($.__views.levelIcon);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId7"
    });
    $.__views.vv2.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#28aaff",
        font: {
            fontSize: "36dp",
            fontFamily: "Orbitron"
        },
        text: "1",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "级别",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        height: "110",
        id: "__alloyId10"
    });
    $.__views.viewContent.add($.__views.__alloyId10);
    $.__views.vv3 = Ti.UI.createView({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        top: 10,
        id: "vv3",
        layout: "horizontal"
    });
    $.__views.__alloyId10.add($.__views.vv3);
    $.__views.attentionIcon = Ti.UI.createLabel({
        color: "#ed1e79",
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        id: "attentionIcon"
    });
    $.__views.vv3.add($.__views.attentionIcon);
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.vv3.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#ed1e79",
        top: "20dp",
        font: {
            fontSize: "36dp",
            fontFamily: "Orbitron"
        },
        text: "5",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "关注",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.viewBoottom = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: "110",
        backgroundColor: "#ffffff",
        borderRadius: "10",
        borderWidth: "2",
        borderColor: "#f2f2f2",
        left: 10,
        right: 10,
        bottom: 10,
        layout: "horizontal",
        id: "viewBoottom"
    });
    $.__views.scrollView.add($.__views.viewBoottom);
    $.__views.vv4 = Ti.UI.createView({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        top: 10,
        right: "5dp",
        id: "vv4",
        layout: "horizontal"
    });
    $.__views.viewBoottom.add($.__views.vv4);
    $.__views.likeIcon = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        id: "likeIcon"
    });
    $.__views.vv4.add($.__views.likeIcon);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId14"
    });
    $.__views.vv4.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        color: "#fbaf0a",
        top: "20dp",
        font: {
            fontSize: "36dp",
            fontFamily: "Orbitron"
        },
        text: "0%",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "喜好",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.vv5 = Ti.UI.createView({
        width: "140dp",
        height: "110dp",
        id: "vv5",
        layout: "horizontal"
    });
    $.__views.viewBoottom.add($.__views.vv5);
    $.__views.bodyIcon = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        id: "bodyIcon"
    });
    $.__views.vv5.add($.__views.bodyIcon);
    $.__views.__alloyId17 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId17"
    });
    $.__views.vv5.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "#fbaf0a",
        top: "20dp",
        font: {
            fontSize: "36dp",
            fontFamily: "Orbitron"
        },
        text: "0%",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "身体",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        id: "__alloyId20"
    });
    __alloyId1.push($.__views.__alloyId20);
    $.__views.content = Ti.UI.createView({
        id: "content"
    });
    $.__views.__alloyId20.add($.__views.content);
    $.__views.backBtn = Ti.UI.createImageView({
        image: "/imgs/utility/back.png",
        borderWidth: 0,
        backgroundColor: "transparent",
        width: "70dp",
        height: "70dp",
        bottom: 0,
        left: 0,
        id: "backBtn"
    });
    $.__views.__alloyId20.add($.__views.backBtn);
    $.__views.scrollable = Ti.UI.createScrollableView({
        views: __alloyId1,
        id: "scrollable",
        scrollingEnabled: "false"
    });
    $.__views.index.add($.__views.scrollable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    $.lab_myself.text = entypo.fromCodePoint("0xe007");
    $.lab_addPage.text = entypo.fromCodePoint("0xf1b2");
    $.experienceIcon.text = entypo.fromCodePoint("0xf2b0");
    $.levelIcon.text = entypo.fromCodePoint("0xf2e6");
    $.attentionIcon.text = entypo.fromCodePoint("0xe02d");
    $.likeIcon.text = entypo.fromCodePoint("0xe029");
    $.bodyIcon.text = entypo.fromCodePoint("0xe007");
    $.view_myself.addEventListener("click", function() {
        Al;
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
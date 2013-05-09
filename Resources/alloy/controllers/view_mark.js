function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_mark = Ti.UI.createView({
        backgroundColor: "#f2f2f2",
        layout: "vertical",
        id: "view_mark"
    });
    $.__views.view_mark && $.addTopLevelView($.__views.view_mark);
    $.__views.__alloyId88 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        id: "__alloyId88"
    });
    $.__views.view_mark.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        color: "#fff",
        text: "缩影系统",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId90"
    });
    $.__views.view_mark.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.iconUser = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconUser"
    });
    $.__views.__alloyId93.add($.__views.iconUser);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "认证用户",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId95"
    });
    $.__views.__alloyId91.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.iconLogout = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        text: "",
        id: "iconLogout"
    });
    $.__views.__alloyId96.add($.__views.iconLogout);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "登出",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId98"
    });
    $.__views.__alloyId90.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.iconEnter = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconEnter"
    });
    $.__views.__alloyId100.add($.__views.iconEnter);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "进入内容",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId102"
    });
    $.__views.__alloyId98.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.iconExpend = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconExpend"
    });
    $.__views.__alloyId103.add($.__views.iconExpend);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "展开内容",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId105"
    });
    $.__views.__alloyId90.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.iconFun = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconFun"
    });
    $.__views.__alloyId107.add($.__views.iconFun);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "功能",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId109"
    });
    $.__views.__alloyId105.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.iconSort = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconSort"
    });
    $.__views.__alloyId110.add($.__views.iconSort);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "筛选",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId112"
    });
    $.__views.__alloyId90.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.iconSave = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconSave"
    });
    $.__views.__alloyId114.add($.__views.iconSave);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "保存",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId116"
    });
    $.__views.__alloyId112.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.iconRet = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconRet"
    });
    $.__views.__alloyId117.add($.__views.iconRet);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "返回",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        id: "__alloyId119"
    });
    $.__views.view_mark.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        color: "#fff",
        text: "世界通用",
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId121"
    });
    $.__views.view_mark.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.iconLogo = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconLogo"
    });
    $.__views.__alloyId124.add($.__views.iconLogo);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        left: 10,
        color: "#F39C12",
        top: 10,
        text: "缩影Logo",
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    $.iconUser.text = entypo.fromCodePoint("0xe06f");
    $.iconLogout.text = entypo.fromCodePoint("0xe047");
    $.iconEnter.text = entypo.fromCodePoint("0xf3c9");
    $.iconExpend.text = entypo.fromCodePoint("0xe011");
    $.iconFun.text = entypo.fromCodePoint("0xe02f");
    $.iconSort.text = entypo.fromCodePoint("0xe027");
    $.iconSave.text = entypo.fromCodePoint("0xe077");
    $.iconRet.text = entypo.fromCodePoint("0xe023");
    $.iconLogo.text = entypo.fromCodePoint("0xe054");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
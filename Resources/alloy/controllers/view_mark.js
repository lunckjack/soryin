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
    $.__views.__alloyId64 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        id: "__alloyId64"
    });
    $.__views.view_mark.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        color: "#fff",
        text: "缩影系统",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId66"
    });
    $.__views.view_mark.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.iconUser = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconUser"
    });
    $.__views.__alloyId69.add($.__views.iconUser);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "认证用户",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId71"
    });
    $.__views.__alloyId67.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
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
    $.__views.__alloyId72.add($.__views.iconLogout);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "登出",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId74"
    });
    $.__views.__alloyId66.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.iconEnter = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconEnter"
    });
    $.__views.__alloyId76.add($.__views.iconEnter);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "进入内容",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId78"
    });
    $.__views.__alloyId74.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.iconExpend = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconExpend"
    });
    $.__views.__alloyId79.add($.__views.iconExpend);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "展开内容",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId81"
    });
    $.__views.__alloyId66.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.iconFun = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconFun"
    });
    $.__views.__alloyId83.add($.__views.iconFun);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "功能",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId85"
    });
    $.__views.__alloyId81.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.iconSort = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconSort"
    });
    $.__views.__alloyId86.add($.__views.iconSort);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "筛选",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId88"
    });
    $.__views.__alloyId66.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.iconSave = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconSave"
    });
    $.__views.__alloyId90.add($.__views.iconSave);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "保存",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId92"
    });
    $.__views.__alloyId88.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.iconRet = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconRet"
    });
    $.__views.__alloyId93.add($.__views.iconRet);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "返回",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        id: "__alloyId95"
    });
    $.__views.view_mark.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        color: "#fff",
        text: "世界通用",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId97"
    });
    $.__views.view_mark.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
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
    $.__views.iconLogo = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconLogo"
    });
    $.__views.__alloyId100.add($.__views.iconLogo);
    $.__views.__alloyId101 = Ti.UI.createLabel({
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
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
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
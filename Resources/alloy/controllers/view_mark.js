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
    $.__views.__alloyId99 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        id: "__alloyId99"
    });
    $.__views.view_mark.add($.__views.__alloyId99);
    $.__views.iconSoryin = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "soryin"
        },
        textAlign: "center",
        color: "#fff",
        id: "iconSoryin"
    });
    $.__views.__alloyId99.add($.__views.iconSoryin);
    $.__views.__alloyId100 = Ti.UI.createTableViewRow({
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "__alloyId100"
    });
    var __alloyId101 = [];
    __alloyId101.push($.__views.__alloyId100);
    $.__views.__alloyId102 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId102"
    });
    $.__views.__alloyId100.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.iconUser = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconUser"
    });
    $.__views.__alloyId104.add($.__views.iconUser);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "认证",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId106"
    });
    $.__views.__alloyId102.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
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
    $.__views.__alloyId107.add($.__views.iconLogout);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "登出",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createTableViewRow({
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "__alloyId109"
    });
    __alloyId101.push($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.iconEnter = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconEnter"
    });
    $.__views.__alloyId112.add($.__views.iconEnter);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "深入",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId114"
    });
    $.__views.__alloyId110.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.iconExpend = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconExpend"
    });
    $.__views.__alloyId115.add($.__views.iconExpend);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "展开",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createTableViewRow({
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "__alloyId117"
    });
    __alloyId101.push($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.iconFun = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconFun"
    });
    $.__views.__alloyId120.add($.__views.iconFun);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "功能",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId122"
    });
    $.__views.__alloyId118.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.iconSort = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconSort"
    });
    $.__views.__alloyId123.add($.__views.iconSort);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "筛选",
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createTableViewRow({
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "__alloyId125"
    });
    __alloyId101.push($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.iconSave = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconSave"
    });
    $.__views.__alloyId128.add($.__views.iconSave);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "保存",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        right: 10,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId130"
    });
    $.__views.__alloyId126.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.iconFinish = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconFinish"
    });
    $.__views.__alloyId131.add($.__views.iconFinish);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "完成",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createTableViewRow({
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "__alloyId133"
    });
    __alloyId101.push($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.iconRet = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconRet"
    });
    $.__views.__alloyId136.add($.__views.iconRet);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontFamily: "HiraginoSansGB-W3"
        },
        width: 80,
        height: Titanium.UI.SIZE,
        left: 10,
        text: "返回",
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.table1 = Ti.UI.createTableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        scrollable: false,
        data: __alloyId101,
        id: "table1"
    });
    $.__views.view_mark.add($.__views.table1);
    $.__views.__alloyId138 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        id: "__alloyId138"
    });
    $.__views.view_mark.add($.__views.__alloyId138);
    $.__views.iconWorld = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "soryin"
        },
        textAlign: "center",
        color: "#fff",
        id: "iconWorld"
    });
    $.__views.__alloyId138.add($.__views.iconWorld);
    $.__views.__alloyId139 = Ti.UI.createTableViewRow({
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "__alloyId139"
    });
    var __alloyId140 = [];
    __alloyId140.push($.__views.__alloyId139);
    $.__views.__alloyId141 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 60,
        id: "__alloyId141"
    });
    $.__views.__alloyId139.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.iconLogo = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontFamily: "soryin"
        },
        color: "#F39C12",
        textAlign: "center",
        id: "iconLogo"
    });
    $.__views.__alloyId143.add($.__views.iconLogo);
    $.__views.__alloyId144 = Ti.UI.createLabel({
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
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.table2 = Ti.UI.createTableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        scrollable: false,
        data: __alloyId140,
        id: "table2"
    });
    $.__views.view_mark.add($.__views.table2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    $.iconSoryin.text = entypo.fromCodePoint("0xe054");
    $.iconUser.text = entypo.fromCodePoint("0xe06f");
    $.iconLogout.text = entypo.fromCodePoint("0xe047");
    $.iconEnter.text = entypo.fromCodePoint("0xf3c9");
    $.iconExpend.text = entypo.fromCodePoint("0xe011");
    $.iconFun.text = entypo.fromCodePoint("0xe02f");
    $.iconSort.text = entypo.fromCodePoint("0xe027");
    $.iconSave.text = entypo.fromCodePoint("0xe077");
    $.iconRet.text = entypo.fromCodePoint("0xe023");
    $.iconWorld.text = entypo.fromCodePoint("0xe08c");
    $.iconLogo.text = entypo.fromCodePoint("0xe054");
    $.iconFinish.text = entypo.fromCodePoint("0xe088");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
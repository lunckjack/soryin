function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_fontSize = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "view_fontSize"
    });
    $.__views.view_fontSize && $.addTopLevelView($.__views.view_fontSize);
    $.__views.__alloyId63 = Ti.UI.createView({
        height: 60,
        width: Titanium.UI.FILL,
        id: "__alloyId63"
    });
    $.__views.view_fontSize.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        left: 50,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.labSmall = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "偏爱小字",
        id: "labSmall"
    });
    $.__views.__alloyId64.add($.__views.labSmall);
    $.__views.ckSmall = Alloy.createWidget("checkbox", "widget", {
        right: 10,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "ckSmall",
        __parentSymbol: $.__views.__alloyId63
    });
    $.__views.ckSmall.setParent($.__views.__alloyId63);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: 60,
        width: Titanium.UI.FILL,
        id: "__alloyId65"
    });
    $.__views.view_fontSize.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        left: 50,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.labMidum = Ti.UI.createLabel({
        font: {
            fontSize: 24,
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "喜欢适中",
        id: "labMidum"
    });
    $.__views.__alloyId66.add($.__views.labMidum);
    $.__views.ckMidnum = Alloy.createWidget("checkbox", "widget", {
        right: 10,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "ckMidnum",
        __parentSymbol: $.__views.__alloyId65
    });
    $.__views.ckMidnum.setParent($.__views.__alloyId65);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: 60,
        width: Titanium.UI.FILL,
        id: "__alloyId67"
    });
    $.__views.view_fontSize.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        left: 50,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.labBig = Ti.UI.createLabel({
        font: {
            fontSize: 36,
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "越大越好看",
        id: "labBig"
    });
    $.__views.__alloyId68.add($.__views.labBig);
    $.__views.ckBig = Alloy.createWidget("checkbox", "widget", {
        right: 10,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "ckBig",
        __parentSymbol: $.__views.__alloyId67
    });
    $.__views.ckBig.setParent($.__views.__alloyId67);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.ckSmall.init(function(state) {
        if (state) {
            $.ckMidnum.isChecked && $.ckMidnum.setChecked(false);
            $.ckBig.isChecked && $.ckBig.setChecked(false);
            $.labSmall.color = Alloy.Globals.soryinOrangeColor;
            $.labMidum.color = "#000";
            $.labBig.color = "#000";
        } else $.labSmall.color = "#000";
    });
    $.ckMidnum.init(function(state) {
        if (state) {
            $.ckSmall.isChecked && $.ckSmall.setChecked(false);
            $.ckBig.isChecked && $.ckBig.setChecked(false);
            $.labMidum.color = Alloy.Globals.soryinOrangeColor;
            $.labSmall.color = "#000";
            $.labBig.color = "#000";
        } else $.labMidum.color = "#000";
    });
    $.ckBig.init(function(state) {
        if (state) {
            $.ckSmall.isChecked && $.ckSmall.setChecked(false);
            $.ckMidnum.isChecked && $.ckMidnum.setChecked(false);
            $.labBig.color = Alloy.Globals.soryinOrangeColor;
            $.labMidum.color = "#000";
            $.labSmall.color = "#000";
        } else $.labBig.color = "#000";
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
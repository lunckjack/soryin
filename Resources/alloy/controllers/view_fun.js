function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_fun = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 100,
        id: "view_fun"
    });
    $.__views.view_fun && $.addTopLevelView($.__views.view_fun);
    $.__views.viewPublish = Ti.UI.createView({
        left: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "viewPublish"
    });
    $.__views.view_fun.add($.__views.viewPublish);
    $.__views.__alloyId55 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId55"
    });
    $.__views.viewPublish.add($.__views.__alloyId55);
    $.__views.iconPublish = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: "#F39C12",
        id: "iconPublish"
    });
    $.__views.__alloyId55.add($.__views.iconPublish);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        left: 10,
        text: "发布",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.viewSense = Ti.UI.createView({
        right: 20,
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "viewSense"
    });
    $.__views.view_fun.add($.__views.viewSense);
    $.__views.__alloyId57 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId57"
    });
    $.__views.viewSense.add($.__views.__alloyId57);
    $.__views.iconSense = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: "#F39C12",
        id: "iconSense"
    });
    $.__views.__alloyId57.add($.__views.iconSense);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        left: 10,
        text: "读取",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    $.iconPublish.text = entypo.fromCodePoint("0xe067");
    $.iconSense.text = entypo.fromCodePoint("0xe06b");
    $.viewPublish.addEventListener("click", function(e) {
        $.trigger("onSwitchPublish", e);
    });
    $.viewSense.addEventListener("click", function(e) {
        $.trigger("onSwitchSense", e);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
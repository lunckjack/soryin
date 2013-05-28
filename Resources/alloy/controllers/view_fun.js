function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_fun = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 100,
        opacity: .8,
        id: "view_fun"
    });
    $.__views.view_fun && $.addTopLevelView($.__views.view_fun);
    $.__views.viewPublish = Ti.UI.createView({
        left: 20,
        width: 100,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 50,
        id: "viewPublish"
    });
    $.__views.view_fun.add($.__views.viewPublish);
    $.__views.__alloyId69 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId69"
    });
    $.__views.viewPublish.add($.__views.__alloyId69);
    $.__views.iconPublish = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: "#494949",
        id: "iconPublish"
    });
    $.__views.__alloyId69.add($.__views.iconPublish);
    $.__views.viewSense = Ti.UI.createView({
        right: 20,
        width: 100,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 50,
        id: "viewSense"
    });
    $.__views.view_fun.add($.__views.viewSense);
    $.__views.__alloyId70 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId70"
    });
    $.__views.viewSense.add($.__views.__alloyId70);
    $.__views.iconSense = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        color: "#494949",
        id: "iconSense"
    });
    $.__views.__alloyId70.add($.__views.iconSense);
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
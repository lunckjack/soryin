function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_emoji = Ti.UI.createView({
        height: 60,
        width: Titanium.UI.SIZE,
        id: "view_emoji"
    });
    $.__views.view_emoji && $.addTopLevelView($.__views.view_emoji);
    $.__views.switchBox = Alloy.createWidget("switchbox", "widget", {
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "switchBox",
        __parentSymbol: $.__views.view_emoji
    });
    $.__views.switchBox.setParent($.__views.view_emoji);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.switchBox.init(function() {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
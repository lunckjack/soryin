function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_like = Ti.UI.createView({
        backgroundColor: "white",
        id: "view_like"
    });
    $.__views.view_like && $.addTopLevelView($.__views.view_like);
    $.__views.progressView = Ti.UI.createView({
        height: 22,
        width: Titanium.UI.FILL,
        top: 0,
        backgroundColor: "#fff",
        id: "progressView"
    });
    $.__views.view_like.add($.__views.progressView);
    $.__views.pb = Ti.UI.createProgressBar({
        height: 22,
        width: Titanium.UI.FILL,
        backgroundColor: "#F39C12",
        min: 0,
        max: 100,
        id: "pb"
    });
    $.__views.progressView.add($.__views.pb);
    $.__views.__alloyId42 = Ti.UI.createView({
        id: "__alloyId42"
    });
    $.__views.view_like.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        text: "喜好",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.table = Ti.UI.createTableView({
        id: "table",
        scrollable: "false",
        height: "120"
    });
    $.__views.view_like.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.pb.value = 50;
    $.pb.message = "%";
    $.pb.show();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
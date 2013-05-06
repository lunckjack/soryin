function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.levelView = Ti.UI.createView({
        id: "levelView"
    });
    $.__views.levelView && $.addTopLevelView($.__views.levelView);
    $.__views.topView = Ti.UI.createView({
        height: 100,
        width: Titanium.UI.FILL,
        backgroundColor: "#494949",
        top: 0,
        id: "topView"
    });
    $.__views.levelView.add($.__views.topView);
    $.__views.table = Ti.UI.createTableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: 100,
        id: "table"
    });
    $.__views.levelView.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
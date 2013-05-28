function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        backgroundColor: "#fff",
        height: "50dp",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        height: "33dp",
        width: "33dp",
        left: "0",
        image: "undefined" != typeof $model.__transform["image"] ? $model.__transform["image"] : $model.get("image"),
        id: "__alloyId25"
    });
    $.__views.row.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        color: "#222",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        left: "20dp",
        text: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title"),
        id: "__alloyId26"
    });
    $.__views.row.add($.__views.__alloyId26);
    $.__views.iconFont = Ti.UI.createLabel({
        right: 10,
        font: {
            fontSize: "20",
            fontFamily: "soryin"
        },
        id: "iconFont"
    });
    $.__views.row.add($.__views.iconFont);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
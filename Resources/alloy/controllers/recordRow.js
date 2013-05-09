function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.recordRow = Ti.UI.createTableViewRow({
        backgroundColor: "#fff",
        height: "50dp",
        id: "recordRow"
    });
    $.__views.recordRow && $.addTopLevelView($.__views.recordRow);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        height: "33dp",
        width: "33dp",
        left: "0",
        image: "undefined" != typeof $model.__transform["_imgUrl"] ? $model.__transform["_imgUrl"] : $model.get("_imgUrl"),
        id: "__alloyId22"
    });
    $.__views.recordRow.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        color: "#222",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        left: "20dp",
        text: "undefined" != typeof $model.__transform["_title"] ? $model.__transform["_title"] : $model.get("_title"),
        id: "__alloyId23"
    });
    $.__views.recordRow.add($.__views.__alloyId23);
    $.__views.iconArrowFont = Ti.UI.createLabel({
        right: 10,
        font: {
            fontSize: "20",
            fontFamily: "soryin"
        },
        id: "iconArrowFont"
    });
    $.__views.recordRow.add($.__views.iconArrowFont);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    $.iconArrowFont.text = entypo.fromCodePoint("0xf3c9");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
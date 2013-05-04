function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.filterView = Ti.UI.createView({
        height: 214,
        backgroundColor: "black",
        left: 0,
        bottom: -214,
        id: "filterView"
    });
    $.__views.filterView && $.addTopLevelView($.__views.filterView);
    $.__views.picker = Ti.UI.createPicker({
        top: 0,
        id: "picker",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.filterView.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId12 = Ti.UI.createPickerRow({
        id: "__alloyId12"
    });
    $.__views.column1.addRow($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "字母",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createPickerRow({
        id: "__alloyId14"
    });
    $.__views.column1.addRow($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "时间",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createPickerRow({
        id: "__alloyId16"
    });
    $.__views.column1.addRow($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "类别",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.column2 = Ti.UI.createPickerColumn({
        id: "column2"
    });
    $.__views.picker.add($.__views.column2);
    $.__views.__alloyId18 = Ti.UI.createPickerRow({
        id: "__alloyId18"
    });
    $.__views.column2.addRow($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "全部",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createPickerRow({
        id: "__alloyId20"
    });
    $.__views.column2.addRow($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "喜欢",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
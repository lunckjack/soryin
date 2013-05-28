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
    $.__views.__alloyId53 = Ti.UI.createPickerRow({
        id: "__alloyId53"
    });
    $.__views.column1.addRow($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "字母",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createPickerRow({
        id: "__alloyId55"
    });
    $.__views.column1.addRow($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "时间",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createPickerRow({
        id: "__alloyId57"
    });
    $.__views.column1.addRow($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "类别",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.column2 = Ti.UI.createPickerColumn({
        id: "column2"
    });
    $.__views.picker.add($.__views.column2);
    $.__views.__alloyId59 = Ti.UI.createPickerRow({
        id: "__alloyId59"
    });
    $.__views.column2.addRow($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "全部",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createPickerRow({
        id: "__alloyId61"
    });
    $.__views.column2.addRow($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "喜欢",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
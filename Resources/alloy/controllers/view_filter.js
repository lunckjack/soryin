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
<<<<<<< HEAD
    $.__views.__alloyId29 = Ti.UI.createPickerRow({
        id: "__alloyId29"
    });
    $.__views.column1.addRow($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
=======
    $.__views.__alloyId28 = Ti.UI.createPickerRow({
        id: "__alloyId28"
    });
    $.__views.column1.addRow($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
>>>>>>> dc85394cbca9186ba4e1627ee99d2cd658ea52ff
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "字母",
<<<<<<< HEAD
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createPickerRow({
        id: "__alloyId31"
    });
    $.__views.column1.addRow($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
=======
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createPickerRow({
        id: "__alloyId30"
    });
    $.__views.column1.addRow($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
>>>>>>> dc85394cbca9186ba4e1627ee99d2cd658ea52ff
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "时间",
<<<<<<< HEAD
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createPickerRow({
        id: "__alloyId33"
    });
    $.__views.column1.addRow($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
=======
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createPickerRow({
        id: "__alloyId32"
    });
    $.__views.column1.addRow($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
>>>>>>> dc85394cbca9186ba4e1627ee99d2cd658ea52ff
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "类别",
<<<<<<< HEAD
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
=======
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
>>>>>>> dc85394cbca9186ba4e1627ee99d2cd658ea52ff
    $.__views.column2 = Ti.UI.createPickerColumn({
        id: "column2"
    });
    $.__views.picker.add($.__views.column2);
<<<<<<< HEAD
    $.__views.__alloyId35 = Ti.UI.createPickerRow({
        id: "__alloyId35"
    });
    $.__views.column2.addRow($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
=======
    $.__views.__alloyId34 = Ti.UI.createPickerRow({
        id: "__alloyId34"
    });
    $.__views.column2.addRow($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
>>>>>>> dc85394cbca9186ba4e1627ee99d2cd658ea52ff
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "全部",
<<<<<<< HEAD
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createPickerRow({
        id: "__alloyId37"
    });
    $.__views.column2.addRow($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
=======
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createPickerRow({
        id: "__alloyId36"
    });
    $.__views.column2.addRow($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
>>>>>>> dc85394cbca9186ba4e1627ee99d2cd658ea52ff
        font: {
            fontSize: 24
        },
        textAlign: "center",
        width: 126,
        text: "喜欢",
<<<<<<< HEAD
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
=======
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
>>>>>>> dc85394cbca9186ba4e1627ee99d2cd658ea52ff
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
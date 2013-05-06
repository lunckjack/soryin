function Controller() {
    function __alloyId66() {
        var models = __alloyId65.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId63 = models[i];
            __alloyId63.__transform = {};
            var __alloyId64 = Alloy.createController("recordRow", {
                $model: __alloyId63
            });
            rows.push(__alloyId64.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function addItem(e) {
        alert(e.index);
        alert(e.data);
        e.data.backgroundColor = 0 == e.index % 2 ? "#F7F3F2" : "#fff";
        common.addItem(myModels);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("record");
    $.__views.view_record = Ti.UI.createView({
        backgroundColor: "#f2f2f2",
        id: "view_record"
    });
    $.__views.view_record && $.addTopLevelView($.__views.view_record);
    $.__views.__alloyId60 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        top: 0,
        id: "__alloyId60"
    });
    $.__views.view_record.add($.__views.__alloyId60);
    $.__views.recordTime = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "HiraginoSansGB-W3"
        },
        bottom: 0,
        text: "11月1日",
        id: "recordTime"
    });
    $.__views.__alloyId60.add($.__views.recordTime);
    $.__views.table = Ti.UI.createTableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: 22,
        id: "table"
    });
    $.__views.view_record.add($.__views.table);
    var __alloyId65 = Alloy.Collections["record"] || record;
    __alloyId65.on("fetch destroy change add remove reset", __alloyId66);
    $.__views.sortView = Ti.UI.createView({
        width: 150,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: "20",
        borderWidth: "1",
        borderColor: "#ccc",
        right: 0,
        bottom: 20,
        id: "sortView"
    });
    $.__views.view_record.add($.__views.sortView);
    $.__views.recordNum = Ti.UI.createLabel({
        left: 5,
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#F39C12",
        text: "36",
        id: "recordNum"
    });
    $.__views.sortView.add($.__views.recordNum);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        color: "#F39C12",
        text: "条",
        id: "__alloyId67"
    });
    $.__views.sortView.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: "25",
        borderColor: "#fff",
        right: 0,
        bottom: 20,
        id: "__alloyId68"
    });
    $.__views.view_record.add($.__views.__alloyId68);
    $.__views.icon_sort = Ti.UI.createLabel({
        font: {
            fontSize: "40",
            fontFamily: "soryin"
        },
        top: 5,
        right: 5,
        bottom: 5,
        id: "icon_sort"
    });
    $.__views.__alloyId68.add($.__views.icon_sort);
    $.__views.viewSort = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#000",
        id: "viewSort",
        visible: "false"
    });
    $.__views.view_record.add($.__views.viewSort);
    $.__views.__alloyId69 = Ti.UI.createView({
        id: "__alloyId69"
    });
    $.__views.viewSort.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        color: "#F39C12",
        top: 150,
        right: 30,
        text: "条",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.sortNum = Ti.UI.createLabel({
        font: {
            fontSize: "103",
            fontFamily: "Orbitron"
        },
        color: "#F39C12",
        top: 100,
        text: "36",
        id: "sortNum"
    });
    $.__views.__alloyId69.add($.__views.sortNum);
    $.__views.icon_sort11 = Ti.UI.createLabel({
        font: {
            fontSize: "40",
            fontFamily: "soryin"
        },
        top: 5,
        right: 5,
        bottom: 5,
        id: "icon_sort11"
    });
    $.__views.viewSort.add($.__views.icon_sort11);
    if (!Alloy.isTablet) {
        $.__views.filterView = Alloy.createController("view_filter", {
            id: "filterView",
            __parentSymbol: $.__views.viewSort
        });
        $.__views.filterView.setParent($.__views.viewSort);
    }
    $.__views.__alloyId71 = Ti.UI.createButton({
        height: "40dp",
        width: "40dp",
        title: "+",
        bottom: 0,
        right: 0,
        id: "__alloyId71"
    });
    $.__views.view_record.add($.__views.__alloyId71);
    addItem ? $.__views.__alloyId71.addEventListener("click", addItem) : __defers["$.__views.__alloyId71!click!addItem"] = true;
    exports.destroy = function() {
        __alloyId65.off("fetch destroy change add remove reset", __alloyId66);
    };
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    var ui = require("ui");
    var myModels = Alloy.Collections.record;
    var common = require("common");
    $.table.addEventListener("scrollend", function() {
        ui.translate2($.sortView, 0, 0, 0, 200, function() {});
    });
    $.table.addEventListener("scroll", function() {
        ui.translate2($.sortView, 150, 0, 0, 200, function() {});
    });
    $.icon_sort.addEventListener("click", function() {
        $.viewSort.visible = true;
        ui.zoom($.viewSort, function() {
            ui.translate2($.filterView.getView("filterView"), 0, -214, 0, 200, function() {});
        });
    });
    $.viewSort.addEventListener("click", function() {
        ui.translate2($.filterView.getView("filterView"), 0, 214, 0, 200, function() {
            ui.unzoom($.viewSort, function() {});
        });
    });
    $.icon_sort.text = entypo.fromCodePoint("0xe027");
    $.icon_sort.color = "#F39C12";
    __defers["$.__views.__alloyId71!click!addItem"] && $.__views.__alloyId71.addEventListener("click", addItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
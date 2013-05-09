function Controller() {
    function loadTableView() {
        var bc;
        for (var i = 0; 10 > i; i++) {
            bc = 0 == i % 2 ? "#F7F3F2" : "#fff";
            var row = Ti.UI.createTableViewRow({
                height: 60,
                selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE,
                backgroundColor: bc
            });
            var image = Ti.UI.createImageView({
                image: "/images/myimage.png",
                left: 0,
                width: 60,
                height: 60
            });
            var title = Ti.UI.createLabel({
                font: {
                    fontSize: "24",
                    fontFamily: "HiraginoSansGB-W3"
                },
                text: "艾薇塔",
                textAlign: "center",
                color: "#4A4A4A",
                left: 80,
                top: 20
            });
            var line = Ti.UI.createView({
                height: 60,
                left: "60",
                width: "1dp",
                backgroundColor: "#cecece"
            });
            var arrow = Ti.UI.createLabel({
                text: entypo.fromCodePoint("0xf3c9"),
                right: 10,
                font: {
                    fontSize: "20",
                    fontFamily: "soryin"
                }
            });
            row.add(image);
            row.add(line);
            row.add(title);
            row.add(arrow);
            row.arrow = arrow;
            tableData[i] = row;
        }
        $.table.setData(tableData);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_record = Ti.UI.createView({
        backgroundColor: "#f2f2f2",
        id: "view_record"
    });
    $.__views.view_record && $.addTopLevelView($.__views.view_record);
    $.__views.__alloyId126 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        top: 0,
        id: "__alloyId126"
    });
    $.__views.view_record.add($.__views.__alloyId126);
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
    $.__views.__alloyId126.add($.__views.recordTime);
    $.__views.table = Ti.UI.createTableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: 22,
        id: "table"
    });
    $.__views.view_record.add($.__views.table);
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
    $.__views.__alloyId127 = Ti.UI.createLabel({
        color: "#F39C12",
        text: "条",
        id: "__alloyId127"
    });
    $.__views.sortView.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: "25",
        borderColor: "#fff",
        right: 0,
        bottom: 20,
        id: "__alloyId128"
    });
    $.__views.view_record.add($.__views.__alloyId128);
    $.__views.icon_sort = Ti.UI.createLabel({
        font: {
            fontSize: "40",
            fontFamily: "soryin"
        },
        top: 5,
        right: 5,
        bottom: 5,
        color: "#F39C12",
        id: "icon_sort"
    });
    $.__views.__alloyId128.add($.__views.icon_sort);
    $.__views.viewSort = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#000",
        id: "viewSort",
        visible: "false"
    });
    $.__views.view_record.add($.__views.viewSort);
    $.__views.__alloyId129 = Ti.UI.createView({
        id: "__alloyId129"
    });
    $.__views.viewSort.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        color: "#F39C12",
        top: 150,
        right: 30,
        text: "条",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
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
    $.__views.__alloyId129.add($.__views.sortNum);
    $.__views.icon_sort11 = Ti.UI.createLabel({
        font: {
            fontSize: "40",
            fontFamily: "soryin"
        },
        top: 5,
        right: 5,
        bottom: 5,
        color: "#F39C12",
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    var ui = require("ui");
    var tableData = [];
    $.table.addEventListener("scrollend", function() {
        ui.translate2($.sortView, 0, 0, 0, 0, function() {});
    });
    $.table.addEventListener("scroll", function() {
        ui.translate2($.sortView, 150, 0, 0, 70, function() {});
    });
    $.icon_sort.addEventListener("click", function(e) {
        $.viewSort.visible = true;
        $.trigger("hideBackButton", e);
        ui.zoom($.viewSort, function() {
            ui.translate2($.filterView.getView("filterView"), 0, -214, 0, 200, function() {});
        });
    });
    $.viewSort.addEventListener("click", function(e) {
        ui.translate2($.filterView.getView("filterView"), 0, 214, 0, 200, function() {
            ui.unzoom($.viewSort, function() {
                $.trigger("showBackButton", e);
            });
        });
    });
    loadTableView();
    $.icon_sort.text = entypo.fromCodePoint("0xe027");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
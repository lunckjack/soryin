function Controller() {
    function getActivitys() {
        var initOptions = {
            url: Alloy.Globals.getEvent,
            method: "POST",
            timeout: 2e4
        };
        var callParams = {
            _taskKey: taskKey,
            _taskType: taskType,
            _currentLon: currentLon,
            _currentLat: currentLat
        };
        httpClient.req(initOptions, callParams, function(retData) {
            var activitysArray = retData.data.activityBasicInfos;
            for (var i = 0; activitysArray.length > i; i++) {
                var dataModel = activitysArray[i];
                createTableView(i, dataModel);
            }
            $.table1.setData(data);
        }, function() {});
    }
    function createTableView(id, dataModel) {
        var title = dataModel.activityName;
        var content = dataModel.activityDescription;
        var row = Ti.UI.createTableViewRow({
            height: "80dp",
            selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
            selectedBackgroundColor: "transparent"
        });
        row.isOpen = false;
        var title = Ti.UI.createLabel({
            font: {
                fontSize: "20dp",
                fontFamily: "HiraginoSansGB-W6"
            },
            text: title,
            color: "#7F8C8D",
            textAlign: "center",
            width: "150dp",
            top: 20
        });
        var line = Ti.UI.createView({
            height: "50",
            left: "60",
            width: "1",
            backgroundColor: "#CCCCCC"
        });
        var number = Ti.UI.createLabel({
            text: id + 1,
            font: {
                fontSize: "39dp",
                fontFamily: "Orbitron"
            },
            left: "15",
            width: "60dp",
            textAlign: "center",
            color: "#2ECC71"
        });
        var title1 = Ti.UI.createLabel({
            left: "25dp",
            font: {
                fontSize: "24dp"
            },
            right: "25dp",
            top: "20dp",
            text: content
        });
        var arrow = Ti.UI.createImageView({
            image: "/imgs/utility/pointer.png",
            right: "10dp"
        });
        row.add(title);
        row.add(number);
        row.add(line);
        row.add(arrow);
        var subrow = Ti.UI.createTableViewRow({
            selectedBackgroundColor: "transparent",
            layout: "vertical",
            height: Titanium.UI.SIZE
        });
        subrow.isSub = true;
        subrow.add(title1);
        row.subrow = subrow;
        row.arrow = arrow;
        data[id] = row;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createWindow({
        id: "container",
        title: "自我",
        navBarHidden: "true"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    var __alloyId33 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1"
    });
    __alloyId33.push($.__views.view1);
    $.__views.s2 = Ti.UI.createView({
        id: "s2"
    });
    $.__views.view1.add($.__views.s2);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        id: "__alloyId34"
    });
    var __alloyId35 = [];
    __alloyId35.push($.__views.__alloyId34);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId36"
    });
    $.__views.__alloyId34.add($.__views.__alloyId36);
    $.__views.table1 = Ti.UI.createTableView({
        data: __alloyId35,
        id: "table1"
    });
    $.__views.s2.add($.__views.table1);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId33,
        id: "scrollableView"
    });
    $.__views.container.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ui = require("ui");
    require("ti.entypo");
    var httpClient = require("HttpClient");
    var taskKey = "0500caca7edc4e1ebb2ba99920ea6a09";
    var taskType = "event";
    var currentLon = Ti.App.Properties.getString("curLongitude");
    var currentLat = Ti.App.Properties.getString("curLatitude");
    var data = [];
    var prevrow = 0;
    var isOpen = false;
    $.table1.addEventListener("click", function(e) {
        if (!e.row.isSub) if (e.row.isOpen) {
            e.row.isOpen = false;
            isOpen = false;
            ui.rotate(e.row.arrow, 0, 250, function() {});
            $.table1.deleteRow(e.index + 1);
        } else {
            e.row.isOpen = true;
            ui.rotate(e.row.arrow, 90, 250, function() {});
            prevrow >= e.index ? setTimeout(function() {
                $.table1.scrollToTop(50 * e.index, {
                    animated: true
                });
            }, 100) : isOpen ? setTimeout(function() {
                $.table1.scrollToTop(50 * (e.index - 1), {
                    animated: true
                });
            }, 100) : setTimeout(function() {
                $.table1.scrollToTop(50 * e.index, {
                    animated: true
                });
            }, 100);
            isOpen = true;
            prevrow = e.index;
            $.table1.insertRowAfter(e.index, e.row.subrow);
            var rows = $.table1.data[0].rows;
            for (i = 0; rows.length > i; i++) if (rows[i].isOpen && i != e.index) {
                ui.rotate(rows[i].arrow, 0, 250, function() {});
                $.table1.deleteRow(i + 1);
                rows[i].isOpen = false;
            }
        }
    });
    $.init = function() {
        getActivitys();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
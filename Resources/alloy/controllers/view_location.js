function Controller() {
    function loadTableView(currentPage) {
        switch (currentPage) {
          case currentPage:
            createTable(currentPage);
        }
    }
    function createTable(_currentPage) {
        var data = [];
        var title;
        var icon;
        var activityArray = retDatas.data.activityBasicInfos;
        for (var i = 0; 3 > i; i++) {
            if (0 == i) {
                icon = "0xe004";
                title = activityArray[_currentPage].locationsInfo[0].street;
            } else if (1 == i) {
                icon = "0xe018";
                title = activityArray[_currentPage].locationsInfo[0].building;
            } else if (2 == i) {
                icon = "0xe003";
                title = activityArray[_currentPage].locationsInfo[0].room;
            }
            var row = Ti.UI.createTableViewRow({
                height: "80dp",
                selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
                selectedBackgroundColor: "transparent"
            });
            row.isOpen = false;
            var title = Ti.UI.createLabel({
                font: {
                    fontSize: 23,
                    fontFamily: "冬青黑体简体中文"
                },
                text: title,
                color: Alloy.Globals.green,
                textAlign: "center",
                width: "150dp",
                top: 20
            });
            var line = Ti.UI.createView({
                height: "80dp",
                left: "69.5dp",
                width: "1dp",
                backgroundColor: Alloy.Globals.gray
            });
            var subrow = Ti.UI.createTableViewRow({
                selectedBackgroundColor: "transparent",
                layout: "vertical",
                height: Titanium.UI.SIZE
            });
            if (0 == i) {
                var lat = activityArray[_currentPage].locationsInfo[0].lat;
                var lng = activityArray[_currentPage].locationsInfo[0].lng;
                createMapView(title, lat, lng, subrow);
            } else {
                var title1 = Ti.UI.createLabel({
                    left: "25dp",
                    font: {
                        fontSize: "24dp"
                    },
                    right: "25dp",
                    top: "20dp",
                    text: "描述"
                });
                subrow.add(title1);
            }
            var logo = Ti.UI.createLabel({
                text: entypo.fromCodePoint(icon),
                font: {
                    fontSize: "39dp",
                    fontFamily: "soryin"
                },
                left: "5dp",
                textAlign: "center",
                color: Alloy.Globals.green
            });
            var arrow = Ti.UI.createImageView({
                image: "/imgs/utility/pointer.png",
                right: "10dp"
            });
            row.add(logo);
            row.add(line);
            row.add(title);
            row.add(arrow);
            subrow.isSub = true;
            row.subrow = subrow;
            row.arrow = arrow;
            data[i] = row;
        }
        $.table1.setData(data);
    }
    function reqLocation() {
        var initOptions = {
            url: Alloy.Globals.requestURL,
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
            retDatas = retData;
            var activityArray = retData.data.activityBasicInfos;
            for (var i = 0; activityArray.length > i; i++) {
                var location = activityArray[i].locationsInfo[0].location;
                var location = "10000";
                var viewVel = Ti.UI.createView({
                    layout: "vertical",
                    backgroundColor: "#f2f2f2",
                    top: 0,
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL
                });
                var labDistancetText = Ti.UI.createLabel({
                    color: Alloy.Globals.green,
                    font: {
                        fontSize: "20dp",
                        fontFamily: "冬青黑体简体中文"
                    },
                    text: "",
                    width: Titanium.UI.SIZE,
                    height: Titanium.UI.SIZE
                });
                var labDistance = Ti.UI.createLabel({
                    color: Alloy.Globals.green,
                    font: {
                        fontSize: "60dp",
                        fontFamily: "Orbitron"
                    },
                    top: "0dp",
                    text: location,
                    width: Titanium.UI.SIZE,
                    height: Titanium.UI.SIZE
                });
                var labText = Ti.UI.createLabel({
                    left: "180dp",
                    top: "0",
                    font: {
                        fontSize: "25dp",
                        fontFamily: "冬青黑体简体中文"
                    },
                    text: "公里",
                    color: Alloy.Globals.green,
                    width: Titanium.UI.SIZE,
                    height: Titanium.UI.SIZE
                });
                viewVel.add(labDistancetText);
                viewVel.add(labDistance);
                viewVel.add(labText);
                $.scrollableView.addView(viewVel);
            }
            loadTableView(0);
            $.scrollableView.setCurrentPage(0);
        }, function() {});
    }
    function createMapView(title, lat, lng, subrow) {
        var mountainView = Titanium.Map.createAnnotation({
            latitude: lat,
            longitude: lng,
            title: title,
            pincolor: Titanium.Map.ANNOTATION_RED,
            animate: true,
            myid: 1
        });
        var mapview = Titanium.Map.createView({
            mapType: Titanium.Map.STANDARD_TYPE,
            region: {
                latitude: 23.124655,
                longitude: 113.361224,
                latitudeDelta: .01,
                longitudeDelta: .01
            },
            animate: true,
            regionFit: true,
            userLocation: true,
            annotations: [ mountainView ],
            height: "150dp"
        });
        subrow.add(mapview);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "#f2f2f2",
        id: "container",
        title: "自我",
        navBarHidden: "true"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId73 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId73"
    });
    $.__views.container.add($.__views.__alloyId73);
    var __alloyId74 = [];
    $.__views.scrollableView = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: "160dp",
        views: __alloyId74,
        id: "scrollableView",
        showPagingControl: "true",
        pagingControlOnTop: "true",
        pagingControlColor: "#f2f2f2"
    });
    $.__views.__alloyId73.add($.__views.scrollableView);
    $.__views.__alloyId75 = Ti.UI.createTableViewRow({
        id: "__alloyId75"
    });
    var __alloyId76 = [];
    __alloyId76.push($.__views.__alloyId75);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.table1 = Ti.UI.createTableView({
        data: __alloyId76,
        id: "table1"
    });
    $.__views.__alloyId73.add($.__views.table1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ui = require("ui");
    var entypo = require("ti.entypo");
    var httpClient = require("HttpClient");
    var taskKey = "0500caca7edc4e1ebb2ba99920ea6a09";
    var taskType = "event";
    var currentLon = Ti.App.Properties.getString("curLongitude");
    var currentLat = Ti.App.Properties.getString("curLatitude");
    var prevrow = 0;
    var isOpen = false;
    var retDatas;
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
    $.scrollableView.addEventListener("scrollend", function(e) {
        loadTableView(e.currentPage);
    });
    $.init = function() {
        reqLocation();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
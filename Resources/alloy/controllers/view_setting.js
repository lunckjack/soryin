function Controller() {
    function createSetingView(dataArray, rowArray, tableDatas) {
        for (i = 0; dataArray.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                height: "50",
                selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY
            });
            row.isOpen = false;
            var line = Ti.UI.createView({
                height: "50",
                left: "70",
                width: "1dp",
                backgroundColor: "#cecece"
            });
            var icon = Ti.UI.createLabel({
                text: entypo.fromCodePoint(rowArray[i]),
                left: 20,
                font: {
                    fontSize: "30",
                    fontFamily: "soryin"
                }
            });
            var title = Ti.UI.createLabel({
                font: {
                    fontSize: "25",
                    fontFamily: "HiraginoSansGB-W3"
                },
                text: dataArray[i],
                left: 80,
                top: 10,
                textAlign: "center"
            });
            var arrow = Ti.UI.createLabel({
                text: entypo.fromCodePoint("0xf3c9"),
                right: 10,
                font: {
                    fontSize: "20",
                    fontFamily: "soryin"
                }
            });
            row.add(icon);
            row.add(line);
            row.add(title);
            row.add(arrow);
            row.arrow = arrow;
            tableDatas[i] = row;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.setView = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "vertical",
        id: "setView"
    });
    $.__views.scrollView.add($.__views.setView);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "登录",
        id: "__alloyId49"
    });
    $.__views.setView.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        id: "__alloyId50"
    });
    var __alloyId51 = [];
    __alloyId51.push($.__views.__alloyId50);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId52"
    });
    $.__views.__alloyId50.add($.__views.__alloyId52);
    $.__views.table1 = Ti.UI.createTableView({
        width: Titanium.UI.FILL,
        height: 100,
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        data: __alloyId51,
        id: "table1",
        scrollable: "false"
    });
    $.__views.setView.add($.__views.table1);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "向导",
        id: "__alloyId53"
    });
    $.__views.setView.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createTableViewRow({
        id: "__alloyId54"
    });
    var __alloyId55 = [];
    __alloyId55.push($.__views.__alloyId54);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.table2 = Ti.UI.createTableView({
        data: __alloyId55,
        id: "table2",
        height: "100",
        scrollable: "false"
    });
    $.__views.setView.add($.__views.table2);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "其他",
        id: "__alloyId57"
    });
    $.__views.setView.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createTableViewRow({
        id: "__alloyId58"
    });
    var __alloyId59 = [];
    __alloyId59.push($.__views.__alloyId58);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId60"
    });
    $.__views.__alloyId58.add($.__views.__alloyId60);
    $.__views.table3 = Ti.UI.createTableView({
        data: __alloyId59,
        id: "table3",
        height: "50",
        scrollable: "false"
    });
    $.__views.setView.add($.__views.table3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    var tableLoginData = [];
    var loginData = [ "腾讯QQ", "新浪微博" ];
    for (i = 0; loginData.length > i; i++) {
        var rowtitle;
        var rowcolor;
        var rowtext;
        var selBackColor;
        if (0 == i) {
            rowtitle = loginData[0];
            rowtext = entypo.fromCodePoint("0xe033");
            rowcolor = "#3890e2";
            selBackColor = "blue";
        } else if (1 == i) {
            rowtitle = loginData[1];
            rowtext = entypo.fromCodePoint("0xe00b");
            rowcolor = "#d52b2a";
            selBackColor = "red";
        }
        var row = Ti.UI.createTableViewRow({
            height: "50",
            selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE,
            backgroundColor: rowcolor,
            selectedBackgroundColor: selBackColor
        });
        row.isOpen = false;
        var title = Ti.UI.createLabel({
            font: {
                fontSize: "25",
                fontFamily: "HiraginoSansGB-W3"
            },
            text: rowtitle,
            textAlign: "center",
            left: 80,
            color: "#ffffff",
            top: 10
        });
        var icon = Ti.UI.createLabel({
            text: rowtext,
            left: 20,
            font: {
                fontSize: "30",
                fontFamily: "soryin"
            },
            color: "#fff"
        });
        var arrow = Ti.UI.createLabel({
            text: entypo.fromCodePoint("0xf3c9"),
            right: "10dp",
            font: {
                fontSize: "20",
                fontFamily: "soryin"
            },
            color: "#fff"
        });
        row.add(icon);
        row.add(title);
        row.add(arrow);
        row.arrow = arrow;
        tableLoginData[i] = row;
    }
    $.table1.setData(tableLoginData);
    var dataConditionArray = [ "快速上手", "缩影语言" ];
    var rowTextArray = [ "0xe03a", "0xe03b" ];
    var tableData = [];
    createSetingView(dataConditionArray, rowTextArray, tableData);
    $.table2.setData(tableData);
    var otableData = [];
    var odataConditionArray = [ "版权" ];
    var orowTextArray = [ "0xe036" ];
    createSetingView(odataConditionArray, orowTextArray, otableData);
    $.table3.setData(otableData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
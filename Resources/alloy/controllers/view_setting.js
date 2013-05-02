function Controller() {
    function createSetingView(dataConditionArray, rowTextArray) {
        for (i = 0; dataConditionArray.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                height: "50",
                selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY
            });
            row.isOpen = false;
            var title = Ti.UI.createLabel({
                font: {
                    fontSize: "25",
                    fontFamily: "HiraginoSansGB-W3"
                },
                text: dataConditionArray[i],
                textAlign: "center",
                width: "200dp",
                left: "50dp"
            });
            var line = Ti.UI.createView({
                height: "50",
                left: "69.5dp",
                width: "1dp",
                backgroundColor: "#cecece"
            });
            var icon = Ti.UI.createLabel({
                text: entypo.fromCodePoint(rowTextArray[i]),
                left: "5dp",
                textAlign: "center",
                font: {
                    fontSize: "30",
                    fontFamily: "soryin"
                },
                color: "#000"
            });
            var arrow = Ti.UI.createLabel({
                text: entypo.fromCodePoint("0xf3c9"),
                right: "10dp",
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
            tableData[i] = row;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId33"
    });
    $.__views.scrollView.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "登录",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        id: "__alloyId35"
    });
    var __alloyId36 = [];
    __alloyId36.push($.__views.__alloyId35);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.table1 = Ti.UI.createTableView({
        data: __alloyId36,
        id: "table1",
        separatorColor: "#cecece",
        height: "100dp"
    });
    $.__views.__alloyId33.add($.__views.table1);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "向导",
        id: "__alloyId38"
    });
    $.__views.__alloyId33.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        id: "__alloyId39"
    });
    var __alloyId40 = [];
    __alloyId40.push($.__views.__alloyId39);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.table2 = Ti.UI.createTableView({
        data: __alloyId40,
        id: "table2",
        separatorColor: "#cecece",
        height: "100dp"
    });
    $.__views.__alloyId33.add($.__views.table2);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "其他",
        id: "__alloyId42"
    });
    $.__views.__alloyId33.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        id: "__alloyId43"
    });
    var __alloyId44 = [];
    __alloyId44.push($.__views.__alloyId43);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId45"
    });
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.table3 = Ti.UI.createTableView({
        data: __alloyId44,
        id: "table3",
        separatorColor: "#cecece",
        height: "100dp"
    });
    $.__views.__alloyId33.add($.__views.table3);
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
            width: "200",
            left: "50",
            color: "#ffffff"
        });
        var icon = Ti.UI.createLabel({
            text: rowtext,
            left: "5",
            textAlign: "center",
            font: {
                fontSize: "30",
                fontFamily: "soryin"
            },
            color: "#ffffff"
        });
        var arrow = Ti.UI.createLabel({
            text: entypo.fromCodePoint("0xf3c9"),
            right: "10dp",
            font: {
                fontSize: "20",
                fontFamily: "soryin"
            }
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
    createSetingView(dataConditionArray, rowTextArray);
    $.table2.setData(tableData);
    tableData = [];
    dataConditionArray = [ "推荐给朋友", "帮我们改进" ];
    rowTextArray = [ "0xe035", "0xe036" ];
    createSetingView(dataConditionArray, rowTextArray);
    $.table3.setData(tableData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
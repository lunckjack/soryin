function Controller() {
    function onClickTable1(e) {
        switch (e.index) {
          case 0:
            $.trigger("onSwitchQQ", e);
            break;

          case 1:
            $.trigger("onSwitchSina", e);
        }
    }
    function onClickTable2(e) {
        switch (e.index) {
          case 0:
            $.trigger("onSwitchSplash", e);
            break;

          case 1:
            $.trigger("onSwitchVisual", e);
        }
    }
    function onClickTable3(e) {
        switch (e.index) {
          case 0:
            $.trigger("onSwitchCopyRight", e);
            break;

          case 1:        }
    }
    function createSetingView(dataArray, rowArray, tableDatas) {
        for (i = 0; dataArray.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                height: "60",
                selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE
            });
            row.isOpen = false;
            var line = Ti.UI.createView({
                height: "60",
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
                top: 20,
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
    var __defers = {};
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
    $.__views.__alloyId110 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "登录",
        id: "__alloyId110"
    });
    $.__views.setView.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createTableViewRow({
        id: "__alloyId111"
    });
    var __alloyId112 = [];
    __alloyId112.push($.__views.__alloyId111);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    $.__views.table1 = Ti.UI.createTableView({
        width: Titanium.UI.FILL,
        height: "120",
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        data: __alloyId112,
        id: "table1",
        scrollable: "false"
    });
    $.__views.setView.add($.__views.table1);
    onClickTable1 ? $.__views.table1.addEventListener("click", onClickTable1) : __defers["$.__views.table1!click!onClickTable1"] = true;
    $.__views.__alloyId114 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "向导",
        id: "__alloyId114"
    });
    $.__views.setView.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createTableViewRow({
        id: "__alloyId115"
    });
    var __alloyId116 = [];
    __alloyId116.push($.__views.__alloyId115);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId117"
    });
    $.__views.__alloyId115.add($.__views.__alloyId117);
    $.__views.table2 = Ti.UI.createTableView({
        data: __alloyId116,
        id: "table2",
        height: "120",
        scrollable: "false"
    });
    $.__views.setView.add($.__views.table2);
    onClickTable2 ? $.__views.table2.addEventListener("click", onClickTable2) : __defers["$.__views.table2!click!onClickTable2"] = true;
    $.__views.__alloyId118 = Ti.UI.createLabel({
        font: {
            fontSize: "24",
            fontFamily: "HiraginoSansGB-W3"
        },
        textAlign: "right",
        right: 10,
        top: 20,
        text: "其他",
        id: "__alloyId118"
    });
    $.__views.setView.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createTableViewRow({
        id: "__alloyId119"
    });
    var __alloyId120 = [];
    __alloyId120.push($.__views.__alloyId119);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        text: "done.....",
        id: "__alloyId121"
    });
    $.__views.__alloyId119.add($.__views.__alloyId121);
    $.__views.table3 = Ti.UI.createTableView({
        data: __alloyId120,
        id: "table3",
        height: "60",
        scrollable: "false"
    });
    $.__views.setView.add($.__views.table3);
    onClickTable3 ? $.__views.table3.addEventListener("click", onClickTable3) : __defers["$.__views.table3!click!onClickTable3"] = true;
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
            height: "60",
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
            top: 20
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
    var orowTextArray = [ "0xa9" ];
    createSetingView(odataConditionArray, orowTextArray, otableData);
    $.table3.setData(otableData);
    __defers["$.__views.table1!click!onClickTable1"] && $.__views.table1.addEventListener("click", onClickTable1);
    __defers["$.__views.table2!click!onClickTable2"] && $.__views.table2.addEventListener("click", onClickTable2);
    __defers["$.__views.table3!click!onClickTable3"] && $.__views.table3.addEventListener("click", onClickTable3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
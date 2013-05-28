function Controller() {
    function loadColorTableView() {
        for (var i = 0; colors.length > i; i++) {
            colors[i].colorName;
            var iconColor = colors[i].iconColor;
            var colorDesc = colors[i].colorDesc;
            var row = Ti.UI.createTableViewRow({
                height: 60,
                selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE
            });
            var title = Ti.UI.createLabel({
                left: 20,
                width: 50,
                height: 50,
                backgroundColor: iconColor,
                borderRadius: 25
            });
            var desc = Ti.UI.createLabel({
                font: {
                    fontSize: "24",
                    fontFamily: "HiraginoSansGB-W3"
                },
                text: colorDesc,
                color: iconColor,
                left: 100,
                textAlign: "center"
            });
            row.add(title);
            row.add(desc);
            tableData[i] = row;
        }
        $.colorTable.setData(tableData);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_color = Ti.UI.createView({
        backgroundColor: "#f2f2f2",
        id: "view_color"
    });
    $.__views.view_color && $.addTopLevelView($.__views.view_color);
    $.__views.__alloyId48 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 22,
        backgroundColor: "#494949",
        top: 0,
        id: "__alloyId48"
    });
    $.__views.view_color.add($.__views.__alloyId48);
    $.__views.iconColor = Ti.UI.createLabel({
        font: {
            fontSize: "22",
            fontFamily: "soryin"
        },
        color: "#fff",
        id: "iconColor"
    });
    $.__views.__alloyId48.add($.__views.iconColor);
    $.__views.colorTable = Ti.UI.createTableView({
        top: 22,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "colorTable"
    });
    $.__views.view_color.add($.__views.colorTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    $.iconColor.text = entypo.fromCodePoint("0xe070");
    var colors = [ {
        colorName: "缩影橙",
        iconColor: Alloy.Globals.soryinOrangeColor,
        colorDesc: "缩影"
    }, {
        colorName: "石灰绿",
        iconColor: Alloy.Globals.soryinGreenColor,
        colorDesc: "安全|正确|通行"
    }, {
        colorName: "大洞蓝",
        iconColor: Alloy.Globals.soryinBlueColor,
        colorDesc: "普通信息"
    }, {
        colorName: "石榴红",
        iconColor: Alloy.Globals.soryinSlRedColor,
        colorDesc: "停止|警告"
    }, {
        colorName: "小桃红",
        iconColor: Alloy.Globals.soryinPinkColor,
        colorDesc: "喜欢"
    }, {
        colorName: "矿物灰",
        iconColor: Alloy.Globals.soryinKwGrayColor,
        colorDesc: "细节"
    }, {
        colorName: "石棉灰",
        iconColor: Alloy.Globals.soryinSmGrayColor,
        colorDesc: "辅助"
    } ];
    var tableData = [];
    loadColorTableView();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    function change_a() {
        $.labProcess.text = a + "%";
        a_num > a && a++;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_body = Ti.UI.createView({
        backgroundColor: Alloy.Globals.soryinBgColor,
        layout: "vertical",
        id: "view_body"
    });
    $.__views.view_body && $.addTopLevelView($.__views.view_body);
    $.__views.progressView = Ti.UI.createView({
        height: 22,
        width: "0%",
        backgroundColor: Alloy.Globals.soryinOrangeColor,
        left: 0,
        top: 0,
        id: "progressView"
    });
    $.__views.view_body.add($.__views.progressView);
    $.__views.labProcess = Ti.UI.createLabel({
        font: {
            fontSize: "15",
            fontFamily: "Orbitron",
            fontWeight: "bold"
        },
        color: "#fff",
        right: 10,
        id: "labProcess"
    });
    $.__views.progressView.add($.__views.labProcess);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        font: {
            fontSize: 50,
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        color: "#CCCCCC",
        right: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 10,
        text: "身体",
        id: "__alloyId46"
    });
    $.__views.view_body.add($.__views.__alloyId46);
    $.__views.table = Ti.UI.createTableView({
        separatorColor: "#CBCBCB",
        borderWidth: 1,
        borderColor: "#CBCBCB",
        id: "table",
        scrollable: "false"
    });
    $.__views.view_body.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var soryin = require("soryin");
    $.viewFontSize = Alloy.createController("view_fontSize");
    var a_num = 70;
    var a = 1;
    var descs = [ {
        icon: "0xf2b5",
        title: "眼睛",
        subView: $.viewFontSize.getView()
    } ];
    var options = {
        descs: descs,
        table: $.table,
        bgColor: Alloy.Globals.soryinBgColor,
        selColor: Alloy.Globals.soryinOrangeColor
    };
    soryin.ckTableView(options);
    $.init = function() {
        $.progressView.width = "1%";
        $.progressView.animate({
            width: "70%",
            duration: 800
        });
        setInterval(change_a, 3e3 / a_num);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
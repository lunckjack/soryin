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
    $.__views.view_like = Ti.UI.createView({
        backgroundColor: Alloy.Globals.soryinBgColor,
        layout: "vertical",
        id: "view_like"
    });
    $.__views.view_like && $.addTopLevelView($.__views.view_like);
    $.__views.progressView = Ti.UI.createView({
        height: 22,
        width: "0%",
        backgroundColor: Alloy.Globals.soryinGreenColor,
        left: 0,
        top: 0,
        id: "progressView"
    });
    $.__views.view_like.add($.__views.progressView);
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
    $.__views.__alloyId71 = Ti.UI.createLabel({
        font: {
            fontSize: 50,
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        color: Alloy.Globals.soryinKwGrayColor,
        right: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 10,
        text: "喜好",
        id: "__alloyId71"
    });
    $.__views.view_like.add($.__views.__alloyId71);
    $.__views.table = Ti.UI.createTableView({
        separatorColor: "#CBCBCB",
        borderWidth: 1,
        borderColor: "#CBCBCB",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "table",
        scrollable: "false"
    });
    $.__views.view_like.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var soryin = require("soryin");
    $.timeFormat = Alloy.createController("time_format");
    $.viewEmoji = Alloy.createController("view_emoji");
    var a_num = 90;
    var a = 1;
    var descs = [ {
        icon: "0xe037",
        title: "时间显示",
        subView: $.timeFormat.getView()
    }, {
        icon: "0xe038",
        title: "绘文字",
        subView: $.viewEmoji.getView()
    } ];
    var options = {
        descs: descs,
        table: $.table,
        bgColor: Alloy.Globals.soryinBgColor,
        selColor: Alloy.Globals.soryinGreenColor
    };
    soryin.ckTableView(options);
    $.init = function() {
        $.progressView.width = "1%";
        $.progressView.animate({
            width: "90%",
            duration: 800
        });
        setInterval(change_a, 3e3 / a_num);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
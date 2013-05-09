function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_visual = Ti.UI.createView({
        layout: "vertical",
        id: "view_visual"
    });
    $.__views.view_visual && $.addTopLevelView($.__views.view_visual);
    $.__views.tab = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: "50",
        top: "0",
        layout: "horizontal",
        id: "tab"
    });
    $.__views.view_visual.add($.__views.tab);
    $.__views.tab1 = Ti.UI.createView({
        id: "tab1"
    });
    $.__views.tab.add($.__views.tab1);
    $.__views.__alloyId144 = Ti.UI.createView({
        layout: "horizontal",
        top: "10dp",
        left: "50dp",
        id: "__alloyId144"
    });
    $.__views.tab1.add($.__views.__alloyId144);
    $.__views.l2 = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            opacity: "0.5",
            fontFamily: "soryin"
        },
        id: "l2"
    });
    $.__views.__alloyId144.add($.__views.l2);
    $.__views.l1 = Ti.UI.createLabel({
        text: "色彩",
        id: "l1"
    });
    $.__views.__alloyId144.add($.__views.l1);
    $.__views.tab2 = Ti.UI.createView({
        id: "tab2"
    });
    $.__views.tab.add($.__views.tab2);
    $.__views.__alloyId145 = Ti.UI.createView({
        layout: "horizontal",
        top: "10dp",
        left: "50dp",
        id: "__alloyId145"
    });
    $.__views.tab2.add($.__views.__alloyId145);
    $.__views.l4 = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            opacity: "0.5",
            fontFamily: "soryin"
        },
        id: "l4"
    });
    $.__views.__alloyId145.add($.__views.l4);
    $.__views.l3 = Ti.UI.createLabel({
        text: "符号",
        id: "l3"
    });
    $.__views.__alloyId145.add($.__views.l3);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true"
    });
    $.__views.view_visual.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        backgroundColor: "#fff",
        id: "contentView",
        layout: "vertical"
    });
    $.__views.scrollView.add($.__views.contentView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    $.tab1.backgroundColor = "#494949";
    $.tab2.backgroundColor = "#fff";
    $.tab1.width = Ti.Platform.displayCaps.platformWidth / 2;
    $.tab2.width = Ti.Platform.displayCaps.platformWidth / 2;
    $.tab1.height = "50dp";
    $.tab2.height = "50dp";
    $.l2.text = entypo.fromCodePoint("0xe074");
    $.l4.text = entypo.fromCodePoint("0xe073");
    $.l2.color = "#fff";
    $.l1.color = "#fff";
    $.color = Alloy.createController("view_color");
    $.mark = Alloy.createController("view_mark");
    $.contentView.add($.color.getView());
    $.tab1.addEventListener("click", function() {
        $.tab1.backgroundColor = "#494949";
        $.tab2.backgroundColor = "#fff";
        $.l1.color = "#fff";
        $.l2.color = "#fff";
        $.l3.color = "#7F8C8D";
        $.l4.color = "#7F8C8D";
        $.contentView.removeAllChildren();
        $.contentView.add($.color.getView());
    });
    $.tab2.addEventListener("click", function() {
        $.tab1.backgroundColor = "#fff";
        $.tab2.backgroundColor = "#494949";
        $.l1.color = "#7F8C8D";
        $.l2.color = "#7F8C8D";
        $.l3.color = "#fff";
        $.l4.color = "#fff";
        $.contentView.removeAllChildren();
        $.contentView.add($.mark.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
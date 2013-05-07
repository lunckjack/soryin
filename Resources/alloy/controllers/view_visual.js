function Controller() {
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
    $.__views.__alloyId84 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId84"
    });
    $.__views.container.add($.__views.__alloyId84);
    $.__views.tab = Ti.UI.createView({
        top: "0",
        layout: "horizontal",
        id: "tab"
    });
    $.__views.__alloyId84.add($.__views.tab);
    $.__views.tab1 = Ti.UI.createView({
        id: "tab1"
    });
    $.__views.tab.add($.__views.tab1);
    $.__views.__alloyId85 = Ti.UI.createView({
        layout: "horizontal",
        top: "10dp",
        left: "50dp",
        id: "__alloyId85"
    });
    $.__views.tab1.add($.__views.__alloyId85);
    $.__views.l2 = Ti.UI.createLabel({
        id: "l2"
    });
    $.__views.__alloyId85.add($.__views.l2);
    $.__views.l1 = Ti.UI.createLabel({
        text: "描述",
        id: "l1"
    });
    $.__views.__alloyId85.add($.__views.l1);
    $.__views.tab2 = Ti.UI.createView({
        id: "tab2"
    });
    $.__views.tab.add($.__views.tab2);
    $.__views.__alloyId86 = Ti.UI.createView({
        layout: "horizontal",
        top: "10dp",
        left: "50dp",
        id: "__alloyId86"
    });
    $.__views.tab2.add($.__views.__alloyId86);
    $.__views.l4 = Ti.UI.createLabel({
        id: "l4"
    });
    $.__views.__alloyId86.add($.__views.l4);
    $.__views.l3 = Ti.UI.createLabel({
        text: "图片",
        id: "l3"
    });
    $.__views.__alloyId86.add($.__views.l3);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true"
    });
    $.__views.__alloyId84.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical"
    });
    $.__views.scrollView.add($.__views.contentView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
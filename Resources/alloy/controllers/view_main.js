function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_main = Ti.UI.createWindow({
        backgroundColor: "#f2f2f2",
        id: "view_main"
    });
    $.__views.view_main && $.addTopLevelView($.__views.view_main);
    var __alloyId11 = [];
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId12"
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.viewTop = Ti.UI.createView({
        height: "110",
        layout: "horizontal",
        width: Titanium.UI.FILL,
        id: "viewTop"
    });
    $.__views.__alloyId12.add($.__views.viewTop);
    $.__views.view_left = Ti.UI.createView({
        height: "110",
        layout: "vertical",
        width: "110",
        id: "view_left"
    });
    $.__views.viewTop.add($.__views.view_left);
    $.__views.icon_me = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        id: "icon_me"
    });
    $.__views.view_left.add($.__views.icon_me);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        text: "我",
        id: "__alloyId13"
    });
    $.__views.view_left.add($.__views.__alloyId13);
    $.__views.view_right = Ti.UI.createView({
        height: "110",
        layout: "vertical",
        width: Titanium.UI.FILL,
        id: "view_right"
    });
    $.__views.viewTop.add($.__views.view_right);
    $.__views.icon_cover = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        id: "icon_cover"
    });
    $.__views.view_right.add($.__views.icon_cover);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: "30"
        },
        color: "#ccc",
        text: "添加封面",
        id: "__alloyId14"
    });
    $.__views.view_right.add($.__views.__alloyId14);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showHorizontalScrollIndifcator: "true",
        showVerticalScrollIndicator: "true",
        layout: "vertical"
    });
    $.__views.__alloyId12.add($.__views.scrollView);
    $.__views.viewContent = Ti.UI.createView({
        layout: "vertical",
        id: "viewContent"
    });
    $.__views.scrollView.add($.__views.viewContent);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "horizontal",
        height: "110",
        id: "__alloyId15"
    });
    $.__views.viewContent.add($.__views.__alloyId15);
    $.__views.vv1 = Ti.UI.createView({
        id: "vv1",
        layout: "horizontal"
    });
    $.__views.__alloyId15.add($.__views.vv1);
    $.__views.experienceIcon = Ti.UI.createLabel({
        id: "experienceIcon"
    });
    $.__views.vv1.add($.__views.experienceIcon);
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "vertical",
        left: "5",
        id: "__alloyId16"
    });
    $.__views.vv1.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "36",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        text: "经验",
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.vv2 = Ti.UI.createView({
        id: "vv2",
        layout: "horizontal",
        x: "x"
    });
    $.__views.__alloyId15.add($.__views.vv2);
    $.__views.levelIcon = Ti.UI.createLabel({
        id: "levelIcon"
    });
    $.__views.vv2.add($.__views.levelIcon);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId19"
    });
    $.__views.vv2.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        text: "1",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "级别",
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "horizontal",
        height: "110",
        id: "__alloyId22"
    });
    $.__views.viewContent.add($.__views.__alloyId22);
    $.__views.vv3 = Ti.UI.createView({
        id: "vv3",
        layout: "horizontal"
    });
    $.__views.__alloyId22.add($.__views.vv3);
    $.__views.attentionIcon = Ti.UI.createLabel({
        id: "attentionIcon"
    });
    $.__views.vv3.add($.__views.attentionIcon);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId23"
    });
    $.__views.vv3.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        text: "5",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        text: "关注",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.viewBoottom = Ti.UI.createView({
        layout: "horizontal",
        id: "viewBoottom"
    });
    $.__views.scrollView.add($.__views.viewBoottom);
    $.__views.vv4 = Ti.UI.createView({
        id: "vv4",
        layout: "horizontal"
    });
    $.__views.viewBoottom.add($.__views.vv4);
    $.__views.likeIcon = Ti.UI.createLabel({
        id: "likeIcon"
    });
    $.__views.vv4.add($.__views.likeIcon);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId26"
    });
    $.__views.vv4.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        text: "0%",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        text: "喜好",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.vv5 = Ti.UI.createView({
        id: "vv5",
        layout: "horizontal"
    });
    $.__views.viewBoottom.add($.__views.vv5);
    $.__views.bodyIcon = Ti.UI.createLabel({
        id: "bodyIcon"
    });
    $.__views.vv5.add($.__views.bodyIcon);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId29"
    });
    $.__views.vv5.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        text: "0%",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        text: "身体",
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        id: "__alloyId32"
    });
    __alloyId11.push($.__views.__alloyId32);
    $.__views.content = Ti.UI.createView({
        id: "content"
    });
    $.__views.__alloyId32.add($.__views.content);
    $.__views.backBtn = Ti.UI.createImageView({
        id: "backBtn"
    });
    $.__views.__alloyId32.add($.__views.backBtn);
    $.__views.scrollable = Ti.UI.createScrollableView({
        views: __alloyId11,
        id: "scrollable",
        scrollingEnabled: "false"
    });
    $.__views.view_main.add($.__views.scrollable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
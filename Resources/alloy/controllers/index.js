function Controller() {
    function scrollToView(parentView, curView, curIndex) {
        parentView.add(curView);
        $.scrollable.scrollToView(curIndex);
    }
    function hideBackIndexButton() {
        ui.translate2($.backToIndex, -70, 0, 0, 200, function() {});
    }
    function showBackIndexButton() {
        ui.translate2($.backToIndex, 0, 0, 0, 200, function() {});
    }
    function viewAnimation() {
        if (!isAdd) {
            $.viewFun.add($.fun.getView());
            $.scrollView.scrollTo(0, 100);
            isAdd = true;
        }
    }
    function setIconFont() {
        var defaultColor = "#fff";
        Alloy.Globals.soryinBlueColor;
        Alloy.Globals.soryinPinkColor;
        Alloy.Globals.soryinKwGrayColor;
        $.icon_me.text = entypo.fromCodePoint("0xe007");
        $.icon_me.color = "#fff";
        $.icon_cover.text = entypo.fromCodePoint("0xe02b");
        $.icon_cover.color = "#ccc";
        $.icon_express.text = entypo.fromCodePoint("0xe07a");
        $.icon_express.color = defaultColor;
        $.expressNum.color = defaultColor;
        $.lab_express.color = defaultColor;
        $.icon_level.text = entypo.fromCodePoint("0xf2e6");
        $.icon_level.color = defaultColor;
        $.levelNum.color = defaultColor;
        $.lab_level.color = defaultColor;
        $.icon_attention.text = entypo.fromCodePoint("0xe02d");
        $.icon_attention.color = defaultColor;
        $.attentionNum.color = defaultColor;
        $.lab_attention.color = defaultColor;
        $.icon_mine.text = entypo.fromCodePoint("0xe038");
        $.icon_mine.color = defaultColor;
        $.mineNum.color = defaultColor;
        $.lab_mine.color = defaultColor;
        $.icon_like.text = entypo.fromCodePoint("0xe08a");
        $.icon_like.color = defaultColor;
        $.likePercent.color = defaultColor;
        $.lab_like.color = defaultColor;
        $.icon_body.text = entypo.fromCodePoint("0xe044");
        $.icon_body.color = defaultColor;
        $.bodyPercent.color = defaultColor;
        $.lab_body.color = defaultColor;
        $.backToIndex.text = entypo.fromCodePoint("0xe023");
        $.backToParent.text = entypo.fromCodePoint("0xe023");
        $.splashBackBtn.text = entypo.fromCodePoint("0xe023");
        $.splashIcon.text = entypo.fromCodePoint("0xe007");
        $.splashIcon.color = "#fff";
        $.viewIcon2.text = entypo.fromCodePoint("0xe07f");
        $.viewIcon2.color = "#fff";
    }
    function changeExpress() {
        $.expressNum.text = a;
        a_num > a && a++;
    }
    function changeLevel() {
        $.levelNum.text = b;
        b_num > b && b++;
    }
    function changeAttention() {
        $.attentionNum.text = c;
        c_num > c && c++;
    }
    function changeLike() {
        $.likePercent.text = d + "%";
        d_num > d && d++;
    }
    function changeBody() {
        $.bodyPercent.text = e + "%";
        e_num > e && e++;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview"
    });
    $.__views.index.add($.__views.webview);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.viewTop = Ti.UI.createView({
        height: "110",
        width: Titanium.UI.FILL,
        id: "viewTop"
    });
    $.__views.__alloyId2.add($.__views.viewTop);
    $.__views.view_left = Ti.UI.createView({
        height: "110",
        layout: "vertical",
        width: "110",
        backgroundColor: Alloy.Globals.soryinOrangeColor,
        left: 0,
        top: 0,
        id: "view_left"
    });
    $.__views.viewTop.add($.__views.view_left);
    $.__views.icon_me = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "icon_me"
    });
    $.__views.view_left.add($.__views.icon_me);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        color: "#fff",
        text: "我",
        id: "__alloyId3"
    });
    $.__views.view_left.add($.__views.__alloyId3);
    $.__views.view_right = Ti.UI.createView({
        height: "110",
        layout: "vertical",
        backgroundColor: "#fff",
        right: 0,
        id: "view_right"
    });
    $.__views.viewTop.add($.__views.view_right);
    $.__views.icon_cover = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "icon_cover"
    });
    $.__views.view_right.add($.__views.icon_cover);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "#ccc",
        text: "添加封面",
        id: "__alloyId4"
    });
    $.__views.view_right.add($.__views.__alloyId4);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "false",
        layout: "vertical"
    });
    $.__views.__alloyId2.add($.__views.scrollView);
    $.__views.viewFun = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "viewFun"
    });
    $.__views.scrollView.add($.__views.viewFun);
    $.__views.viewContent = Ti.UI.createView({
        height: "100",
        width: Titanium.UI.FILL,
        backgroundColor: Alloy.Globals.soryinOrangeColor,
        borderRadius: "10",
        top: "10",
        left: "10",
        right: "10",
        opacity: .8,
        backgroundSelectedColor: "#F2940C",
        id: "viewContent"
    });
    $.__views.scrollView.add($.__views.viewContent);
    $.__views.view_express = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        left: 10,
        top: 10,
        id: "view_express"
    });
    $.__views.viewContent.add($.__views.view_express);
    $.__views.icon_express = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "icon_express"
    });
    $.__views.view_express.add($.__views.icon_express);
    $.__views.__alloyId5 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId5"
    });
    $.__views.view_express.add($.__views.__alloyId5);
    $.__views.expressNum = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        text: "36",
        id: "expressNum"
    });
    $.__views.__alloyId5.add($.__views.expressNum);
    $.__views.lab_express = Ti.UI.createLabel({
        text: "经验",
        id: "lab_express"
    });
    $.__views.__alloyId5.add($.__views.lab_express);
    $.__views.view_level = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 10,
        right: 10,
        id: "view_level"
    });
    $.__views.viewContent.add($.__views.view_level);
    $.__views.icon_level = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "icon_level"
    });
    $.__views.view_level.add($.__views.icon_level);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId6"
    });
    $.__views.view_level.add($.__views.__alloyId6);
    $.__views.levelNum = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        text: "1",
        id: "levelNum"
    });
    $.__views.__alloyId6.add($.__views.levelNum);
    $.__views.lab_level = Ti.UI.createLabel({
        text: "级别",
        id: "lab_level"
    });
    $.__views.__alloyId6.add($.__views.lab_level);
    $.__views.viewSenond = Ti.UI.createView({
        height: "100",
        width: Titanium.UI.FILL,
        backgroundColor: Alloy.Globals.soryinPinkColor,
        borderRadius: "10",
        top: "10",
        left: "10",
        right: "10",
        opacity: .8,
        backgroundSelectedColor: Alloy.Globals.soryinPinkColor,
        backgroundFocusedColor: Alloy.Globals.soryinPinkColor,
        id: "viewSenond"
    });
    $.__views.scrollView.add($.__views.viewSenond);
    $.__views.view_attention = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        left: 10,
        top: 10,
        id: "view_attention"
    });
    $.__views.viewSenond.add($.__views.view_attention);
    $.__views.icon_attention = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "icon_attention"
    });
    $.__views.view_attention.add($.__views.icon_attention);
    $.__views.__alloyId7 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId7"
    });
    $.__views.view_attention.add($.__views.__alloyId7);
    $.__views.attentionNum = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        text: "5",
        id: "attentionNum"
    });
    $.__views.__alloyId7.add($.__views.attentionNum);
    $.__views.lab_attention = Ti.UI.createLabel({
        text: "关注",
        id: "lab_attention"
    });
    $.__views.__alloyId7.add($.__views.lab_attention);
    $.__views.view_mine = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 10,
        right: 10,
        id: "view_mine"
    });
    $.__views.viewSenond.add($.__views.view_mine);
    $.__views.icon_mine = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "icon_mine"
    });
    $.__views.view_mine.add($.__views.icon_mine);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId8"
    });
    $.__views.view_mine.add($.__views.__alloyId8);
    $.__views.mineNum = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        text: "0",
        id: "mineNum"
    });
    $.__views.__alloyId8.add($.__views.mineNum);
    $.__views.lab_mine = Ti.UI.createLabel({
        text: "我的",
        id: "lab_mine"
    });
    $.__views.__alloyId8.add($.__views.lab_mine);
    $.__views.viewBoottom = Ti.UI.createView({
        height: "100",
        width: Titanium.UI.FILL,
        backgroundColor: Alloy.Globals.soryinKwGrayColor,
        borderRadius: "10",
        top: "10",
        left: "10",
        right: "10",
        opacity: .8,
        backgroundSelectedColor: Alloy.Globals.soryinKwGrayColor,
        backgroundFocusedColor: Alloy.Globals.soryinKwGrayColor,
        id: "viewBoottom"
    });
    $.__views.scrollView.add($.__views.viewBoottom);
    $.__views.view_like = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        left: 10,
        top: 10,
        id: "view_like"
    });
    $.__views.viewBoottom.add($.__views.view_like);
    $.__views.icon_like = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "icon_like"
    });
    $.__views.view_like.add($.__views.icon_like);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId9"
    });
    $.__views.view_like.add($.__views.__alloyId9);
    $.__views.likePercent = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        text: "0%",
        id: "likePercent"
    });
    $.__views.__alloyId9.add($.__views.likePercent);
    $.__views.lab_like = Ti.UI.createLabel({
        text: "喜好",
        id: "lab_like"
    });
    $.__views.__alloyId9.add($.__views.lab_like);
    $.__views.view_body = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 10,
        right: 10,
        id: "view_body"
    });
    $.__views.viewBoottom.add($.__views.view_body);
    $.__views.icon_body = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "icon_body"
    });
    $.__views.view_body.add($.__views.icon_body);
    $.__views.__alloyId10 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        bottom: 10,
        id: "__alloyId10"
    });
    $.__views.view_body.add($.__views.__alloyId10);
    $.__views.bodyPercent = Ti.UI.createLabel({
        font: {
            fontSize: "35",
            fontFamily: "Orbitron"
        },
        color: "#ccc",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        text: "0%",
        id: "bodyPercent"
    });
    $.__views.__alloyId10.add($.__views.bodyPercent);
    $.__views.lab_body = Ti.UI.createLabel({
        text: "身体",
        id: "lab_body"
    });
    $.__views.__alloyId10.add($.__views.lab_body);
    $.__views.__alloyId11 = Ti.UI.createView({
        id: "__alloyId11"
    });
    __alloyId1.push($.__views.__alloyId11);
    $.__views.content = Ti.UI.createView({
        id: "content"
    });
    $.__views.__alloyId11.add($.__views.content);
    $.__views.backToIndex = Ti.UI.createLabel({
        font: {
            fontSize: "70",
            fontFamily: "soryin"
        },
        bottom: -10,
        left: 0,
        opacity: "0.8",
        color: "#ccc",
        id: "backToIndex"
    });
    $.__views.__alloyId11.add($.__views.backToIndex);
    $.__views.__alloyId12 = Ti.UI.createView({
        id: "__alloyId12"
    });
    __alloyId1.push($.__views.__alloyId12);
    $.__views.childContent = Ti.UI.createView({
        id: "childContent"
    });
    $.__views.__alloyId12.add($.__views.childContent);
    $.__views.backToParent = Ti.UI.createLabel({
        font: {
            fontSize: "70",
            fontFamily: "soryin"
        },
        bottom: -10,
        left: 0,
        opacity: "0.8",
        color: "#ccc",
        id: "backToParent"
    });
    $.__views.__alloyId12.add($.__views.backToParent);
    $.__views.scrollable = Ti.UI.createScrollableView({
        views: __alloyId1,
        id: "scrollable",
        scrollingEnabled: "false"
    });
    $.__views.webview.add($.__views.scrollable);
    $.__views.readView1 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#000",
        id: "readView1",
        visible: "false"
    });
    $.__views.index.add($.__views.readView1);
    $.__views.__alloyId13 = Ti.UI.createView({
        height: "110",
        layout: "vertical",
        width: "110",
        backgroundColor: Alloy.Globals.soryinOrangeColor,
        left: 0,
        top: 0,
        id: "__alloyId13"
    });
    $.__views.readView1.add($.__views.__alloyId13);
    $.__views.splashIcon = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "soryin"
        },
        top: 0,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "splashIcon"
    });
    $.__views.__alloyId13.add($.__views.splashIcon);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        color: "#fff",
        text: "我",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.viewInfo1 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "viewInfo1"
    });
    $.__views.readView1.add($.__views.viewInfo1);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "HiraginoSansGB-W3"
        },
        color: "#fff",
        bottom: -10,
        text: "类别",
        id: "__alloyId15"
    });
    $.__views.viewInfo1.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        width: 120,
        height: 1,
        bottom: 0,
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: Alloy.Globals.soryinOrangeColor,
        id: "__alloyId16"
    });
    $.__views.viewInfo1.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "HiraginoSansGB-W3"
        },
        color: "#F39C12",
        text: "缩影信息",
        id: "__alloyId17"
    });
    $.__views.viewInfo1.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        width: 120,
        height: 1,
        bottom: 0,
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: Alloy.Globals.soryinOrangeColor,
        id: "__alloyId18"
    });
    $.__views.viewInfo1.add($.__views.__alloyId18);
    $.__views.readView2 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#000",
        id: "readView2",
        visible: "false"
    });
    $.__views.index.add($.__views.readView2);
    $.__views.viewIcon2 = Ti.UI.createLabel({
        font: {
            fontSize: "150",
            fontFamily: "soryin"
        },
        id: "viewIcon2"
    });
    $.__views.readView2.add($.__views.viewIcon2);
    $.__views.readView3 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#000",
        id: "readView3",
        visible: "false"
    });
    $.__views.index.add($.__views.readView3);
    $.__views.viewInfo2 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "viewInfo2"
    });
    $.__views.readView3.add($.__views.viewInfo2);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: "60",
            fontFamily: "HiraginoSansGB-W3"
        },
        color: "#fff",
        bottom: -10,
        text: "返回",
        id: "__alloyId19"
    });
    $.__views.viewInfo2.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        width: 120,
        height: 1,
        bottom: 0,
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: Alloy.Globals.soryinOrangeColor,
        id: "__alloyId20"
    });
    $.__views.viewInfo2.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        font: {
            fontSize: "30",
            fontFamily: "HiraginoSansGB-W3"
        },
        color: "#F39C12",
        text: "缩影信息",
        id: "__alloyId21"
    });
    $.__views.viewInfo2.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        width: 120,
        height: 1,
        bottom: 0,
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: Alloy.Globals.soryinOrangeColor,
        id: "__alloyId22"
    });
    $.__views.viewInfo2.add($.__views.__alloyId22);
    $.__views.splashBackBtn = Ti.UI.createLabel({
        font: {
            fontSize: "70",
            fontFamily: "soryin"
        },
        bottom: -10,
        left: 0,
        color: "#fff",
        id: "splashBackBtn"
    });
    $.__views.readView3.add($.__views.splashBackBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    var ui = require("ui");
    var curHeight = Ti.Platform.displayCaps.platformHeight;
    var curWidth = Ti.Platform.displayCaps.platformWidth;
    $.view_right.width = curWidth - 110;
    $.seting = Alloy.createController("view_setting");
    $.record = Alloy.createController("view_record");
    $.visual = Alloy.createController("view_visual");
    $.level = Alloy.createController("view_level");
    $.fun = Alloy.createController("view_fun");
    $.publish = Alloy.createController("view_publish");
    $.sense = Alloy.createController("view_sense");
    $.like = Alloy.createController("view_like");
    $.body = Alloy.createController("view_body");
    var pageImg = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "/img/bg.svg");
    $.webview.html = "<html><head><style> html, body { margin: 0px; padding: 0px; } </style></head><body><image src=" + pageImg.getNativePath() + " style='width:320;height:480;'/></body></html>";
    $.view_left.addEventListener("click", function() {
        scrollToView($.content, $.seting.getView(), 1);
    });
    $.view_express.addEventListener("click", function() {
        scrollToView($.content, $.record.getView(), 1);
    });
    $.fun.on("onSwitchPublish", function() {
        scrollToView($.content, $.publish.getView(), 1);
    });
    $.fun.on("onSwitchSense", function() {
        scrollToView($.content, $.sense.getView(), 1);
    });
    $.seting.on("onSwitchQQ", function() {
        alert("腾讯QQ");
    });
    $.seting.on("onSwitchSina", function() {
        alert("新浪微博");
    });
    $.seting.on("onSwitchSplash", function() {
        alert("快速上手");
    });
    $.seting.on("onSwitchVisual", function() {
        scrollToView($.childContent, $.visual.getView(), 2);
    });
    $.seting.on("onSwitchCopyRight", function() {
        alert("版权信息");
    });
    $.view_level.addEventListener("click", function() {
        scrollToView($.content, $.level.getView(), 1);
    });
    $.view_like.addEventListener("click", function() {
        $.like.init();
        scrollToView($.content, $.like.getView(), 1);
    });
    $.view_body.addEventListener("click", function() {
        $.body.init();
        scrollToView($.content, $.body.getView(), 1);
    });
    $.backToIndex.addEventListener("click", function() {
        $.scrollable.scrollToView(0);
        $.content.removeAllChildren();
    });
    $.backToParent.addEventListener("click", function() {
        $.scrollable.scrollToView(1);
        $.childContent.removeAllChildren();
    });
    $.scrollView.addEventListener("scrollend", function() {
        viewAnimation();
    });
    $.scrollView.addEventListener("click", function() {
        viewAnimation();
    });
    $.sense.on("hideBackButton", function() {
        hideBackIndexButton();
    });
    $.sense.on("showBackButton", function() {
        showBackIndexButton();
    });
    $.record.on("hideBackButton", function() {
        hideBackIndexButton();
    });
    $.record.on("showBackButton", function() {
        showBackIndexButton();
    });
    var isAdd = false;
    setIconFont();
    var loadFirst = Ti.App.Properties.getBool("loadFist", true);
    if (loadFirst) {
        $.readView1.visible = true;
        ui.zoom($.readView1, function() {
            Ti.App.Properties.setBool("loadFist", false);
        });
        $.readView1.addEventListener("click", function() {
            this.visible = false;
            $.readView2.visible = true;
            ui.zoom($.readView2, function() {});
        });
        $.readView2.addEventListener("click", function() {
            this.visible = false;
            $.readView3.visible = true;
            ui.zoom($.readView3, function() {});
        });
        $.splashBackBtn.addEventListener("click", function() {
            ui.unzoom($.readView3, function() {});
        });
        $.viewInfo1.top = curHeight / 2 - $.viewInfo1.height;
        $.viewInfo2.top = curHeight / 2 - $.viewInfo2.height;
    }
    var a = 1, b = 1, c = 1, d = 1, e = 1;
    var a_num = 36, b_num = 3, c_num = 5, d_num = 100, e_num = 0;
    setInterval(changeExpress, 3e3 / a_num);
    setInterval(changeLevel, 3e3 / b_num);
    setInterval(changeAttention, 3e3 / c_num);
    setInterval(changeLike, 3e3 / d_num);
    setInterval(changeBody, 3e3 / e_num);
    d_num > 10 && ($.likePercent.font = {
        fontSize: 25,
        fontFamily: "Orbitron"
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
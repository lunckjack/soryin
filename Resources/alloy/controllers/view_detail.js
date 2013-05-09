function Controller() {
    function installImageView(retData) {
        var picturesArray = retData.data.pictures;
        var imageWidth = Ti.Platform.displayCaps.platformWidth / 4 - 10;
        view = Titanium.UI.createView({
            layout: "vertical",
            top: "5dp"
        });
        var viewImg = Titanium.UI.createView({
            layout: "horizontal",
            width: Titanium.UI.FILL,
            height: Titanium.UI.SIZE
        });
        for (i = 0; picturesArray.length > i; i++) {
            var tImage = Titanium.UI.createImageView({
                width: imageWidth,
                height: imageWidth,
                image: picturesArray[i],
                border: "2",
                textAlign: "center",
                borderColor: "#ccc",
                top: "5dp",
                left: 5
            });
            viewImg.add(tImage);
        }
        var viewSum = Titanium.UI.createView({
            layout: "horizontal",
            top: "5dp",
            width: Titanium.UI.SIZE,
            height: Titanium.UI.SIZE
        });
        var labelImgCount = Titanium.UI.createLabel({
            text: picturesArray.length,
            font: {
                fontSize: "36dp",
                fontFamily: "HiraginoSansGB-W6"
            },
            color: "#cccccc"
        });
        var labelImgText = Titanium.UI.createLabel({
            text: "张",
            color: "#cccccc"
        });
        viewSum.add(labelImgCount);
        viewSum.add(labelImgText);
        view.add(viewImg);
        view.add(viewSum);
    }
    function getEvents() {
        var initOptions = {
            url: Alloy.Globals.getEvent,
            method: "POST",
            timeout: 2e4
        };
        var callParams = {
            _taskKey: taskKey,
            _taskType: taskType,
            _currentLon: currentLon,
            _currentLat: currentLat
        };
        httpClient.req(initOptions, callParams, function(retData) {
            loadView(retData);
        }, function() {});
    }
    function loadView(retData) {
        if ("" == retData) {
            createWebView("暂无数据");
            createImageView("");
        } else {
            createWebView(retData);
            createImageView(retData);
        }
    }
    function createImageView(jsonObject) {
        installImageView(jsonObject);
    }
    function createWebView(jsonObject) {
        webView = Ti.UI.createWebView({
            hideShadow: true,
            backgroundColor: "white",
            html: "<html><head></head><body>" + jsonObject.data.description + "</body></html>"
        });
        $.contentView.add(webView);
    }
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
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId25"
    });
    $.__views.container.add($.__views.__alloyId25);
    $.__views.tab = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: "50dp",
        top: "0",
        layout: "horizontal",
        id: "tab"
    });
    $.__views.__alloyId25.add($.__views.tab);
    $.__views.tab1 = Ti.UI.createView({
        id: "tab1"
    });
    $.__views.tab.add($.__views.tab1);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "horizontal",
        top: "10dp",
        left: "50dp",
        id: "__alloyId26"
    });
    $.__views.tab1.add($.__views.__alloyId26);
    $.__views.l2 = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            opacity: "0.5",
            fontFamily: "soryin"
        },
        id: "l2"
    });
    $.__views.__alloyId26.add($.__views.l2);
    $.__views.l1 = Ti.UI.createLabel({
        text: "描述",
        id: "l1"
    });
    $.__views.__alloyId26.add($.__views.l1);
    $.__views.tab2 = Ti.UI.createView({
        id: "tab2"
    });
    $.__views.tab.add($.__views.tab2);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "horizontal",
        top: "10dp",
        left: "50dp",
        id: "__alloyId27"
    });
    $.__views.tab2.add($.__views.__alloyId27);
    $.__views.l4 = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            opacity: "0.5",
            fontFamily: "soryin"
        },
        id: "l4"
    });
    $.__views.__alloyId27.add($.__views.l4);
    $.__views.l3 = Ti.UI.createLabel({
        text: "图片",
        id: "l3"
    });
    $.__views.__alloyId27.add($.__views.l3);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true"
    });
    $.__views.__alloyId25.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        backgroundColor: "#fff",
        id: "contentView",
        layout: "vertical"
    });
    $.__views.scrollView.add($.__views.contentView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ui");
    var entypo = require("ti.entypo");
    var httpClient = require("HttpClient");
    var taskKey = "0500caca7edc4e1ebb2ba99920ea6a09";
    var taskType = "event";
    var currentLon = Ti.App.Properties.getString("curLongitude");
    var currentLat = Ti.App.Properties.getString("curLatitude");
    $.tab1.backgroundColor = "#fff";
    $.tab2.backgroundColor = "#f2f2f2";
    var view, webView;
    $.tab1.addEventListener("click", function() {
        $.tab1.backgroundColor = "#fff";
        $.tab2.backgroundColor = "#f2f2f2";
        $.contentView.remove(webView);
        $.contentView.add(webView);
        $.contentView.remove(view);
    });
    $.tab2.addEventListener("click", function() {
        $.tab1.backgroundColor = "#f2f2f2";
        $.tab2.backgroundColor = "#fff";
        $.contentView.remove(webView);
        $.contentView.remove(view);
        $.contentView.add(view);
    });
    $.init = function() {
        getEvents();
    };
    $.tab1.width = Ti.Platform.displayCaps.platformWidth / 2;
    $.tab2.width = Ti.Platform.displayCaps.platformWidth / 2;
    $.tab1.height = "50dp";
    $.tab2.height = "50dp";
    $.l2.text = entypo.fromCodePoint("0xe005");
    $.l4.text = entypo.fromCodePoint("0xe006");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
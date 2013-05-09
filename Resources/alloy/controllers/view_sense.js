function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_sense = Ti.UI.createView({
        backgroundColor: "#f2f2f2",
        id: "view_sense"
    });
    $.__views.view_sense && $.addTopLevelView($.__views.view_sense);
    $.__views.__alloyId131 = Ti.UI.createView({
        id: "__alloyId131"
    });
    $.__views.view_sense.add($.__views.__alloyId131);
    $.__views.cameraView = Ti.UI.createView({
        id: "cameraView"
    });
    $.__views.__alloyId131.add($.__views.cameraView);
    $.__views.viewSearch = Ti.UI.createView({
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: "25",
        borderColor: "#fff",
        right: 0,
        bottom: 20,
        id: "viewSearch"
    });
    $.__views.view_sense.add($.__views.viewSearch);
    $.__views.iconSense = Ti.UI.createLabel({
        font: {
            fontSize: "40",
            fontFamily: "soryin"
        },
        top: 5,
        right: 5,
        bottom: 5,
        color: "#F39C12",
        id: "iconSense"
    });
    $.__views.viewSearch.add($.__views.iconSense);
    $.__views.view = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#000",
        id: "view",
        visible: "false"
    });
    $.__views.view_sense.add($.__views.view);
    if (!Alloy.isTablet) {
        $.__views.searchView = Alloy.createController("view_search", {
            id: "searchView",
            __parentSymbol: $.__views.view
        });
        $.__views.searchView.setParent($.__views.view);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ui = require("ui");
    var entypo = require("ti.entypo");
    var picker;
    var scanResult;
    $.search = Alloy.createController("view_search");
    setTimeout(function() {
        var scanditsdk = require("com.mirasense.scanditsdk");
        picker = scanditsdk.createView({
            width: Ti.Platform.displayCaps.platformWidth,
            height: Ti.Platform.displayCaps.platformHeight,
            backgroundColor: "#f2f2f2"
        });
        picker.init("fmO1OEi9EeKSCIDaX4SRAsSBxn5OL4SDl8Hr5N/TOi8", 0);
        picker.setBeepEnabled(true);
        picker.setVibrateEnabled(true);
        picker.setViewfinderSize(.6, .2);
        picker.setInfoBannerOffset(20);
        picker.setSuccessCallback(function(e) {
            picker.stopScanning();
            scanResult = e.barcode;
        });
        picker.startScanning();
        $.cameraView.add(picker);
    }, 10);
    $.iconSense.text = entypo.fromCodePoint("0xe02f");
    $.viewSearch.addEventListener("click", function(e) {
        $.view.visible = true;
        $.trigger("hideBackButton", e);
        ui.zoom($.view, function() {
            ui.translate2($.searchView.getView("searchView"), 0, -180, 0, 200, function() {});
        });
    });
    $.view.addEventListener("click", function(e) {
        ui.translate2($.searchView.getView("searchView"), 0, 180, 0, 200, function() {
            ui.unzoom($.view, function() {
                $.trigger("showBackButton", e);
            });
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
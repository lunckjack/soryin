function Controller() {
    function getFormattedTime() {
        var amPM = "";
        var d = new Date();
        var time12Hour;
        var currentHour = d.getHours();
        amPM = 12 > currentHour ? "AM" : "PM";
        0 == currentHour && (time12Hour = 12);
        currentHour > 12 && (time12Hour = currentHour - 12);
        var currentMinute = d.getMinutes();
        currentMinute += "";
        1 == currentMinute.length && (currentMinute = "0" + currentMinute);
        $.time12.text = time12Hour + ":" + currentMinute + " ";
        $.labTime12.text = amPM;
        $.time24.text = currentHour + ":" + currentMinute + " ";
        $.time.text = currentHour + ":" + currentMinute + " ";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.time_format = Ti.UI.createView({
        backgroundColor: "white",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "time_format"
    });
    $.__views.time_format && $.addTopLevelView($.__views.time_format);
    $.__views.__alloyId26 = Ti.UI.createView({
        height: 60,
        width: Titanium.UI.FILL,
        id: "__alloyId26"
    });
    $.__views.time_format.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        left: 50,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.time = Ti.UI.createLabel({
        font: {
            fontSize: 30,
            fontFamily: "Let's go Digital",
            fontWeight: "bold"
        },
        color: Alloy.Globals.soryinKwGrayColor,
        text: "11:01",
        id: "time"
    });
    $.__views.__alloyId27.add($.__views.time);
    $.__views.labTime = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        left: 5,
        color: Alloy.Globals.soryinKwGrayColor,
        text: "晚",
        id: "labTime"
    });
    $.__views.__alloyId27.add($.__views.labTime);
    $.__views.ckTime = Alloy.createWidget("checkbox", "widget", {
        right: 10,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "ckTime",
        __parentSymbol: $.__views.__alloyId26
    });
    $.__views.ckTime.setParent($.__views.__alloyId26);
    $.__views.__alloyId28 = Ti.UI.createView({
        height: 60,
        width: Titanium.UI.FILL,
        id: "__alloyId28"
    });
    $.__views.time_format.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        left: 50,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.time12 = Ti.UI.createLabel({
        font: {
            fontSize: 30,
            fontFamily: "Let's go Digital",
            fontWeight: "bold"
        },
        color: Alloy.Globals.soryinKwGrayColor,
        text: "11:01",
        id: "time12"
    });
    $.__views.__alloyId29.add($.__views.time12);
    $.__views.labTime12 = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontFamily: "HiraginoSansGB-W3",
            fontWeight: "bold"
        },
        left: 5,
        color: Alloy.Globals.soryinKwGrayColor,
        text: "PM",
        id: "labTime12"
    });
    $.__views.__alloyId29.add($.__views.labTime12);
    $.__views.ckTime12 = Alloy.createWidget("checkbox", "widget", {
        right: 10,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "ckTime12",
        __parentSymbol: $.__views.__alloyId28
    });
    $.__views.ckTime12.setParent($.__views.__alloyId28);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: 60,
        width: Titanium.UI.FILL,
        id: "__alloyId30"
    });
    $.__views.time_format.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        left: 50,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.time24 = Ti.UI.createLabel({
        font: {
            fontSize: 30,
            fontFamily: "Let's go Digital",
            fontWeight: "bold"
        },
        color: Alloy.Globals.soryinKwGrayColor,
        text: "11:01",
        id: "time24"
    });
    $.__views.__alloyId31.add($.__views.time24);
    $.__views.ckTime24 = Alloy.createWidget("checkbox", "widget", {
        right: 10,
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "ckTime24",
        __parentSymbol: $.__views.__alloyId30
    });
    $.__views.ckTime24.setParent($.__views.__alloyId30);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.ckTime.init(function(state) {
        if (state) {
            $.ckTime12.isChecked && $.ckTime12.setChecked(false);
            $.ckTime24.isChecked && $.ckTime24.setChecked(false);
            $.time.color = Alloy.Globals.soryinOrangeColor;
            $.labTime.color = Alloy.Globals.soryinOrangeColor;
            $.time12.color = "#000";
            $.labTime12.color = "#000";
            $.time24.color = "#000";
        } else {
            $.time.color = "#000";
            $.labTime.color = "#000";
        }
    });
    $.ckTime12.init(function(state) {
        if (state) {
            $.ckTime.isChecked && $.ckTime.setChecked(false);
            $.ckTime24.isChecked && $.ckTime24.setChecked(false);
            $.time12.color = Alloy.Globals.soryinOrangeColor;
            $.labTime12.color = Alloy.Globals.soryinOrangeColor;
            $.time.color = "#000";
            $.labTime.color = "#000";
            $.time24.color = "#000";
        } else {
            $.time12.color = "#000";
            $.labTime12.color = "#000";
        }
    });
    $.ckTime24.init(function(state) {
        if (state) {
            $.ckTime.isChecked && $.ckTime.setChecked(false);
            $.ckTime12.isChecked && $.ckTime12.setChecked(false);
            $.time24.color = Alloy.Globals.soryinOrangeColor;
            $.time.color = "#000";
            $.labTime.color = "#000";
            $.time12.color = "#000";
            $.labTime12.color = "#000";
        } else $.time24.color = "#000";
    });
    setInterval(getFormattedTime, 5e3);
    getFormattedTime();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
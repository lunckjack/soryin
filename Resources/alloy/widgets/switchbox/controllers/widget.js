function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "switchbox/" + s : s.substring(0, index) + "/switchbox/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function scllow() {
        if (direction) {
            ui.rotate($.circleView, -50, 0, function() {});
            direction = false;
        } else {
            ui.rotate($.circleView, 0, 0, function() {});
            direction = true;
        }
    }
    new (require("alloy/widget"))("switchbox");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.switchbox = Ti.UI.createView({
        width: 80,
        height: 30,
        backgroundColor: Alloy.Globals.soryinOrangeColor,
        borderRadius: 15,
        left: 0,
        id: "switchbox"
    });
    $.__views.widget.add($.__views.switchbox);
    $.__views.circleView = Ti.UI.createLabel({
        width: 25,
        height: 25,
        backgroundColor: "#fff",
        borderRadius: 12.5,
        borderColor: "#fff",
        right: 2,
        bottom: 2,
        top: 2,
        id: "circleView"
    });
    $.__views.widget.add($.__views.circleView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var ui = require("ui");
    var direction = true;
    exports.init = function(callback) {
        var checkState = false;
        $.circleView.addEventListener("click", function() {
            checkState = !checkState;
            callback(checkState);
        });
        $.circleView.addEventListener("swipe", function(e) {
            "left" == e.direction ? scllow() : "right" == e.direction && scllow();
        });
        _.extend($.switchbox, args);
        _.extend($.circleView, args);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
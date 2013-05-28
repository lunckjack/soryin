function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "checkbox/" + s : s.substring(0, index) + "/checkbox/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function changeState(state) {
        $.chk.color = state ? Alloy.Globals.soryinSmGrayColor : "#fff";
        $.chk.text = state ? entypo.fromCodePoint("0xe064") : entypo.fromCodePoint("0xe01c");
    }
    new (require("alloy/widget"))("checkbox");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.checkbox = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        right: 0,
        id: "checkbox"
    });
    $.__views.checkbox && $.addTopLevelView($.__views.checkbox);
    $.__views.chk = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "soryin"
        },
        color: "#fff",
        id: "chk"
    });
    $.__views.checkbox.add($.__views.chk);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    var args = arguments[0] || {};
    $.chk.color = "#000";
    $.chk.text = entypo.fromCodePoint("0xe01c");
    var checkState = false;
    exports.init = function(callback) {
        $.checkbox.addEventListener("click", function() {
            checkState = !checkState;
            changeState(checkState);
            callback(checkState);
        });
        _.extend($.chk, args);
    };
    exports.setChecked = function(state) {
        changeState(state);
        checkState = state;
    };
    exports.isChecked = function() {
        return checkState;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
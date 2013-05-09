function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "checkbox/" + s : s.substring(0, index) + "/checkbox/" + s.substring(index + 1);
    return path;
}

function Controller() {
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
        id: "checkbox"
    });
    $.__views.checkbox && $.addTopLevelView($.__views.checkbox);
    $.__views.lbl = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        text: "Text beside the checkbox",
        id: "lbl"
    });
    $.__views.checkbox.add($.__views.lbl);
    $.__views.chk = Ti.UI.createLabel({
        color: "#000",
        textAlign: "center",
        width: "16dp",
        height: "16dp",
        borderWidth: 3,
        borderColor: "black",
        left: 1,
        top: 0,
        borderRadius: "8",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "chk"
    });
    $.__views.checkbox.add($.__views.chk);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    exports.init = function(callback) {
        $.lbl.text = args.message || 'Set "message" attribute to change';
        var checkState = false;
        $.checkbox.addEventListener("click", function() {
            checkState = !checkState;
            $.chk.borderColor = "#F39C12";
            $.chk.text = checkState ? "✔" : "";
            callback(checkState);
        });
        _.extend($.chk, args);
        _.extend($.lbl, args);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
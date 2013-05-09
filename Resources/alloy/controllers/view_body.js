function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_body = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "view_body"
    });
    $.__views.view_body && $.addTopLevelView($.__views.view_body);
    $.__views.checkbox1 = Alloy.createWidget("checkbox", "widget", {
        id: "checkbox1",
        color: "red",
        message: "checkbox1",
        __parentSymbol: $.__views.view_body
    });
    $.__views.checkbox1.setParent($.__views.view_body);
    $.__views.checkbox2 = Alloy.createWidget("checkbox", "widget", {
        id: "checkbox2",
        color: "red",
        message: "checkbox2",
        __parentSymbol: $.__views.view_body
    });
    $.__views.checkbox2.setParent($.__views.view_body);
    $.__views.checkbox3 = Alloy.createWidget("checkbox", "widget", {
        id: "checkbox3",
        color: "red",
        message: "checkbox3",
        __parentSymbol: $.__views.view_body
    });
    $.__views.checkbox3.setParent($.__views.view_body);
    $.__views.checkbox4 = Alloy.createWidget("checkbox", "widget", {
        id: "checkbox4",
        color: "red",
        message: "checkbox4",
        __parentSymbol: $.__views.view_body
    });
    $.__views.checkbox4.setParent($.__views.view_body);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.checkbox1.init(function(state) {
        alert("The box is " + (state ? "checked" : "unchecked"));
    });
    $.checkbox2.init(function(state) {
        alert("The box is " + (state ? "checked" : "unchecked"));
    });
    $.checkbox3.init(function(state) {
        alert("The box is " + (state ? "checked" : "unchecked"));
    });
    $.checkbox4.init(function(state) {
        alert("The box is " + (state ? "checked" : "unchecked"));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
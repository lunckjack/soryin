function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view_publish = Ti.UI.createView({
        backgroundColor: "#f2f2f2",
        id: "view_publish"
    });
    $.__views.view_publish && $.addTopLevelView($.__views.view_publish);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "http://soryin.cn/sdb0.3/"
    });
    $.__views.view_publish.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
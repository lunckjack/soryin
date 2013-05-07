function Controller() {
    function loadSearchTable() {
        for (var i = 0; 3 > i; i++) {
            var icon;
            var desc;
            switch (i) {
              case 0:
                icon = "0xe066";
                desc = "搜身边";
                break;

              case 1:
                icon = "0xe065";
                desc = "搜云端";
                break;

              case 2:
                icon = "0xe07a";
                desc = "最新发布";
            }
            var row = Ti.UI.createTableViewRow({
                height: 60,
                selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
                backgroundColor: "#F39C12"
            });
            var viewRoot = Ti.UI.createView({
                width: Titanium.UI.FILL,
                height: Titanium.UI.SIZE
            });
            var view = Ti.UI.createView({
                width: Titanium.UI.SIZE,
                height: Titanium.UI.SIZE,
                layout: "horizontal"
            });
            var icon = Ti.UI.createLabel({
                text: entypo.fromCodePoint(icon),
                font: {
                    fontSize: "30",
                    fontFamily: "soryin"
                },
                color: "#fff"
            });
            var desc = Ti.UI.createLabel({
                text: desc,
                font: {
                    fontSize: "25",
                    fontFamily: "HiraginoSansGB-W3"
                },
                color: "#fff",
                left: 5
            });
            view.add(icon);
            view.add(desc);
            viewRoot.add(view);
            row.add(viewRoot);
            tableData[i] = row;
        }
        $.searchTable.setData(tableData);
    }
    function onClickSearchTable() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.searchView = Ti.UI.createView({
        backgroundColor: "black",
        height: 180,
        left: 0,
        bottom: -180,
        id: "searchView"
    });
    $.__views.searchView && $.addTopLevelView($.__views.searchView);
    $.__views.searchTable = Ti.UI.createTableView({
        id: "searchTable",
        scrollable: "false"
    });
    $.__views.searchView.add($.__views.searchTable);
    onClickSearchTable ? $.__views.searchTable.addEventListener("click", onClickSearchTable) : __defers["$.__views.searchTable!click!onClickSearchTable"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var entypo = require("ti.entypo");
    require("ui");
    var tableData = [];
    loadSearchTable();
    __defers["$.__views.searchTable!click!onClickSearchTable"] && $.__views.searchTable.addEventListener("click", onClickSearchTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
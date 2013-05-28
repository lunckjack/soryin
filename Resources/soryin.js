function bindTableEvent(table, options) {
    var bgColor = options.bgColor;
    var selColor = options.selColor;
    var prevrow = 0;
    var isOpen = false;
    table.addEventListener("click", function(e) {
        if (!e.row.isSub) if (e.row.isOpen) {
            e.row.isOpen = false;
            isOpen = false;
            ui.rotate(e.row.arrow, 0, 250, function() {});
            table.deleteRow(e.index + 1);
            e.row.backgroundColor = bgColor;
            changeBgColor(e, Alloy.Globals.soryinKwGrayColor);
        } else {
            e.row.isOpen = true;
            ui.rotate(e.row.arrow, 90, 250, function() {});
            prevrow >= e.index ? setTimeout(function() {
                table.scrollToTop(50 * e.index, {
                    animated: true
                });
            }, 100) : isOpen ? setTimeout(function() {
                table.scrollToTop(50 * (e.index - 1), {
                    animated: true
                });
            }, 100) : setTimeout(function() {
                table.scrollToTop(50 * e.index, {
                    animated: true
                });
            }, 100);
            isOpen = true;
            prevrow = e.index;
            table.insertRowAfter(e.index, e.row.subrow);
            var rows = table.data[0].rows;
            for (i = 0; rows.length > i; i++) if (rows[i].isOpen && i != e.index) {
                ui.rotate(rows[i].arrow, 0, 250, function() {});
                table.deleteRow(i + 1);
                rows[i].isOpen = false;
            }
            e.row.backgroundColor = selColor;
            changeBgColor(e, "#fff");
        }
    });
}

function changeBgColor(e, curColor) {
    e.row.iconView.color = curColor;
    e.row.titleView.color = curColor;
    e.row.arrow.color = curColor;
    e.row.line.backgroundColor = "#cbcbcb";
}

var entypo = require("ti.entypo");

var ui = require("ui");

exports.ckTableView = function(options) {
    var tableData = [];
    var table = options.table;
    var descs = options.descs;
    var bgColor = options.bgColor;
    var selColor = options.selColor;
    for (i = 0; descs.length > i; i++) {
        var icon = descs[i].icon;
        var title = descs[i].title;
        var subView = descs[i].subView;
        var row = Ti.UI.createTableViewRow({
            height: "60",
            selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE,
            backgroundColor: bgColor,
            selectedBackgroundColor: "transparent"
        });
        var iconView = Ti.UI.createLabel({
            text: entypo.fromCodePoint(icon),
            left: "10",
            font: {
                fontSize: "30",
                fontFamily: "soryin"
            },
            color: Alloy.Globals.soryinKwGrayColor
        });
        var titleView = Ti.UI.createLabel({
            font: {
                fontSize: "24",
                fontFamily: "HiraginoSansGB-W3"
            },
            text: title,
            textAlign: "center",
            color: Alloy.Globals.soryinKwGrayColor,
            left: "80",
            top: "15"
        });
        var line = Ti.UI.createView({
            height: "60",
            left: "60",
            width: 1,
            backgroundColor: "#CBCBCB"
        });
        var arrow = Ti.UI.createLabel({
            text: entypo.fromCodePoint("0xe011"),
            right: 10,
            font: {
                fontSize: 30,
                fontFamily: "soryin"
            },
            color: Alloy.Globals.soryinKwGrayColor
        });
        var subrow = Ti.UI.createTableViewRow({
            selectedBackgroundColor: selColor,
            layout: "vertical",
            height: Titanium.UI.SIZE
        });
        subrow.add(subView);
        subrow.isSub = true;
        subrow.isOpen = false;
        row.subrow = subrow;
        row.add(iconView);
        row.iconView = iconView;
        row.add(line);
        row.line = line;
        row.add(titleView);
        row.titleView = titleView;
        row.add(arrow);
        row.arrow = arrow;
        tableData[i] = row;
    }
    table.setData(tableData);
    bindTableEvent(table, options);
};
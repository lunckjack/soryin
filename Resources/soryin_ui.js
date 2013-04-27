var entypo = require("ti.entypo");

var ui = require("ui");

exports.createTableView = function(options) {
    var titleArray = options.titleArray;
    var titleColor = options.titleColor;
    var iconArray = options.iconArray;
    var iconColor = options.iconColor;
    var isHasSub = options.isHasSub;
    var subView = options.subView;
    var tableData = options.tableData;
    var isIcon = options.isIcon;
    options.backgroundColor;
    for (i = 0; titleArray.length > i; i++) {
        var row = Ti.UI.createTableViewRow({
            height: "80dp",
            selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        row.isOpen = false;
        var title = Ti.UI.createLabel({
            font: {
                fontSize: "25dp",
                fontFamily: "HiraginoSansGB-W6"
            },
            text: titleArray[i],
            textAlign: "center",
            width: "200dp",
            left: "50dp",
            color: titleColor
        });
        var line = Ti.UI.createView({
            height: "80dp",
            left: "69.5dp",
            width: "1dp",
            backgroundColor: "#cecece"
        });
        var leftLabel;
        leftLabel = isIcon ? Ti.UI.createLabel({
            text: entypo.fromCodePoint(iconArray[i]),
            left: "5dp",
            textAlign: "center",
            font: {
                fontSize: "50dp",
                opacity: "0.5",
                fontFamily: "soryin"
            },
            color: iconColor
        }) : Ti.UI.createLabel({
            text: i + 1,
            left: "5dp",
            textAlign: "center",
            font: {
                fontSize: "50dp",
                opacity: "0.5",
                fontFamily: "soryin"
            },
            color: iconColor
        });
        var arrow = Ti.UI.createImageView({
            image: "/imgs/utility/pointer.png",
            right: "10dp"
        });
        row.add(leftLabel);
        row.add(line);
        row.add(title);
        row.add(arrow);
        row.arrow = arrow;
        if (isHasSub) {
            var subrow = Ti.UI.createTableViewRow({
                selectedBackgroundColor: "transparent"
            });
            subrow.isSub = true;
            subrow.add(subView);
            row.subrow = subrow;
        }
        tableData[i] = row;
    }
};

exports.bindTableEvent = function(table) {
    var prevrow = 0;
    var isOpen = false;
    table.addEventListener("click", function(e) {
        if (!e.row.isSub) if (e.row.isOpen) {
            e.row.isOpen = false;
            isOpen = false;
            ui.rotate(e.row.arrow, 0, 250, function() {});
            table.deleteRow(e.index + 1);
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
        }
    });
};
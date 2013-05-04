function FauxShadow() {
    return Ti.UI.createView({
        bottom: 0,
        height: "1dp",
        backgroundColor: "#9a9a9a"
    });
}

function AgendaRow(session) {
    function smallText(text, top, left, bold, color) {
        return Ti.UI.createLabel({
            text: text,
            top: top,
            left: left,
            color: color || "#787878",
            height: "14dp",
            ellipsize: true,
            wordWrap: false,
            minimumFontSize: "10dp",
            font: {
                fontSize: "10dp",
                fontWeight: bold || "normal"
            }
        });
    }
    var self = Ti.UI.createTableViewRow({
        height: "55dp",
        selectedBackgroundColor: "#cdcdcd",
        className: "agendaRow"
    });
    self.sessionObject = session;
    var start = moment(session.start_time);
    self.add(Ti.UI.createLabel({
        text: session.name,
        top: 0,
        left: "60dp",
        right: 0,
        height: "18dp",
        ellipsize: true,
        wordWrap: false,
        minimumFontSize: "14dp",
        color: "#373e47",
        font: {
            fontWeight: "bold",
            fontSize: "14dp"
        }
    }));
    self.add(smallText(session.custom_fields.presenter, "17dp", "60dp"));
    self.add(smallText(session.custom_fields.location, "32dp", "60dp"));
    self.add(smallText(start.format("h:mma"), 0, 0, "bold", "#373e47"));
    return self;
}

function StatusView(status) {
    var created = moment(status.created_at);
    var self = Ti.UI.createView({
        height: status.photo ? "365dp" : "130dp",
        backgroundColor: "#fff",
        bottom: "10dp"
    });
    var divider = Ti.UI.createView({
        backgroundColor: "#cdcdcd",
        bottom: "60dp",
        left: "5dp",
        right: "5dp",
        height: "1dp"
    });
    self.add(divider);
    var avatar = Ti.UI.createImageView({
        image: status.custom_fields.avatar,
        defaultImage: "/img/profile/no-profile-pic.png",
        height: "44dp",
        width: "44dp",
        left: "5dp",
        bottom: "8dp",
        borderRadius: "3dp"
    });
    self.add(avatar);
    var name = Ti.UI.createLabel({
        text: status.custom_fields.name,
        color: "#000",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: "55dp",
        bottom: "37dp",
        font: {
            fontWeight: "bold",
            fontSize: "14dp"
        }
    });
    self.add(name);
    var org = Ti.UI.createLabel({
        text: status.custom_fields.org,
        color: "#0574bf",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: "55dp",
        bottom: "25dp",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        }
    });
    self.add(org);
    var createdLabel = Ti.UI.createLabel({
        bottom: "40dp",
        right: "5dp",
        color: "#787878",
        text: created.fromNow(),
        font: {
            fontSize: "10dp"
        }
    });
    self.add(createdLabel);
    self.add(Ti.UI.createLabel({
        text: status.message,
        bottom: "70dp",
        left: "5dp",
        right: "5dp",
        height: "60dp",
        color: "#000",
        font: {
            fontSize: "14dp"
        }
    }));
    status.photo && self.add(Ti.UI.createImageView({
        image: status.photo.urls.medium_500,
        bottom: "140dp",
        height: "220dp"
    }));
    return self;
}

function StatusRow(status) {
    var self = Ti.UI.createTableViewRow({
        height: status.photo ? "375dp" : "140dp",
        selectedBackgroundColor: "#fff",
        className: status.photo ? "photoRow" : "statusRow"
    });
    self.statusObject = status;
    var content = new StatusView(status);
    self.add(content);
    var fauxShadow = new FauxShadow();
    fauxShadow.bottom = "10dp";
    self.add(fauxShadow);
    return self;
}

var _ = require("alloy/underscore"), Backbone = require("alloy/backbone");

exports.alert = function(titleid, textid) {
    Ti.UI.createAlertDialog({
        title: L(titleid),
        message: L(textid)
    }).show();
};

exports.zoom = function(view, callback) {
    var matrix = Ti.UI.create2DMatrix();
    view.animate({
        transform: matrix,
        opacity: .8,
        duration: 300
    }, function() {
        callback && callback();
    });
};

exports.unzoom = function(view, callback) {
    var matrix = Ti.UI.create2DMatrix();
    view.animate({
        transform: matrix,
        opacity: 0,
        duration: 300
    }, function() {
        callback && callback();
    });
};

exports.FauxShadow = FauxShadow;

exports.HeaderView = function(options) {
    function option(t, idx) {
        var rightOffset = options.optionWidth * Math.abs(idx - (options.options.length - 1)) + "dp";
        var v = Ti.UI.createView({
            width: options.optionWidth + "dp",
            right: rightOffset
        });
        var l = Ti.UI.createLabel({
            text: L(t),
            color: "#0574bf",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            font: {
                fontFamily: "Quicksand-Bold",
                fontSize: "14dp"
            }
        });
        v.add(l);
        v.addEventListener("click", function() {
            indicator.animate({
                right: rightOffset,
                duration: 250
            }, function() {
                self.fireEvent("change", {
                    selection: t
                });
            });
        });
        return v;
    }
    var self = Ti.UI.createView(_.extend({
        backgroundColor: "#fff",
        height: "35dp"
    }, options.viewArgs || {}));
    var fauxShadow = new FauxShadow();
    self.add(fauxShadow);
    var indicator = Ti.UI.createView({
        top: 0,
        right: options.optionWidth * (options.options.length - 1) + "dp",
        bottom: "1dp",
        width: options.optionWidth + "dp",
        backgroundColor: "#ffce00"
    });
    self.add(indicator);
    var title = Ti.UI.createLabel({
        text: L(options.title),
        color: "#373e47",
        left: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "Quicksand-Bold",
            fontSize: "14dp"
        }
    });
    self.add(title);
    for (var i = 0, l = options.options.length; l > i; i++) self.add(option(options.options[i], i));
    self.on = function(ev, cb) {
        self.addEventListener(ev, cb);
    };
    self.goTo = function(idx) {
        var rightOffset = options.optionWidth * Math.abs(idx - (options.options.length - 1)) + "dp";
        indicator.right = rightOffset;
    };
    return self;
};

exports.AgendaRow = AgendaRow;

exports.StatusView = StatusView;

exports.StatusRow = StatusRow;

exports.rotate = function(view, g, t) {
    var t1 = Ti.UI.create3DMatrix();
    var a1 = Titanium.UI.createAnimation();
    t1 = t1.rotate(g, 0, 0, 1);
    a1.transform = t1;
    a1.duration = t;
    a1.repeat = 1;
    view.animate(a1);
};

exports.translate = function(view, x, y, z, callback) {
    SwitchBarolt = Ti.UI.create3DMatrix(), 0, 0;
    SwitchBarolt = SwitchBarolt.translate(x, y, z);
    view.animate({
        transform: SwitchBarolt,
        duration: 200
    }, function() {
        callback && callback();
    });
};

exports.translate2 = function(view, x, y, z, t, callback) {
    SwitchBarolt = Ti.UI.create3DMatrix(), 0, 0;
    SwitchBarolt = SwitchBarolt.translate(x, y, z);
    view.animate({
        transform: SwitchBarolt,
        duration: t
    }, function() {
        callback && callback();
    });
};

exports.untranslate = function(view, callback) {
    SwitchBarolt = Ti.UI.create3DMatrix(), 0, 0;
    SwitchBarolt = SwitchBarolt.translate(0, 0, 0);
    view.animate({
        transform: SwitchBarolt,
        duration: 200
    }, function() {
        callback && callback();
    });
};

exports.untranslate2 = function(view, t, callback) {
    SwitchBarolt = Ti.UI.create3DMatrix(), 0, 0;
    SwitchBarolt = SwitchBarolt.translate(0, 0, 0);
    view.animate({
        transform: SwitchBarolt,
        duration: t
    }, function() {
        callback && callback();
    });
};

exports.navbtn = function(icon) {
    var iconView = Ti.UI.createView();
    var btn = Ti.UI.createButton({
        backgroundImage: icon,
        width: "40dp",
        height: "34dp"
    });
    iconView.add(btn);
    return iconView;
};
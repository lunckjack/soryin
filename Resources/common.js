var Alloy = require("alloy");

exports.addItem = function(collection) {
    var random = Math.ceil(1e3 * Math.random());
    var model = Alloy.createModel("record", {
        id: random,
        _type: "event",
        _imgUrl: "http://www.soryin.com:8080",
        _time: new Date().getTime(),
        _title: "test"
    });
    collection.add(model);
    model.save();
    collection.fetch();
};

exports.removeItem = function(collection, index) {
    var model = collection.at(index);
    collection.remove(model);
    model.destroy();
    collection.fetch();
};
exports.definition = {
    config: {
        columns: {
            id: "int",
            _type: "text",
            _imgUrl: "text",
            _time: "text",
            _title: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "record"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("record", exports.definition, [ function(migration) {
    migration.name = "record";
    migration.id = "20130404101486";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                id: "int",
                _type: "text",
                _imgUrl: "text",
                _time: "text",
                _title: "text"
            }
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable("record");
    };
} ]);

collection = Alloy.C("record", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
exports.definition = {
	config : {
		columns : {
			"id" : "int",
			"_type" : "text",
			"_imgUrl" : "text",
			"_time" : "text",
			"_title" : "text"
		},
		adapter : {
			type : "sql",
			collection_name : "record"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
		// extended functions and properties go here
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
		// extended functions and properties go here
		});

		return Collection;
	}
}

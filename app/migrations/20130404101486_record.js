migration.up = function(migrator) {
	migrator.createTable({
		"columns" : {
			"id" : "int",
			"_type" : "text",
			"_imgUrl" : "text",
			"_time" : "text",
			"_title" : "text"
		}
	});
};

migration.down = function(migrator) {
	migrator.dropTable("record");
};

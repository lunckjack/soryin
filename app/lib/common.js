var Alloy = require('alloy');

exports.addItem = function(collection) {
	// random title and image
	var random = Math.ceil(Math.random() * 1000);
    var model = Alloy.createModel('record', {
    	id:random,
        _type : 'event',
        _imgUrl: 'http://www.soryin.com:8080',
        _time: new Date().getTime(),
        _title:'test'
    });
    
    // add new model to local collection
    collection.add(model);

	// save the model to persistent storage
    model.save();

	// reload the collection from persistent storage
    collection.fetch();
};

exports.removeItem = function(collection, index) {
	var model = collection.at(index);

	// remove the model from the collection
	collection.remove(model);

	// destroy the model from persistence
	model.destroy();

  	// update views from sql storage
  	collection.fetch();
};

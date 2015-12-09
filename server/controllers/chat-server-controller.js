var Chat=require('../models/chats')

module.exports.create = function (req, res) {

	var chat = new Chat(req.body);
	chat.save(function(err, result) {
		res.json(result);
	});

}

module.exports.list = function (req, res) {
	Chat.find({}, function (err, results) {
		res.json(results);
	})
}
var mongoose=require('mongoose');

module.exports = mongoose.model( 'chats' , {
	message:String,
	user:String
	});


chatApp.controller('chatAppController', ['$scope', '$resource', function($scope, $resource){
	var postchat= $resource('/api/chats');
	postchat.query(function(results) {
		$scope.chats= results;
	});

	$scope.chats = [];
	$scope.updateChat= function(){
			var chat= new postchat();
			chat.message=$scope.newchat;
			chat.user=$scope.newname;
			chat.$save(function (result) {
				console.log(result);
				$scope.chats.push(result);
				$scope.newchat = '';
				$scope.newname = '';
			});

	};
}])
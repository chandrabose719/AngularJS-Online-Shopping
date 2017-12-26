app.factory('regFactory', function($rootScope,$http){
	// User Register
	return {
		registerDetail : function(data){
			return $http({
				method : 'POST',
				url : 'http://localhost:7777/angularjs/bower/shopapp/js/php/register.php', 
				data : data
			})
			.then(function(response){
				console.log(response);
				return response;
			});
		}
	}		
});
app.factory('purchaseFactory', function($rootScope, $http){
	return {
		storeDetail : function(data){
			return $http ({
				method : 'POST',
				url : 'http://localhost:7777/angularjs/bower/shopapp/js/php/purchase.php',
				data : data
			})
			.then(function(response){
				return response;
				console.log(response);
			})
		}
	}
});
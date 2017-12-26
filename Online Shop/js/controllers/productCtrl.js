app.controller('productCtrl', function($scope, $location, $http, $rootScope){
	// $scope.checkLogin = function(){
	// 	if($cookies.get('user_email') == undefined){

	// 	}
	// }
	$http.get(
		'http://localhost:7777/angularjs/bower/shopapp/js/php/product.php'
	).then(function(data){
		var data = data.data;
		if (data.length != 0) {
			$scope.product_data = data;
		}
		else{
			$scope.product_data = 'error';
			console.log($scope.product_data);
		}
	},function(error){
		$scope.product_data = 'No Product Available!';
		console.log($scope.product_data);
		console.log(error);
	});

	$scope.cartArray = [];
	$scope.addtoCart = function(index){
		var product_data = $scope.product_data[index];
		var cartObj = {};
		cartObj.product_id = product_data.product_id;
		cartObj.product_name = product_data.product_name;
		cartObj.product_cost = product_data.product_cost;
		cartObj.product_qty = 1;
		if ($rootScope.cartArray != undefined){
			if ($rootScope.cartArray.hasOwnProperty(cartObj.product_id)){
				for (var key in $rootScope.cartArray){
					if (key == cartObj.product_id) {
						$rootScope.cartArray[key].product_qty += 1;
					}
				}	
			}
			else{
				$scope.cartArray[product_data.product_id] = cartObj; 
				$rootScope.cartArray = $scope.cartArray;
			}
		}
		else{
			$scope.cartArray[product_data.product_id] = cartObj; 
			$rootScope.cartArray = $scope.cartArray;
		}	
	};

	$scope.getCartcount = function(){
		var cartCount = 0;
		var cartArray = $rootScope.cartArray; 
		if(cartArray == undefined || cartArray == null){
			cartCount += 0;
			return cartCount;
		}
		else{
			for(var key in cartArray){
				cartCount += cartArray[key].product_qty;
			}
			return cartCount;
		}
	};
});
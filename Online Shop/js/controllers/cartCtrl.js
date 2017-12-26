app.controller('cartCtrl', function($scope, $http, $location, $rootScope, $cookies, purchaseFactory){
	$scope.user_name = $cookies.get('user_email');
	if ($scope.user_name == undefined) {
		$location.path('/login');
	}
	$scope.cartData = $rootScope.cartArray;
	if ($scope.cartData != undefined) {
		$scope.carts = [];
		for (var p in $scope.cartData) {
			$scope.carts.push($scope.cartData[p]);
			getCartamount();
		}
	}
	else{
		$location.path('/product');
		console.log($scope.cartData);
	}
	function getCartamount(){
		$scope.productTotal = 0;
		for (var key in $rootScope.cartArray){
			$scope.productAmount = (
				$rootScope.cartArray[key].product_cost * $rootScope.cartArray[key].product_qty
			);
			$scope.productTotal += $scope.productAmount;
		}	
	};

	$scope.decCart = function(id){
		for (var key in $rootScope.cartArray){
			if (key == id) {
				$rootScope.cartArray[key].product_qty -= 1;
				if ($rootScope.cartArray[key].product_qty != 0) {
					getCartamount();	
				}else{
					delete $rootScope.cartArray[key];
				}
			}
		}
		$location.path('/cart');
	};
	
	$scope.incCart = function(id){
		for (var key in $rootScope.cartArray){
			if (key == id) {
				$rootScope.cartArray[key].product_qty += 1;
				getCartamount();
			}
		}
		$location.path('/cart');
	};

	$scope.purchasedArr = [];
	$scope.payDetail = function(){
		for (var k in $scope.cartData){
			var purchasedObj = {};
			purchasedObj.name = $scope.cartData[k].product_name;
			purchasedObj.qty = $scope.cartData[k].product_qty;
			$scope.purchasedArr.push(purchasedObj);
		}
		var data = {
			'user_name' : $scope.user_name,
			'product' : $scope.purchasedArr,
			'amount' : $scope.productTotal
		}
		purchaseFactory.storeDetail(data).then(function(response){
			if (response == 'success') {
				$location.path('/thank-you');
			}
			else{
				$location.path('/cart');	
			}
		});	
	};
});
app.controller('loginCtrl', function($scope, $http, $location, $cookies, $rootScope, shopFactory){
	if ($cookies.get('user_email') != undefined) {
		logout();	
	}
	$scope.userLogin = function(){
		var user_email = $scope.user_email; 
		var user_password = $scope.user_password;
		if (user_email == '' || user_email == null) {
			$scope.email_error = 'User Name Empty!';
		}
		else if (user_password == '' || user_password == null) {
			$scope.pass_error = 'User Password Empty!';
		}
		else{
			shopFactory.loginDetail(user_email,user_password).then(function(response) {
				if ((response != undefined)){
					$cookies.put('user_email', $scope.user_email);	
					$rootScope.email = $scope.user_email;
					$location.path('/product');
					$scope.user_email = null;
					$scope.user_password = null;
				}
				else{
					$scope.user_error = 'User Name or Password Wrong!';
					console.log($scope.user_error);
				}
			});
		}	
	};

	$scope.logout = function(){
		$cookies.remove('user_email');
	};	
});
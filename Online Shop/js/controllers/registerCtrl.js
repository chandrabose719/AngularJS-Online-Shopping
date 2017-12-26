app.controller('registerCtrl', function($scope, $http, $location, regFactory){
	$scope.userRegister = function(){
		if ($scope.user_name == null || $scope.user_email == null || $scope.user_password == null) {
			$scope.user_error = 'Please Fill All The Field!';
		}
		else{
			var data= {
				'user_name':$scope.user_name,
				'user_email':$scope.user_email,
				'user_password':$scope.user_password
			};
			regFactory.registerDetail(data).then(function(response){
				if (response.data == 'success'){
					$location.path('/login');
				}
				else{
					$scope.user_error = 'Registeration Failed!';
					console.log($scope.user_error);
				}
			});
		}	
	}
});
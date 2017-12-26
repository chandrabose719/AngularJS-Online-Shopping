app.factory('shopFactory', function($rootScope,$http){
	// User Login
	return {
		loginDetail : function(user_email,user_password){
			return $http.post(
				'http://localhost:7777/angularjs/bower/shopapp/js/php/login.php',
				{
					'user_email':user_email, 
					'user_password':user_password
				}
			).then(function(response){
				var data = response.data[0];
				return data;
			});
		}
	}

	// // User Register
	// return {
	// 	regDetail : function(data){
	// 		console.log(data);
	// 		// return $http.post({
				
	// 		// 	url : 'http://localhost:7777/angularjs/bower/shopapp/js/php/register.php', 
	// 		// 	data : data
	// 		// })
	// 		// .then(function(response){
	// 		// 	console.log(response);
	// 		// 	return response;
	// 		// });
	// 	}
	// }		
});
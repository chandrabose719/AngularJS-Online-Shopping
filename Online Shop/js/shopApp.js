var app = angular.module("shopApp", ["ngRoute", "ngCookies"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/register", {
        controller : 'registerCtrl',
        templateUrl : "views/register.html"
    })
    .when("/login", {
        controller : 'loginCtrl',
        templateUrl : "views/login.html"
    })
    .when("/product", {
        controller : 'productCtrl',
        templateUrl : "views/product.html"
    })
    .when("/cart", {
        controller : 'cartCtrl',
        templateUrl : "views/cart.html"
    })
    .when("/payment", {
        controller : 'cartCtrl',
        templateUrl : "views/payment.html"
    })
    .when("/thank-you", {
        templateUrl : "views/thank-you.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});


// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
// <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-cookies.js"></script>
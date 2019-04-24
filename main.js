var app = angular.module('myApp', ['ngRoute','ngCookies'])
app.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : "loginForm/login.html",
        controller : "loginCtrl"
    })
    .when("/", {
        templateUrl : "dashboardForm/dashboard.html",
        controller : "dashboardCtrl"
    })
    .when("/admin", {
        templateUrl : "admin/admin.html",
        controller : "adminCtrl"
    })
    .when("/users", {
        templateUrl : "usersForm/users.html",
        controller : "usersCtrl"
    })
    .otherwise({
        redirectTo : "/login"
    });
    $locationProvider.html5Mode(true);
}]);


app.run(['$rootScope','$location', '$cookieStore', '$http', function($rootScope, $location, $cookieStore, $http) {
    $rootScope.globals = $cookieStore.get('globals') || {};
    // console.log($rootScope.globals);
        if ($rootScope.globals.currentUser) {
            // $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; 
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // var restrictedPage = $.inArray($location.path(), ['/']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            // console.log(loggedIn);
            // if (restrictedPage && !loggedIn) {
            //     $location.path('/');
            // }
        });
}]);




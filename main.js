var app = angular.module('myApp', ["ngRoute"]);
app.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : "views/login.html",
        controller : "loginCtrl"
    })
    .when("/", {
        templateUrl : "views/dashboard.html",
        // controller : "dashboardCtrl"
    })
    .otherwise({
        redirectTo : "/login"
    });
    $locationProvider.html5Mode(true);
}]);
// app.run(function($rootScope) {
//     $rootScope.emailAdd = $scope.email;
// });
app.controller('loginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
    
    $scope.sign = function(){
        $location.path("/");
        $http.get('http://localhost:3000/users').then(function(data){
            $scope.usersData = data;
            console.log($scope.usersData);
        }); 
        var data = JSON.stringify({ email: $scope.email,
                    password : $scope.password})
        console.log(data);
        $http.post("http://localhost:3000/details", data).then(function(response) {
            console.log(response);
            console.log('Data posted successfully');
        })
    }
 
}]);


// app.controller('dashboardCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
    
//     $scope.back = function(){
//         $location.path("/login");
       
//     }
 
// }]);

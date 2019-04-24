app.controller("usersCtrl", ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.signUp = function(){
      $location.path("/admin");
      var data = ({name: $scope.name, email: $scope.email, password : $scope.password, isAdmin: $scope.isAdmin});
      $http.post("http://localhost:3000/user", data).then(function(response) {
        console.log("data posted succefully!!");
      })
    }
 // opt: 0,
}]);
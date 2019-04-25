app.controller("usersCtrl", ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.signUp = function(){
      $location.path("/admin");
      var data = ({id : 0, name: $scope.name, email: $scope.email, password : $scope.password, isAdmin: $scope.isAdmin, action: 'insert'});
      $http.post("http://localhost:3000/user12", data).then(function(response) {
        console.log("data posted succefully!!");
      })
    }
 // opt: 0,
}]);
app.controller('adminCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
     $scope.show = true;
     $http.get('http://localhost:3000/users').then(function(data){
               $scope.usersData = data.data;
               console.log($scope.usersData);
          });
     $scope.add = function(){
          $location.path("/users");
     }
     
     $scope.selUser = function(user) {
          $scope.selected_user = user;
          angular.element('#myModal').modal();
     }
     $scope.isSelected = function(user) {
          return $scope.selected_user === user;
     }
     // $scope.show = false;
     $scope.edit = function(){
          angular.element('#myModal').modal();
          var data = ({ id: $scope.selected_user.id, name : $scope.selected_user.name , email: $scope.selected_user.email, password : $scope.selected_user.password, isAdmin : $scope.selected_user.isAdmin.data});
          $http.post("http://localhost:3000/user1", data).then(function(response) {
               // console.log(data);
          });
     }
     $scope.delete = function(){
          angular.element('#myModal').modal();
          $scope.selected_user.id = "";
          $scope.selected_user.name = "";
          $scope.selected_user.email = "";
          $scope.selected_user.password = "";
          $scope.selected_user.isAdmin.data = ""; 
          $scope.selUser(null);
     }
}]);

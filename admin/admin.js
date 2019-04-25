app.controller('adminCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
     $scope.show = true;
     var data = {
          id: 80,
          name:'Raj',
          email:'test@gmail.com',
          password:'12345',
          isAdmin: 1,
          action:'select'
     };
     $http({
          method: 'POST',
          url: 'http://localhost:3000/user12',
          data: JSON.stringify(data)
        })
        .then(function (success) {
             $scope.usersData = success.data;
        }, function (error) {
          console.log(error.data);
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
     $scope.edit = function(){
          angular.element('#myModal').modal();
          var data = ({ id: $scope.selected_user.id, name : $scope.selected_user.name , email: $scope.selected_user.email, password : $scope.selected_user.password, isAdmin : $scope.selected_user.isAdmin.data, action : 'update'});
          $http.post("http://localhost:3000/user12", data).then(function(response) {
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

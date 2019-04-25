app.controller("loginCtrl", ['$scope', '$http', '$location', '$cookies',function($scope, $http, $location, $cookies){
    $scope.sign = function(){
            // $cookies.put(data);
        if($scope.email == null && $scope.password == null){
            alert("Please enter email and password");
        }else{
            var data = ({ id: 1, name : 'test', email: $scope.email, password : $scope.password, isAdmin : 1, action : 'check'});
            $http.post("http://localhost:3000/user12", data).then(function(response) {
                $scope.users = response.data[0];
                angular.forEach($scope.users, function(key,value){
                     if(JSON.stringify(key) == 1)
                    {
                        confirm("login successfull!!");
                        $cookies.put(data);
                        $location.path("/");
                    }else{
                        confirm("Email and password doesn't exist!!");
                        $scope.email = "";
                        $scope.password = "";
                    }
                });
            });
        }
    }
 
}]); 
app.controller("loginCtrl", ['$scope', '$http', '$location', '$cookies',function($scope, $http, $location, $cookies){
    $scope.sign = function(){
            // $cookies.put(data);
        if($scope.email == null && $scope.password == null){
            alert("please enter email and password");
        }else{
            var data = ({ email: $scope.email, password : $scope.password});
            // console.log(typeof(data));
            $http.post("http://localhost:3000/users", data).then(function(response) {
                angular.forEach(response.data[0], function(key,value){
                     if(key == 1)
                    {
                        confirm("login successfull!!");
                        $cookies.put(data);
                        $location.path("/");
                    }else{
                        confirm("Email and password doesn't exist!!");
                        $scope.email = "";
                        $scope.password = "";
                    }
                })
            })
        }
    }
 
}]); ;
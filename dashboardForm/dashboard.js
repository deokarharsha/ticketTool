app.controller('dashboardCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.submit = function(){
        $scope.loading = true;
        $location.path("/admin");
    }
}]);

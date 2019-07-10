angular.module("swabhav.app", ['moduleA']).controller("MainController", function($scope, $rootScope) {
    console.log("inside controller");
    console.log($scope);
    console.log($rootScope);

    $scope.data = {
        message: "hello Module"
    };
});
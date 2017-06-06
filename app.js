var app = angular.module('app', []);
app.controller('ctrl1', function($scope){
    $scope.animate = '';

    $scope.toggle = function(){
        $scope.animate = $scope.animate === 'open' ? '' : 'open';
    }
})

app.controller('ctrl2', function($scope){
    $scope.animate = '';

    $scope.toggle = function(){
        $scope.animate = $scope.animate === 'open' ? '' : 'open';
    }
})

app.controller('ctrl3', function($scope){
    $scope.animate = '';

    $scope.toggle = function(){
        $scope.animate = $scope.animate === 'open' ? '' : 'open';
    }
})


app.controller('ctrl4', function($scope){
    $scope.animate = '';

    $scope.toggle = function(){
        $scope.animate = $scope.animate === 'open' ? '' : 'open';
    }
})

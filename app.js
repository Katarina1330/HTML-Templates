var app = angular.module('app', []);
app.controller('ctrlCard1', function($scope) {
    $scope.animate = '';

    $scope.toggle = function() {
        $scope.animate = $scope.animate === 'open' ? '' : 'open';
    }
})

app.controller('ctrlCard2', function($scope) {
    $scope.animate = '';

    $scope.toggle = function() {
        $scope.animate = $scope.animate === 'open' ? '' : 'open';
    }
})

app.controller('ctrlCard3', function($scope) {
    $scope.animate = '';

    $scope.toggle = function() {
        $scope.animate = $scope.animate === 'open' ? '' : 'open';
    }
})

app.controller('ctrlCard4', function($scope) {
    $scope.animate = '';

    $scope.toggle = function() {
        $scope.animate = $scope.animate === 'open' ? '' : 'open';
    }
})

app.controller('ctrlGridView', function($scope) {
    $scope.tasks = [];

    var task1 = { id: 1, name: 'Task 1', desc: 'This is Task 1' };
    var task2 = { id: 2, name: 'Task 2', desc: 'This is Task 2' };
    var task3 = { id: 3, name: 'Task 3', desc: 'This is Task 3' };
    var task4 = { id: 4, name: 'Task 4', desc: 'This is Task 4' };
    var task5 = { id: 5, name: 'Task 5', desc: 'This is Task 5' };

    $scope.tasks.push(task1);
    $scope.tasks.push(task2);
    $scope.tasks.push(task3);
    $scope.tasks.push(task4);
    $scope.tasks.push(task5);
})
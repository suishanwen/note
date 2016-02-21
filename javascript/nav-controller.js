var NavController = function ($scope, Path, $http, $location, noteService) {
    $scope.toDoSomething = function (loc) {
        noteService.note=null;
        $location.path('/' + loc)
    };
};
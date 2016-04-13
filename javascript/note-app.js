var noteApp = angular.module('noteApp', [ 'ngRoute']);
noteApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/nav', {
            templateUrl: '../note/nav.html',
            controller: 'NavController'
        }).
        when('/list', {
            templateUrl: '../note/note-list.html',
            controller: 'NoteListController'
        }).
        when('/note', {
            templateUrl: '../note/note.html',
            controller: 'NoteController'
        }).
        when('/note-edit', {
            templateUrl: '../note/note-edit.html',
            controller: 'NoteEditController'
        }).otherwise({
            redirectTo: '/nav'
        });
    }]);

noteApp
    .controller('NavController', NavController)
    .controller('NoteListController', NoteListController)
    .controller('NoteController', NoteController)
    .controller('NoteEditController', NoteEditController);

noteApp.service('noteService', function () {
    return {
        server: 'http://42.96.207.122:89/'
    }
});

noteApp.directive("selfWidth",function(){
    return{
        restrict: 'A',
        link: function(scope,element,attrs){
            element[0].style.width=attrs.selfWidth+"px";
        }
    }
});

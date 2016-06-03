var noteApp = angular.module('noteApp', [ 'ngRoute']);
noteApp.run(["$q",function($q){
    var checkPermisstion=function(){
        var deferred=$q.defer();
        if (Notification.permission !== "granted") {
            Notification.requestPermission(function(status){
                if(status==="granted"){
                    deferred.resolve(true)
                }else{
                    deferred.resolve(false)
                }
            });
        }else{
            deferred.resolve(true)
        }
        return deferred.promise;
    };
    checkPermisstion().then(function(result){
        if(result){
            notify("隔壁老王群", "隔壁老王 475692491，群主叫豆豆\n一个很牛逼的人");
        }
    });
}]);
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

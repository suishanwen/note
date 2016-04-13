var NavController = function ($scope, $location, noteService) {
    setBgHeight();
    $(window).resize(function(){
        setBgHeight();
    });
    $scope.toDoSomething = function (loc) {
        $(window).resize(function(){
        });
        noteService.note=null;
        $location.path('/' + loc)
    };
    function setBgHeight(){
        $(".nav-main")[0].style.height = window.innerHeight+'px';
    }
};
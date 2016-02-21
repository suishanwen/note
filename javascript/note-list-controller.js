var NoteListController = function ($scope, Path, $http, $timeout, $location,noteService) {
    $scope.notes=[];
    var getNotes=function(){
        var url = noteService.server+"api/note/";
        $http.get(url).success(function (data) {
            $scope.notes=data;
        }).error(function (data) {
            alert("获取数据失败！");
        });
    };
    getNotes();

    $scope.showNote=function(id){
        sessionStorage.setItem("id",id);
        $location.path("/note");
    }
};
var testApp = angular.module('testApp', ['ui.bootstrap', 'wiki.common', 'ngRoute']);
testApp.controller("testController", ["$scope", "Path", "$http", "$timeout", "$q","$interval", function ($scope, Path, $http, $timeout, $q,$interval) {
    var date1;
    var date2;
    (function () {
        date1=new Date();
        var deferred = $q.defer();
        setTimeout(function () {
            date2=new Date();
            console.log(date1<date2);
            console.log("2015-12-11">"2015-12-11");
            console.log("2014-12-12">"2015-11-11");
            console.log("2014-12-12"<"2014-12-11");
            //deferred.notify('notify');
            //deferred.resolve('resolve');
            deferred.reject('reject ');
        }, 3000);
        return deferred.promise;
    })().then(function (e) {  //resove
        console.log(e)
    }, function (e) {      //error(reject)
        console.log(e)
    }, function (e) {      //notify
        console.log(e)
    });



    //$http.jsonp(url).success(function(data){
    // console.log(data)
    //
    // });
    var getData=function(){
        var url="https://www.okcoin.cn/api/v1/ticker.do?symbol=btc_cny";
        $http.get(url).success(function(data){
            $scope.btc=data;
        });
        url="https://www.okcoin.cn/api/v1/ticker.do?symbol=ltc_cny";
        $http.get(url).success(function(data){
            $scope.ltc=data;
        });
    };

    var attack=function(url){
        $interval(function(){
            $http.get(url);
        }, 1,0,true);
    };

    //attack("http://user.qzone.qq.com/1547102830?t=0.04145740855083446&ptlang=2052");
    //$interval(function(){
    //    getData();
    //}, 1000,0,true);
}]);

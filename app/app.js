/**
 * Created with JetBrains WebStorm.
 * User: gwynnj
 * Date: 5/11/13
 * Time: 11:58 AM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module("app", []).config(function($routeProvider) {
    $routeProvider.when("/", {
            templateUrl: "welcome.html",
            controller: "HelloController"
        });

    $routeProvider.when("/login", {
            templateUrl: "login.html",
            controller: "LoginController"
        });

    $routeProvider.when("/frame", {
            templateUrl: "callflow.html",
            controller: "FrameController"
        }).otherwise({ redirectTo: '/' });
});

app.controller("FrameController", function($scope) {

});

app.controller("LoginController", function($scope) {

});

app.controller("HelloController", function($scope) {
    $scope.greeting = { text: 'Hello' };
});


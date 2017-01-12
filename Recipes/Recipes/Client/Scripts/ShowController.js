/// <reference path="ShowController.js" />
(function (app) {

    var ShowController = function ($scope) {
        $scope.isVisible = function () {
            return $scope.current && $scope.current.recipe;
        };

        $scope.cancel = function () {
            $scope.current.recipe = null;
        };
    };

    app.controller("ShowController", ShowController);

}(angular.module("recipesApp")));

(function (app) {

    var recipeService = function ($http, recipeApiUrl) {

        var getAll = function () {
            console.log(recipeApiUrl);
            return $http.get(recipeApiUrl);
        };
     
        var getById = function (id) {
            return $http.get(recipeApiUrl + id);
        };

        var update = function (recipe) {
            return $http.put(recipeApiUrl + recipe.Id, recipe);
        };

        var create = function (recipe) {
            return $http.post(recipeApiUrl, recipe);
        };

        var destroy = function (recipe) {
            return $http.delete(recipeApiUrl + recipe.Id);
        };

        return {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            delete: destroy
        };

    };

    app.factory("recipeService", recipeService);

}(angular.module("recipesApp")))
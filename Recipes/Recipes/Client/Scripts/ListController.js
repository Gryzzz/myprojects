(function (app) {

    var ListController = function ($scope, recipeService) {

        recipeService.getAll()
            .success(function (data) {
                console.log(data);
                $scope.recipes = data;
                // Show initial picture.
                $scope.current = {
                    recipe: {
                        Title: "Pick a recipe!",
                        PictureUrl: "/Content/Images/foodGif.jpg"
                    }
                };

            });

        $scope.create = function () {
          //  alert("i'm in create");
            console.log($scope.recipes);
            $scope.edit = {
                recipe: {
                    Title: "New Recipe",
                    Type: "new"
                }
            };
            console.log($scope.recipes);
        };

        $scope.show = function (recipe) {
            console.log("show: " + recipe);
            $scope.current.recipe = recipe;
        };

        $scope.delete = function (recipe) {
            recipeService.delete(recipe)
            .success(function () {
                removeRecipeById(recipe.Id);
            });
        };

        var removeRecipeById = function (id) {
            for (var i = 0; i < $scope.recipes.length; i++) {
                if ($scope.recipes[i].Id == id) {
                    $scope.recipes.splice(i, 1);
                    break;
                }

            }
        };


    };

    app.controller("ListController", ListController);

}(angular.module("recipesApp")));
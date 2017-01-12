(function (app) {
    
    var EditController = function ($scope, $routeParams, $location, recipeService) {
        var id = $routeParams.id;
        var initOnedriveButton = function () {
            var pickerOptions = {
                success: function (files) {
                    // Handle returned file object(s)
                   // alert("You picked " + files.values[0].fileName);
                },

                cancel: function () {
                    // handle when the user cancels picking a file
                },

                linkType: "webViewLink", // or "downloadLink",
                multiSelect: false // or true
            };
            var pickerButton = OneDrive.createOpenButton(pickerOptions);
            document.getElementById("onedrivePicker").appendChild(pickerButton);
        }
        //initOnedriveButton();

        if (id == "createNew") {
            $scope.edit = {
                recipe: {
                    Title: "New Recipe",
                    Type: "new"
                }
            };
        } else if (id != null) {
            recipeService.getById(id)
                .success(function(data) {
                    $scope.edit = {
                        recipe: data
                    };
                });

        } else {
            navigateBackToList();
        }


        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.recipe;
        };

        $scope.cancel = function () {
            $scope.edit.recipe = null;
            navigateBackToList();
        };

        $scope.save = function () {
          
            if ($scope.edit.recipe.Id) {
                updateRecipe();
            } else {
                createRecipe();
            }
        };

        var navigateBackToList = function() {
            $location.path("/list");
        }

        var updateRecipe = function () {
            recipeService.update($scope.edit.recipe)
            .success(function () {
               // angular.extend($scope.recipe, $scope.edit.recipe);
                $scope.edit.recipe = null;
                navigateBackToList();
            });
        };

        var createRecipe = function () {
            recipeService.create($scope.edit.recipe)
            .success(function (recipe) {
                //$scope.recipes.push(recipe);
                $scope.edit.recipe = null;
                navigateBackToList();
            });
        };
    };

    app.controller("EditController", EditController);

}(angular.module("recipesApp")));

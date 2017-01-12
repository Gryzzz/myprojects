(function () {

    var app = angular.module("recipesApp", ["ngRoute"]);
    var config = function ($routeProvider, $httpProvider) {
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider
            .when("/list",
                { templateUrl: "/client/views/list.html" })
            .when("/details/:id",
                { templateUrl: "/Client/views/details.html" })
            .when("/edit/:id",
                { templateUrl: "/client/views/edit.html" })
            .otherwise(
                { redirectTo: "/list" });
     };
     app.config(config);
     app.constant("recipeApiUrl", "/api/Recipes/");
    /*
     app.directive('checkImage', function ($http) {
         return {
             restrict: 'A',
             link: function (scope, element, attrs) {
                 attrs.$observe('ngSrc', function (ngSrc) {
                     $http.get(ngSrc).success(function () {
                         alert('image exist');
                     }).error(function () {
                         alert('image not exist');
                         element.attr('src', '/Content/Images/foodGif.jpg'); // set default image
                     });
                 });
             }
         };
     }); /**/
   //  $timeout(initWookmark, 0);
     function initWookmark() {
      //   jQuery("#allRecipes div").wookmark({
             //autoResize: true,
             //container: angular.element("#allRecipes"),
             //offset: 4,
             //itemWidth: 205
        // });
     }
     initWookmark();
}());
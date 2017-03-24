var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){

  $routeProvider
  .when('/',{
    templateUrl: ".static/partials/login.html"
  })
  .when('/dashboard',{
    templateUrl:"/partials/dashboard.html"
  })
  .when('/show/:id',{
    templateUrl:"/partials/show.html"
  })
  .otherwise({
    redirectTo:'/'
  })
});

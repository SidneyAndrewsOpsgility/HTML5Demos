var phonecatApp = angular.module('htmlApp', [
  'ngRoute',
  'htmlApp.Controllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'htmlApp.Controllers.Empty'
      }).
      when('/svg', {
        templateUrl: 'partials/svg.html',
        controller: 'htmlApp.Controllers.Empty'
      }).
      when('/jquery', {
        templateUrl: 'partials/jquery.html',
        controller: 'htmlApp.Controllers.Empty'
      }).
      when('/selectors', {
        templateUrl: 'partials/selectors.html',
        controller: 'htmlApp.Controllers.Empty'
      }).
      when('/workers', {
        templateUrl: 'partials/workers.html',
        controller: 'htmlApp.Controllers.Empty'
      }).
      when('/video', {
        templateUrl: 'partials/video.html',
        controller: 'htmlApp.Controllers.Empty'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
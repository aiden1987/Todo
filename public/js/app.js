//'use strict';

/*
  App Module 
  Define Routers
*/

var todoApp = angular.module('todoApp', [
  'ngRoute',
  'todoCtrls'
]);

todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/todos', {
        templateUrl: 'partials/list.html',
        controller: 'TodoListCtrl'
      }).
      when('/todos/:_id', {
        templateUrl: 'partials/detail.html',
        controller: 'TodoDetailCtrl'
      }).
	  when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'NewTodoCtrl'
      }).
      otherwise({
        redirectTo: '/todos'
      });
  }]);

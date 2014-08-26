var todoCtrls = angular.module('todoCtrls', []);

/*  Controller for List Page */
todoCtrls.controller("TodoListCtrl", function($scope,$location, $http) {
    $http.get('/api/todos')
	.success(function(res){
		$scope.todos = res;
	});
	/*
	.error(function(res){
		//console.log('error');
	});
	*/
	$scope.deleteTodo = function(_id){
		$http.delete('/api/todo/'+_id).success(function(res){
			$location.path( '/');
		});
	};
	
	
});

/*  Controller for Detail Page */
todoCtrls.controller("TodoDetailCtrl", function($scope, $location, $routeParams, $http) {
	var _id = $routeParams._id;
	
    $http.get('/api/todo/'+_id)
	.success(function(res){
		$scope.todo = res;
	});
	$scope.cancel = function(){
		$location.path( '/');
	};
	
	$scope.updateTodo = function(id){
		$http.put('/api/todo/'+id, $scope.todo).success(function(res){
			$location.path('/');
		});
	};
});

/*  Controller for New Page */
todoCtrls.controller("NewTodoCtrl", function($scope,$location, $http) {
	$scope.createTodo = function(){
		$http.post('/api/todo', $scope.todo).success(function(res){
			$location.path( '/');
		});
	};
	
});

var app = angular.module("todo", []);

app.controller("todoCtrl", function($scope, $http) {
    $http.get('/api/todos')
	.success(function(res){
		//console.log('get list success');
		$scope.todos = res;
	})
	.error(function(res){
		//console.log('error');
	});
	
	$scope.deleteTodo = function(_id){
		$http.delete('/api/todo/'+_id).success(function(res){
			$scope.todos=res;
		});
		//$http.get('/api/todos').success(function(res){	$scope.todos = res; });
	};
	$scope.createTodo = function(){
		$http.post('/api/todo', $scope.todo).success(function(res){
			$scope.todo = {};
			$scope.todos=res;
		});
		//$http.get('/api/todos').success(function(res){	$scope.todos = res; });
	};
});
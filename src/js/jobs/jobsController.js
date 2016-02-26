(function () {
	 'use strict';

	 angular.module('app')
	 	.controller('jobsController', jobsController);

	 jobsController.$inject = ['$http', '$routeParams'];

	 function jobsController ($http, $routeParams) {
	 	var vm = this;
	 	//console.log($routeParams);

	 	$http.get('http://10.0.1.193:3000/api/jobs/' + $routeParams.id)
	 		.then(function (response) {
	 			 vm.job = response.data;
	 			 console.log(response.data);
	 		})
			.catch(function (e) {
				console.err(e.message) ;
			});
	 	 
	 }

})();
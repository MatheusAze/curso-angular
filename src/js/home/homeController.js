(function(){
	'use strict';

	angular.module('app').controller('homeController', homeController);

	homeController.$inject = ['$http'];

	function homeController($http){
		var vm = this;
		vm.count = 0;

		$http.get('http://10.0.1.193:3000/api/jobs')
			.success(function(data) {
				console.log('-> ', data)
			})
			.error(function (err) {
				 console.error(err) ;
			});

		vm.increment = function() {
			vm.count++;
		};

	}


})();
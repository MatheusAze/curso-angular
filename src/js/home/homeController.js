(function(){
	'use strict';

	angular.module('app').controller('homeController', homeController);

	homeController.$inject = ['$http'];

	function homeController($http){
		var vm = this;

		$http.get('http://10.0.1.193:3000/api/jobs')
			 .then(function(response) {
			    vm.jobs = response.data.items;
			 })
			 .then(function (data) {
				console.log('Segunda req: ', data) ;
		 	 });

	}


})();
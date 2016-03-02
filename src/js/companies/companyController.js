(function () {
	 'use strict';

	 angular.module('app')
	 	.controller('companyController', companyController);

	 companyController.$inject = ['$routeParams', '$location', '$scope', 'companyService'];

	 function companyController ($routeParams, $location, $scope, companyService) {
	 	var vm = this;
	 	/*
		get({chave: valor, outraChave: valor})
		as chaves que nao existirem mapeadas no resource viram parametros get na URL
	 	*/
	 	companyService.get({id: $routeParams.id, size: 10, page: 1}).$promise	//$promisse necessário para que o retorno seja 'convertido' em promisse.
	 		.then(function (response) {											// assim conseguimos usar o then
	 			vm.company = response;

	 			return companyService.loadJobs({id: $routeParams.id}).$promise;
	 		})
	 		.then(function (response) {
	 			 vm.company.jobs = response.items;
	 		})
	 		.catch(function(error){
	 			console.log(error);
	 			$location.path('/');
	 		});
	 }

})();
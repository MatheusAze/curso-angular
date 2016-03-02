(function() {
	'use strict';

	angular.module('app')
		.factory('companyService', companyService);

	companyService.$inject = ['$resource'];

	function companyService($resource) {
		return $resource('http://curso-mean.herokuapp.com/api/companies/:id', {}, {
			loadJobs: { 
				method: 'GET',
				url: 'http://curso-mean.herokuapp.com/api/companies/:id/jobs'
				//isArray: true -> se for array. Melhora performace
			}
		});
	}

})();
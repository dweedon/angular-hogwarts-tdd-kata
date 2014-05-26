'use strict';

hogwartsApp
    .controller("CatalogController", ['$scope', 'CatalogRepository', 'RegistrationService', function ($scope, catalogRepository, registrationService) {
        $scope.catalog = catalogRepository.getCatalog();

        $scope.register = function(courseId) {
            registrationService.register(courseId);
        };
    }]);

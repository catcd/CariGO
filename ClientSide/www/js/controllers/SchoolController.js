/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 18-Sep-2015
 * type: school controller
 */

var school = angular.module('controllers.school', []);

school.controller('SchoolController', function($scope, $rootScope, eSchool) {
	$scope.eSchool = eSchool;
});

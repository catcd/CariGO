/**
 * starter: Can Duy Cat
 * owner: Nguyen Minh Trang
 * last update: 18-Sep-2015
 * type: class detail controller
 */

var classDetail = angular.module('controllers.classDetail', []);

classDetail.controller('ClassDetailController', function($scope, $rootScope, $stateParams, eSchool, eStudent) {
	$scope.eSchool = eSchool;
	$scope.classID = $stateParams.classID;
	
	$scope.review = function(studentID) {
		eStudent.id = studentID;
	}
});

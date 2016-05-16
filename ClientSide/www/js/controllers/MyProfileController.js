/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 18-Sep-2015
 * type: my profile controller
 */

var myProfile = angular.module('controllers.myProfile', []);

myProfile.controller('MyProfileController', function($scope, $rootScope, eUser) {
	$scope.eUser = eUser;
});

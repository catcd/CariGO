/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 16/05/2016
 * type: class MyProfileForm
 */

var myProfile = angular.module('forms.myProfile', []);

myProfile.controller('MyProfileForm', function($scope, eUser) {
	$scope.eUser = eUser;
});

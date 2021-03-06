/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 16/05/2016
 * type: class SignInForm
 */

var signIn = angular.module('forms.signIn', []);

signIn.controller('SignInForm', function($scope, $rootScope, $http, $state, eToast, eUser) {
	$scope.user = {username: '', password: ''};

	$scope.signIn = function() {
		loading();
		// connect throught http connection
		$http({
			url: 'http://localhost:80/signIn',
			method: 'POST',
			data: {
				'username': $scope.user.username,
				'password': $scope.user.password
			},
		}).success(function(data, status, headers, config) {
			if (data == 'SUCCESS') {
				stopLoading();
				eUser.username = $scope.user.username;
				eUser.password = $scope.user.password;
				eToast.toastInfo('Welcome to CariGO', 2000);
				$state.go('bookDeliveryService');
			} else {
				stopLoading();
				eToast.toastError('Wrong password!', 2000);
			}
		}).error(function(data, status, headers, config) {
			stopLoading();
			eToast.toastError('There is an error. Please! Try again later.', 2000);
		});
	};
});

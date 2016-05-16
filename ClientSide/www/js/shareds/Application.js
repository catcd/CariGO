/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 16/05/2016
 * type: app functions
 */

var application = angular.module('shareds.application', [])

application.run(function($rootScope, $window, $ionicLoading, eUser, $state) {
	// check if object is null/undefined/"" or not
	isNull = function(obj) {
		if (obj === null || obj === undefined || obj === '') {
			return true;
		}
		return false;
	};

	signOut = function() {
		$state.go('signIn');
	}

	loading = function() {
		$ionicLoading.show({
			template: '<ion-spinner icon="android" class="loading-spinner"></ion-spinner>'
		});
	};

	stopLoading = function() {
		$ionicLoading.hide();
	};

	resetAllData = function() {
		eUser.resetData();
	};

	$rootScope.goBack = function(){
		$window.history.back();
	}
});

// Toast service
application.factory('eToast', function(toastr, toastrConfig) {
	return {
		// color #419696
		toastSuccess: function(message, delay) {
			toastrConfig.positionClass = 'easi-toast-success';
			toastr.success(message, {
				timeOut: delay
			});
		},
		// color #33CCCC
		toastInfo: function(message, delay) {
			toastrConfig.positionClass = 'easi-toast-info';
			toastr.info(message, {
				timeOut: delay
			});
		},
		// color #D65930
		toastError: function(message, delay) {
			toastrConfig.positionClass = 'easi-toast-error';
			toastr.error(message, {
				timeOut: delay
			});
		},
		// color #646464
		toastWarning: function(message, delay) {
			toastrConfig.positionClass = 'easi-toast-warning';
			toastr.warning(message, {
				timeOut: delay
			});
		},
	};
})
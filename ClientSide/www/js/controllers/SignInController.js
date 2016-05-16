/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 19-Sep-2015
 * type: sign in controller
 */

var signIn = angular.module('controllers.signIn', []);

signIn.controller('SignInController', function($scope, $rootScope, $http, $state, eToast, eUser, eDatabase, ApiEndpoint) {
	$scope.user = {username: '', password: ''};

	$scope.signIn = function() {
		loading();
		// connect throught http connection
		$http({
			url: ApiEndpoint.url + '/login',
			method: 'POST',
			params: {
				'session[username]': $scope.user.username,
				'session[password]': $scope.user.password
			}
		}).success(function(data, status, headers, config) {
			if (data.result == 'LOCKED') {
				stopLoading();
				eToast.toastInfo('Tài khoản đang bị khoá!', 2000);
			} else if (data.result == 'FAILED') {
				stopLoading();
				eToast.toastError('Sai mật khẩu!', 2000);
			} else if (data.user.role != 'Giáo viên') {
				stopLoading();
				eToast.toastWarning('Ứng dụng chưa hỗ trợ tài khoản này!', 2000);
			} else if (data.result == 'SUCCESS_DEFAULT_PASSWORD') {
				eToast.toastWarning('Chưa đổi mật khẩu mặc định!', 2000);
				eUser.id = data.user.id;
				eUser.username = $scope.user.username;
				eUser.password = $scope.user.password;
				eUser.role = data.user.role;
				eUser.lock = data.user.lock;
				$state.go('myClass');
				eDatabase.loadAllTeacherData();
			} else {
				eUser.id = data.user.id;
				eUser.username = $scope.user.username;
				eUser.password = $scope.user.password;
				eUser.role = data.user.role;
				eUser.lock = data.user.lock;
				$state.go('myClass');
				eDatabase.loadAllTeacherData();
			}
		}).error(function(data, status, headers, config) {
			stopLoading();
			eToast.toastError('Có lỗi! Vui lòng thử lại hoặc liên hệ hỗ trợ!', 2000);
		});
	};
});

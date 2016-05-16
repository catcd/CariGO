/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 19-Sep-2015
 * type: side menu controller
 */

var sideMenu = angular.module('controllers.sideMenu', []);

sideMenu.controller('SideMenuController', function($scope, $rootScope, $ionicHistory, $ionicSideMenuDelegate, eDatabase) {
	$scope.eDatabase = eDatabase;

	var shouldEnabled;

	$scope.shouldSideMenuBeEnabled = function() {
		return shouldEnabled;
	}

	$rootScope.$on('$stateChangeStart', function(event, toState){
		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableAnimate: true,
			expire: 300
		});

		switch (toState.name) {
			case 'introduction':
			case 'signIn':
			case 'newComment':
				shouldEnabled = false;
				break;
			default:
				shouldEnabled = true;
		}
	})

	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
});

// directive for sidemenu panel
sideMenu.directive('menuPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/menu-panel.html',
	};
});

/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 16/05/2016
 * type: main js
 */

var home = angular.module('myApp', ['ionic', 'toastr', 'forms', 'shareds']);

home.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	$urlRouterProvider.otherwise('/sign-in');
	$stateProvider

		// abstract state
		.state('appMenu', {
			url: '',
			abstract: true,
			templateUrl: 'templates/app-menu.html'
		})

		// children
		.state('bookDeliveryService', {
			parent: 'appMenu',
			url: '/book-delivery-service',
			templateUrl: 'templates/book-delivery-service.html',
			controller: 'DeliveryServiceForm'
		})
		.state('introduction', {
			parent: 'appMenu',
			url: '/introduction',
			templateUrl: 'templates/introduction.html',
			controller: 'IntroductionForm'
		})
		.state('myProfile', {
			parent: 'appMenu',
			url: '/my-profile',
			templateUrl: 'templates/my-profile.html',
			controller: 'MyProfileForm'
		})
		.state('requestDetail', {
			parent: 'appMenu',
			url: '/request-detail/:requestID',
			templateUrl: 'templates/request-detail.html',
			controller: 'DeliveryServiceForm'
		})
		.state('signIn', {
			parent: 'appMenu',
			url: '/sign-in',
			templateUrl: 'templates/sign-in.html',
			controller: 'SignInForm'
		})
		.state('trackMyRequest', {
			parent: 'appMenu',
			url: '/track-my-request',
			templateUrl: 'templates/track-my-request.html',
			controller: 'DeliveryServiceForm'
		})
});

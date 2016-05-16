/**
 * starter: Can Duy Cat
 * owner: Nguyen Minh Trang
 * last update: 18-Sep-2015
 * type: teacher controller
 */

var teacher = angular.module('controllers.teacher', []);

teacher.controller('TeacherController', function($scope, $rootScope, eSchool, eDatabase) {
	$scope.eSchool = eSchool;
});

/* 	
 * ion-search directive
 * was copied from http://codepen.io/gastonbesada 
 */
teacher.directive('ionSearch', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            getData: '&source',
            model: '=?',
            search: '=?filter'
        },
        link: function(scope, element, attrs) {
            attrs.minLength = attrs.minLength || 0;
            scope.placeholder = attrs.placeholder || '';
            scope.search = {value: ''};

            scope.clearSearch = function() {
                scope.search.value = '';
            };
        },
        template: '<div class="item-input-wrapper">' +
                    '<i class="icon ion-android-search"></i>' +
                    '<input type="search" placeholder="{{placeholder}}" ng-model="search.value">' +
                    '<i ng-if="search.value.length > 0" ng-click="clearSearch()" class="icon ion-close"></i>' +
                  '</div>'
    };
});

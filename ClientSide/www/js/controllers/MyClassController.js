/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 18-Sep-2015
 * type: my class controller
 */

var myClass = angular.module('controllers.myClass', []);

myClass.controller('MyClassController', function($scope, $rootScope, eSchool, eUser, eDatabase, eStudent) {
	$scope.eDatabase = eDatabase;
	$scope.eSchool = eSchool;
	$scope.eUser = eUser;
	
	$scope.toClassDetail = function(subjectID, classID) {
		eStudent.subject_id = subjectID;
		eStudent.klass_id = classID;
		eDatabase.loadClass(classID);
	};
});

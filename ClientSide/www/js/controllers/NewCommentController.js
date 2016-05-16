/**
 * starter: Can Duy Cat
 * owner: Nguyen Minh Trang
 * last update: 18-Sep-2015
 * type: new comment controller
 */

var newComment = angular.module('controllers.newComment', []);

newComment.controller('NewCommentController', function($scope, $rootScope, $stateParams, eToast, eDatabase, eStudent) {
	$scope.eDatabase = eDatabase;
	$scope.eToast = eToast;
    $scope.studentName = $stateParams.student;

	$rootScope.$on('$stateChangeStart', function(event, toState){
		if (toState.name == 'newComment') {
			$scope.comment.skill = "";
			$scope.comment.ability = "";
			$scope.comment.quality = "";
		};
	})
	
    $scope.comment = {
		subjectID: "",
		klassID: "",
		pupilProfileID: "",
        skill: "",
        ability: "",
        quality: ""
    };
    
    $scope.addComment = function() {
		$scope.comment.subjectID = eStudent.subject_id;
		$scope.comment.klassID = eStudent.klass_id;
		$scope.comment.pupilProfileID = eStudent.id;

		eDatabase.submitComment($scope.comment);
    }
});


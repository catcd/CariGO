/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 19-Sep-2015
 * type: database variables and functions
 */

var database = angular.module('shareds.dataBase', []);

database.config(function($httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
})

database.factory('eDatabase', function($rootScope, $http, $state, eToast, eUser, eSchool, ApiEndpoint) {
	return {
		/*
		 * send sign out request to server, reset the data
		 */
		signOut: function() {
			loading();
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/logout',
				method: 'DELETE'
			}).success(function(data, status, headers, config) {
				stopLoading();
				if (data.result == 'SUCCESS') {
					resetAllData();
					eToast.toastInfo('Đăng xuất thành công!', 2000);
					$state.go("signIn");
				} else {
					eToast.toastError('Đăng xuất thất bại!', 2000);
				}
			}).error(function(data, status, headers, config) {
				stopLoading();
				eToast.toastError('Đăng xuất thất bại!', 2000);
			});
		},

		/*
		 * refresh all data
		 */
		refresh: function() {
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/index',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				eUser.profile = data.profile;
				eUser.teachingActivities = data.teaching_activities;
				eSchool.school = data.school;
				eSchool.teachers = data.teachers;
				eSchool.subjects = data.subjects;
				eSchool.klasses = data.klasses;
				eUser.teachingActivities = data.teaching_activities;
			}).error(function(data, status, headers, config) {
				this.refresh();
			});
		},

		/*
		 * request all data
		 */
		loadAllTeacherData: function() {
			loading();
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/index',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				stopLoading();
				eUser.profile = data.profile;
				eUser.teachingActivities = data.teaching_activities;
				eSchool.school = data.school;
				eSchool.teachers = data.teachers;
				eSchool.subjects = data.subjects;
				eSchool.klasses = data.klasses;
				eUser.teachingActivities = data.teaching_activities;
			}).error(function(data, status, headers, config) {
				this.loadClasses(); // load again if an error occurs
			});
		},

		/*
		 * request all klasses of current teacher's school, assign to eSchool.klasses
		 */
		loadClasses: function() {
			loading();
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/klasses',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				stopLoading();
				eSchool.klasses = data.klasses; // save data to eSchool
			}).error(function(data, status, headers, config) {
				this.loadClasses(); // load again if an error occur
			});
		},

		/*
		 * request current teacher's profile, assign to eUser.profile
		 */
		loadProfile: function() {
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/profile',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				eUser.profile = data.profile;
			}).error(function(data, status, headers, config) {
				eToast.toastError('Không có kết nối mạng!', 2000);
			});
		},

		/*
		 * request current teacher's school details, assign to eSchool.school
		 */
		loadSchool: function() {
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/school',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				eSchool.school = data.school;
			}).error(function(data, status, headers, config) {
				eToast.toastError('Không có kết nối mạng!', 2000);
			});
		},

		/*
		 * request all teachers of current teacher's school, assign to eSchool.teachers
		 */
		loadTeacher: function() {
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/teachers',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				eSchool.teachers = data.teachers;
			}).error(function(data, status, headers, config) {
				eToast.toastError('Không có kết nối mạng!', 2000);
			});
		},

		/*
		 * request all subjects of current teacher's school, assign to eSchool.subjects
		 */
		loadSubject: function() {
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/subjects',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				eSchool.subjects = data.subjects;
			}).error(function(data, status, headers, config) {
				eToast.toastError('Không có kết nối mạng!', 2000);
			});
		},

		/*
		 * request current teacher's activities, assign to eSchool.teachingActivities
		 */
		loadTeachingAct: function() {
			loading();
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/teaching_activities',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				stopLoading();
				eSchool.teachingActivities = data.teaching_activities;
			}).error(function(data, status, headers, config) {
				stopLoading();
				eToast.toastError('Có lỗi! Vui lòng thử lại!', 2000);
			});
		},

		/*
		 * loadReview with loading animate
		 */
		loadReviews: function() {
			loading();
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/reviews',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				stopLoading();
				eUser.reviews = data.reviews;
			}).error(function(data, status, headers, config) {
				stopLoading();
				eToast.toastError('Có lỗi đường truyền!', 2000);
			});
		},

		/*
		 * refresh review without loading
		 */
		loadReviews: function() {
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/reviews',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				eUser.reviews = data.reviews;
			}).error(function(data, status, headers, config) {
				this.loadReviews();
			});
		},

		/*
		 * request class's details with 'id', assign to eSchool.classDetails[id]
		 */
		loadClass: function(id) {
			loading();
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/klasses/' + id,
				method: 'GET'
			}).success(function(data, status, headers, config) {
				stopLoading();
				if ( ! isNull(data) ) {
					eSchool.classDetails["" + data.klass.id] = data;
				}
			}).error(function(data, status, headers, config) {
				stopLoading();
				eToast.toastError('Không có kết nối mạng!', 2000);
			});
		},

		/*
		 * submit new comment to server
		 * data: {subjectID, klassID, pupilProfileID, skill, ability, quality}
		 */
		submitComment: function(data) {
			loading();
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/teacher/reviews',
				method: 'POST',
				params: {
					'subject_id': data.subjectID,
					'klass_id': data.klassID,
					'pupil_profile_ids': data.pupilProfileID,
					'reviews[content_skill]': data.skill,
					'reviews[content_ability]': data.ability,
					'reviews[content_quality]': data.quality,
				}
			}).success(function(data, status, headers, config) {
				stopLoading();
				$rootScope.goBack();
				eToast.toastSuccess('Gửi nhận xét thành công!', 2000);
			}).error(function(data, status, headers, config) {
				stopLoading();
				eToast.toastError('Thất bại. Vui lòng thực hiện lại!', 2000);
			});
		},
	}
});

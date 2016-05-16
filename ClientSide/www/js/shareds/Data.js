/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 18-Sep-2015
 * type: module all shared variables used for this app
 */

var data = angular.module('shareds.data', []);

// User information
data.factory('eUser', function(){
	return {
		id: '',				// A-Z, a-z, 0-9, _
		username: '',		// A-Z, a-z, 0-9, _
		password: '',		// printable char in ASCII
		role: '',
		lock: false,
		profile: {},
		teachingActivities: [],
		reviews: [],

		resetData: function(){
			this.id = '';
			this.username = '';
			this.password = '';
			this.role = '';
			this.lock = false;
			this.profile = {};
			this.teachingActivities = [];
			this.reviews = [];
		}
	};
});

// all school information
data.factory('eSchool', function(){
	return {
		school: {},
		teachers: [],
		subjects: [],
		klasses: [],
		classDetails: {},

		getSubject : function(id) {
			for (var i = 0; i < this.subjects.length; i++) {
				if (this.subjects[i].id == id) {
					return this.subjects[i];
				}
			}
		},

		getClass : function(id) {
			for (var i = 0; i < this.klasses.length; i++) {
				if (this.klasses[i].id == id) {
					return this.klasses[i];
				}
			}
		},

		resetData: function(){
			this.school = {};
			this.teachers = [];
			this.subjects = [];
			this.klasses = [];
			this.classDetails = {};
		}
	};
});

// current student that being reviewed
data.factory('eStudent', function() {
	return {
		klass_id: "",
		subject_id: "",
		id: "",
	};
});
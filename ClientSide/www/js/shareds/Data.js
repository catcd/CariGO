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
		username: '',		// A-Z, a-z, 0-9, _
		password: '',		// printable char in ASCII

		resetData: function(){
			this.username = '';
			this.password = '';
		}
	};
});
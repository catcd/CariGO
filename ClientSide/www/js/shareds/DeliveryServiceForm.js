

var deliveryServiceForm = angular.module('controllers.deliveryServiceForm', []);

deliveryServiceForm.factory('eDeliveryServiceForm', function($rootScope,  $http, $state, eToast) {
	return {
		/*
		 * send load delivery requests request to server
		 */
		loadRequests: function() {
			loading();
			// connect throught http connection
			$http({
				url: ApiEndpoint.url + '/logout',
				method: 'GET'
			}).success(function(data, status, headers, config) {
				stopLoading();
				eToast.toastInfo('Loading successfully!', 2000);
			}).error(function(data, status, headers, config) {
				stopLoading();
				eToast.toastError('Cannot load requests!', 2000);
			});
		},
	}

	//start class
	function DeliveryServiceForm(){
		this.uName = '';
		this.uPhone = '';
		this.dFromLocation = null;
		this.dToLocation = null;
		this.dDate = null;
		this.dTime = null;
		this.dTypeOfCargo = null;
		this.dSpecialRequirement = '';

		this.confirmBook = function(){

		};

		this.viewRequestDetails = function(requestID){

		};

		this.verifyInfo = function(){
			if(this.uName.length == 0){
				eToast.toastError('Name is required!', 2000);
			}
			else if(this.uPhone.length == 0){
				eToast.toastError('Phone is required!', 2000);
			}
			else if(this.dFromLocation.length == 0){
				eToast.toastError('Please enter where Cargo is from!', 2000);
			}
			else if(this.dToLocation.length == 0){
				eToast.toastError('Please enter where Cargo will be delivered to!', 2000);
			}
			else {
				this.confirmBook();
			}
		}

		//update edited Info to DB
		this.editRequestDetails = function(){

		};		

		//delete request on DB
		this.deleteRequest = function(){

		};

		this.viewRequestLists = function(userID){

		};
	} //end class
})


var deliveryServiceBoundary = angular.module('controllers.deliveryServiceBoundary', []);

deliveryServiceBoundary.factory('eDeliveryServiceBoundary', function($rootScope, eToast) {

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

		this.verify = function(){
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

		//this.validateInfo = function(){};

		//this.viewRequestList = function(){};

		//this.viewDeliveryService = function(){};

		//this.getRequestList = function(){};

		//this.getRequestByID = function(){};

		//this.confirmBid = function(){};

		//this.confirmDelete = function(){};

		//this.submit = function(){};

		//this.editRequestDetails = function(){};

		//this.deleteRequest = function(){};

		//this.searchAuto = function(){};

		//this.searchBy = function(){};

		//this.searchFilter = function(){};

		//this.uploadDeliveryRequest = function(){};
	} //end class
})
$dashboard.factory('DashboardService', function($http){
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8;";
	var ServiceData = function() {
		var response;
		var isError = false;
		var appError = false;
		var errorDetails = null;
		var status = "Success";
		return {response: response, isError: isError, appError: appError, errorDetails: errorDetails, status: status};
	}

	var fetchServiceGET = function(serviceurl, reqHeaders) {
		var serviceData = new ServiceData();
		return $http({ 
				method : 'GET', 
				url : serviceurl, 
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;'
				}
			}) .then(
			function successCallback(response) {
				if(response.data.viewResponseData != null) {
					serviceData.response = response.data.viewResponseData;
				} else if (response.data.viewResponseList != null) {
					serviceData.response = response.data.viewResponseList;
				} else {
					serviceData.response = response.data;
				}
				serviceData.status = response.status;
				console.log('Service response('+ serviceurl + ') : ' , serviceData);
				return serviceData;
			},
			function errorCallback(response) {
				serviceData.isError = true;
				serviceData.status = response.status;
				if (response.data != null && response.data.errorVO != null) {
					serviceData.appError = true;
					serviceData.errorDetails = response.data.errorVO;
				} else {
					serviceData.errorDetails = response.data;
				}
//				serviceData = getTestAuditData(serviceData, serviceurl);
				console.log('Service Error('+ serviceurl + ') : ', serviceData);
				return serviceData;
			}
		);
	}
	
	
	var fetchServicePOST = function(serviceurl, custId, applnName) {
		var serviceData = new ServiceData();
		return $http({ 
				method : 'POST', 
				url : serviceurl, 
				data : {
					custId: custId, 
					applnName : applnName
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;'
				}
			}) .then(
			function successCallback(response) {
				console.log('Service response('+ serviceurl + ') : ' , response);
				if(response.data.viewResponseData != null) {
					serviceData.response = response.data.viewResponseData;
				} else if (response.data.viewResponseList != null) {
					serviceData.response = response.data.viewResponseList;
				} else {
					serviceData.response = null;
				}
				serviceData.status = response.status;
				return serviceData;
			},
			function errorCallback(response) {
				serviceData.isError = true;
				serviceData.status = response.status;
				if (response.data != null && response.data.errorVO != null) {
					serviceData.appError = true;
					serviceData.errorDetails = response.data.errorVO;
				} else {
					serviceData.errorDetails = response.data;
				}
//				serviceData = getTestAuditData(serviceData, serviceurl);
				console.log('Service Error('+ serviceurl + ') : ', serviceData);
				return serviceData;
			}
		);
	}
	return {fetchServiceGET: fetchServiceGET, fetchServicePOST:fetchServicePOST};
});


function getTestAuditData(serviceData, serviceurl) {
	if(serviceurl === "http://" + environment + servicePort + "/iaewis/" + "students") {
			serviceData.response = angular.fromJson('[{"objid":1000,"studentFirstName":"StudentFN0","studentMiddleName":"StudentMN0","studentLastName":"StudentLN0","gender":"M","iClassLevel":"iClass0","qClassLevel":"qClass0","dateOfBirth":"2018-01-11","fID":"10000","fatherFirstName":"FatherFristName0","fatherMiddleName":"FatherMiddleName0","fatherLastName":"FatherLastName0","mID":"mid0","motherFirstName":"MotherristName0","motherMiddleName":"MotherrMiddleName0","motherLastName":"MotherLastName0","cellNumber":null,"homePhoneNumber":"12344433440","email":"0vma@gmail.com"},{"objid":1001,"studentFirstName":"StudentFN1","studentMiddleName":"StudentMN1","studentLastName":"StudentLN1","gender":"M","iClassLevel":"iClass1","qClassLevel":"qClass1","dateOfBirth":"2018-01-11","fID":"10001","fatherFirstName":"FatherFristName1","fatherMiddleName":"FatherMiddleName1","fatherLastName":"FatherLastName1","mID":"mid1","motherFirstName":"MotherristName1","motherMiddleName":"MotherrMiddleName1","motherLastName":"MotherLastName1","cellNumber":null,"homePhoneNumber":"12344433441","email":"1vma@gmail.com"}]') ;
	} 
	
	if(serviceurl === "http://" + environment + servicePort + "/iaewis/" + "getfeepayments"){
		serviceData.response = angular.fromJson('[{"fatherID":"1000","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8700,"totalKidsInIslamicClass":10,"islamicClassFees":1223,"totalKidsInQuranClass":20,"quranClassFees":123245,"totalFees":500,"totalTuitionPaid":9000,"expectedFees":1808,"feeStatus":"OnTime","totalBooksAmountPaid":1232323,"lastPaymentDate":"2018-01-11"},{"fatherID":"1001","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8701,"totalKidsInIslamicClass":11,"islamicClassFees":1224,"totalKidsInQuranClass":21,"quranClassFees":123246,"totalFees":501,"totalTuitionPaid":9001,"expectedFees":1809,"feeStatus":"OnTime","totalBooksAmountPaid":1232324,"lastPaymentDate":"2018-01-11"},{"fatherID":"1002","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8702,"totalKidsInIslamicClass":12,"islamicClassFees":1225,"totalKidsInQuranClass":22,"quranClassFees":123247,"totalFees":502,"totalTuitionPaid":9002,"expectedFees":1810,"feeStatus":"OnTime","totalBooksAmountPaid":1232325,"lastPaymentDate":"2018-01-11"},{"fatherID":"1003","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8703,"totalKidsInIslamicClass":13,"islamicClassFees":1226,"totalKidsInQuranClass":23,"quranClassFees":123248,"totalFees":503,"totalTuitionPaid":9003,"expectedFees":1811,"feeStatus":"OnTime","totalBooksAmountPaid":1232326,"lastPaymentDate":"2018-01-11"},{"fatherID":"1004","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8704,"totalKidsInIslamicClass":14,"islamicClassFees":1227,"totalKidsInQuranClass":24,"quranClassFees":123249,"totalFees":504,"totalTuitionPaid":9004,"expectedFees":1812,"feeStatus":"OnTime","totalBooksAmountPaid":1232327,"lastPaymentDate":"2018-01-11"},{"fatherID":"1005","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8705,"totalKidsInIslamicClass":15,"islamicClassFees":1228,"totalKidsInQuranClass":25,"quranClassFees":123250,"totalFees":505,"totalTuitionPaid":9005,"expectedFees":1813,"feeStatus":"OnTime","totalBooksAmountPaid":1232328,"lastPaymentDate":"2018-01-11"},{"fatherID":"1006","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8706,"totalKidsInIslamicClass":16,"islamicClassFees":1229,"totalKidsInQuranClass":26,"quranClassFees":123251,"totalFees":506,"totalTuitionPaid":9006,"expectedFees":1814,"feeStatus":"OnTime","totalBooksAmountPaid":1232329,"lastPaymentDate":"2018-01-11"},{"fatherID":"1007","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8707,"totalKidsInIslamicClass":17,"islamicClassFees":1230,"totalKidsInQuranClass":27,"quranClassFees":123252,"totalFees":507,"totalTuitionPaid":9007,"expectedFees":1815,"feeStatus":"OnTime","totalBooksAmountPaid":1232330,"lastPaymentDate":"2018-01-11"},{"fatherID":"1008","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8708,"totalKidsInIslamicClass":18,"islamicClassFees":1231,"totalKidsInQuranClass":28,"quranClassFees":123253,"totalFees":508,"totalTuitionPaid":9008,"expectedFees":1816,"feeStatus":"OnTime","totalBooksAmountPaid":1232331,"lastPaymentDate":"2018-01-11"},{"fatherID":"1009","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8709,"totalKidsInIslamicClass":19,"islamicClassFees":1232,"totalKidsInQuranClass":29,"quranClassFees":123254,"totalFees":509,"totalTuitionPaid":9009,"expectedFees":1817,"feeStatus":"OnTime","totalBooksAmountPaid":1232332,"lastPaymentDate":"2018-01-11"},{"fatherID":"10010","firstName":"StudentFName1","lastName":"LastNameStudent","totalPaid":8710,"totalKidsInIslamicClass":20,"islamicClassFees":1233,"totalKidsInQuranClass":30,"quranClassFees":123255,"totalFees":510,"totalTuitionPaid":9010,"expectedFees":1818,"feeStatus":"OnTime","totalBooksAmountPaid":1232333,"lastPaymentDate":"2018-01-11"}]');
	} 
	
	return serviceData;
}




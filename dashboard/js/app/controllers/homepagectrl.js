$dashboard.controller("homepagectrl", function ($rootScope, $scope, uiGridConstants, DashboardService) {
	$scope.studentDataGridOptions = {};
	$scope.studentDataGridOptions.enableColumnResizing = false;
	$scope.studentDataGridOptions.multiSelect = false;
	$scope.studentDataGridOptions.enableFiltering= true;
	$scope.studentDataGridOptions.paginationPageSizes=[10, 50, 100];
	$scope.studentDataGridOptions.paginationPageSize=50,
	$scope.studentDataGridOptions.columnDefs = [
		{width:110, displayName: "Student ID" , name:'objid',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Name" , name:'studentName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "First Name" , name:'studentFirstName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Middle Name" , name:'studentMiddleName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Last Name" , name:'studentLastName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Gender" , name:'gender',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "I-Class Level" , name:'iClassLevel',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Q-Class Level" , name:'qClassLevel',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "DOB" , name:'dateOfBirth',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Father ID" , name:'fID',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Father Name" , name:'fatherName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Father First Name" , name:'fatherFirstName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Father Middle Name" , name:'fatherMiddleName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Father Last Name" , name:'fatherLastName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Mother ID" , name:'mID',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Mother Name" , name:'motherName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Mother First Name" , name:'motherFirstName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Mother Middle Name" , name:'motherMiddleName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Mother Last Name" , name:'motherLastName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Mobile" , name:'cellNumber',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Phone" , name:'homePhoneNumber',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Email" , name:'email', cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
	];
	
	$scope.studentDataGridOptions.rowIdentity = function(rowData) {
		return rowData.auditObjId;
	};

	$scope.studentDataGridOptions.getRowIdentity = function(rowData) {
		return rowData.auditObjId;
	};

	$scope.studentDataGridOptions.onRegisterApi = function( gridApi ) {
		$scope.gridApi2 = gridApi;
	};
	
	$scope.studentData = [];
	$scope.appErrorMsg = null;
	$scope.appErrorId = null;
	$scope.refreshStudentData = function(){
		var serviceurl = serviceUrl + 'students';
		var applnName = null;
		var serviceCall = DashboardService.fetchServiceGET(serviceurl);
		serviceCall.then(function (serviceData) {
			if(serviceData.isError && serviceData.errorDetails != null) {
				$scope.appErrorMsg = serviceData.errorDetails.message;
				$scope.appErrorId = serviceData.errorDetails.id;
			} else {
				if(serviceData.response != null) {
					$scope.studentData = [];
					serviceData.response.forEach(function(rowData){
						
						rowData.studentName = rowData.studentFirstName + ' ' + rowData.studentMiddleName + ' ' + rowData.studentLastName;
						rowData.fatherName = rowData.fatherFirstName + ' ' + rowData.fatherMiddleName + ' ' + rowData.fatherLastName;
						rowData.motherName = rowData.motherFirstName + ' ' + rowData.motherMiddleName + ' ' + rowData.motherLastName;
						
				        $scope.studentData.push(rowData);
					});
				}
			}
		});
	};
	$scope.refreshStudentData();
	$scope.studentDataGridOptions.data = 'studentData';
	
	
	$scope.feeDataGridOptions = {};
	$scope.feeDataGridOptions.enableColumnResizing = false;
	$scope.feeDataGridOptions.multiSelect = false;
	$scope.feeDataGridOptions.enableFiltering= true;
	$scope.feeDataGridOptions.paginationPageSizes=[10, 50, 100];
	$scope.feeDataGridOptions.paginationPageSize=50,
	$scope.feeDataGridOptions.columnDefs = [
		{width:110, displayName: "Father ID" , name:'fatherID',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Father Name" , name:'fatherName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "First Name" , name:'firstName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Last Name" , name:'lastName',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: false},
		{width:110, displayName: "Total Paid" , name:'totalPaid',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "No of Kids IC" , name:'totalKidsInIslamicClass',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Islamic Class Fees" , name:'islamicClassFees',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "No of Kids QC" , name:'totalKidsInQuranClass',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Quran Class Fees" , name:'quranClassFees',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Total Fees" , name:'totalFees',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Total Tuition Paid" , name:'totalTuitionPaid',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Expected Fees" , name:'expectedFees',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Fee Status" , name:'feeStatus',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Total Books Amount Paid" , name:'totalBooksAmountPaid',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
		{width:110, displayName: "Last Payment Date" , name:'lastPaymentDate',  cellClass:'gridCell center-align' , headerCellClass:'gridHeader', enableColumnMenu :false, visible: true},
	];
	
	$scope.feeDataGridOptions.rowIdentity = function(rowData) {
		return rowData.auditObjId;
	};

	$scope.feeDataGridOptions.getRowIdentity = function(rowData) {
		return rowData.auditObjId;
	};

	$scope.feeDataGridOptions.onRegisterApi = function( gridApi ) {
		$scope.gridApi2 = gridApi;
	};
	
	$scope.feeData = [];
	$scope.appErrorMsg = null;
	$scope.appErrorId = null;
	$scope.refreshfeeData = function(){
		var serviceurl = serviceUrl + 'getfeepayments';
		var applnName = null;
		var serviceCall = DashboardService.fetchServiceGET(serviceurl);
		serviceCall.then(function (serviceData) {
			if(serviceData.isError && serviceData.errorDetails != null) {
				$scope.appErrorMsg = serviceData.errorDetails.message;
				$scope.appErrorId = serviceData.errorDetails.id;
			} else {
				if(serviceData.response != null) {
					$scope.feeData = [];
					serviceData.response.forEach(function(rowData){
						rowData.fatherName = rowData.fatherFirstName + ' ' + rowData.fatherLastName;
						$scope.feeData.push(rowData);
					});
				}
			}
		});
	};
	$scope.refreshfeeData();
	$scope.feeDataGridOptions.data = 'feeData';
	
});



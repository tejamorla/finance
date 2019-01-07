
app.controller("loanctrl",["$scope","$routeParams", "$location","LoanService",function($scope,$routeParams, $location,LoanService){
	$scope.loanslist = LoanService.loanslist;
	if(!$routeParams.id){
		$scope.loanlist = {id:0,completed: false ,name: '', loantype: '', issudedate: '',amount : '', interest:'', total_amount:'', paid_amount:'', discount:'', pending_amount:'', status:' ', payment_date:'', locality:''};					
	}else{
		$scope.loanlist = _.clone(LoanService.findById(parseInt($routeParams.id)));
	}
	 $scope.save = function(){
        LoanService.save( $scope.loanlist);
        jq('#addLoan').modal('hide');
    }
    $scope.newloan = function(){
    	$scope.loanlist = {id:0,completed: false ,name: '', loantype: '', issudedate: '',amount : '', interest:'', total_amount:'', paid_amount:'', discount:'', pending_amount:'', status:' ', payment_date:'', locality:''};
		jq('#addLoan').modal('show');
	}
    $scope.editloan = function(loanmember){
       // $location.path("addloan/edit/"+id);
        $scope.loanlist = loanmember;
       jq('#addLoan').modal('show');
    }
    $scope.removeLoan = function(entry){
		if(confirm("Are you sure you want to delete the loan?")){
			LoanService.removeLoan(entry);
		}else{
			return false;
		};
	};
	$scope.view = function(){
		 jq('#viewLoanInstallmentsModal').modal('show');
	}
	$scope.addInstallment = function(){
		jq('#viewLoanInstallmentsModal').modal('hide');
		jq('#addLoanInstallmentsModal').modal('show');

	}
	$scope.create = function(){
		LoanService.save( $scope.loanlist);
		jq('#addLoanInstallmentsModal').modal('hide');
	}
    $scope.viewloan = function(loanmember){
			$scope.mem = loanmember;
			jq('#persondata').modal({show:true});
		};
		$scope.modify = function(id){

				$scope.modifyField = true;
				$scope.viewField = true;
				$scope.instId = id;
			};


			$scope.update = function(inst){
				$scope.modifyField = false;
				$scope.viewField = false;
			};
	$scope.members =[
					  	{id:1,completed: true, name: 'Teja', loans: "2" , amount:"50000",loantype:"daily",locality:"kavali",city:"kavali",state:"ap",phone:"8499890339"},
						{id:2,completed: true, name: 'ravi', loans: "0" , amount:"0",locality:"kavali",city:"kavali",state:"ap",phone:"9553771990"},
						{id:3,completed: true, name: 'rrr', loans: "2" , amount:"50000",locality:"nellore",city:"kavali",state:"ap",phone:"8499890339"},
						{id:4,completed: true, name: 'abc', loans: "2" , amount:"50000",locality:"nellore",city:"kavali",state:"ap",phone:"8499890339"}
					];
	$scope.installments =[
							{id:1,date:"2018-12-3",amount:"200",status:"paid"},
							{id:2,date:"2018-11-3",amount:"400",status:"pending"},
							{id:3,date:"2018-10-3",amount:"300",status:"paid"}
	];

	$scope.sort = {       
					sortingOrder : 'name',
					reverse : false
				};
				 $scope.orderByMe = function(x){
		$scope.myOrderBy = x;
	}
	$scope.create = function{
	
	}
}]);
app.directive("loanSort", function() {
		return {
			restrict: 'A',
			transclude: true,    
			scope: {
			  order: '=',
			  sort: '='
			},
			template : 
			  ' <a href="javascript:void(0);" ng-click="sort_by(order)" style="color: #555555;">'+
			  '    <span ng-transclude></span>'+
			  '    <i ng-class="selectedCls(order)"></i>'+
			  '</a>',
			link: function(scope) {
						
			// change sorting order
			scope.sort_by = function(newSortingOrder) {       
				var sort = scope.sort;
				
				if (sort.sortingOrder == newSortingOrder){
					sort.reverse = !sort.reverse;
				}                    

				sort.sortingOrder = newSortingOrder;        
			};
			
		   
			scope.selectedCls = function(column) {
				if(column == scope.sort.sortingOrder){
					return ('fa fa-sort-' + ((scope.sort.reverse) ? 'desc' : 'asc'));
				}
				else{            
					return'fa fa-sort' 
				} 
			};      
		  }
		}

	});

app.directive('addInstallment', function () {
return {
restrict: 'E',
scope: false,
templateUrl: '../views/addInstallment.html'
}
});

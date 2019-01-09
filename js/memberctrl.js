app.controller("membersctrl",["$scope","$routeParams", "$location","MembersService",function($scope,$routeParams, $location,MembersService){
	 $scope.memberslist = MembersService.memberslist;
	 if(!$routeParams.id) {
        $scope.memberlist = {id: 0,completed: false, name: "", loans: "" , amount:"",locality:"",city:"",phone:"" ,state:"",date: new Date()};
    }else{
        $scope.memberlist = _.clone(MembersService.findById(parseInt($routeParams.id)));
    }
    $scope.orderByMe = function(x){
		$scope.myOrderBy = x;
	}
	 $scope.save = function(){
        MembersService.save( $scope.memberlist);
        jq('#addMember').modal('hide');
        $location.path("/members");
    }
    $scope.editMember = function(member){
        $scope.memberlist = member;
        jq('#addMember').modal('show');
    }
    $scope.newmember = function(){
    	$scope.memberlist = "";
    	jq('#addMember').modal('show');
    }
	$scope.viewMember = function(member){
			$scope.mem = member;
			jq('#memberModal').modal('show');
		};
		$scope.sort = {       
					sortingOrder : 'name',
					reverse : false
				};
				$scope.removeMember = function(entry){
		if(confirm("Are you sure you want to delete the member?")){
			MembersService.removeMember(entry);
		}else{
			return false;
		};
	};
}]);
app.directive("customSort", function() {
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


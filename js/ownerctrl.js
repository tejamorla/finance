app.controller("ownerctrl",function($scope,$location){
	$scope.owner ={Sitename:"Annapoorneswari Finance",OwnerName:"Amarnath",Mobile:9876543210,Locality:"Lakshmipuram",City:"Tirupati",State:"AP",Address:"Address",PinCode:517501
	};
	$scope.updateSetings = function(){
		  jq('#editownerModal').modal('show');
		
	}
	
});

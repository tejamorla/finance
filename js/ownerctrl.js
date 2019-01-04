app.controller("ownerctrl",function($scope,$location){
	$scope.owner ={Sitename:"Annapoorneswari Finance",OwnerName:"Amarnath",Mobile:9876543210,Locality:"Lakshmipuram",City:"Tirupati",State:"AP",Address:"Address",PinCode:517501
	};
	$scope.updateSetings = function(){
		$location.path("/editowner");
	}
	$scope.save = function(owner){
		$scope.owner.Sitename;
		$location.path("/settings");
	}
});

app.controller("homeCtrl",function($scope,$interval){
        $scope.homedata = {membersCount: '10', loans: '10', issuedAmount: '900000', interestAmount: '100000', totalAmount : '1000000', paidAmount: '100000', pendingAmount: '900000'};
         $scope.init = $interval(function(){
                var date = new Date();
                $scope.tDate  = date
            },100);
    });
 
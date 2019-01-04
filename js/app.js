var app = angular.module("myapp",["ngRoute"]);
var jq = $.noConflict();
app.config(function($routeProvider){
$routeProvider
.when("/members",{
	templateUrl:"views/members.html"
}).when("/additem",{
	templateUrl:"views/additem.html",
	controller:"membersctrl"
}).when('/additem/edit/:id',{
            templateUrl:"views/additem.html",
            controller: "membersctrl"
        }).when("/loans",{
        	templateUrl:"views/loans.html",
        	controller:"loanctrl"
        }).when("/editowner",{
        	templateUrl:"views/editowner.html",
        	controller:"ownerctrl"
        })
        .when("/addloan",{
        	templateUrl:"views/addloan.html",
        	controller:"loanctrl"
        }).when("/persondata",{
        	templateUrl:"views/persondata.html",
        }).when('/addloan/edit/:id',{
            templateUrl:"views/addloan.html",
            controller: "loanctrl"
        }).when("/home",{
		templateUrl:"views/home.html",
		controller:"homeCtrl"
}).when("/settings",{
		templateUrl:"views/settings.html",
		controller:"ownerctrl"
}).when("/editowner",{
		templateUrl:"views/settings.html",
		controller:"ownerctrl"
})
        .otherwise({ redirectTo: "/home" });
});


app.service("MembersService",function(){
	var membersService ={};
	membersService.memberslist = [
	{id:1,completed: true, name: 'Teja', loans: "2" , amount:"50000",loantype:"daily",date: new Date("October 1, 2014"),locality:"kavali",city:"kavali",state:"ap",phone:"8499890339"},
	{id:2,completed: true, name: 'ravi', loans: "0" , amount:"0",locality:"kavali",city:"kavali",state:"ap",phone:"9553771990"},
	{id:3,completed: true, name: 'rrr', loans: "2" , amount:"50000",locality:"nellore",city:"kavali",state:"ap",phone:"8499890339"},
	{id:4,completed: true, name: 'abc', loans: "2" , amount:"50000",locality:"nellore",city:"kavali",state:"ap",phone:"8499890339"}
	];
	membersService.findById = function(id){
        for(var item in membersService.memberslist){
            if(membersService.memberslist[item].id === id) {
                console.log(membersService.memberslist[item]);
                return membersService.memberslist[item];
            }
        }
    };
    membersService.removeMember = function(entry){
		var index = membersService.memberslist.indexOf(entry);
		membersService.memberslist.splice(index,1);
	
	};
	membersService.getNewId = function(){
        if(membersService.newId) {
            membersService.newId++;
            return membersService.newId;
        }
        else {
        	var maxId = _.max(membersService.memberslist, function(entry){ return entry.id;})
            membersService.newId = maxId.id + 1;
            return membersService.newId;
        }
    }
	membersService.save = function(entry){
		var updateperson = membersService.findById(entry.id);
		if(updateperson){
			updateperson.completed = entry.completed;
			updateperson.name = entry.name;
			updateperson.phone = entry.phone;
			updateperson.locality = entry.locality;
			updateperson.city = entry.city;
			updateperson.state = entry.state;
		}else{
		 entry.id = membersService.getNewId();
		 membersService.memberslist.push(entry);
		}
	};
	return membersService;
});

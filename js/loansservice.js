app.service ("LoanService",function(){
	var loanservice ={};
	loanservice.loanslist = [{id:1,completed: true ,name: 'Member1',loan_period:"30days", loantype: 'Daily', issudedate: '2017-12-01',amount : 50000, interest:5000, total_amount:55000, paid_amount:50000, discount:3000, pending_amount:2000, issude_amount:30000,status:'Pending', payment_date:'2018-02-01', locality:'Lakshmipuram'},
							{id:1,completed: true ,name: 'Member2', loantype: 'Weekly', issudedate: '2018-12-01',amount : 0, issude_amount:50000,interest:500, total_amount:6000,loan_period:"30days", paid_amount:5000, discount:3000, pending_amount:200, status:'Paid', payment_date:'2018-02-01', locality:'Kavali'}
							];
	loanservice.findById = function(id){
        for(var item in loanservice.loanslist){
            if(loanservice.loanslist[item].id === id) {
                console.log(loanservice.loanslist[item]);
                return loanservice.loanslist[item];
            }
        }
    };
    loanservice.getNewId = function(){
        if(loanservice.newId) {
            loanservice.newId++;
            return loanservice.newId;
        }
        else {
        	var maxId = _.max(loanservice.loanslist, function(entry){ return entry.id;})
            loanservice.newId = maxId.id + 1;
            return loanservice.newId;
        }
    }
    loanservice.removeLoan = function(entry){
		var index = loanservice.loanslist.indexOf(entry);
		loanservice.loanslist.splice(index,1);
	
	};
    loanservice.save = function(entry){
		var editloan = loanservice.findById(entry.id);
		if(editloan){
			editloan.completed = entry.completed;
			editloan.name = entry.name;
			editloan.loantype = entry.loantype;
			editloan.amount = entry.amount;
			editloan.issudedate = entry.issudedate;
			editloan.interest = entry.interest;
			editloan.total_amount = entry.total_amount;
			editloan.paid_amount = entry.paid_amount;
			editloan.status = entry.pending_amount;
			editloan.discount = entry.discount;
			editloan.payment_date = entry.payment_date;
			editloan.locality = entry.locality;
		}else{
		 entry.id = loanservice.getNewId();
		 loanservice.loanslist.push(entry);
		}
	};
	return loanservice;
});
$(document).ready(function(){
	var allVal = [];	
	$(".txnContainer").on('click','.delete',function(el){		
		var containerElemt =$(el.currentTarget).parents('.panel-default');		
		containerElemt.prev('hr').remove();
		containerElemt.remove();
	});
	
	$(".txnContainer").on('click','.flip',function(el){		
		$(this).find('.card').toggleClass('flipped');
		var containerElemt =$(el.currentTarget).parents('.panel-default');		
		if($(this).find('.card').hasClass('flipped')){				
			containerElemt.find('input').prop('readonly',true); //attr("disabled", true)
			containerElemt.find(' select').attr("disabled", true);						
		}
		else{			
			containerElemt.find('input').prop('readonly',false); //attr("disabled", true)
			containerElemt.find(' select').attr("disabled", false);				
		}
	});

	$(".txnContainer").on('click','.read',function(el){		
		var containerElemt =$(el.currentTarget).parents('.panel-default');		
		//containerElemt.find('form').remove();
		var formVal = containerElemt.find('form');
		var formId =  (formVal[0]).id;
		
		    // get all the inputs into an array.		   
		    var $inputs = $('#'+formId+' :input');

		    // not sure if you wanted this, but I thought I'd add it.
		    // get an associative array of just the values.
		    var values = {};
		    $inputs.each(function() {
		        values[this.name] = $(this).val();
		        if(this.name === "fromEntityName"){
		        	values["fromAcctId"] = $(this).children(":selected").attr('id');
		        }
		        else if(this.name === "toEntityName"){
		        	values["toAcctId"] = $(this).children(":selected").attr('id');

		        }
		    });
		   

		    allVal.push(values);
		    console.log(allVal,"allVal");
		    if(allVal.length>0){
		    	$(".process").attr('disabled',false);
		    }
		
	});

	$(".container").on('click','.process',function(el){		
		//server.apiCall('/corptran/corptxn/1.0/transactions/add','POST',allVal,template.reviewTbl);
		template.reviewTbl();
		
	});	

	$(".review").on('click','.txnCmd',function(el){				
		var atLeastOneIsChecked = $('.txnCmd:checked').length > 0;	
		if(atLeastOneIsChecked)	{
			$('.cmdBtnHolder button').prop('disabled',false);
		}
		else{
			$('.cmdBtnHolder button').prop('disabled',true);
		}
	});

	$(".review").on('click','button',function(el){	
		var textVal = el.currentTarget.textContent.trim();			
		template.selectedTxn(textVal);
	});

	$(".modal-body").on('confirm','button',function(el){	
		var myRows = { myRows: [] };
	    var $th = $('table th');
		$('.review').find('tbody tr').each(function (rowIndex, r) {
	        
	        var obj = {}, $tds = $(r).find('td');

	         if($("#"+$tds[0].children.length>0)){	 
	         	var index = 0;	        	
	        	$tds.each(function(index, th){
			    	if(index>1){
			        	//obj[$(th).attr('class')] = $tds.eq(index).text();
			        	obj[$(td).attr('class')] = $tds.eq(index).text();
			        }
		    	});
	    		
		    	myRows.myRows.push(obj);	        	
	         }	        		    
	    });
		var txnDataVal = myRows.myRows;
	    server.apiCall('/corptran/corptxn/1.0/transactions/action','POST',txnDataVal, template.msg);
	});
	
});

var template = (function(template){
	
	template.paintTxnForm = function(data){
		var data = JSON.parse(data);
		var html = "";
		var id = 1;
		//id = id+1;
		html += " <div class='panel panel-default' id='"+id+"'>";
		html += "<div class='panel-heading'  id='heading"+id+"'>";
        html +=      "<h4 class='panel-title'>";
        html +=        "<a role='button' data-toggle='collapse' data-parent='#accordion11' href='#collapse"+id+"' aria-expanded='true' >";
        html +=            "Add Transaction";
        html +=        "</a>";
        html +=      "</h4>";
        html +=    "</div>";

        html += "<div id='collapse"+id+"' class='panel-collapse collapse in' >";
		html += "<div class='panel-body'>";

		html += "<form class='form-horizontal' id='form_"+id+"'>";
		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";
		var txnTypeVal = data.txnType;
		html += "<select id='txnType' class='form-control' name='txnType'>";
		for(var i=0; i<txnTypeVal.length; i++){
			html += "<option id="+txnTypeVal[i].key+">";
			html += txnTypeVal[i].value;
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";
		html +="</div>";

		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		html += "<input class='form-control ' type='text' id='txnRef' placeholder='Transaction Reference Name' name='txnRef'/>";				
		html +="</div>";
		html += "</div>";

		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		var fromVal = data.from;
		html += "<select id='txnType' class='form-control' name='fromEntityName'>";		
		html += "<option >From";		
		html += "</option>";
		for(var i=0; i<fromVal.length; i++){
			
			html += "<option id="+fromVal[i].key+">";
			html += fromVal[i].value;
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";

		html +="<div class='form-group form-group-sm col-md-5'>";		
		var toVal = data.to;
		
		html += "<select id='txnType' class='form-control' name='toEntityName'>";
		html += "<option >To";		
		html += "</option>";
		for(var i=0; i<toVal.length; i++){
			html += "<option id="+toVal[i].key+">";
			html += toVal[i].value;
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";
		html += "</div>";		

		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		html += "<input class='form-control' type='number' id='amt' placeholder='Amount' name='txnAmount'/>";				
		html +="</div>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		html += "<input class='form-control' type='text' id='rmk' placeholder='Remark' name='remarks'/>";				
		html +="</div>";	
		html +="</div>";

		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		var priorityVal = data.priority;
		
		html += "<select id='txnType' class='form-control ' name='priority'>";
		html += "<option >Priority";		
		html += "</option>";
		for(var i=0; i<priorityVal.length; i++){
			html += "<option id="+priorityVal[i].key+">";
			html += priorityVal[i].value.toUpperCase();
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";
		html +="<div class='form-group form-group-sm col-md-5' >";		
		var prpsVal = data.purpose;

		html += "<select id='txnType' class='form-control ' name='purpose'>";
		html += "<option >Purpose";		
		html += "</option>";
		for(var i=0; i<prpsVal.length; i++){
			html += "<option id="+prpsVal[i].key+">";
			html += prpsVal[i].value.toUpperCase();
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";
		html +="</div>";		

		html += "</form>";

		html += "<div class='flip pull-right'>";
        html += "<div class='card'>";
        html +=  "<div class='face front'>";
        
        html +=        "<button type='button' class='btn btn-default btn-sm read' title='save'>";
  		html +=			"<span class='glyphicon glyphicon-folder-close' aria-hidden='true'></span>";
		html +=			"</button>";
        html +=  "</div>" ;
        html +=  "<div class='face back'>";
        
		html +=        "<button type='button' class='btn btn-default btn-sm edit' title='Edit'>";
  		html +=			"<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>";
		html +=			"</button>";
        html +=  "</div>";
        html += "</div>";
        html += "</div>";

		html +="</div>";

		html +="</div>";
		html +="</div>";	
		$('.txnContainer').html(html);
	}

	template.addNewTxn = function(data){
		var data = JSON.parse(data);
		var html = "";
		var id = $('body').find('form').last().attr('id');
		
		id = id.split('_');
		id = parseInt(id[1]); 

		id = id+1;
		html += "<hr/>";
		html += " <div class='panel panel-default' id='"+id+"'>";
		html += "<div class='panel-heading'  id='heading"+id+"'>";
        html +=      "<h4 class='panel-title'>";
        html +=        "<a role='button' data-toggle='collapse' data-parent='#accordion11' href='#collapse"+id+"' >";
        html +=          "Add Another Transaction ";
        html +=        "</a>";       
        html +=      "</h4>";

        html +=        "<div class='action'>";
	
		html +=        "<button type='button' class='btn btn-default btn-sm delete'>";
  		html +=			"<span class='glyphicon glyphicon-trash red' aria-hidden='true'></span>";
		html +=			"</button>";
		html +=    "</div>";
        html +=    "</div>";

        html += "<div id='collapse"+id+"' class='panel-collapse collapse' >";
		html += "<div class='panel-body'>";
		html += "<form class='form-horizontal' id='form_"+id+"'>";
		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";
		var txnTypeVal = data.txnType;
		html += "<select id='txnType' class='form-control' name='txnType'>";
		for(var i=0; i<txnTypeVal.length; i++){
			html += "<option id="+txnTypeVal[i].key+">";
			html += txnTypeVal[i].value;
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";
		html +="</div>";

		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		html += "<input class='form-control ' type='text' id='txnRef' placeholder='Transaction Reference Name' name='txnRef'/>";				
		html +="</div>";
		html += "</div>";

		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		var fromVal = data.from;
		html += "<select id='txnType' class='form-control' name='fromEntityName'>";		
		html += "<option >From";		
		html += "</option>";
		for(var i=0; i<fromVal.length; i++){
			
			html += "<option id="+fromVal[i].key+">";
			html += fromVal[i].value;
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";

		html +="<div class='form-group form-group-sm col-md-5'>";		
		var toVal = data.to;
		
		html += "<select id='txnType' class='form-control' name='toEntityName'>";
		html += "<option >To";		
		html += "</option>";
		for(var i=0; i<toVal.length; i++){
			html += "<option id="+toVal[i].key+">";
			html += toVal[i].value;
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";
		html += "</div>";		

		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		html += "<input class='form-control' type='number' id='amt' placeholder='Amount' name='txnAmount'/>";				
		html +="</div>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		html += "<input class='form-control' type='text' id='rmk' placeholder='Remark' name='remarks'/>";				
		html +="</div>";	
		html +="</div>";

		html += "<div class='row'>";
		html +="<div class='form-group form-group-sm col-md-5'>";		
		var priorityVal = data.priority;
		
		html += "<select id='txnType' class='form-control ' name='priority'>";
		html += "<option >Priority";		
		html += "</option>";
		for(var i=0; i<priorityVal.length; i++){
			html += "<option id="+priorityVal[i].key+">";
			html += priorityVal[i].value.toUpperCase();
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";
		html +="<div class='form-group form-group-sm col-md-5' >";		
		var prpsVal = data.purpose;

		html += "<select id='txnType' class='form-control ' name='purpose'>";
		html += "<option >Purpose";		
		html += "</option>";
		for(var i=0; i<prpsVal.length; i++){
			html += "<option id="+prpsVal[i].key+">";
			html += prpsVal[i].value.toUpperCase();
			html += "</option>";
		}
		html += "</select>";
		html +="</div>";
		html +="</div>";		

		html += "</form>";

		html += "<div class='flip pull-right'>";
        html += "<div class='card'>";
        html +=  "<div class='face front'>";
        
        html +=        "<button type='button' class='btn btn-default btn-sm read' title='save'>";
  		html +=			"<span class='glyphicon glyphicon-folder-close' aria-hidden='true'></span>";
		html +=			"</button>";
        html +=  "</div>" ;
        html +=  "<div class='face back'>";
        
		html +=        "<button type='button' class='btn btn-default btn-sm edit' title='Edit'>";
  		html +=			"<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>";
		html +=			"</button>";
        html +=  "</div>";
        html += "</div>";
        html += "</div>";

		html +="</div>";

		html +="</div>";
		html +="</div>";	
		$('.txnContainer').append(html);

	}

	template.reviewTbl = function(data){
		var x ='[{"txnTypeName":"NEFT","txnRef":"test","fromEntityName":"Johny","fromAccId":"AC_0002","toAcc":"Michale","amount":"10000","remarks":"First","priority":"High","purpose":"For Rent"},{"txnTypeName":"NEFT","txnRef":"Second Ref","fromEntityName":"John","fromAccId":"AC_0002","toAcc":"Michale","amount":"2000","remarks":"Second Remark","priority":"High","purpose":"For Rent"}]';
		data = JSON.parse(x);
		//var data = JSON.parse(data);
		var html = "";
		html += "<table class='table review'>";
		html += "<thead>";
		html += "<tr>";
		html += "<th>";
		//html += ""
		html += "</th>";
		html += "<th class='fromAccId'>";
		html += "From Account";
		html += "</th>";
		html += "<th class='toAccId'>";
		html += "To Account";
		html += "</th>";
		html += "<th class='txnAmount'>";
		html += "Amount";
		html += "</th>";
		html += "<th class='txnRef'>";
		html += "Reference";
		html += "</th>";
		html += "<th class='txnDate'>";
		html += "Transaction Date";
		html += "</th>";
		html += "<th class='remarks'>";
		html += "Remark";
		html += "</th>";
		html += "</tr>";
		html += "</thead>";

		html == "<tbody>";
		for(var i = 0; i< data.length; i++){
			html += "<tr>";

			html += "<td>";
			html += "<input type='checkbox' id='corpTrancheckbox_"+i+"'  class='txnCmd'/>";
			html += "</td>";

			html += "<td class='toAccId'>";
			html += data[i].fromEntityName+"|"+data[i].fromAccId;
			html += "</td>";

			html += "<td class='txnAmount'>";
			html += data[i].toEntityName+"|"+data[i].toAccId;
			html += "</td>";

			html += "<td class='txnAmount'>";
			html += data[i].amount;
			html += "</td>";

			html += "<td class='txnRef'>";
			html += data[i].txnRef;
			html += "</td>";

			html += "<td class='txnDate'>";
			html += $.now();
			html += "</td>";

			html += "<td class='remarks'> ";
			html += data[i].remarks;
			html += "</td>";
			html += "</tr>";
		}
		html == "</tbody>";
		html += "</table>";

		html += "<div class='cmdBtnHolder'>";
		html += "<button type='button' class='btn btn-primary margin_right accept' disabled data-toggle='modal' data-target='.bs-example-modal-lg'>";
  		html +=	"Allow";
		html +=	"</button>";
		html += "<button type='button' class='btn btn-danger margin_right reject' disabled data-toggle='modal' data-target='.bs-example-modal-lg'>";
  		html +=	"Decline";
		html +=	"</button>";
		html += "</div>";
		$('.review').append(html);

	}

	template.appendNewTxn = function(){
		server.apiCall('/corptran/data/formData.json','','', template.addNewTxn);
	}

	template.selectedTxn = function(textVal){
		var status;
		
		if(textVal === "Allow"){
			 status= "A";
		}
		else{
			 status= "D";
		}
		var user;
	    var data = [];

	    var myRows = { myRows: [] };
	    var $th = $('table th');

	    $('.review').find('tbody tr').each(function (rowIndex, r) {
	        
	        var obj = {}, $tds = $(r).find('td');
	         if(($tds[0].children.length>0)){
	         	
	         	if($("#"+$tds[0].children[0].id).prop('checked')){
	         		var index = 0;		        	
		        	$tds.each(function(index, td){
		        		
				    	if(index>1){				    		
				        	obj[$(td).attr('class')] = $tds.eq(index).text();
				        }
			    	});
		    		obj["status"] = status;
		    		obj["updatedBy"] = user||"dummy";
		    		obj["id"] = rowIndex++;
			    	myRows.myRows.push(obj);
	        	}
	         }	        		    
	    });
    	//console.log(data,"DATA") ;
    	console.log(myRows,"myRows") ;
    	var daTaVal = myRows.myRows;
    	template.confirmDataTemplate(daTaVal,textVal);		
	}

	template.confirmDataTemplate = function(daTaVal,textVal){
		var data = daTaVal;

		var html = "";
		html += "<h3>";
		html += "List of " +textVal+ " Transactions.";
		html += "</h3>";
		html += "<table class='table review'>";
		html += "<thead>";
		html += "<tr>";
		
		html += "<th class='id'>";
		html += "Transaction Id";
		html += "</th>";
		
		// html += "<th class='txnAmount'>";
		// html += "Amount";
		// html += "</th>";

		// html += "<th class='txnRef'>";
		// html += "Reference";
		// html += "</th>";
		// html += "<th class='txnDate'>";
		// html += "Transaction Date";
		// html += "</th>";
		html += "<th class='remarks'>";
		html += "Remark";
		html += "</th>";

		html += "<th class='updatedBy'>";
		html += "Updated By";
		html += "</th>";

		html += "<th class='status'>";
		html += "Status";
		html += "</th>";

		html += "</tr>";
		html += "</thead>";

		html == "<tbody>";
		for(var i = 0; i< data.length; i++){
			html += "<tr>";

			

			html += "<td class='id'>";
			html += data[i].id;
			html += "</td>";

			

			// html += "<td>";
			// html += data[i].amount;
			// html += "</td>";

			// html += "<td>";
			// html += data[i].txnRef;
			// html += "</td>";

			// html += "<td>";
			// html += $.now();
			// html += "</td>";

			html += "<td class='remarks'>";
			html += data[i].remarks;
			html += "</td>";

			html += "<td class='updatedBy'>";
			html += data[i].updatedBy;
			html += "</td>";

			html += "<td class='status'>";
			html += data[i].status;
			html += "</td>";
			html += "</tr>";
		}
		html == "</tbody>";
		html += "</table>";

		html += "<div class='cmdBtnHolder'>";
		html += "<button type='button' class='btn btn-primary margin_right confirm' >";
  		html +=	"Confirm";
		html +=	"</button>";
		html += "<button type='button' class='btn btn-danger margin_right cancle' data-dismiss='modal'>";
  		html +=	"Cancle";
		html +=	"</button>";
		html += "</div>";

		$(".modal-body").html(html);
	}

	template.msg = function(){
		alert("Done");
	}

	return template;
}(template || {}));
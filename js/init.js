var init = (function(init){
	init.load = function(){
		server.apiCall('/corptran/data/formData.json','','', template.paintTxnForm);
		//server.apiCall('/data/formData.json','','', template.paintTxnForm);
	}

return init;
}(init||{}));
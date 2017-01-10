var server = (function(server){

	server.apiCall = function(url, method, data, callBack){
		console.log(data,"data api call");
		$.ajax({
			url:window.location.origin+url,
			method: method || "GET",
			data: JSON.stringify(data) || "",
			type: "json",
			contentType: "application/json; charset=utf-8",
			success:function(response){				
				callBack(response);
			},
			error:function(a, b ,c){
				alert("In Error");
			}
		});
	}

	server.getFormData = function(){				
		template.reviewTbl();
	}
return server;
}(server||{}));
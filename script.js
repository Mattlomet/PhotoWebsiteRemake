$.ajax({
		url:"https://api-practice-wdi.herokuapp.com/posts",
		method: "GET",
		success: function(response){
			console.log(response)
			var saved = response;
			console.log(saved[0])
		}
	})

// var start = "<div class='col-md-4'>"
				// var end = "</div>"
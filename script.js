var main = document.getElementById("main-content");
$.ajax({
		url:"https://api-practice-wdi.herokuapp.com/posts",
		method: "GET",
		success: function(response){
			var saved = response.posts;
			
			saved.forEach(function(object){
				var title = object.title;
				var date= object.date;
				var img = object.img;
				var category = object.categories[0];
			
				var start= "<div class='col-md-4'>";
				var end = "</div>";
				var breakLine= "<br>";
				var horizLine= "<hr>";
				var imageDivStart = "<div class='image'><img id='mainImage' src='"
				var imageDivEnd = "'></div>"
				var dateDivStart = "<div class='date'>"
				var titleDivStart = "<div class='title'>"
				var categoryDivStart = "<div class='category'>"

				var returningObjects = (start+imageDivStart+img+imageDivEnd+dateDivStart+date+end+titleDivStart+title+end+horizLine+categoryDivStart+category+end+end);
				main.innerHTML+=returningObjects;

			})
		}
	})

var dropDown = document.getElementById('dropDown');
dropDown.addEventListener("click",function(event){
	document.getElementById('dropDownMenu').style.display="block";
})

var closeOut = document.getElementById('closeOut');
closeOut.addEventListener("click",function(){
	document.getElementById('dropDownMenu').style.display="none";
})
document.addEventListener('DOMContentLoaded', function(){
	
	
	document.getElementById('clickButton').addEventListener('click' , function() {
		
		if(document.getElementById('testDiv').style.width == "200px")
		{
			document.getElementById('testDiv').style.width = "100px";
		}
		else
		{
			document.getElementById('testDiv').style.width = "200px";
			
		}
	});
	
})


/*
var btn = document.getElementById('clickButton');


var btnChanged = function()
{
	var ourDiv = document.getElementById('testDiv');
	ourDiv.style.width = "200px";
}

btn.addEventListener( 'click', btnChanged );

*/

// eventListener - слушател на събития


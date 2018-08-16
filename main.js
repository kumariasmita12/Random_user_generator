
$(document).ready(function(){
    $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
	  $("#name").text((data.results[0].name.first)+ " " + data.results[0].name.last)
	  $(".img-circle").attr('src',data.results[0].picture.large)
	  	  $("#email").text((data.results[0].email))
		   $("#gender").text((data.results[0].gender))
		    	  $("#phone").text((data.results[0].phone))
    console.log(data.results[0].name.first);
  }
});
	 
});

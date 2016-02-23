	$(document).ready(function() {

			
		$('.gallery-item').magnificPopup({
	  type: 'image',
	  gallery:{
		enabled:true,
		tCounter: '<span class="mfp-counter"></span>'  
	  }
	});
		
		$("#search").keyup(function(){
      var current_query = $(this).val();
      $('.gallery-item').hide();
      $('.gallery-item').each(function(){
        var current_keyword = $(this).attr("data-sub-html");
        if(current_keyword.indexOf(current_query) >= 0){
          $(this).show();
        }
      }); 
    });
				
});

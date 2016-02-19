	$(document).ready(function() {

		
		$('.gallery-item').magnificPopup({
	  type: 'image'
	  // other options
	});

	
		$('.gallery-item').magnificPopup({
	  type: 'image',
	  gallery:{
		enabled:true,
		tCounter: '<span class="mfp-counter"></span>'  
	  }
	});
		
		$("#search").keypress(function(){
      var current_query = $(this).val();
      $('.light-gallery > .item > a').hide();
      $('.light-gallery > .item > a').each(function(){
        var current_keyword = $(this).attr("data-sub-html");
        if(current_keyword.indexOf(current_query) >= 0){
          $(this).show();
        }
      }); 
    });
				
});

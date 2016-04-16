// your custome js here
jQuery(document).ready(function(){
	
	jQuery(".scrollbar").scroller();
	
	jQuery("div#myPixTop").dropzone({ url: "/file/post"});
	jQuery("div#myPixBottom").dropzone({ url: "/file/post"});

	
	jQuery('#fileupload').fileupload({
		dropZone: jQuery('#dropzone')
	});
	
});


jQuery(window).load(function() {
	jQuery('.flexslider').flexslider({
    	animation: "slide"
	});
});



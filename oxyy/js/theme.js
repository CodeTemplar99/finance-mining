/*
================================================================
* Template:  	 Oxyy - Login and Register Form Html Templates
* Written by: 	 Harnish Design - (http://www.harnishdesign.net)
* Description:   Main Custom Script File
================================================================
*/


(function ($) {
	"use strict";

// Preloader
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});

/*---------------------------------------------------
    YouTube video to autoplay in modal
----------------------------------------------------- */
// Gets the video src from the data-src on each button
var $videoSrc;
$('.video-btn').on('click', function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
// when the modal is opened autoplay it  
$('#videoModal').on('shown.bs.modal', function (e) {
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates...you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0" ); 
})
// stop playing the youtube video when I close the modal
$('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc); 
})


/*------------------------
   tooltips
-------------------------- */
$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

})(jQuery)
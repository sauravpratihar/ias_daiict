jQuery(document).ready(function($) {
  "use strict";

// slider
$("#sliderRange")
.slider({
    range: true,
    min: 0,
    max: 500,
    step: 1,
    values: [75, 300],
    slide: function(event, ui) {
        var price1 = ui.values[0];
        var price2 = ui.values[1];
        $("#price1")
        .val("\u20ac" + price1);
        $("#price2")
        .val("\u20ac" + price2);
    }
});
$('#price1')
.bind('keyup', function() {
    var from = $(this)
    .val();
    var to = $('#price2')
    .val();
    $('#sliderRange')
    .slider('option', 'values', [from, to]);
});
$('#price2')
.bind('keyup', function() {
    var from = $('#price1')
    .val();
    var to = $(this)
    .val();
    $('#sliderRange')
    .slider('option', 'values', [from, to]);
});

});

jQuery(document).ready(function($) {
  "use strict";
	$('#portfolio-slider1').flexslider({
		animation: "fade",
		slideshowSpeed: 4500, 
        controlNav: "thumbnails",
	manualControls: ".flex-control-nav1 li",             
		slideshow: false,
		directionNav: false             
	});
});

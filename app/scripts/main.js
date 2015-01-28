Galleria.loadTheme('styles/themes/classic/galleria.classic.min.js');
Galleria.run('.galleria');




Galleria.ready(function(options) {

	var g = this;
    // this = the gallery instance
    // options = the gallery options
	$( ".galleria-image" ).click(function() {
		g.openLightbox();
		//console.log("Asdf");
	});
});
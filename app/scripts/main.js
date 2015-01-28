Galleria.loadTheme('styles/themes/classic/galleria.classic.js');
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
//about me
$( "#resume" ).click(function() {
	window.open("resume2015.docx");
});
$( "#linkedin" ).click(function() {
	window.open("https://www.linkedin.com/in/nikitafilatov");
});
$( "#github" ).click(function() {
	window.open("https://github.com/adeka");
});
//projects
$( "#rogue" ).click(function() {
	window.open("http://newgramps.itch.io/rogue-infinity");
});
$( "#mdv" ).click(function() {
	window.open("http://moderndentalvision.net/");
});
$( "#lexicon" ).click(function() {
	window.open("http://adeka.github.io/jsMMO/");
});
$( "#ai" ).click(function() {
	window.open("http://adeka.github.io/MacGame/");
});
$( "#mrss" ).click(function() {
	window.open("http://adeka.github.io/mRSS/");
});
$( "#newsagg" ).click(function() {
	window.open("http://adeka.github.io/NewsAgg/");
});
$( "#squadhero" ).click(function() {
	window.open("http://grapplehookgames.com/squadhero/");
});
//steam
$( "#steam" ).click(function() {
	window.open("http://steamcommunity.com/id/syntheno/myworkshopfiles/?appid=570");
});
$( "#tiny" ).click(function() {
	window.open("http://steamcommunity.com/sharedfiles/filedetails/?id=75653084");
});
$( "#hud" ).click(function() {
	window.open("http://steamcommunity.com/sharedfiles/filedetails/?id=158139619");
});

//turbosquid
$( "#turbosquid" ).click(function() {
	window.open("http://www.turbosquid.com/Search/Artists/syntheno");
});
$( "#colt" ).click(function() {
	window.open("http://www.turbosquid.com/FullPreview/Index.cfm?ID=547044&seo=0");
});
$( "#m4a1" ).click(function() {
	window.open("http://www.turbosquid.com/FullPreview/Index.cfm?ID=533779&seo=0");
});


//links
$( "#return" ).click(function() {
	//$(this).css("background-color", "red");
	$(document).scrollTo("#about");
});



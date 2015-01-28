//Galleria.loadTheme('scripts/vendor/galleria.classic.js');
Galleria.loadTheme('http://www.javascriptoo.com/application/html/galleria/themes/classic/galleria.classic.min.js');



Galleria.run('.galleria');
Galleria.ready(function(options) {

	var g = this;
    // this = the gallery instance
    // options = the gallery options
	$( ".fscreen" ).click(function() {
		g.openLightbox();
		//console.log("Asdf");
	});

});
//about me
$( "#resume" ).click(function() {
	//window.open("resume2015.docx");
	window.open("nikita_filatov_resume.pdf");
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
	$("body, html").animate({ 
        scrollTop: $( "#about" ).offset().top 
    }, 600);
});
$( "#returnProjects" ).click(function() {
	//$(this).css("background-color", "red");
	$("body, html").animate({ 
        scrollTop: $( "#projects" ).offset().top 
    }, 600);
});
$( "#returnArt" ).click(function() {
	//$(this).css("background-color", "red");
	$("body, html").animate({ 
        scrollTop: $( "#art" ).offset().top 
    }, 600);
});
$( "#returnFreelancing" ).click(function() {
	//$(this).css("background-color", "red");
	$("body, html").animate({ 
        scrollTop: $( "#freelancing" ).offset().top 
    }, 600);
});
$( "#returnMusic" ).click(function() {
	//$(this).css("background-color", "red");
	$("body, html").animate({ 
        scrollTop: $( "#music" ).offset().top 
    }, 600);
});

/*
	$("#aboutAccordion").css("max-height", "300px");
	$("#projectsAccordion").css("max-height", "1000px");
	$("#galleryAccordion").css("max-height", "600px");
	$("#steamAccordion").css("max-height", "800px");
	$("#musicAccordion").css("max-height", "700px");
*/
function toggleAccordion(button, accordion, height){
	var open = $(button).data("open");
	if(!open){
		$(accordion).css("max-height", "0px");
	}
	else{
		$(accordion).css("max-height", height);
	}
	$(button).data("open", !open);
}

//accordions
$( "#aboutme" ).click(function() {
	toggleAccordion(this, "#aboutAccordion", "300px")
});
$( "#projects" ).click(function() {
	toggleAccordion(this, "#projectsAccordion", "1000px")
});
$( "#art" ).click(function() {
	toggleAccordion(this, "#galleryAccordion", "600px")
});
$( "#freelancing" ).click(function() {
	toggleAccordion(this, "#steamAccordion", "800px")
});
$( "#music" ).click(function() {
	toggleAccordion(this, "#musicAccordion", "700px")
});
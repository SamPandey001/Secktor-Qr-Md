var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);

//$(window).load(function() {
 // $(".loader").css("remove");
//});
$('a[href^="#case-studies"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top +1
			},1000
		);
	}
});
$('a[href^="#main"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top
			},1000
		);
	}
});

var AboutMe = function() {
	$(".left").addClass('active');
	$("#nav-icon1").addClass('open');
	$("#about-me").addClass("active");
	$("nav").addClass("about");
	$(".social-vertical-stripe").addClass("about");
	$(".behind-title").addClass("about");
	$(".hero-go-next").addClass("about");
};
var AboutMeTwo = function() {
	$(".right").addClass('active');
};
var Boverflow = function(){
	$("body").addClass("about");
	$(".row").addClass('active');
	$(".behind-title").addClass("zdex");
}
var removeAll = function() {
	$("nav").removeClass("about");
	$(".right").removeClass('active');
	$(".left").removeClass('active');
	$("#nav-icon1").removeClass('open');
	$(".social-vertical-stripe").removeClass("about");
	$(".behind-title").removeClass("about zdex");
	$(".hero-go-next").removeClass("about");
	$(".row").removeClass('active');
};
var zIndex = function(){
	$("#about-me").removeClass("active");
	$("body").removeClass("about");
}
function progressHTML(){
	var test = $("#progressHTML");
	var strokeLen = 85;
	document.getElementById("percentHTML").innerHTML = strokeLen + "%";
	var stroke = (strokeLen * 18.01) - 25;
	test.attr({
		'stroke-dasharray': stroke + " 1800",
	},1000)
}
progressHTML()
function progressJS(){
	var test = $("#progressJS");
	var strokeLen = 65;
	document.getElementById("percentJS").innerHTML = strokeLen + "%";
	var stroke = (strokeLen * 18.01) - 25;
	test.attr({
		'stroke-dasharray': stroke + " 1800",
	},1000)
}
progressJS()
function progressCSS(){
	var test = $("#progressCSS");
	var strokeLen = 90;
	document.getElementById("percentCSS").innerHTML = strokeLen + "%";
	var stroke = (strokeLen * 18.01) - 25;
	test.attr({
		'stroke-dasharray': stroke + " 1800",
	},1000)
}
progressCSS()
function progressJQ(){
	var test = $("#progressJQ");
	var strokeLen = 75;
	document.getElementById("percentJQ").innerHTML = strokeLen + "%";
	var stroke = (strokeLen * 18.01) - 25;
	test.attr({
		'stroke-dasharray': stroke + " 1800",
	},1000)
}
progressJQ()

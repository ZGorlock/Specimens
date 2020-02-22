$(document).ready(function() {
	var scroll = 0;

	$(document).on('scroll', 'html, body', function() {
		scroll = $(window).scrollTop();
	});

	function prepareShow() {
		scroll = $(window).scrollTop();
		$('html, body').css({
			overflow: 'hidden',
			height: '100%'
		});
	}
	function prepareHide() {
		$('html, body').css({
			overflow: 'auto',
			height: 'auto'
		});
		$("html").scrollTop(scroll);
	}

	$('#img_from_store0').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_from_store0").show();
	});
	$('#div_img_from_store0').click(function(){
		prepareHide();
	$("#div_img_from_store0").hide();
	});
	$('#div_close_img_from_store0').click(function(){
		prepareHide();
	$("#div_img_from_store0").hide();
	});

	$('#img_final0').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_final0").show();
	});
	$('#div_img_final0').click(function(){
		prepareHide();
	$("#div_img_final0").hide();
	});
	$('#div_close_img_final0').click(function(){
		prepareHide();
	$("#div_img_final0").hide();
	});

	$('#img_final1').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_final1").show();
	});
	$('#div_img_final1').click(function(){
		prepareHide();
	$("#div_img_final1").hide();
	});
	$('#div_close_img_final1').click(function(){
		prepareHide();
	$("#div_img_final1").hide();
	});

	$('#img_final2').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_final2").show();
	});
	$('#div_img_final2').click(function(){
		prepareHide();
	$("#div_img_final2").hide();
	});
	$('#div_close_img_final2').click(function(){
		prepareHide();
	$("#div_img_final2").hide();
	});

	$('#img_final3').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_final3").show();
	});
	$('#div_img_final3').click(function(){
		prepareHide();
	$("#div_img_final3").hide();
	});
	$('#div_close_img_final3').click(function(){
		prepareHide();
	$("#div_img_final3").hide();
	});

	$('#img_final4').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_final4").show();
	});
	$('#div_img_final4').click(function(){
		prepareHide();
	$("#div_img_final4").hide();
	});
	$('#div_close_img_final4').click(function(){
		prepareHide();
	$("#div_img_final4").hide();
	});

	$('#img_final5').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_final5").show();
	});
	$('#div_img_final5').click(function(){
		prepareHide();
	$("#div_img_final5").hide();
	});
	$('#div_close_img_final5').click(function(){
		prepareHide();
	$("#div_img_final5").hide();
	});

	$(document).keyup(function(e) {
		if (e.key === "Escape") {
			prepareHide();
			$("#div_img_from_store0").hide();
			$("#div_img_final0").hide();
			$("#div_img_final1").hide();
			$("#div_img_final2").hide();
			$("#div_img_final3").hide();
			$("#div_img_final4").hide();
			$("#div_img_final5").hide();
		}
	});

});

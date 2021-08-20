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

	$('#img_alive0').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_alive0").show();
	});
	$('#div_img_alive0').click(function(){
		prepareHide();
		$("#div_img_alive0").hide();
	});
	$('#div_close_img_alive0').click(function(){
		prepareHide();
		$("#div_img_alive0").hide();
	});

	$('#img_alive1').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_alive1").show();
	});
	$('#div_img_alive1').click(function(){
		prepareHide();
		$("#div_img_alive1").hide();
	});
	$('#div_close_img_alive1').click(function(){
		prepareHide();
		$("#div_img_alive1").hide();
	});

	$('#img_dead0').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead0").show();
	});
	$('#div_img_dead0').click(function(){
		prepareHide();
		$("#div_img_dead0").hide();
	});
	$('#div_close_img_dead0').click(function(){
		prepareHide();
		$("#div_img_dead0").hide();
	});

	$('#img_dead1').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead1").show();
	});
	$('#div_img_dead1').click(function(){
		prepareHide();
		$("#div_img_dead1").hide();
	});
	$('#div_close_img_dead1').click(function(){
		prepareHide();
		$("#div_img_dead1").hide();
	});

	$('#img_preparation0').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_preparation0").show();
	});
	$('#div_img_preparation0').click(function(){
		prepareHide();
		$("#div_img_preparation0").hide();
	});
	$('#div_close_img_preparation0').click(function(){
		prepareHide();
		$("#div_img_preparation0").hide();
	});

	$(document).keyup(function(e) {
		if (e.key === "Escape") {
			prepareHide();
			$("#div_img_alive0").hide();
			$("#div_img_alive1").hide();
			$("#div_img_dead0").hide();
			$("#div_img_dead1").hide();
			$("#div_img_preparation0").hide();
		}
	});

});

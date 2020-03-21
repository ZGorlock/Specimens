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

	$('#img_alive2').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_alive2").show();
	});
	$('#div_img_alive2').click(function(){
		prepareHide();
	$("#div_img_alive2").hide();
	});
	$('#div_close_img_alive2').click(function(){
		prepareHide();
	$("#div_img_alive2").hide();
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

	$('#img_dead2').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead2").show();
	});
	$('#div_img_dead2').click(function(){
		prepareHide();
	$("#div_img_dead2").hide();
	});
	$('#div_close_img_dead2').click(function(){
		prepareHide();
	$("#div_img_dead2").hide();
	});

	$('#img_dead3').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead3").show();
	});
	$('#div_img_dead3').click(function(){
		prepareHide();
	$("#div_img_dead3").hide();
	});
	$('#div_close_img_dead3').click(function(){
		prepareHide();
	$("#div_img_dead3").hide();
	});

	$('#img_dead4').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead4").show();
	});
	$('#div_img_dead4').click(function(){
		prepareHide();
	$("#div_img_dead4").hide();
	});
	$('#div_close_img_dead4').click(function(){
		prepareHide();
	$("#div_img_dead4").hide();
	});

	$('#img_dead5').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead5").show();
	});
	$('#div_img_dead5').click(function(){
		prepareHide();
	$("#div_img_dead5").hide();
	});
	$('#div_close_img_dead5').click(function(){
		prepareHide();
	$("#div_img_dead5").hide();
	});

	$('#img_dead6').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead6").show();
	});
	$('#div_img_dead6').click(function(){
		prepareHide();
	$("#div_img_dead6").hide();
	});
	$('#div_close_img_dead6').click(function(){
		prepareHide();
	$("#div_img_dead6").hide();
	});

	$('#img_dead7').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead7").show();
	});
	$('#div_img_dead7').click(function(){
		prepareHide();
	$("#div_img_dead7").hide();
	});
	$('#div_close_img_dead7').click(function(){
		prepareHide();
	$("#div_img_dead7").hide();
	});

	$('#img_dead8').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead8").show();
	});
	$('#div_img_dead8').click(function(){
		prepareHide();
	$("#div_img_dead8").hide();
	});
	$('#div_close_img_dead8').click(function(){
		prepareHide();
	$("#div_img_dead8").hide();
	});

	$('#img_dead9').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead9").show();
	});
	$('#div_img_dead9').click(function(){
		prepareHide();
	$("#div_img_dead9").hide();
	});
	$('#div_close_img_dead9').click(function(){
		prepareHide();
	$("#div_img_dead9").hide();
	});

	$('#img_dead10').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_dead10").show();
	});
	$('#div_img_dead10').click(function(){
		prepareHide();
	$("#div_img_dead10").hide();
	});
	$('#div_close_img_dead10').click(function(){
		prepareHide();
	$("#div_img_dead10").hide();
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

	$('#img_preparation1').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_preparation1").show();
	});
	$('#div_img_preparation1').click(function(){
		prepareHide();
	$("#div_img_preparation1").hide();
	});
	$('#div_close_img_preparation1').click(function(){
		prepareHide();
	$("#div_img_preparation1").hide();
	});

	$('#img_preparation2').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_preparation2").show();
	});
	$('#div_img_preparation2').click(function(){
		prepareHide();
	$("#div_img_preparation2").hide();
	});
	$('#div_close_img_preparation2').click(function(){
		prepareHide();
	$("#div_img_preparation2").hide();
	});

	$('#img_preparation3').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_preparation3").show();
	});
	$('#div_img_preparation3').click(function(){
		prepareHide();
	$("#div_img_preparation3").hide();
	});
	$('#div_close_img_preparation3').click(function(){
		prepareHide();
	$("#div_img_preparation3").hide();
	});

	$(document).keyup(function(e) {
		if (e.key === "Escape") {
			prepareHide();
			$("#div_img_alive0").hide();
			$("#div_img_alive1").hide();
			$("#div_img_alive2").hide();
			$("#div_img_dead0").hide();
			$("#div_img_dead1").hide();
			$("#div_img_dead2").hide();
			$("#div_img_dead3").hide();
			$("#div_img_dead4").hide();
			$("#div_img_dead5").hide();
			$("#div_img_dead6").hide();
			$("#div_img_dead7").hide();
			$("#div_img_dead8").hide();
			$("#div_img_dead9").hide();
			$("#div_img_dead10").hide();
			$("#div_img_preparation0").hide();
			$("#div_img_preparation1").hide();
			$("#div_img_preparation2").hide();
			$("#div_img_preparation3").hide();
		}
	});

});

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

	$('#img_suspension0').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_suspension0").show();
	});
	$('#div_img_suspension0').click(function(){
		prepareHide();
	$("#div_img_suspension0").hide();
	});
	$('#div_close_img_suspension0').click(function(){
		prepareHide();
	$("#div_img_suspension0").hide();
	});

	$('#img_suspension1').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_suspension1").show();
	});
	$('#div_img_suspension1').click(function(){
		prepareHide();
	$("#div_img_suspension1").hide();
	});
	$('#div_close_img_suspension1').click(function(){
		prepareHide();
	$("#div_img_suspension1").hide();
	});

	$('#img_suspension2').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_suspension2").show();
	});
	$('#div_img_suspension2').click(function(){
		prepareHide();
	$("#div_img_suspension2").hide();
	});
	$('#div_close_img_suspension2').click(function(){
		prepareHide();
	$("#div_img_suspension2").hide();
	});

	$('#img_suspension3').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_suspension3").show();
	});
	$('#div_img_suspension3').click(function(){
		prepareHide();
	$("#div_img_suspension3").hide();
	});
	$('#div_close_img_suspension3').click(function(){
		prepareHide();
	$("#div_img_suspension3").hide();
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

	$(document).keyup(function(e) {
		if (e.key === "Escape") {
			prepareHide();
			$("#div_img_alive0").hide();
			$("#div_img_dead0").hide();
			$("#div_img_dead1").hide();
			$("#div_img_preparation0").hide();
			$("#div_img_preparation1").hide();
			$("#div_img_preparation2").hide();
			$("#div_img_suspension0").hide();
			$("#div_img_suspension1").hide();
			$("#div_img_suspension2").hide();
			$("#div_img_suspension3").hide();
			$("#div_img_final0").hide();
			$("#div_img_final1").hide();
			$("#div_img_final2").hide();
			$("#div_img_final3").hide();
		}
	});

});

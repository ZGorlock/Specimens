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

	$('#img_from_vendor0').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_from_vendor0").show();
	});
	$('#div_img_from_vendor0').click(function(){
		prepareHide();
		$("#div_img_from_vendor0").hide();
	});
	$('#div_close_img_from_vendor0').click(function(){
		prepareHide();
		$("#div_img_from_vendor0").hide();
	});

	$('#img_from_vendor1').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_from_vendor1").show();
	});
	$('#div_img_from_vendor1').click(function(){
		prepareHide();
		$("#div_img_from_vendor1").hide();
	});
	$('#div_close_img_from_vendor1').click(function(){
		prepareHide();
		$("#div_img_from_vendor1").hide();
	});

	$('#img_from_vendor2').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_from_vendor2").show();
	});
	$('#div_img_from_vendor2').click(function(){
		prepareHide();
		$("#div_img_from_vendor2").hide();
	});
	$('#div_close_img_from_vendor2').click(function(){
		prepareHide();
		$("#div_img_from_vendor2").hide();
	});

	$('#img_pre-finalization0').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization0").show();
	});
	$('#div_img_pre-finalization0').click(function(){
		prepareHide();
		$("#div_img_pre-finalization0").hide();
	});
	$('#div_close_img_pre-finalization0').click(function(){
		prepareHide();
		$("#div_img_pre-finalization0").hide();
	});

	$('#img_pre-finalization1').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization1").show();
	});
	$('#div_img_pre-finalization1').click(function(){
		prepareHide();
		$("#div_img_pre-finalization1").hide();
	});
	$('#div_close_img_pre-finalization1').click(function(){
		prepareHide();
		$("#div_img_pre-finalization1").hide();
	});

	$('#img_pre-finalization2').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization2").show();
	});
	$('#div_img_pre-finalization2').click(function(){
		prepareHide();
		$("#div_img_pre-finalization2").hide();
	});
	$('#div_close_img_pre-finalization2').click(function(){
		prepareHide();
		$("#div_img_pre-finalization2").hide();
	});

	$('#img_pre-finalization3').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization3").show();
	});
	$('#div_img_pre-finalization3').click(function(){
		prepareHide();
		$("#div_img_pre-finalization3").hide();
	});
	$('#div_close_img_pre-finalization3').click(function(){
		prepareHide();
		$("#div_img_pre-finalization3").hide();
	});

	$('#img_pre-finalization4').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization4").show();
	});
	$('#div_img_pre-finalization4').click(function(){
		prepareHide();
		$("#div_img_pre-finalization4").hide();
	});
	$('#div_close_img_pre-finalization4').click(function(){
		prepareHide();
		$("#div_img_pre-finalization4").hide();
	});

	$('#img_pre-finalization5').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization5").show();
	});
	$('#div_img_pre-finalization5').click(function(){
		prepareHide();
		$("#div_img_pre-finalization5").hide();
	});
	$('#div_close_img_pre-finalization5').click(function(){
		prepareHide();
		$("#div_img_pre-finalization5").hide();
	});

	$('#img_pre-finalization6').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization6").show();
	});
	$('#div_img_pre-finalization6').click(function(){
		prepareHide();
		$("#div_img_pre-finalization6").hide();
	});
	$('#div_close_img_pre-finalization6').click(function(){
		prepareHide();
		$("#div_img_pre-finalization6").hide();
	});

	$('#img_pre-finalization7').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization7").show();
	});
	$('#div_img_pre-finalization7').click(function(){
		prepareHide();
		$("#div_img_pre-finalization7").hide();
	});
	$('#div_close_img_pre-finalization7').click(function(){
		prepareHide();
		$("#div_img_pre-finalization7").hide();
	});

	$('#img_pre-finalization8').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization8").show();
	});
	$('#div_img_pre-finalization8').click(function(){
		prepareHide();
		$("#div_img_pre-finalization8").hide();
	});
	$('#div_close_img_pre-finalization8').click(function(){
		prepareHide();
		$("#div_img_pre-finalization8").hide();
	});

	$('#img_pre-finalization9').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization9").show();
	});
	$('#div_img_pre-finalization9').click(function(){
		prepareHide();
		$("#div_img_pre-finalization9").hide();
	});
	$('#div_close_img_pre-finalization9').click(function(){
		prepareHide();
		$("#div_img_pre-finalization9").hide();
	});

	$('#img_pre-finalization10').click( function(e) {
		e.preventDefault();
		prepareShow();
		$("#div_img_pre-finalization10").show();
	});
	$('#div_img_pre-finalization10').click(function(){
		prepareHide();
		$("#div_img_pre-finalization10").hide();
	});
	$('#div_close_img_pre-finalization10').click(function(){
		prepareHide();
		$("#div_img_pre-finalization10").hide();
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

	$(document).keyup(function(e) {
		if (e.key === "Escape") {
			prepareHide();
			$("#div_img_from_vendor0").hide();
			$("#div_img_from_vendor1").hide();
			$("#div_img_from_vendor2").hide();
			$("#div_img_pre-finalization0").hide();
			$("#div_img_pre-finalization1").hide();
			$("#div_img_pre-finalization2").hide();
			$("#div_img_pre-finalization3").hide();
			$("#div_img_pre-finalization4").hide();
			$("#div_img_pre-finalization5").hide();
			$("#div_img_pre-finalization6").hide();
			$("#div_img_pre-finalization7").hide();
			$("#div_img_pre-finalization8").hide();
			$("#div_img_pre-finalization9").hide();
			$("#div_img_pre-finalization10").hide();
			$("#div_img_final0").hide();
		}
	});

});

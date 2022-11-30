$(document).ready(function() {
	function getRandomSpecimenUrl() {
		var randomId = Math.floor(Math.random() * 433);
		var randomIdStr = ("0000" + randomId).substr(-4, 4);
		var randomUrl = "specimens/" + randomIdStr + "/content.html";
		return randomUrl;
	}

	var selector = document.getElementsByClassName("randomSpecimen");

	var i;
	for (i = 0; i < selector.length; i++) {

		selector[i].href = getRandomSpecimenUrl();

		selector[i].addEventListener("click", function() {
			this.href = getRandomSpecimenUrl();
		});

	}
});

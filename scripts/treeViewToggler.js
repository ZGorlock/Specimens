$(document).ready(function() {
	var toggler = document.getElementsByClassName("caret");

	var i;
	for (i = 0; i < toggler.length; i++) {

		toggler[i].setAttribute('id', i);
		if (sessionStorage.getItem('treeViewCollapsed' + i) === "true") {
			toggler[i].parentElement.querySelector(".nested").classList.toggle("active");
			toggler[i].classList.toggle("caret-down");
		}

		toggler[i].addEventListener("click", function() {
			this.parentElement.querySelector(".nested").classList.toggle("active");
			this.classList.toggle("caret-down");

			if (sessionStorage.getItem('treeViewCollapsed' + this.getAttribute('id')) == "true") {
				sessionStorage.setItem('treeViewCollapsed' + this.getAttribute('id'), false);
			} else {
				sessionStorage.setItem('treeViewCollapsed' + this.getAttribute('id'), true);
			}
		});

	}
});

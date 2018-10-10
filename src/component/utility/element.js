class ElementUtility {
	isScrolledIntoView(elem, { cssClass }) {
		// var docViewTop = window.document.body.scrollTop;
		// var docViewBottom = docViewTop + window.document.documentElement.offsetHeight;

		// var elemTop = elem.offsetTop;
		// var elemBottom = elemTop + elem.offsetHeight;

		// return elemBottom <= docViewBottom && elemTop >= docViewTop;

		if (!elem) return;

		// when scroll hits the top position of elem border, class will be applied
		let elemCoordinates = elem.getBoundingClientRect().top;

		let windowHeight = document.documentElement.clientHeight;

		if (elemCoordinates < windowHeight) {
			if (!elem.classList.contains(cssClass) && cssClass) {
				elem.classList.add(cssClass);
			}
		}
	}
}

export default new ElementUtility();

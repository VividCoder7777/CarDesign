class ElementUtility {
	isScrolledIntoView(elem) {
		// var docViewTop = window.document.body.scrollTop;
		// var docViewBottom = docViewTop + window.document.documentElement.offsetHeight;

		// var elemTop = elem.offsetTop;
		// var elemBottom = elemTop + elem.offsetHeight;

		// return elemBottom <= docViewBottom && elemTop >= docViewTop;

		let elemCoordinates = elem.getBoundingClientRect().top;

		let windowHeight = document.documentElement.clientHeight;
		console.log(elemCoordinates, ' ', windowHeight, ' is true?', elemCoordinates < windowHeight);
		return elemCoordinates < windowHeight;
	}
}

export default new ElementUtility();

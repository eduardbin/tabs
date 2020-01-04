; (function () {
	"use strict";

	let tabItems = document.querySelectorAll('.tab-item');
	let tabSections = document.querySelectorAll('.test');

	for (let tabSection of tabSections) {
		tabSection.hidden = true;
	}

	for (let tabItem of tabItems) {
		tabItem.addEventListener('click', (event) => {
			event.preventDefault()
		});
		tabItem.addEventListener('focus', showSection);
		tabItem.addEventListener('blur', hideSection);
	};

	function showSection() {
		let itemId = this.hash;
		let section = document.querySelector(`${itemId}`);
		section.hidden = false;
	};

	function hideSection() {
		let itemId = this.hash;
		let section = document.querySelector(`${itemId}`);
		section.hidden = true;
	};

	window.addEventListener('load', () => {
		tabItems[0].focus();
	});
})();


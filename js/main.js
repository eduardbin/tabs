; (function () {
	"use strict";
	//tab secrions
	let tabItems = document.querySelectorAll('.tab-item');
	let tabSections = document.querySelectorAll('.ba-section');

	for (let tabItem of tabItems) {
		tabItem.addEventListener('click', (event) => event.preventDefault());
		tabItem.addEventListener('click', getSelectedSection);
	};

	function getSelectedSection() {
		let itemId = this.hash;
		let section = document.querySelector(`${itemId}`);

		hideSections();
		showSelectedSection(section);
	};

	function hideSections() {
		for (let tabSection of tabSections) {
			tabSection.hidden = true;
		};
	};

	function showSelectedSection(section) {
		section.hidden = false;
	};

	//tab styles
	let navItems = document.querySelectorAll('.ba-nav__item');

	for (let navItem of navItems) {
		navItem.addEventListener('click', addActiveClass);
	};

	function addActiveClass() {
		removeAllActiveClasses();

		this.classList.add('active');
	};

	function removeAllActiveClasses() {
		for (let navItem of navItems) {
			navItem.classList.remove('active');
		};
	};

	//set first section active
	window.addEventListener('load', () => {
		tabItems[0].click();
	});
})();


; (function () {
	"use strict";
	//tab sections
	let tabItems = document.querySelectorAll('.tab-item');
	let tabSections = document.querySelectorAll('.ba-section');

	for (let tabItem of tabItems) {
		tabItem.addEventListener('click', (event) => event.preventDefault());
		tabItem.addEventListener('click', tabSection);
	};

	function tabSection() {
		let clickedItem = this;

		let section = getSelectedSection(clickedItem);
		hideAllSections();
		showSelectedSection(section);
	};

	function getSelectedSection(clickedItem) {
		let itemId = clickedItem.hash;
		return document.querySelector(`${itemId}`);
	};

	function hideAllSections() {
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
		navItem.addEventListener('click', activeItem);
	};

	function activeItem() {
		let clickedItem = this;

		removeAllActiveClasses();
		addActiveClass(clickedItem);
	};

	function removeAllActiveClasses() {
		for (let navItem of navItems) {
			navItem.classList.remove('active');
		};
	};

	function addActiveClass(clickedItem) {
		clickedItem.classList.add('active');
	};
})();

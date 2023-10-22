const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".primary-navigation-list");
const noScroll = document.querySelector("body");
const mobileLinks = document.querySelectorAll(".nav__link");

mobileLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuToggle.setAttribute("aria-expanded", "false");
		siteNavigation.setAttribute("data-state", "closed");
		noScroll.classList.remove("no-scroll");
	});
});

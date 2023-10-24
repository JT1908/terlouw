const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".primary-navigation-list");
const noScroll = document.querySelector("body");
const mobileLinks = document.querySelectorAll(".nav__link");

console.log(mobileLinks);

mobileLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuToggle.setAttribute("aria-expanded", "false");
		siteNavigation.setAttribute("data-state", "closing");
		noScroll.classList.remove("no-scroll");
	});
});

menuToggle.addEventListener("click", () => {
	const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
	if (isOpened ? closeMenu() : openMenu());
});

function openMenu() {
	menuToggle.setAttribute("aria-expanded", "true");
	siteNavigation.setAttribute("data-state", "opened");
	noScroll.classList.add("no-scroll");
}

function closeMenu() {
	menuToggle.setAttribute("aria-expanded", "false");
	siteNavigation.setAttribute("data-state", "closing");
	noScroll.classList.remove("no-scroll");

	siteNavigation.addEventListener(
		"animationend",
		() => {
			siteNavigation.setAttribute("data-state", "closed");
		},
		{ once: true }
	);
}

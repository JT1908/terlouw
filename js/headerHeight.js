const headerHeight = document.querySelector(".primary-header").offsetHeight;

document.documentElement.style.setProperty(
	"--header-height",
	headerHeight + 1 + "px"
);

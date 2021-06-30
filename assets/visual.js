// Ganti Style Sticky Navbar
window.addEventListener("scroll", () => {
	var navbar = document.querySelector(".navbar");
	navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Highlight Nav Items pada Section tertentu
const sections = document.querySelectorAll("[id^='nav-']");
window.addEventListener("scroll", () => {
	let currPos = window.pageYOffset;
	sections.forEach((section) => {
		let sectionTop = section.offsetTop - 130;
		let sectionBottom = section.offsetHeight + sectionTop;
		let sectionNav = document.querySelector(`a[href*=${section.id}]`);
		if (currPos >= sectionTop && currPos < sectionBottom) {
			sectionNav.classList.add("current-page");
		} else {
			sectionNav.classList.remove("current-page");
		}
	});
});

// Slider Video

function showVid(x) {
	const vids = document.getElementsByClassName("vid");
	const btns = document.getElementsByClassName("custom-radio");
	vids[x].style.display = "block";
	btns[x].setAttribute("class", "custom-radio checked");
	for (let i = 0; i < vids.length; i++) {
		let srcTmp = vids[i].src;
		if (i != x) {
			vids[i].src = srcTmp;
			vids[i].style.display = "none";
			btns[i].setAttribute("class", "custom-radio");
		}
	}
}
showVid(0);

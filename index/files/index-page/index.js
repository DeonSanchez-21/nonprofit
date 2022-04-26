const body = document.querySelector('body');
const social = document.getElementById('bottom-social');
const check = document.getElementById("check");
const navBar = document.querySelector('.nav-bar');


let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
	if (lastScrollY < window.scrollY) {
		console.log('down');
		social.classList.add("hidden");
	} else {
		social.classList.remove("hidden");
		console.log('up');
	};

	lastScrollY = window.scrollY;
});





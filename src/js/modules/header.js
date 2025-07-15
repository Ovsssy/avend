function openMobileMenu() {
	let menuBurger = document.querySelector('.header_burger');
	const mobileMenu = document.querySelector('.header_mobile-menu');
	const menuLinks = document.querySelectorAll('.header_mobile-menu-list a');

	function updateStatus() {
		menuBurger?.classList.toggle('header_burger__active')
		mobileMenu?.classList.toggle('header_mobile-menu__open')
	}

	menuBurger?.addEventListener('click', () => {
		updateStatus()
	})

	menuLinks.forEach(link => {
		link.addEventListener('click', () => {
				menuBurger?.classList.remove('header_burger__active');
				mobileMenu?.classList.remove('header_mobile-menu__open');
		});
});
}

document.addEventListener("DOMContentLoaded", function () {
	openMobileMenu();
});
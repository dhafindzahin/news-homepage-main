const mobileMenu = document.getElementById('mobile-menu')
const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')

openMenu.addEventListener('click', () => {
	mobileMenu.style.display = "flex"
})

closeMenu.addEventListener('click', () => {
	mobileMenu.style.display = "none"
})

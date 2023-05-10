const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementById('navbar-links')


toggleButton.addEventListener('click', () => {
    console.log(navbarLinks)
    navbarLinks.classList.toggle('active')
})
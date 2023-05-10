const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementById('navbar-links')


toggleButton.addEventListener('click', () => {
    console.log(navbarLinks)
    navbarLinks.classList.toggle('active')
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay:true,
	responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


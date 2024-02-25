const header = document.querySelector('header')
const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navlist')

// Function to toggle sticky class on header based on scroll position
const toggleStickyHeader = () => {
  header.classList.toggle('sticky', window.scrollY > 0)
}

// Function to toggle menu icon and navlist
const toggleMenu = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('active')
}

// Event listener for scrolling
window.addEventListener('scroll', () => {
  toggleStickyHeader()
  // Close menu on scroll
  toggleMenu(false)
})

// Event listener for menu icon click
menu.addEventListener('click', () => {
  toggleMenu()
})

// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '45px',
  duration: 2700,
  reset: true
})

// Reveal animations
const revealElements = [
  '.home-text',
  '.home-img',
  '.sub-service',
  '.about',
  '.portfolio',
  '.service',
  '.cta',
  '.contact'
]
revealElements.forEach((element, index) => {
  sr.reveal(element, {
    delay: 200 + index * 150,
    origin: index < 2 ? 'left' : 'bottom'
  })
})

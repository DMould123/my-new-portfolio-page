const header = document.querySelector('header')
const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navlist')

// Function to toggle sticky class on header based on scroll position
const toggleStickyHeader = () => {
  header.classList.toggle('sticky', window.scrollY > 0)
}

// Function to close menu
const closeMenu = () => {
  menu.classList.remove('bx-x')
  navlist.classList.remove('active')
}

// Event listener for scrolling
window.addEventListener('scroll', () => {
  toggleStickyHeader()
  // Close menu on scroll
  closeMenu()
})

// Event listener for menu icon click
menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x') // Toggle menu icon
  navlist.classList.toggle('active') // Toggle navlist
})

// Event listener for clicking outside the menu to close it
document.addEventListener('click', (event) => {
  const isClickInsideMenu = menu.contains(event.target)
  const isClickInsideNavlist = navlist.contains(event.target)
  if (!isClickInsideMenu && !isClickInsideNavlist) {
    closeMenu()
  }
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

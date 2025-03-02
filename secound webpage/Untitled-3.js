
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('navbar-black');
  } else {
    navbar.classList.remove('navbar-black');
    navbar.classList.add('navbar-transparent');
  }
});

// Dropdown Menu Toggle
const exploreButton = document.getElementById('explore-button');
const dropdownMenu = document.getElementById('dropdown-menu');

exploreButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default action
  dropdownMenu.classList.toggle('active'); // Toggle the active class
});

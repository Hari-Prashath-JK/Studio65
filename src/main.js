
const menubutton = document.getElementById('menu');
const navBar = document.querySelector('[role=NavBar]')


menubutton.addEventListener('click', () => {
    const isExpanded = JSON.parse(navBar.getAttribute('aria-expanded'));
    menubutton.setAttribute('aria-expanded', !isExpanded);
    navBar.classList.toggle('hidden');
    navBar.classList.toggle('flex'); 
})



const navbar = document.getElementById('navBar');
let prevScrollPos = window.pageYOffset;


window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  
  if (currentScrollPos < 400) {
    navbar.style.transform = 'translateY(0)';
    navbar.style.backgroundColor = 'rgb(39 39 42 / var(--tw-bg-opacity))'
  } else if (currentScrollPos > prevScrollPos) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
    navbar.style.backgroundColor = 'black'
  }
  
  prevScrollPos = currentScrollPos;
});



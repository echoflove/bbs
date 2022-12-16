var navbar = document.querySelector('.App-header')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 100) {
    navbar.classList.add('nav-scrolled')
  } else {
    navbar.classList.remove('nav-scrolled')
  }
}

var myNav = document.getElementById('header');
window.onscroll = function () { 
    if (document.body.scrollTop >= 100 ) {
        myNav.classList.add("nav-scrolled");
    } 
    else {
        myNav.classList.remove("nav-scrolled");
    }
};

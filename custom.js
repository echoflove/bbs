var myNav = document.getElementById('header');
window.onscroll = function () { 
    if (document.body.scrollTop >= 100 ) {
         $(".App-header").css('background-color', '#ffffff');
         $(".FormControl").css('background-color', '#ffffff');
    } 
    else {
        myNav.classList.remove("nav-scrolled");
    }
};

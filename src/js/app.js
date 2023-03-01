(function() {
    window.onscroll = function () {
        const scroll = window.scrollY;
        const header = document.querySelector('.header');
        const headerDark = document.querySelector('.header--dark');
    
        if(header) {
            scroll > 500 ? header.classList.add('header--moved') : header.classList.remove('header--moved');
        }
        
        if(headerDark) {
            scroll > 10 ? headerDark.classList.add('header--moved') : headerDark.classList.remove('header--moved');
        }
    }
}());
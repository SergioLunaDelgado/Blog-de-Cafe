(function () {
    window.onscroll = function () {
        const scroll = window.scrollY;
        const header = document.querySelector('.header');
        const headerDark = document.querySelector('.header--dark');

        if (header) {
            scroll > 500 ? header.classList.add('header--moved') : header.classList.remove('header--moved');
        }

        if (headerDark) {
            scroll > 10 ? headerDark.classList.add('header--moved') : headerDark.classList.remove('header--moved');
        }
    }

    const enlaces = document.querySelectorAll(".dropdown--blog .dropdown__contenido a");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const etiqueta = seccionScroll.split('.html');
            // console.log(etiqueta[1]);
            const seccion = document.querySelector(etiqueta[1]);
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });
}());
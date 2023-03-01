(function () {
    const btnMenu = document.querySelector('#btnMenu');
    const btnCerrar = document.querySelector('#btnCerrar');
    const offcanva = document.querySelector('.offcanva');

    if (btnMenu) {
        btnMenu.addEventListener('click', function () {
            offcanva.classList.toggle('offcanva__mostrar');
        });

        btnCerrar.addEventListener('click', function () {
            offcanva.classList.add('offcanva__ocultar');
            /* elimino las clases para tener acceso para volver abrir el menu */
            setTimeout(() => {
                offcanva.classList.remove('offcanva__mostrar');
                offcanva.classList.remove('offcanva__ocultar');
            }, 100);
        });

        /* Elimina la clase de mostrar en un tamaño mayor a 768px */
        window.addEventListener('resize', function() {
            const anchoPantalla = this.document.body.clientWidth;
            if(anchoPantalla >= 768) {
                offcanva.classList.remove('offcanva__mostrar');
            }
        })
    }
}());
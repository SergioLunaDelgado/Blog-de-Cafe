function mostrarFormulario(titulo = '¡Gracias por unirte a nuestra comunidad de amantes del café!', mensaje = 'Tu suscripción ha sido confirmada con éxito y pronto comenzarás a recibir nuestras últimas novedades, promociones y contenido exclusivo.', img = 'exito.gif') {
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal__form">
        <div class="modal__body">
            <img src="/build/img/${img}" alt="Gif de exito" class="modal__gif">
            <h1 class="modal__heading">${titulo}</h1>
            <p class="modal__mensaje">${mensaje}</p>
            <button type="submit" id="btnAceptar" class="modal__boton">Aceptar</button>
        </div>
    </div>`;
    setTimeout(() => {
        const modalForm = document.querySelector('.modal__form');
        modalForm.classList.add('modal__animar');
    }, 0);
    document.querySelector('.suscribete').appendChild(modal);
    
    const btnAceptar = document.querySelector('#btnAceptar');
    btnAceptar.addEventListener('click', function () {
        window.location = '/';
    });
}
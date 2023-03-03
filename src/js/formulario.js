(function () {
    const formulario = document.querySelector("form");
    if (formulario) {
        const handleSubmit = (event) => {
            event.preventDefault();

            const myForm = event.target;
            const formData = new FormData(myForm);

            // let host = 'http://127.0.0.1:5500/suscribete.html';
            let host = 'https://effulgent-starburst-78c43e.netlify.app/suscribete.html';

            fetch(host, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    mostrarFormulario();
                })
                .catch((error) => {
                    mostrarFormulario('Algo salio mal, por favor intentalo más tarde', error, 'error.png');
                })
        };

        document
            .querySelector("form")
            .addEventListener("submit", handleSubmit);
    }
}());
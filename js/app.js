document.addEventListener('DOMContentLoaded', function () {

    const email = document.querySelector('#email');
    const whats = document.querySelector('#whatsapp');
    const quiosco = document.querySelector('#quiosco');
    const menu = document.querySelector('#menu');
    const pern = document.querySelector('#pern');

    email.addEventListener('click', enviarEmail);
    whats.addEventListener('click', enviarWhats);
    quiosco.addEventListener('click', linkQuiosco);
    menu.addEventListener('click', linkMenu);
    pern.addEventListener('click', linkPern);


    function enviarEmail() {
        window.location.href = 'mailto:jhairdev05@gmail.com';
    }

    function enviarWhats() {
        const telefono = '522294913849'; // Número de teléfono con el código de país
        const mensaje = 'Hola';
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank'); // Abre en una nueva pestaña
    }

    function linkQuiosco() {
        const url = 'https://quiosco-postreria.vercel.app/order/helados';
        window.open(url, '_blank');
    }

    function linkMenu() {
        const url = 'https://menu-la-heladera.netlify.app/';
        window.open(url, '_blank');
    }

    function linkPern() {
        const url = 'https://rest-apis-typescript-frontend-ten-rho.vercel.app/';
        window.open(url, '_blank');
    }

});
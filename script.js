const btn = document.querySelector('#play-button');

btn.addEventListener('click', () => {
    gtag('event', 'order_button_clicked');
    console.log('Дані відправлено!');
});

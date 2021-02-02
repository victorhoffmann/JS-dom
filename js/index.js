let header = document.querySelector('header');
header.style.backgroundColor = '#6d267566';

let linkHome = document.querySelectorAll('a');
console.log(linkHome[1].getAttribute('href'));

linkHome[1].setAttribute('href','https://www.google.com.br')



// let title = document.querySelector('h1');

// title.onclick = function () {
//     console.log('chegou')
//     title.style.fontSize = '10px';
// }

// title.onmouseover = function () {
//     title.style.fontSize = '90px';
// }

// let input = document.querySelectorAll('input');
// input[0].onfocus = () => input[0].style.backgroundColor = '#00f';

// input[0].onfocus = function () {
//     input[0].style.backgroundColor = '#00f';
// } 


document.querySelector('form').onsubmit = function () {
    let erros = [];

    let nome = document.querySelector('#nome');
    let email = document.querySelector('#email');
    let message = document.querySelector('#descricao');

    if (nome.value === ''){
        erros.push({'nome': 'Campo nome precisa ser preenchido!'})
    } 
    if (email.value === '') {
        erros.push({'email': 'Campo email precisa ser preenchido!'})
    } 
    if (message.value === '') {
        erros.push({'message': 'Campo message precisa ser preenchido!'})
    }
    console.log(erros)
}   
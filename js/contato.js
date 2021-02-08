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


document.querySelector('form').onsubmit = function (e) {
    let erros = [];

    let nome = document.querySelector('#nome');
    let email = document.querySelector('#email');
    let message = document.querySelector('#descricao');

    if (nome.value === ''){
        erros.push({'elemento' : 'nome', 'mensagem' : 'Campo nome precisa ser preenchido!'})
    } 
    if (email.value === '') {
        erros.push({'elemento' : 'email', 'mensagem' : 'Campo email precisa ser preenchido!'})
    } 
    if (message.value === '') {
        erros.push({'elemento' : 'descricao', 'mensagem' : 'Campo message precisa ser preenchido!'})
    }
    if (erros.length > 0){
        e.preventDefault()
        erros.forEach( (erro) => {
            let elemento = document.getElementById(erro.elemento)
            elemento.style.borderColor = 'red';
            let p = document.createElement('p');
            p.innerHTML = erro.mensagem
            document.getElementById('erros').appendChild(p)
        })
    }
}
// 1. Mudar o texto do título
const titulo = document.getElementById('titulo');
titulo.textContent = 'Novo Título';

// 2. Alterar o estilo dos itens da lista
const itens = document.querySelectorAll('#lista li');
itens.forEach(item => {
    item.style.color = 'blue';
    item.style.fontWeight = 'bold';
});

// 3. Adicionar uma classe a todos os parágrafos
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(p => {
    p.classList.add('paragrafo-estilizado');
});

// 4. Alterar o texto do botão
const botao = document.getElementById('botao');
botao.textContent = 'Texto Alterado';

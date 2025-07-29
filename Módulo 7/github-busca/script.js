const input = document.getElementById('busca');
const botao = document.getElementById('btnBuscar');
const lista = document.getElementById('listaUsuarios');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
  const termo = input.value.trim();

  lista.innerHTML = '';
  mensagem.textContent = '';

  if (termo === '') {
    mensagem.textContent = 'Digite algo para buscar.';
    return;
  }

  fetch(`https://api.github.com/search/users?q=${termo}`)
    .then(res => res.json())
    .then(dados => {
      if (dados.items && dados.items.length > 0) {
        dados.items.forEach(usuario => {
          const li = document.createElement('li');
          li.classList.add('usuario');

          li.innerHTML = `
            <img src="${usuario.avatar_url}" alt="Avatar de ${usuario.login}" />
            <a href="${usuario.html_url}" target="_blank">${usuario.login}</a>
          `;

          lista.appendChild(li);
        });
      } else {
        mensagem.textContent = 'Não foram encontrados usuários para esta pesquisa.';
      }
    })
    .catch(erro => {
      console.error('Erro:', erro);
      mensagem.textContent = 'Erro ao buscar usuários.';
    });
});

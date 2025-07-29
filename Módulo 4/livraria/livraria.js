const estoque = [];
function adicionarLivro(titulo, autor, quantidade) {
    const livroExistente = estoque.find(livro => livro.titulo === titulo);

    if (livroExistente) {
        console.log(`O livro "${titulo}" já está no estoque.`);
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log(`Livro "${titulo}" adicionado com sucesso!`);
    }
}
function removerLivro(titulo) {
    const index = estoque.findIndex(livro => livro.titulo === titulo);

    if (index !== -1) {
        estoque.splice(index, 1);
        console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}
function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoque.find(livro => livro.titulo === titulo);

    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}
function listarLivros() {
    if (estoque.length === 0) {
        console.log("Estoque vazio.");
    } else {
        console.log("📖 Livros em estoque:");
        estoque.forEach(livro => {
            console.log(`Título: ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
        });
    }
}
adicionarLivro("Dom Casmurro", "Machado de Assis", 5);
adicionarLivro("1984", "George Orwell", 8);
listarLivros();

atualizarQuantidade("1984", 10);
removerLivro("Dom Casmurro");
listarLivros();

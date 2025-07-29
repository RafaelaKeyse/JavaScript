let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" ${tarefa.status ? "checked" : ""}>
      <span class="${tarefa.status ? 'concluida' : ''}">${tarefa.descricao}</span>
    `;

    const excluirBtn = document.createElement("button");
    excluirBtn.innerText = "Excluir";
    excluirBtn.className = "excluir";
    excluirBtn.onclick = () => {
      tarefas.splice(index, 1);
      salvarTarefas();
      renderizarTarefas();
    };

    // Atualiza status ao clicar no checkbox
    label.querySelector("input").addEventListener("change", (e) => {
      tarefas[index].status = e.target.checked;
      salvarTarefas();
      renderizarTarefas();
    });

    li.appendChild(label);
    li.appendChild(excluirBtn);
    lista.appendChild(li);
  });
}

document.getElementById("adicionarBtn").addEventListener("click", () => {
  const input = document.getElementById("tarefaInput");
  const descricao = input.value.trim();
  if (!descricao) return;

  tarefas.push({ descricao, status: false });
  salvarTarefas();
  input.value = "";
  renderizarTarefas();
});

renderizarTarefas();

const allTasks = document.querySelector(".all");

// Função para que checa se tarefa está feita ou não e estiliza de acordo
function check() {
  const checkBox = document.querySelectorAll(".checkBox");
  checkBox.forEach(checkBox => {
    if (checkBox.checked) {
      checkBox.parentElement.style.textDecoration = "line-through";
      checkBox.parentElement.style.textDecorationColor = "red";
    } else if (!checkBox.checked) {
      checkBox.parentElement.style.textDecoration = "none";
      checkBox.parentElement.style.textDecorationColor = "";
    }
  });
}
// <label class="conteudo" for="conteudo" class="digitado">${tarefa}</label>
// Função para criar lista de tarefas
function makeList(tarefa, length, check) {
  document.querySelector(".tasks").innerHTML += `
      <ul class="newTask taksStyle  "data-index="${length}">
      <li class="tarefa">
        <input type="checkbox" class="checkBox" name="${length}" 
        data-id="${length}" ${check}/>
        ${tarefa}
        </li>
        <i class="fas fa-trash delete-btn"></i>  
      <ul>
  `;
  {
  }
  setLocalStorage();
}

// Função para limpar tarefas do localStorage
function resetaIndex() {
  myLeads.forEach((lead, index) => {
    console.log(index);
    lead.index = index;
  });
}

// Função para verificar quantos itens faltam
function itensLeft() {
  const checkBox = document.querySelectorAll(".checkBox");
  count = 0;
  checkBox.forEach(checkBox => {
    if (checkBox.checked == false) {
      count++;
    }
  });
  unfinishedTasks.textContent = `${count}`;
}

// Função para pegar tarefas do localStorage
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("myLeads"));
}

// Função para salvar tarefas no localStorage
function setLocalStorage() {
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
}

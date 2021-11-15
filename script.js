const addNewToDo = document.querySelector(".addNewToDo");
const newToDo = document.querySelector("#todo");
const tasks = document.querySelectorAll(".tasks");
const unfinishedTasks = document.querySelector(".unfinishedTasks");
const clearAll = document.querySelector(".clear");

let count = 0;
let myLeads = [];

// Adiciona nova tarefa
addNewToDo.addEventListener("click", () => {
  if (newToDo.value == "") {
    alert("Digite alguma tarefa ");
  } else {
    var newObject = new Object();
    let tarefaDigitada = newToDo.value;
    newObject.tarefa = tarefaDigitada;
    newObject.check = false;
    newObject.index = 0;
    myLeads.push(newObject);
    makeList(tarefaDigitada, newObject.index, "");
    newToDo.value = "";
    count++;
    unfinishedTasks.textContent = `${count}`;
  }
});

// Deleta tarefa
tasks.forEach(task => {
  task.addEventListener("click", e => {
    if (e.target.classList.contains("delete-btn")) {
      if (myLeads.length > 1) {
        let index = e.target.parentElement.dataset.index;
        index = parseInt(index);
        myLeads.splice(index, 1);
        resetaIndex();
        e.target.parentElement.remove();
        itensLeft();
        newObject.index--;
        setLocalStorage();
        newObject.index = myLeads.length;
      } else if (myLeads.length == 1) {
        myLeads = [];
        e.target.parentElement.remove();
        itensLeft();
        setLocalStorage();
      }
    }
  });
});

//Função para marcar tarefa como feita
tasks.forEach(tasks => {
  tasks.addEventListener("click", e => {
    if (e.target.classList.contains("checkBox")) {
      if (e.target.checked) {
        myLeads[e.target.dataset.id].check = true;
        check();
        setLocalStorage();
      } else if (!e.target.checked) {
        myLeads[e.target.dataset.id].check = false;
        check();
        setLocalStorage();
      }
      itensLeft();
    }
  });
});

// Função para excluir todos as tarefas
clearAll.addEventListener("click", () => {
  const ul = document.querySelectorAll("ul");
  myLeads = [];
  setLocalStorage();
  ul.forEach(task => {
    task.remove();
  });
  itensLeft();
});

// Função para carregar tarefas do localStorage
window.onload = function onload() {
  myLeads = getLocalStorage() ? getLocalStorage() : [];
  getLocalStorage();
  myLeads.forEach((lead, index) => {
    if (lead.check == true) {
      makeList(lead.tarefa, index, "checked");
      check();
      itensLeft();
      setLocalStorage();
    } else if (lead.check == false) {
      makeList(lead.tarefa, index, "");
      check();
      itensLeft();
      setLocalStorage();
    }
  });
};

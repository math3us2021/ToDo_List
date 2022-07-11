import React, { useState } from "react";
import List from "./components/List";
import Input from "./components/Input";
import Button from "./components/Button";


function Todo() {
  const [tasks, setTask] = useState("");   /// muda o estado da variavel tasks para setTask

  function handleChangeInput(event) {  // evento que ocorre quando o usuario digita algo no input
    const inputTask = event.target.value;

    setTask(inputTask); /// atualizando o estado
  }
  const [itemList, setItemList] = useState([]); /// Array para salvar as tarefas


  function handleAddItemToList(event) { 
    event.preventDefault(); // preventDefault:  não dar reload na pagina

    if (!tasks) {
      return;
    }

    setItemList([...itemList , {   //// ... carregando td q possui no array
      name: tasks,
      date: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        
      }),
      // checked: false,
     
    }]); // adicionando o item na lista
    

    setTask(""); // limpando o input
  }

  function handleDeleteItem(index) {  
    const newItemList = [...itemList];
    newItemList.splice(0, 1); /// splice é uma função para manipular arrays
    setItemList(newItemList);
  }


  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <Button type="submit">Adicionar</Button>
        <Button onClick={handleDeleteItem} type="submit">Delete</Button>

      </form>

      <List itemList={itemList} />
      <Input placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={tasks}></Input>


    </div>



  );
}






export default Todo;

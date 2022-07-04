import React, { useState } from "react";
import List from './components/List';
import Input from "./components/Input";
import Button from "./components/Button";

function Todo() {
  const [tasks, setTask] = useState("");

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask); /// atualizando o estado
  }
  const [itemList, setItemList] = useState([]); /// Array para salvar as tarefas



  function handleAddItemToList(event) {
    event.preventDefault();

    if (!tasks) {
      return;
    }

    setItemList([...itemList, tasks]); // adicionando o item na lista

    setTask(""); // limpando o input
  }


  function handleDeleteItem(index) {
    const newItemList = [...itemList];
    newItemList.splice(index, 1);
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

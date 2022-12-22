
import { useState } from "react"
import Modal from "../components/Modal"
import TodoListTab from "./Todos"
import initialTodoLists from "../pages/todosInitialState"
import Header from "../components/Navbar"

const Container= () => {
  const [todoLists, setTodoLists] = useState(initialTodoLists )
  const [isOpen, setIsOpen] = useState(false)
  const [currentTodoListIndex, setCurrentTodoListIndex] = useState(0)
  const [selectedTab, setSelectedTab] = useState(0)

  const handleAddTodoList = (name) => {
    const newId = todoLists[todoLists.length - 1].id + 1

    setTodoLists([
        ...todoLists,
        {
          name,
          todos: [],
          id: newId,
        },
      ])
  }

  const handleRemoveTodoList = (id) => {
    setTodoLists(todoLists.filter((todoList) => todoList.id !== id),
    )
      
    //todoList.id === currentTodoListIndex ? setCurrentTodoListIndex(null) : null;
  };

  console.log(`selected tab ${selectedTab}`)

  return (
    <>
    
      <Header
        todoLists={todoLists}
        handleAddTodoList={handleAddTodoList}
        handleRemoveTodoList={handleRemoveTodoList}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setCurrentTodoListIndex={setCurrentTodoListIndex}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <TodoListTab todoLists={todoLists} currentTodoListIndex={currentTodoListIndex} />

      {isOpen && <Modal setIsOpen={setIsOpen} onSubmit={handleAddTodoList} />}
    </>
  )
}

export default Container

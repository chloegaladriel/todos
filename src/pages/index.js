import { useState } from "react"
import Modal from "../components/Modal"
import Navbar from "../components/Navbar"
import TodoListTab from "../components/TodoListTab"
import todoLists from "./todosInitialState"

const App = () => {
  const [state, setState] = useState(todoLists)
  const [isOpen, setIsOpen] = useState(false)
  const [currentTodoListIndex, setCurrentTodoListIndex] = useState(0)
  const [isActive, setIsActive] = useState(0)

  const handleAddTodoList = (name) => {
    const getLastId = () => {
      todoLists[todoLists.length - 1].id
    }
    setState({
      ...state,
      todoLists: [
        ...todoLists,
        {
          name,
          todos: {},
          id: getLastId() + 1,
        },
      ],
    })
  }

  const handleRemoveTodoList = (id) =>
    setState({
      ...state,
      todoLists: todoLists.filter((todoList) => todoList.id !== id),
    })

  return (
    <>
      <Navbar
        state={state}
        handleAddTodoList={handleAddTodoList}
        handleRemoveTodoList={handleRemoveTodoList}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setCurrentTodoListIndex={setCurrentTodoListIndex}
        setIsActive={setIsActive}
        isActive={isActive}
      />

      <TodoListTab state={state} currentTodoListIndex={currentTodoListIndex} />

      {isOpen && <Modal setIsOpen={setIsOpen} onSubmit={handleAddTodoList} />}
    </>
  )
}

export default App

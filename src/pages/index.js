import { useState } from "react"
import Modal from "../components/Modal"
import Navbar from "../components/Navbar"
import TodoListTab from "../components/TodoListTab"
import todosInitialState from "./todosInitialState"

const App = () => {
  const [state, setState] = useState(todosInitialState)
  const [isOpen, setIsOpen] = useState(false)
  const [currentTodoListIndex, setCurrentTodoListIndex] = useState(0)

  const handleAddTodoList = (name) => {
    const getLastId = () => {
      return state.todoLists[state.todoLists.length - 1].id
    }
    setState({
      ...state,
      todoLists: [
        ...state.todoLists,
        {
          name,
          todos: {},
          id: getLastId() + 1,
        },
      ],
    })
  }

  return (
    <>
      <Navbar
        state={state}
        handleAddTodoList={handleAddTodoList}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setCurrentTodoListIndex={setCurrentTodoListIndex}
      />

      <TodoListTab state={state} currentTodoListIndex={currentTodoListIndex} />

      {isOpen && <Modal setIsOpen={setIsOpen} onSubmit={handleAddTodoList} />}
    </>
  )
}

export default App

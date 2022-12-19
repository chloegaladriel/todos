import { useState } from "react"
import Navbar from "../components/Navbar"
import TodoListTab from "../components/TodoListTab"
import todosInitialState from "./todosInitialState"

const App = () => {
  const [state, setState] = useState(todosInitialState)

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
      <Navbar state={state} handleAddTodoList={handleAddTodoList} />

      <TodoListTab />
    </>
  )
}

export default App

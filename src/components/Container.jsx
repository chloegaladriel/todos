import { useCallback, useState } from "react"
import initialTodoLists from "../pages/todosInitialState"
import AddTodoListModal from "./AddTodoListModal"
import AddTodoModal from "./AddTodoModal"
import Navbar from "./Navbar"
import TodoList from "./TodoList"

const Container = () => {
  const [todoLists, setTodoLists] = useState(initialTodoLists)
  const [addTodoListModalOpen, setAddTodoListModalOpen] = useState(false)
  const [addTodoModalOpen, setAddTodoModalOpen] = useState(false)
  const [currentTodoListIndex, setCurrentTodoListIndex] = useState(0)
  const [selectedTab, setSelectedTab] = useState(0)

  const handleAddTodoList = useCallback(
    (name) => {
      const newId = todoLists[todoLists.length - 1].id + 1

      setTodoLists([
        ...todoLists,
        {
          name,
          todos: [],
          id: newId,
        },
      ])
    },
    [todoLists]
  )

  const handleRemoveTodoList = useCallback(
    (id) => {
      setTodoLists([...todoLists].filter((todoList) => todoList.id !== id))
    },
    [todoLists]
  )

  const handleAddTodo = useCallback(
    (todoListId, description) => {
      const todoList = todoLists.find((todo) => todo.id === todoListId)

      if (todoList) {
        const newTodo = {
          id: todoList.todos.length,
          description: description,
          done: false,
        }
        todoList.todos.push(newTodo)
      }
    },
    [todoLists]
  )

  const completedTodo = useCallback(
    (id) => {
      setTodoLists(
        [...todoLists].map((todoList) => {
          if (todoList.id === id) {
            todoList.done = !todoList.done
          }

          return todoList
        })
      )
    },
    [todoLists]
  )

  return (
    <>
      <Navbar
        todoLists={todoLists}
        handleAddTodoList={handleAddTodoList}
        handleRemoveTodoList={handleRemoveTodoList}
        setAddTodoListModalOpen={setAddTodoListModalOpen}
        addTodoListModalOpen={addTodoListModalOpen}
        addTodoModalOpen={addTodoModalOpen}
        setAddTodoModalOpen={setAddTodoModalOpen}
        setCurrentTodoListIndex={setCurrentTodoListIndex}
        currentTodoListIndex={currentTodoListIndex}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        completedTodo={completedTodo}
      />

      <TodoList
        todoLists={todoLists}
        currentTodoListIndex={currentTodoListIndex}
        handleRemoveTodoList={handleRemoveTodoList}
        selectedTab={selectedTab}
      />
      <div>
        {addTodoListModalOpen && (
          <AddTodoListModal
            setAddTodoListModalOpen={setAddTodoListModalOpen}
            onSubmit={handleAddTodoList}
          />
        )}
      </div>

      <div>
        {addTodoModalOpen && (
          <AddTodoModal
            setAddTodoModalOpen={setAddTodoModalOpen}
            onSubmit={handleAddTodo}
          />
        )}
      </div>
    </>
  )
}

export default Container

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
          id: newId,
          name,
          todos: [],
        },
      ])
    },
    [todoLists]
  )

  const handleRemoveTodoList = (todoListIndex) => {
    setTodoLists(todoLists.filter((todoList) => todoList.id !== todoListIndex))
  }

  const handleAddTodo = (description) => {
    const todoList = todoLists.find(
      (todoList) => todoList.id === currentTodoListIndex
    )
    const todoNewId = todoList.todos[todoList.todos.length - 1].id + 1

    const otherToDoLists = todoLists.filter(
      (todoList) => todoList.id !== currentTodoListIndex
    )
    setTodoLists([
      ...otherToDoLists,
      {
        ...todoList,
        todos: [
          ...todoList.todos,
          {
            id: todoNewId,
            description,
            done: false,
          },
        ],
      },
    ])
  }

  const handleRemoveTodo = (id) => {
    const todoList = todoLists.find(
      (todoList) => todoList.id === currentTodoListIndex
    )
    const otherToDoLists = todoLists.filter(
      (todoList) => todoList.id !== currentTodoListIndex
    )

    setTodoLists([
      ...otherToDoLists,
      {
        ...todoList,
        todos: todoList.todos.filter((todo) => todo.id !== id),
      },
    ])
  }

  const handleChange = (id) => {
    const todoList = todoLists.find(
      (todoList) => todoList.id === currentTodoListIndex
    )
    const otherToDoLists = todoLists.filter(
      (todoList) => todoList.id !== currentTodoListIndex
    )
    todoList.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
    })
    setTodoLists([
      ...otherToDoLists,
      {
        ...todoList,
        todos: todoList.todos,
      },
    ])
  }

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
        handleChange={handleChange}
      />

      <TodoList
        todoList={todoLists[currentTodoListIndex]}
        handleRemoveTodoList={handleRemoveTodoList}
        selectedTab={selectedTab}
        handleChange={handleChange}
        setAddTodoModalOpen={setAddTodoModalOpen}
        handleRemoveTodo={handleRemoveTodo}
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

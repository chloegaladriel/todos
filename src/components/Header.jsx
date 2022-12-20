import Button from "./Button"
import Modal from "./Modal"

const Header = (props) => {
  const { state, handleAddTodoList, setIsOpen, isOpen, onClick } = props

  //const remainingTodos = Object.entries(
  //state.todoLists[state.todoLists.length - 1].todos
  //).filter((todo) => todo.done === false).length

  return (
    <div className="flex overflow-scroll sticky top-0 bg-white">
      {state.todoLists.map((todoList, todoListIndex) => (
        <Button
          key={todoList.id}
          hasBorderFirst
          onClick={() => {
            onClick(todoListIndex)
          }}
        >
          {todoListIndex}-{todoList.name}-{todoList.id}
          <span className="relative ml-4 pr-2 pl-2 -mr-9 bg-green-400 rounded-full z-10">
            {todoList.completedTodos}
          </span>
          <span className="relative ml-4 pr-2 pl-6 bg-blue-400 rounded-full z-0">
            {todoList.totalTodos}
          </span>
        </Button>
      ))}

      <div>
        <Button hasBorder className="ml-4" onClick={() => setIsOpen(true)}>
          +
        </Button>
        {isOpen && <Modal onSubmit={handleAddTodoList} setIsOpen={setIsOpen} />}
      </div>
    </div>
  )
}

export default Header

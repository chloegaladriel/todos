import Button from "./Button"
import Modal from "./Modal"

const Header = (props) => {
  const { state, handleAddTodoList, setIsOpen, isOpen, onClick } = props

  return (
    <div className="flex overflow-scroll sticky top-0 bg-white">
      {state.todoLists.map((todoList, todoListIndex) => (
        <Button
          hasBorderFirst
          key={todoList.id}
          onClick={() => {
            onClick(todoListIndex)
          }}
        >
          {todoListIndex}-{todoList.name}-{todoList.id}
          <span className="relative ml-4 pr-2 pl-2 -mr-9 bg-green-400 rounded-full z-10">
            {todoList.todos.filter(({ done }) => done).length}
          </span>
          <span className="relative ml-4 pr-2 pl-6 bg-blue-400 rounded-full z-0">
            {todoList.todos.length}
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

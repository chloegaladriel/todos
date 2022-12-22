import { PlusIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import Button from "./Button"
import Modal from "./Modal"

const Header = (props) => {
  const {
    state,
    handleAddTodoList,
    setIsOpen,
    isOpen,
    onClick,
    isActive,
    setIsActive,
  } = props

  const PERCENTAGE_BASE = 100

  return (
    <div className="flex flex-row items-center overflow-x-scroll sticky top-0 bg-white">
      {state.todoLists.map((todoList, todoListIndex) => (
        <Button
          key={todoList.id}
          hasBorderFirst
          onClick={() => {
            onClick(todoListIndex) && setIsActive(todoListIndex)
          }}
          className={classNames({
            "bg-pink-300": todoListIndex === isActive,
            "bg-blue-200": todoListIndex !== isActive,
          })}
        >
          {isActive}-{todoListIndex}-{todoList.name}-{todoList.id}-
          <span className="relative ml-4 pr-2 pl-2 -mr-9 bg-green-400 rounded-full z-10">
            {todoList.todos.filter(({ done }) => done).length}
          </span>
          <span className="relative ml-4 pr-2 pl-6 bg-blue-400 rounded-full z-0">
            {todoList.todos.length}
          </span>
          <div className="w-full mt-2 h-2 flex bg-slate-300">
            <div
              className={"h-full flex bg-green-600"}
              style={{
                width: `${
                  (todoList.todos.filter((todo) => todo.done).length *
                    PERCENTAGE_BASE) /
                  todoList.todos.length
                }%`,
              }}
            ></div>
          </div>
        </Button>
      ))}

      <div>
        <Button hasBorder className="ml-4" onClick={() => setIsOpen(true)}>
          <PlusIcon className="h-6 w-6" />
          <div className="w-full mt-2 h-2 flex"></div>
        </Button>
        {isOpen && <Modal onSubmit={handleAddTodoList} setIsOpen={setIsOpen} />}
      </div>
    </div>
  )
}

export default Header

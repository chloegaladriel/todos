import { TrashIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import Button from "./Button"
import Optionsbar from "./Optionsbar"

const TodoList = (props) => {
  const {
    className,
    todoList,
    handleChange,
    handleRemoveTodo,
    handleRemoveTodoList,
    setAddTodoModalOpen,
  } = props

  return (
    <div>
      <Optionsbar
        handleRemoveTodoList={handleRemoveTodoList}
        setAddTodoModalOpen={setAddTodoModalOpen}
        currentTodoListIndex={todoList.id}
      />
      {todoList.todos
        .sort((todo1, todo2) => todo1.id - todo2.id)
        .map((todo) => (
          <ul key={todo.id}>
            <li
              className={classNames(
                "group p-1 border-b flex gap-4 items-center justify-between bg-white",
                className
              )}
            >
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="ml-4 my-2 h-4 w-4 appearance-none rounded-none border border-slate-200 default:bg-white checked:bg-green-400"
                  onChange={() => handleChange(todo.id)}
                  checked={todo.done}
                />
                {todo.description}
              </div>
              <Button
                variant="icon"
                className="ml-auto"
                onClick={() => handleRemoveTodo(todo.id)}
              >
                <TrashIcon className="h-6 w-6 hidden group-hover:block" />
              </Button>
            </li>
          </ul>
        ))}
    </div>
  )
}
export default TodoList

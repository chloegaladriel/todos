import { TrashIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import todosInitialState from "../pages/todosInitialState"
import Button from "./Button"

const TodoListTab = (props) => {
  const { className, ...otherProps } = props

  return (
    <>
      {Object.entries(todosInitialState.todoLists[0].todos).map(
        ([todoId, todo]) => (
          <ul key={todoId}>
            <li
              {...otherProps}
              className={classNames(
                "group p-1 border-b flex gap-4 items-center",
                className
              )}
            >
              <input
                type="checkbox"
                className="ml-4 my-2 h-4 w-4 appearance-none rounded-none border border-slate-200 default:bg-white checked:bg-green-400"
              />
              {todo.description}
              <Button variant="icon" className="ml-auto">
                <TrashIcon className="h-6 w-6 hidden group-hover:block" />
              </Button>
            </li>
          </ul>
        )
      )}
    </>
  )
}
export default TodoListTab

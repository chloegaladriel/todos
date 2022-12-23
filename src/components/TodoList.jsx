import classNames from "classnames"

const TodoList = (props) => {
  const { className, todoLists, currentTodoListIndex, completedTodo } = props

  return (
    <>
      {todoLists[currentTodoListIndex].todos.map((todo) => (
        <ul key={todo.id}>
          <li
            className={classNames(
              "group p-1 border-b flex gap-4 items-center",
              className
            )}
          >
            <input
              type="checkbox"
              className="ml-4 my-2 h-4 w-4 appearance-none rounded-none border border-slate-200 default:bg-white checked:bg-green-400"
              onChange={() => completedTodo(todo.id)}
              checked={todo.done}
            />
            {todo.description}
          </li>
        </ul>
      ))}
    </>
  )
}
export default TodoList

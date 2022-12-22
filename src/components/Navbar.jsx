import { PlusIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import Button from "./Button"
import Optionsbar from "./Optionsbar"

const Header = (props) => {
  const {
    todoLists,
    setAddTodoListModalOpen,
    setAddTodoModalOpen,
    selectedTab,
    setSelectedTab,
    setCurrentTodoListIndex,
    currentTodoListIndex,
  } = props

  const PERCENTAGE_BASE = 100

  return (
    <nav className="flex flex-col sticky top-1 bg-white border-b">
      <div className="flex flex-row items-center overflow-x-scroll sticky top-0 bg-white">
        {todoLists.map((todoList) => (
          <Button
            key={todoList.id}
            hasBorderFirst
            onClick={() => {
              setCurrentTodoListIndex(todoList.id)
              setSelectedTab(todoList.id)
            }}
            className={classNames({
              "border-l border-r border-t rounded-t-lg bg-slate-100":
                selectedTab === todoList.id,
            })}
          >
            {todoList.name}-{todoList.id}
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
          <Button
            hasBorder
            className="ml-4"
            onClick={() => setAddTodoListModalOpen(true)}
          >
            <PlusIcon className="h-6 w-6" />
            <div className="w-full mt-2 h-2 flex"></div>
          </Button>
        </div>
      </div>
      <div>
        <Optionsbar
          currentTodoListIndex={currentTodoListIndex}
          setAddTodoModalOpen={setAddTodoModalOpen}
        />
      </div>
    </nav>
  )
}

export default Header

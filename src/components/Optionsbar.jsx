import {
  CheckCircleIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid"
import Button from "./Button"

const Optionsbar = (props) => {
  const { handleRemoveTodoList, setAddTodoModalOpen, currentTodoListIndex } =
    props

  return (
    <div className="flex sticky top-14 gap-4 items-center border-y px-4 py-2 bg-white">
      <div className="flex items-center gap-5 justify-between">
        <Button variant="icon" onClick={() => setAddTodoModalOpen(true)}>
          <PlusIcon className="h-6 w-6" />
        </Button>

        <Button variant="icon">
          <PencilSquareIcon className="h-6 w-6" />
        </Button>

        <Button
          variant="icon"
          onClick={() => handleRemoveTodoList(currentTodoListIndex)}
        >
          <TrashIcon className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex ml-auto items-center">
        <Button variant="icon">
          <CheckCircleIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

export default Optionsbar

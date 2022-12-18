import {
  CheckCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid"
import Button from "./Button"

const Optionsbar = () => {
  return (
    <div className="flex items-center gap-5 border-t px-4 py-2">
      <Button variant="icon">
        <PencilSquareIcon className="h-6 w-6" />
      </Button>
      <Button variant="icon">
        <TrashIcon className="h-6 w-6" />
      </Button>
      <Button variant="icon">
        <CheckCircleIcon className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default Optionsbar

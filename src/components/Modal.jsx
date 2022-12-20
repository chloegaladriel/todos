import AddTodoListForm from "./AddTodoListForm"
import Button from "./Button"

const Modal = (props) => {
  const { setIsOpen, onSubmit } = props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <Button onClick={() => setIsOpen(false)}>X</Button>
        <AddTodoListForm
          onSubmit={(name) => {
            onSubmit(name)
            setIsOpen(false)
          }}
        />
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
      </div>
    </div>
  )
}

export default Modal

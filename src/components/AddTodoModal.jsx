import AddTodoForm from "./AddTodoForm"
import Button from "./Button"

const AddTodoModal = (props) => {
  const { setAddTodoModalOpen, onSubmit } = props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <Button onClick={() => setAddTodoModalOpen(false)}>X</Button>
        <AddTodoForm
          onSubmit={(description) => {
            onSubmit(description)
            setAddTodoModalOpen(false)
          }}
        />
        <Button onClick={() => setAddTodoModalOpen(false)}>Cancel</Button>
      </div>
    </div>
  )
}

export default AddTodoModal

import Button from "./Button"

const Header = (props) => {
  const { state, handleAddTodoList } = props

  return (
    <>
      {state.todoLists.map((todoList) => (
        <Button key={todoList.id} hasBorderFirst>
          {todoList.name}-{todoList.id}
        </Button>
      ))}

      <Button
        hasBorder
        className="ml-4"
        onClick={() => handleAddTodoList("Addtodo")}
      >
        +
      </Button>
    </>
  )
}

export default Header

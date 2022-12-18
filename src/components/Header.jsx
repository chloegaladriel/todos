import todosInitialState from "../pages/todosInitialState"
import Button from "./Button"
import LinkNext from "./Link"

const Header = () => {
  return (
    <>
      {Object.entries(todosInitialState.todoLists).map(([headerId, header]) => (
        <Button key={headerId} hasBorderFirst>
          {header.name}
        </Button>
      ))}

      <Button hasBorder className="ml-4">
        <LinkNext href="/addtodo">+</LinkNext>
      </Button>
    </>
  )
}

export default Header

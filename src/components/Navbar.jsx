import Header from "./Header"
import Optionsbar from "./Optionsbar"

const Navbar = (props) => {
  const {
    state,
    handleAddTodoList,
    setIsOpen,
    isOpen,
    setCurrentTodoListIndex,
    currentTodoListIndex,
  } = props

  return (
    <nav className="flex flex-col overflow-scroll sticky top-1 bg-white border-b">
      <div>
        <Header
          state={state}
          handleAddTodoList={handleAddTodoList}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          onClick={setCurrentTodoListIndex}
          currentTodoListIndex={currentTodoListIndex}
        />
      </div>
      <div>
        <Optionsbar />
      </div>
    </nav>
  )
}

export default Navbar

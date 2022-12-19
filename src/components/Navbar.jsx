import Header from "./Header"
import Optionsbar from "./Optionsbar"

const Navbar = (props) => {
  const { state, handleAddTodoList } = props

  return (
    <nav className="flex flex-col overflow-scroll sticky top-1 bg-white border-b">
      <div>
        <Header state={state} handleAddTodoList={handleAddTodoList} />
      </div>
      <div>
        <Optionsbar />
      </div>
    </nav>
  )
}

export default Navbar

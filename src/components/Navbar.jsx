import classNames from "classnames"

import Header from "./Header"

import Optionsbar from "./Optionsbar"

const Navbar = (props) => {
  const { className, ...otherProps } = props

  return (
    <nav
      {...otherProps}
      className={classNames(
        "flex flex-col overflow-scroll sticky top-1 bg-white border-b",
        className
      )}
    >
      <div>
        <Header></Header>
      </div>
      <div>
        <Optionsbar />
      </div>
    </nav>
  )
}

export default Navbar

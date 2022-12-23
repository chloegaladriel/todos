import { createContext, useState } from "react"
import "../styles/globals.css"

const context = createContext()

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState([])

  return (
    <context.Provider value={{ state, setState }}>
      <Component {...pageProps} />
    </context.Provider>
  )
}

export default MyApp
export { context }

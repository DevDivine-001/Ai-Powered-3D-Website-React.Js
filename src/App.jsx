import Canvas from "./canvas"
import CustomiZePage from "./Pages/CustomiZePage"
import Home from "../src/Pages/Home"

const App = () => {
  return (
    <main className="app transition-all">
     <Home/>
     <Canvas/>
     <CustomiZePage/>
    </main>
  )
}

export default App
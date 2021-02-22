import "./App.css"
import TabsHorizontal from "./TabsHorizontal/TabsHorizontal"
import TabsVertical from "./TabsVertical/TabsVertical"

function App() {
  return (
    <div className="App">
      <div className="App--item">
        <TabsHorizontal />
      </div>

      <div className="App--item">
        <TabsVertical />
      </div>
    </div>
  )
}

export default App

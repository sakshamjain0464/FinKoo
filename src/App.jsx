import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Converter from "./components/Converter"
import Graph from "./components/Graph"


function App() {
  return (
    <>
    <Navbar />
    <main className='min-h-screen flex flex-col h-fit px-10 py-10 w-screen'>
        <Converter />
        <Graph />
    </main>
    
    </>
  )
}

export default App

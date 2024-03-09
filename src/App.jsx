import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Converter from "./components/Converter"


function App() {
  return (
    <>
    <Navbar />
    <main className='h-screen md:h-[90vh] px-10 py-10 w-screen'>
        <Converter />
    </main>
    
    </>
  )
}

export default App

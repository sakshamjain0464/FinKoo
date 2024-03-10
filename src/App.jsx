
import Navbar from "./components/Navbar"
import Converter from "./components/Converter"
import Graph from "./components/Graph"
import Footer from "./components/Footer"



function App() {
  return (
    <>
    <Navbar />
    <main className='min-h-fit flex flex-col h-fit px-10 py-10 w-screen'>
        <Converter />
        <Graph />
    </main>
    <Footer />
    </>
  )
}

export default App

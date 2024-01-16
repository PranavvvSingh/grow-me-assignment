import "./App.css"
import Snack from "./components/Snack"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <Form />
                     <Snack />
                  </>
               }
            />
            <Route path="components" element={<Grid />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App

import "./App.css"
import { useState } from "react"
import Snack from "./components/Snack"
import { FormType } from "./types"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

function App() {
   const [form, setForm] = useState<FormType>({
      name: "",
      email: "",
      phone: "",
   })
   const [snackOpen, setSnackOpen] = useState(false)

   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <Form
                        form={form}
                        setForm={setForm}
                        setSnackOpen={setSnackOpen}
                     />
                     <Snack
                        snackOpen={snackOpen}
                        setSnackOpen={setSnackOpen}
                        username={form.name}
                     />
                  </>
               }
            />
            <Route path="components" element={<Grid />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App

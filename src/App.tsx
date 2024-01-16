import "./App.css"
import Snack from "./components/Snack"
import Form from "./components/Form"
import Grid from "./components/Grid"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import RequireAuth from "./components/RequireAuth"
import Layout from "./components/Layout"

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Form />} />
               <Route
                  path="components"
                  element={
                     <RequireAuth>
                        <Grid />
                     </RequireAuth>
                  }
               />
            </Route>
         </Routes>
         <Snack />
      </BrowserRouter>
   )
}

export default App

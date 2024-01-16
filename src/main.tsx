import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import FormContextProvider from "./context/FormContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
   <FormContextProvider>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </FormContextProvider>,
)

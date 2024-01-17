import { PropsWithChildren, useContext, useEffect } from "react"
import { FormContext } from "../context/FormContext"
import { Navigate } from "react-router"

const RequireAuth = ({ children }: PropsWithChildren) => {
   const { form, setSnackOpen, setSnackMessage } = useContext(FormContext)

   useEffect(() => {
      if (!form.name) {
         setSnackMessage("Fill the form!")
         setSnackOpen(true)
      }
      // console.log("auth running")
   }, [form.name, setSnackMessage, setSnackOpen])

   return form.name ? children : <Navigate to="/" />
}

export default RequireAuth

import React, { useContext } from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import { FormContext } from "../context/FormContext"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref,
) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

// type SnackProps = {
//    snackOpen: boolean
//    setSnackOpen: React.Dispatch<React.SetStateAction<boolean>>
//    username: string
// }

const Snack = () => {
   const { snackOpen, setSnackOpen, form } = useContext(FormContext)
   const username = form.name
   const handleClose = (
      _event?: React.SyntheticEvent | Event,
      reason?: string,
   ) => {
      if (reason === "clickaway") {
         return
      }

      setSnackOpen(false)
   }

   return (
      <Snackbar open={snackOpen} autoHideDuration={2000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            Welcome {username}!
         </Alert>
      </Snackbar>
   )
}

export default Snack

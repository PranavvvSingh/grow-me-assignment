import React, { useContext } from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import { FormContext } from "../context/FormContext"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props,ref,) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Snack = () => {
   const { snackOpen, setSnackOpen, snackMessage } = useContext(FormContext)
   const handleClose = (_event?: React.SyntheticEvent | Event,reason?: string,) => {
      if (reason === "clickaway") {
         return
      }
      setSnackOpen(false)
   }

   return (
      <Snackbar
         open={snackOpen}
         autoHideDuration={3000}
         onClose={handleClose}
      >
         <Alert onClose={handleClose} severity="success">
            {snackMessage}
         </Alert>
      </Snackbar>
   )
}

export default Snack

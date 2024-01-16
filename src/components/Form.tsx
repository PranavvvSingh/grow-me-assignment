import { Box, Button, Stack, TextField } from "@mui/material"
import useLocalStorage from "../hooks/useLocalStorage"
import { useContext, useState } from "react"
import { FormContext } from "../context/FormContext"
import { useNavigate } from "react-router"

const Form = () => {
   const { setItem } = useLocalStorage("form-data")
   const navigate = useNavigate()
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")
   const [email, setEmail] = useState("")
   const { form, setForm, setSnackOpen, setSnackMessage } = useContext(FormContext)
   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      if (!name || !phone || !email) {
         // Display an error message for one or more empty field
         setSnackMessage("Please fill all fields")
         setSnackOpen(true)
         return
      }
      setForm({
         name,
         phone,
         email,
      })
      setSnackMessage("Welcome "+name+" !")
      setSnackOpen(true)
      setItem(form)
      navigate("/components")
   }
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            height: "85vh",
            mx: "auto",
         }}
      >
         <form action="" style={{ width: "300px" }} onSubmit={handleSubmit}>
            <Stack
               direction="column"
               justifyContent="center"
               alignItems="center"
               spacing={3}
               height="100%"
            >
               <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="outlined-basic"
                  fullWidth
               />
               <TextField
                  label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="outlined-basic"
                  fullWidth
               />
               <TextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="outlined-basic"
                  fullWidth
               />
               <Button type="submit" size="large" variant="contained" color="success">
                  Submit
               </Button>
            </Stack>
         </form>
      </Box>
   )
}

export default Form

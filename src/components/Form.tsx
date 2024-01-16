import { Box, Button, Stack, TextField } from "@mui/material"
import useLocalStorage from "../hooks/useLocalStorage"
import { useContext, useState } from "react"
import { FormContext } from "../context/FormContext"
import { useNavigate } from "react-router"

const CustomTextField = ({
   label,
   value,
   onChange,
}: {
   label: string
   value: string
   onChange: React.Dispatch<React.SetStateAction<string>>
}) => {
   return (
      <TextField
         label={label}
         value={value}
         onChange={(e) => onChange(e.target.value)}
         id="outlined-basic"
         fullWidth
      />
   )
}

const Form = () => {
   const { setItem } = useLocalStorage("form-data")
   const navigate = useNavigate()
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")
   const [email, setEmail] = useState("")
   const { setForm, setSnackOpen, setSnackMessage } = useContext(FormContext)

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      // Display an error message for one or more empty field
      if (!name || !phone || !email) {
         setSnackMessage("Please fill all fields")
         setSnackOpen(true)
         return
      }

      // Setting form state
      setForm({
         name:name,
         phone:phone,
         email:email,
      })

      // Welcome snack message
      setSnackMessage("Welcome " + name + " !")
      setSnackOpen(true)

      // Setting form state in local storage
      setItem({
         name: name,
         phone: phone,
         email: email,
      })
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
               <CustomTextField label="Name" value={name} onChange={setName} />
               <CustomTextField label="Phone" value={phone} onChange={setPhone} />
               <CustomTextField label="Email" value={email} onChange={setEmail} />

               <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="success"
               >
                  Submit
               </Button>
            </Stack>
         </form>
      </Box>
   )
}

export default Form

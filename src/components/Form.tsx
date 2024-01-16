import { Box, Button, Stack, TextField } from "@mui/material"
import useLocalStorage from "../hooks/useLocalStorage"
import { FormType } from "../types"

type FormPropsType = {
   form: FormType
   setForm: React.Dispatch<React.SetStateAction<FormType>>
   setSnackOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({ form, setForm, setSnackOpen }: FormPropsType) => {
   const { setItem } = useLocalStorage("form-data")
   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      setSnackOpen(true)
      setItem(form)
      console.log(form)
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
                  value={form.name}
                  onChange={(e) =>
                     setForm((curr) => ({ ...curr, name: e.target.value }))
                  }
                  id="outlined-basic"
                  fullWidth
               />
               <TextField
                  label="Phone"
                  value={form.phone}
                  onChange={(e) =>
                     setForm((curr) => ({ ...curr, phone: e.target.value }))
                  }
                  id="outlined-basic"
                  fullWidth
               />
               <TextField
                  label="Email"
                  value={form.email}
                  onChange={(e) =>
                     setForm((curr) => ({ ...curr, email: e.target.value }))
                  }
                  id="outlined-basic"
                  fullWidth
               />
               <Button type="submit" size="large" variant="contained">
                  Submit
               </Button>
            </Stack>
         </form>
      </Box>
   )
}

export default Form

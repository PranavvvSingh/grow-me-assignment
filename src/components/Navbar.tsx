import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { NavLink, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import useLocalStorage from "../hooks/useLocalStorage"
import CssBaseline from "@mui/material/CssBaseline"
import HomeIcon from "@mui/icons-material/Home"
import ViewComfyIcon from "@mui/icons-material/ViewComfy"
import { SvgIconProps} from "@mui/material"

const NavButton = ({
   label,
   startIcon,
}: {
   label: string
   startIcon: React.ReactElement<SvgIconProps>
}) => {
   return (
      <Button
         variant="text"
         sx={{ mr: 2 }}
         style={{ color: "white" }}
         startIcon={startIcon}
      >
         {label}
      </Button>
   )
}

export default function Navbar() {
   const { form, setForm, setSnackMessage, setSnackOpen } =
      useContext(FormContext)
   const { removeItem } = useLocalStorage("form-data")
   const navigate = useNavigate()
   return (
      <Box sx={{ flexGrow: 1, margin: 0 }}>
         <CssBaseline />
         <AppBar component="nav" position="sticky" color="info">
            <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Assignment-PranavSingh
               </Typography>

               <NavLink to="/">
                  <NavButton label="home" startIcon={<HomeIcon />} />
               </NavLink>
               <NavLink to="/components">
                  <NavButton label="components" startIcon={<ViewComfyIcon />} />
               </NavLink>

               {form.name && (
                  <Button
                     variant="contained"
                     color="warning"
                     size="small"
                     onClick={() => {
                        removeItem()
                        setForm({
                           name: "",
                           email: "",
                           phone: "",
                        })
                        setSnackMessage("Logged Out")
                        setSnackOpen(true)
                        navigate("/")
                     }}
                  >
                     LogOut
                  </Button>
               )}
            </Toolbar>
         </AppBar>
      </Box>
   )
}

// onClick={() => {
//    if (item.route === "logout") {
//       removeItem()
//       setForm({
//          name: "",
//          email: "",
//          phone: "",
//       })
//       setSnackMessage("Logged Out")
//       setSnackOpen(true)
//       navigate("/")
//    } else navigate(item.route)
// }}

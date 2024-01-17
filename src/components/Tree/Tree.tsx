import { useState } from "react"
import { jsondata } from "../../data/data"
import { TreeType } from "../../types"
import { Box } from "@mui/material"
import Department from "./Department"

const Tree = () => {
   const [data] = useState<TreeType[]>(jsondata)
   return (
      <>
         <Box
            sx={{
               width: "100%",
               p: 3,
               textTransform: "capitalize",
               my: 10,
            }}
            style={{ height: "600px" }}
         >
            <h2>2) Tree Component</h2>
            <Box sx={{ width: "25%", mx: "auto" }}>
               {data.map((department, index) => (
                  <Department key={index} department={department} />
               ))}
            </Box>
         </Box>
      </>
   )
}

export default Tree

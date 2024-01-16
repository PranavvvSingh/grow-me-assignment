import { Box, Checkbox } from "@mui/material"
import { useState } from "react"
import { TreeType } from "../../types"
import { default as ExpandIcon } from "@mui/icons-material/AddBox"
import { default as CollapseIcon } from "@mui/icons-material/IndeterminateCheckBox"
import SubDepartment from "./SubDepartment"

const Department = ({ department }: { department: TreeType }) => {
   const [showChildren, setShowChildren] = useState(true)

   // Array to maintain the checked state of each subdepartment
   const [checked, setChecked] = useState(
      Array(department.sub_departments.length).fill(false),
   )
   // If the department itself is checked or not
   const selfchecked = checked.every((status) => status)

   // Toggle
   function HandleChange() {
      setChecked((current) => current.map(() => !selfchecked))
   }
   return (
      <div>
         <Box sx={{ display: "flex", alignItems: "center", gap:0.5 }}>
            {showChildren ? (
               <CollapseIcon
                  color="inherit"
                  onClick={() => setShowChildren(false)}
                  fontSize="small"
               />
            ) : (
               <ExpandIcon
                  color="inherit"
                  onClick={() => setShowChildren(true)}
                  fontSize="small"
               />
            )}
            <Checkbox
               checked={selfchecked}
               onChange={HandleChange}
               inputProps={{ "aria-label": "controlled" }}
            />
            <h3>{department.department}</h3>
            <sub>({department.sub_departments.length})</sub>
         </Box>

         {showChildren &&
            department.sub_departments.map((subDepartment, index) => (
               <div key={subDepartment} style={{ marginLeft: "100px" }}>
                  <SubDepartment
                     subDepartmentId={index}
                     subDepartment={subDepartment}
                     checked={checked}
                     setChecked={setChecked}
                  />
               </div>
            ))}
      </div>
   )
}

export default Department

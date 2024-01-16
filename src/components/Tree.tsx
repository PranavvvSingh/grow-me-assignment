import { useState } from "react"
import { jsondata } from "../data/data"
import { TreeType } from "../types"
import Checkbox from "@mui/material/Checkbox"
import { default as ExpandIcon } from "@mui/icons-material/AddBox"
import { default as CollapseIcon } from "@mui/icons-material/IndeterminateCheckBox"
import { Box } from "@mui/material"

type SubDepartmentPorps = {
   subDepartmentId: number
   subDepartment: string
   checked: boolean[]
   setChecked: React.Dispatch<React.SetStateAction<boolean[]>>
}

const SubDepartment = ({
   subDepartmentId,
   subDepartment,
   checked,
   setChecked,
}: SubDepartmentPorps) => {
   const handleCheckboxChange = () => {
      setChecked((prevChecked) =>
         [...prevChecked].map((value, index) =>
            index === subDepartmentId ? !value : value,
         ),
      )
   }
   return (
      <h4>
         <Checkbox
            checked={checked[subDepartmentId]}
            onChange={handleCheckboxChange}
            inputProps={{ "aria-label": "controlled" }}
         />
         {subDepartment}
      </h4>
   )
}

const Department = ({ department }: { department: TreeType }) => {
   const [showChildren, setShowChildren] = useState(true)
   const [checked, setChecked] = useState(
      Array(department.sub_departments.length).fill(false),
   )
   const selfchecked=checked.every((status)=>status)
   function HandleChange(){
      setChecked((current)=>current.map(()=>!selfchecked))
   }
   return (
      <div>
         <Box sx={{ display: "flex", alignItems: "center"  }}>
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
            <h2>Tree Component</h2>
            <Box sx={{ width: "25%", mx: "auto" }}>
               {data.map((department,index) => (
                  <Department key={index} department={department} />
               ))}
            </Box>
         </Box>
      </>
   )
}

export default Tree

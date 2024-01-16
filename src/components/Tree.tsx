import { useState } from "react"
import { jsondata } from "../data/data"
import { NodeType, TreeType } from "../types"
import Checkbox from "@mui/material/Checkbox"
import { default as ExpandIcon } from "@mui/icons-material/AddBox"
import { default as CollapseIcon } from "@mui/icons-material/IndeterminateCheckBox"



const SubDepartment = ({
   subDepartment,
   departmentId,
   setData
}: {
   subDepartment: NodeType
   departmentId: string
   setData: React.Dispatch<React.SetStateAction<TreeType[]>>
}) => {
   const handleSubdepartmentChange = () => {
      setData((prevData) => {
         const newData = prevData.map((dep) =>
            dep.department.id === departmentId
               ? {
                    ...dep,
                    sub_departments: dep.sub_departments.map((subDep) =>
                       subDep.id === subDepartment.id
                          ? { ...subDep, isChecked: !subDepartment.isChecked }
                          : subDep,
                    ),
                 }
               : dep,
         )

         return newData
      })
   }
   return (
      <h6>
         <Checkbox
            checked={subDepartment.isChecked}
            onChange={handleSubdepartmentChange}
            inputProps={{ "aria-label": "controlled" }}
         />
         {subDepartment.id}
      </h6>
   )
}

const Department = ({
   data,
   setData,
}: {
   data: TreeType
   setData: React.Dispatch<React.SetStateAction<TreeType[]>>
}) => {
   const [showChildren, setShowChildren] = useState(true)
   return (
      <div>
         <h4>
            {showChildren ? (
               <CollapseIcon
                  color="primary"
                  onClick={() => setShowChildren(false)}
               />
            ) : (
               <ExpandIcon
                  color="primary"
                  onClick={() => setShowChildren(true)}
               />
            )}
            {data.department.id}
         </h4>

         {showChildren &&
            data.sub_departments.map((subDepartment) => (
               <div key={subDepartment.id} style={{ marginLeft: "100px" }}>
                  <SubDepartment
                     subDepartment={subDepartment}
                     departmentId={data.department.id}
                     setData={setData}
                  />
               </div>
            ))}
      </div>
   )
}

const Tree = () => {
   const [data, setData] = useState<TreeType[]>(jsondata)
   console.log(data)
   return (
      <div style={{height:"100vh", marginLeft:"500px"}}>
         {data.map((data) => (
            <Department data={data} setData={setData} />
         ))}
      </div>
   )
}

export default Tree

import Checkbox from "@mui/material/Checkbox"

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

export default SubDepartment

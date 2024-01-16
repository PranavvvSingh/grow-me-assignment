import { TreeType } from "../types"

export const jsondata: TreeType[] = [
   {
      department: { id: "customer_service", isChecked: false },
      sub_departments: [
         { id: "support", isChecked: false },
         { id: "customer_success", isChecked: false },
      ],
   },
   {
      department: { id: "design", isChecked: false },
      sub_departments: [
         { id: "graphic_design", isChecked: false },
         { id: "product_design", isChecked: false },
         { id: "web_design", isChecked: false },
      ],
   },
]

export type FormType = {
   name: string
   email: string
   phone: string
}

export type DataType = {
   userId: number
   id: number
   title: string
   body: string
}

export type NodeType = {
   id: string
   isChecked?: boolean
}


export type TreeType = {
   department: NodeType
   sub_departments: NodeType[]
}

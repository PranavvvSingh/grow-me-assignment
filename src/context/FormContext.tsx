import { PropsWithChildren, createContext, useState } from "react"
import { FormType } from "../types"

type ContextType = {
   form: FormType
   setForm: React.Dispatch<React.SetStateAction<FormType>>
   snackOpen: boolean
   setSnackOpen: React.Dispatch<React.SetStateAction<boolean>>
   snackMessage: string
   setSnackMessage: React.Dispatch<React.SetStateAction<string>>
}

export const FormContext = createContext<ContextType>({} as ContextType)

const FormContextProvider = ({ children }: PropsWithChildren) => {
   const [form, setForm] = useState<FormType>({
      name: "",
      email: "",
      phone: "",
   })
   const [snackOpen, setSnackOpen] = useState(false)
   const [snackMessage, setSnackMessage] = useState("")
   return (
      <FormContext.Provider value={{ form, setForm, snackOpen, setSnackOpen, snackMessage, setSnackMessage }}>
         {children}
      </FormContext.Provider>
   )
}

export default FormContextProvider

import { PropsWithChildren, createContext, useState } from "react"
import { FormType } from "../types"

type ContextType = {
   form: FormType
   setForm: React.Dispatch<React.SetStateAction<FormType>>
   snackOpen: boolean
   setSnackOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const FormContext = createContext<ContextType>({} as ContextType)

const FormContextProvider = ({ children }: PropsWithChildren) => {
   const [form, setForm] = useState<FormType>({
      name: "",
      email: "",
      phone: "",
   })
   const [snackOpen, setSnackOpen] = useState(false)
   return (
      <FormContext.Provider value={{ form, setForm, snackOpen, setSnackOpen }}>
         {children}
      </FormContext.Provider>
   )
}

export default FormContextProvider

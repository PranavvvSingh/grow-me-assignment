import { PropsWithChildren, createContext, useEffect, useState } from "react"
import { FormType } from "../types"
import useLocalStorage from "../hooks/useLocalStorage"

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
   const { getItem } = useLocalStorage("form-data")
   const [form, setForm] = useState<FormType>({
      name: "",
      email: "",
      phone: "",
   })
   useEffect(() => {
      // Load form data from local storage when the component mounts
      const localData = getItem()
      if (localData) {
         setForm({
            name: localData.name,
            phone: localData.phone,
            email: localData.email,
         })
         // console.log("loaded data from localStorage")
      }
   }, [])
   const [snackOpen, setSnackOpen] = useState(false)
   const [snackMessage, setSnackMessage] = useState("")
   return (
      <FormContext.Provider
         value={{
            form,
            setForm,
            snackOpen,
            setSnackOpen,
            snackMessage,
            setSnackMessage,
         }}
      >
         {children}
      </FormContext.Provider>
   )
}

export default FormContextProvider

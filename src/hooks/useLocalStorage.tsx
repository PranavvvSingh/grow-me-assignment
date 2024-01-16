const useLocalStorage = (key: string) => {
   // For storing form data in local storage
   const setItem = (value: unknown) => {
      try {
         window.localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
         console.log(error)
      }
   }
   // For Fetching form data from local storage
   const getItem = () => {
      try {
         const item = window.localStorage.getItem(key)
         return item ? JSON.parse(item) : undefined
      } catch (error) {
         console.log(error)
      }
   }
   // Form removing form data from local storage
   const removeItem = () => {
      try {
         window.localStorage.removeItem(key)
      } catch (error) {
         console.log(error)
      }
   }
   return { setItem, getItem, removeItem }
}

export default useLocalStorage

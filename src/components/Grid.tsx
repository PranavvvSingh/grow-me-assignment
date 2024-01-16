import Box from "@mui/material/Box"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import axios from "axios"
import { DataType } from "../types"
import Tree from "./Tree"

const columns: GridColDef[] = [
   { field: "userId", headerName: "User", flex: 0.1 },
   { field: "id", headerName: "ID", flex: 0.1 },
   {
      field: "title",
      headerName: "Title",
      flex: 0.3,
      editable: false,
   },
   {
      field: "body",
      headerName: "Body",
      flex: 1,
      editable: false,
      sortable: false,
   },
]


export default function Grid() {
   const [data, setData] = useState<DataType[]>([])
   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
         )
         setData(response.data)
      }
      fetchData()
   }, [])
   return (
      <>
         <Box sx={{ height: "85vh", width: "100%", p: 3 }}>
            <DataGrid
               rows={data}
               columns={columns}
               initialState={{
                  pagination: {
                     paginationModel: {
                        pageSize: 20,
                     },
                  },
               }}
               pageSizeOptions={[10, 20]}
               checkboxSelection
               disableRowSelectionOnClick
            />
         </Box>
         <Tree/>
      </>
   )
}

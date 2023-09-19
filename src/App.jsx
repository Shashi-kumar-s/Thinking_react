import { Box } from "@mui/material"
import InputField from "./Component/Input_Field/InputField"

const App=()=> {

  const data=[
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

const handleSearch=()=>{

}

  return (
    <Box className="flex justify-center">
   <InputField variant={"standard"} label={"search"} onchange={handleSearch}/>
    </Box>
  )
}

export default App

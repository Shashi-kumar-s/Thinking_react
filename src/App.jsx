import { Box } from "@mui/material"
import InputField from "../src/Component/Input_Field/InputField"
import { useState } from "react"

const App = () => {
  const data = [
    {
      category: "Fruits",
      data: [
        { price: "$1", stocked: true, name: "Apple" },
        { price: "$1", stocked: true, name: "Dragonfruit" },
        { price: "$2", stocked: false, name: "Passionfruit" },
      ],
    },
    {
      category: "Vegetables",
      data: [
        { price: "$1", stocked: true, name: "Apple" },
        { price: "$1", stocked: true, name: "Dragonfruit" },
        { price: "$2", stocked: false, name: "Passionfruit" },
      ],
    },
  ]

  const [searchData, setSearchData] = useState("")

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()

  }

  return (
    <Box className="flex w-[50%] h-[90vh] bg-gray-200 mx-auto rounded-lg mt-4 py-4 flex-col">
      <Box className="text-center">
        <InputField
          className={"w-[80%]"}
          variant={"standard"}
          label={"search"}
          value={searchData}
          onchange={handleSearch}
        />
      </Box>
      <Box className="text-center">
        <ul>
          {data.map((ele,i) => {
            return (
              <Box key={i}>
                <li >
                  <b>{ele.category}</b>
                </li>
                {ele.data.map((item,i) => {
                  return (
                    <Box className="flex justify-between px-5" key={i}>
                      <li>{item.name}</li>
                      <li>{item.price}</li>
                    </Box>
                  )
                })}
              </Box>
            )
          })}
        </ul>
      </Box>
    </Box>
  )
}

export default App

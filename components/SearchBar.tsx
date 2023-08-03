"use client"

import { useState } from "react"
import { SearchManufacturer } from "."

const SearchBar = () => {
  const [Manufacturer, setManufacturer] = useState("")

  const handleSearch = ()=>{

  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          Manufacturer={Manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
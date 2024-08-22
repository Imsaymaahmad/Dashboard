import SearchBar from '../Components/SearchBar'
import SideBar from '../Components/SideBar'
import React from 'react'


const layout = ({children}) => {
  return (
    <main className="bg-white w-full h-screen">
    <div className="flex flex-row">
      <div className="w-1/6"> 
      <SideBar/>
      </div>
      <div className="flex flex-col w-5/6">
      <div className="w-full">
      <SearchBar/>
      </div>
      <div className="w-full bg-[#f5f5f5] h-full">
        {children}
      </div>
      </div>
    </div>
    </main>
  )
}

export default layout
import React, { createContext, useState } from 'react'

export const Context=createContext({})

export default function ContextProvider({children}) {
    const [search,setSearch]=useState([])

    const emptySearch=()=>{
      setSearch([])
    }
  return (
    <Context.Provider value={{emptySearch, search,setSearch}}>
        {children}
    </Context.Provider>
  )
}

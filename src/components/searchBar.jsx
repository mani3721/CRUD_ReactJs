import React, { useState } from "react";
import {FaSearch} from "react-icons/fa"
const SearchBar=()=>{
  const [input , setInput]=useState("")

  const [result, setResult]=useState([])
  const fetchData=(value)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json()).then((json)=>
      { const result =json.filter((user)=>{
         return (
            value && user
             && user.name 
             && user.name.toLowerCase().includes(value))
      })
      setResult(result)
    }
    )
  }

  const handleChange=(e)=>{
    setInput(e.target.value)
    fetchData(e.target.value)
  }
    return (
        <>
        <div className="flex items-center flex-col justify-center ">
       <div className="flex shadow-lg items-center h-[10vh] w-[40%] p-5 rounded-2xl">
       <FaSearch/>
        <input type="search" className="outline-none px-5 w-[100%]" value={input} onChange={handleChange} />
       
       </div>
       <div className="shadow-xl  w-[40%]">
        {!result.length && <h3>No Result</h3>}
               {
                result.map((user,id)=>{
                    return <div key={id}> {user.name} </div>
                })
               }
         </div> 
        </div>
  
        
        </>
    )
}

export default SearchBar
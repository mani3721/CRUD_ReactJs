import React, { useState } from "react";


const Modal=({closeModal,onsubmit,defaultValue})=>{

    const [formSate, setFormState]=useState(defaultValue|| {
        page:"",
        desc:"",
        status:""
    })

    const handleChange=(e)=>{
      setFormState({
        ...formSate,
        [e.target.name]:e.target.value
      })
    }

    const validation=()=>{
         if (formSate.page) {
             return true
         }else {
            return false
         }
    }

    const submit=(e)=>{
        e.preventDefault()
       if (!validation()) return
        onsubmit(formSate)
        closeModal(false)
       
       
    }   
    
    return (
        <>
    <div id="helloModel" className="bg-[#080808] h-screen  flex justify-around items-center absolute inset-0 z-50 bg-opacity-[0.5]" onClick={(e)=>{
        if (e.target.id) {
            closeModal()
        }
            
        
    }}>
                        <div className="bg-white flex flex-col justify-around items-center w-[38%] h-[64vh] rounded-2xl">
                        <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
                </div>
                <input value={formSate.page} name="page" onChange={handleChange} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text"></input>
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                </div>
                <input value={formSate.desc} name="desc"  onChange={handleChange} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text"></input>
            </div>
            <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                <select name="status" id="" classNameName="py-2 px-4 block w-full " value={formSate.status}   onChange={handleChange}>
                    <option value="Live">Live</option>
                    <option value="Finish">Finish</option>
                    <option value="Done">Done</option>

                </select>
            </div>

            <button onClick={submit}>Save</button>
                        </div>
                    </div>
        </>
    )
}

export default Modal

import { useState } from 'react'
import SearchBar from './components/searchBar'
import Table from './components/Table'
import Modal from './components/Modal'


function App() {
const [model, setModel]=useState(false)
const [editIndex, setEditIndex]=useState()
const [rows, setRows] = useState([
  {
    page: "Home",
    desc: "This is the main page of the website",
    status: "live",
  },
  {
    page: "About Us",
    desc: "This page has details about the company",
    status: "draft",
  },
  {
    page: "Pricing",
    desc: "Prices for different subscriptions",
    status: "error",
  },
]);

const handleDelete=(Index)=>{
  setRows(rows.filter((_,idx)=>idx!==Index))
}

const handleSubmit=(newRow)=>{

  editIndex==null ?
   setRows([...rows, newRow])
    : setRows(rows.map((userData,idex)=>{
      if (idex!== editIndex) return userData
        
       return newRow
    })
    )
}

const handleEdit=(index)=>{
  setEditIndex(index)
  setModel(true)
}
  return (
    <div className="w-auto h-[100vh] ">
      <SearchBar />
     <Table  rows={rows} deleteRow={handleDelete} editRow={handleEdit} />
     <button onClick={()=>setModel(true)}>Add</button>
      {model&& <Modal closeModal={()=>{setModel(false),  setEditIndex(null)}} onsubmit={handleSubmit} defaultValue={editIndex !== null && rows[editIndex]}/>}

    </div>
  )
}

export default App

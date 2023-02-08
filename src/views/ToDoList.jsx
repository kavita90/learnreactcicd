import { useState } from "react"


export const ToDOList = ()=>{
    // rules of hook - call here hooks javascript write here only
   const [list, setList] = useState("")
   const handleChange = (e,name)=>setList(e.target.value)
   return (
        <>
         <div style={{display: "flex" , gap:"10px", flexDirection:"column", alignItems: "center", justifyContent:"center", marginTop:"40px"}}>
           <div><h1> Todo list </h1></div>
           <div>
            <input type="text" style={{marginRight: "20px"}} placeholder="enter item" 
            value ={list} onChange={()=>handleChange("klklk")}
             /> 
            {/* <button> add new item</button> */}
           <p>{list}</p>
            </div>
         </div>
        </>
    )
}
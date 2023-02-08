import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Table1 = ()=>{
    const [data, setData] = useState([])
    const   fetchapi = async ()=>{
      let response = await axios.get('https://jsonplaceholder.typicode.com/users')    
      setData(response.data)
      }
      useEffect(  ()=>{
      fetchapi()    
      },[])    
      const [cl, setCl] = useState("")
      const handleColor = (id)=>{
      if(id === cl)  setCl("")
      else  setCl(id)
       }
    return  <div> <div className=''>
        <table>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>name</th>
                <th>phone</th>
            </tr>
           {
            data.map((item)=>{
              return  <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                </tr>
            })
           }
        </table>
        </div>
        <div>
        {
            data.map((item, index)=>{
              return <div style={{backgroundColor:  cl === index ? "yellow" : "red"}} onClick={()=>{handleColor(index)}}>{item.name}</div>
            })
           }
    </div>
    </div>
}
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Table1 = ()=>{
    const [data, setData] = useState([])
    let ma = [1,2,3]

  const     fetchapi = async ()=>{
      let response = await axios.get('https://jsonplaceholder.typicode.com/users')    
      setData(response.data)
      }
      useEffect(  ()=>{
      fetchapi()    
      },[])    
      console.log(data) 

      const [cl, setCl] = useState("red")
      // const [cl, setCl] = useState("red")

      const handleColor = ()=>{
        console.log("kkkk");
        setCl("yellow")
      }
    return <div className=''>
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

        

 <div style={{backgroundColor: `${cl}`}} onClick={handleColor}>hjhj</div>
     
        <div>ytytyy</div>
    </div>
}
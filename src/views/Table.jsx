import React from 'react'
import './table.css'
import {data} from '../Constant.js'

export const  Table = ()=>{
  console.log(data)
  let headers = Object.keys(data[0])

return <div className='parentdiv'>
    <div className='childdiv'>
    <table >
       <tr>
       {
        headers.map(item =>{
       return  <th>{item}</th>
        })
       }
       </tr>
       {
        data.map((item,index)=>{
          let rows = Object.values(item)
            return <tr>
             {
              rows.map(data=>{
                return <td>{data}</td>
              })
             }
          </tr>
        })
       }
   
    </table>
    </div>
</div>
}

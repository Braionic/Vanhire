import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Details() {
  const [Data, setData] = useState([])
    const myparam = useParams()
    useEffect(()=>{
     fetch(`/api/vans/${myparam.id}`)
     .then((res)=> res.json())
     .then((data)=> setData(data.vans))
    },[])
  return (
    <div className='vandes'>
      <h4>Name: {Data.name}</h4><br></br>
      <h4>description: {Data.description}</h4>
      </div>
  )
}

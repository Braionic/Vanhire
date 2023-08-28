import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
export default function Pricing() {
  const [Data, setData] = useState([])
    const myparam = useParams()
    useEffect(()=>{
     fetch(`/api/vans/${myparam.id}`)
     .then((res)=> res.json())
     .then((data)=> setData(data.vans))
    },[])
  return (
    <section style={{backgroundColor: "aliceblue"}}>
    <div>
      <p style={{fontWeight: "bold"}}>{`$${Data.price}`}</p>
    </div>
    </section>
  )
}

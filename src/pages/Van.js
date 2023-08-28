import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Van() {
const [Data, setData] = useState([])
    useEffect(()=>{
        fetch("/api/vans/")
        .then((res)=> res.json())
        .then((data)=> setData(data.vans))
    }, [])
    let myvans = Data.map((van)=> {
        return <Link to={van.id}>
            <div className='vanthumb' key={van.id}>
            
                <img className='smvanimg' src={van.imageUrl} />
                <div>
                    <h4>{van.name}</h4>
                    <p>{`$${van.price}`}</p>
                </div>
                
            </div>
            </Link>
    })
  return (
    <section>
        <div className='vanrow'>
            {myvans}
            </div>
    </section>
    
  )
}

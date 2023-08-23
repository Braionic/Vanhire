import React, { useEffect, useState } from 'react'
export default function Vans() {
    const [Data, setData] = useState([])
    useEffect(()=>{
        fetch("/api/vans")
        .then((res)=> res.json())
        .then((data)=> setData(data.vans))
    }, [])

let van = Data.map((van)=>{
    
        return <div className='van' key={van.id}>
            <img src={van.imageUrl} className='vanimg' />
            <div className='name-price'>
                <p>{van.name}</p>
                <p>{van.price}</p>
            </div>
            <button className='typebtn'>{van.type}</button>
        </div>

})
  return (
    <div className='mainvans'>
    <h3 className='exploreo'>Explore our van options</h3>
    {Data.map((types)=>{
        return <button className='typebutton' key={types.id}>{types.type}</button>
    })}
    <div className='vanscontainer'>
        {van}
    </div>
    </div>
  )
}

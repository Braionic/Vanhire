import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams, Outlet } from 'react-router-dom'
export default function Vand() {
    const [Data, setData] = useState(()=>[])
    const myparam = useParams()
    useEffect(()=>{
     fetch(`/api/vans/${myparam.id}`)
     .then((res)=> res.json())
     .then((data)=> setData(data.vans))
    },[])

    const styles = {
        fontWeight: "bold",
        fontSize: "18px",
        textDecoration: "underline"
    }
  return (
    <section>
        <Link relative='path' to=".."><span>Back to Vans</span></Link>
    <div className='vancontainer'>
      <div className='vandp'>
        <div className='vanthumb'>
        <img className='vanimg1' style={{height: "150px", width: "150px"}} src={Data.imageUrl} />
        <div className='named'>
        <button className='vandb' key={Data.id}>{Data.type}</button>
                    <h4>{Data.name}</h4>
                    <p>{`$${Data.price}/day`}</p>
                </div>
        </div>
        <ul>
            <li><NavLink end style={({isActive})=> isActive? styles: null} to=".">Details</NavLink></li>
            <li><NavLink style={({isActive})=> isActive? styles: null} to="pricing">Pricing</NavLink></li>
            <li><NavLink style={({isActive})=> isActive? styles: null} to="photos">Photos</NavLink></li>
        </ul>
       <Outlet context={{Data}} />
        </div>
        
      </div>
    </section>
  )
}

import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams, Outlet, useLoaderData } from 'react-router-dom'

import { requireAuth } from '../../utills/utills';
import { getHostVans } from '../../api';


export async function Loader({ params }){
  await requireAuth()
  return getHostVans(params.id)
}


export default function Vand() {
const Data = useLoaderData()
   
   //const Data = useLoaderData();
console.log(Data)
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

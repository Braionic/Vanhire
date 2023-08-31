import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../api'
import { requireAuth } from '../utills/utills'
async function Loader(){
    await requireAuth()
    return getHostVans()
}
export default function Van() {
const Data = useLoaderData()
    
    let myvans = Data?.map((van)=> {
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
export {Loader}
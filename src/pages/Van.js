import React from 'react'
import { useEffect, useState, Suspense } from 'react'
import { Link, defer, Await, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../api'
import { requireAuth } from '../utills/utills'
async function Loader({request}){
    await requireAuth(request)
    return defer({hostvan: getHostVans()})
}
export default function Van() {
const Data = useLoaderData()
    
  return (
    <section>
        <div className='vanrow'>
            <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={Data.hostvan}>
                
                {(hostvanData)=>{
                    let myvans = hostvanData?.map((van)=> {
                        return <div key={van.id}>
                        <Link to={`${van.id}`}>
                            <div className='vanthumb'>
                            
                                <img className='smvanimg' src={van.imageUrl} />
                                <div>
                                    <h4>{van.name}</h4>
                                    <p>{`$${van.price}`}</p>
                                    
                                </div>
                            </div>
                            </Link>
                            </div>
                    })
                    return (
                        <>
                        {myvans}
                        </>
                    )
                }}
            </Await>
            </Suspense>
            
            </div>
    </section>
    
  )
}
export {Loader}
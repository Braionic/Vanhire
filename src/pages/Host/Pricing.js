import {React, useEffect, useState} from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { requireAuth } from '../../utills/utills'
import { getHostVans } from '../../api'
export async function Loader({ params }){
  await requireAuth()
  return getHostVans(params.id)
}
export default function Pricing() {
 const Data = useLoaderData()
  
  return (
    <section style={{backgroundColor: "aliceblue"}}>
    <div>
      <p style={{fontWeight: "bold"}}>{`$${Data.price}`}</p>
    </div>
    </section>
  )
}

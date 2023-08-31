import { React, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { requireAuth } from '../../utills/utills'
import { getHostVans } from '../../api'

export async function Loader({params}){
  await requireAuth()
  return getHostVans(params.id)
}
export default function Details() {
  const Data = useLoaderData()
  return (
    <div className='vandes'>
      <h4>Name: {Data.name}</h4><br></br>
      <h4>description: {Data.description}</h4>
      </div>
  )
}

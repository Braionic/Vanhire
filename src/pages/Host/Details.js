import { React, useEffect, useState } from 'react'
import { useLoaderData, useParams,useOutletContext } from 'react-router-dom'
import { requireAuth } from '../../utills/utills'
import { getHostVans } from '../../api'


export default function Details() {
  const {Data} = useOutletContext()
  return (
    <div className='vandes'>
      <h4>Name: {Data.name}</h4><br></br>
      <h4>description: {Data.description}</h4>
      </div>
  )
}

import { React, useEffect, useState } from 'react'
import { useLoaderData, useParams,useOutletContext } from 'react-router-dom'
import { requireAuth } from '../../utills/utills'
import { getHostVans } from '../../api'


export default function Details() {
  const {hostvandetailsloader} = useOutletContext()
  console.log(hostvandetailsloader)
  return (
    <div className='vandes'>
      <h4>Name: {hostvandetailsloader.name}</h4><br></br>
      <h4>description: {hostvandetailsloader.description}</h4><br></br>
      <h4>Type: {hostvandetailsloader.type}</h4><br></br>
      <h4>Visibility: Public</h4>
      </div>
  )
}

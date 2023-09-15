import {React, useEffect, useState} from 'react'
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom'

export default function Pricing() {
 const Data = useOutletContext()
  return (
    <section style={{backgroundColor: "aliceblue"}}>
    <div>
      <p style={{fontWeight: "bold"}}>{`$${Data.hostvandetailsloader.price}`}</p>
    </div>
    </section>
  )
}
